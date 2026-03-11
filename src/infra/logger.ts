import pino from "pino";
import type { Logger } from "@/types/upsert";

const pinoInstance = pino({
  level: "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l",
      ignore: "pid,hostname",
    },
  },
});

export const logger: Logger = {
  info(message, meta) {
    if (meta) {
      pinoInstance.info(meta, message);
      return;
    }
    pinoInstance.info(message);
  },
  warn(message, meta) {
    if (meta) {
      pinoInstance.warn(meta, message);
      return;
    }
    pinoInstance.warn(message);
  },
  error(message, meta) {
    if (meta) {
      pinoInstance.error(meta, message);
      return;
    }
    pinoInstance.error(message);
  },
};

/**
 * Create a child logger scoped to a specific module.
 */
export function createChildLogger(module: string): Logger {
  const child = pinoInstance.child({ module });

  return {
    info(message, meta) {
      if (meta) {
        child.info(meta, message);
        return;
      }
      child.info(message);
    },
    warn(message, meta) {
      if (meta) {
        child.warn(meta, message);
        return;
      }
      child.warn(message);
    },
    error(message, meta) {
      if (meta) {
        child.error(meta, message);
        return;
      }
      child.error(message);
    },
  };
}
