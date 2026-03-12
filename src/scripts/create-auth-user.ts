import { confirm, input, password, select } from "@inquirer/prompts";

import { auth } from "@/auth";

type UserRole = "admin" | "user";

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

async function main() {
  const name = (await input({
    message: "Full name",
    validate: (value) => (value.trim().length > 0 ? true : "Name is required"),
  })).trim();

  const email = normalizeEmail(
    await input({
      message: "Email address",
      validate: (value) => {
        const normalized = normalizeEmail(value);
        if (normalized.length === 0) {
          return "Email is required";
        }

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)
          ? true
          : "Enter a valid email address";
      },
    }),
  );

  const role = await select<UserRole>({
    message: "Role",
    choices: [
      {
        name: "User",
        value: "user",
      },
      {
        name: "Admin",
        value: "admin",
      },
    ],
    default: "user",
  });

  const newPassword = await password({
    message: "Password",
    mask: "*",
    validate: (value) =>
      value.length >= 8 ? true : "Password must be at least 8 characters",
  });

  const confirmedPassword = await password({
    message: "Confirm password",
    mask: "*",
    validate: (value) =>
      value === newPassword ? true : "Passwords do not match",
  });

  if (confirmedPassword !== newPassword) {
    throw new Error("Password confirmation failed");
  }

  const shouldCreate = await confirm({
    message: `Create ${role} user ${email}?`,
    default: true,
  });

  if (!shouldCreate) {
    console.log("User creation cancelled.");
    return;
  }

  try {
    const createdUser = await auth.api.createUser({
      body: {
        name,
        email,
        password: newPassword,
        role,
      },
    });

    console.log(`Created ${role} user ${createdUser.user.email} (${createdUser.user.id}).`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const normalized = message.toLowerCase();

    if (
      normalized.includes("already exists") ||
      normalized.includes("unique") ||
      normalized.includes("duplicate")
    ) {
      console.error(`User ${email} already exists.`);
      process.exitCode = 1;
      return;
    }

    throw error;
  }
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
