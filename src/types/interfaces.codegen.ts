// automatically generated interface (created 2025-11-12)

"use strict";

// Imports
export interface KeyLabelPairModel {
                key?: string;
                label?: string;
            }
export type DateString = string;

// Interfaces
export interface ActiveContractModel {

}
export interface ActivityModel {
    activityDate?: DateString;
    appointments?: CollectionModel<MeetingModel>;
    author?: MetaDataUserModel;
    body?: string;
    client?: ClientModel;
    completedDate?: DateString;
    contract?: ContractModel;
    conversation?: NoteModel;
    conversationId?: number;
    conversations?: CollectionModel<NoteModel>;
    documents?: CollectionModel<DocumentModel>;
    duration?: number;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    files?: CollectionModel<FileModel>;
    for?: MetaDataUserModel;
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    isFieldDeviceVisible?: boolean;
    isMyHomeVisible?: boolean;
    isResourceAccessVisible?: boolean;
    isSeen?: boolean;
    isSticky?: boolean;
    isSupplierAccessVisible?: boolean;
    jobFileNoteId?: number;
    mailSystemIntegration?: MailSystemIntegrationModel;
    meetingLocation?: string;
    metaData?: MetaDataModel;
    myHomeStories?: CollectionModel<MyHomeStoryModel>;
    noteForRole?: SecurityRoleModel;
    noteForUser?: CollectionModel<NoteFollowerModel>;
    noteGroup?: NoteGroupModel;
    noteId?: number;
    noteResources?: CollectionModel<NoteResourceModel>;
    noteType?: string;
    noteViews?: CollectionModel<NoteViewModel>;
    reminderDate?: DateString;
    reminderSent?: boolean;
    replies?: CollectionModel<NoteModel>;
    replyTo?: NoteModel;
    resource?: ResourceModel;
    resourceCode?: ResourceCodeModel;
    security?: NoteSecurityModel;
    source?: number;
    stickyNote?: number;
    subject?: string;
    tags?: CollectionModel<TagModel>;
    task?: TaskModel;
    unknownAuthor?: string;
    webVisitId?: string;
}
export interface ActivityReportModel {
    activityReportId?: number; // @primaryKey @required True
    bCCEmailRecipients?: string; // @required False @length 400
    createNoteRecord?: boolean; // @required True
    docOutput?: number; // @enum ExportFormatType @required True
    emailAssignedResource?: boolean; // @required True
    emailClient?: boolean; // @required True
    emailContractAdmin?: boolean; // @required True
    emailFrom?: string; // @required False @length 60
    emailOutput?: number; // @enum ExportFormatType @required True
    emailRecipients?: string; // @required False @length 400
    emailSalesPerson?: boolean; // @required True
    emailSupervisor?: boolean; // @required True
    masterReport?: MasterReportModel; // @required False
    metaData?: MetaDataModel;
    onCompletion?: boolean; // @required True
    onDatePlanned?: boolean; // @required True
    onSchedule?: boolean; // @required True
    onStart?: boolean; // @required True
    reportInstructionsOverride?: string; // @required False
    securityRole?: SecurityRoleModel; // @required False
    templateItem?: TemplateItemModel; // @required True
}
export interface ActivityReportSelectionModel {
    masterReport?: MasterReportSelectionModel;
    metaData?: MetaDataSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    templateItem?: TemplateItemSelectionModel;
}
export interface ActivitySelectionModel {
    appointments?: CollectionSelectionModel<MeetingSelectionModel>;
    author?: UserSelectionModel;
    client?: ClientSelectionModel;
    contract?: ContractSelectionModel;
    conversation?: NoteSelectionModel;
    conversations?: CollectionSelectionModel<NoteSelectionModel>;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    files?: CollectionSelectionModel<FileSelectionModel>;
    for?: UserSelectionModel;
    geoTrackings?: CollectionSelectionModel<GeoTrackingSelectionModel>;
    metaData?: MetaDataSelectionModel;
    myHomeStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    noteForRole?: SecurityRoleSelectionModel;
    noteForUser?: CollectionSelectionModel<NoteFollowerSelectionModel>;
    noteGroup?: NoteGroupSelectionModel;
    noteResources?: CollectionSelectionModel<NoteResourceSelectionModel>;
    noteViews?: CollectionSelectionModel<NoteViewSelectionModel>;
    replies?: CollectionSelectionModel<NoteSelectionModel>;
    replyTo?: NoteSelectionModel;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    security?: SecuritySelectionModel;
    tags?: CollectionSelectionModel<TagSelectionModel>;
    task?: TaskSelectionModel;
}
export interface ActorCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    contacts?: ContactCriteriaModel;
    emailAddress?: string;
    ids?: number[];
    includeInactive?: boolean;
    quickSearch?: string;
    resources?: ResourceCriteriaModel;
    users?: UserCriteriaModel;
}
export interface ActorModel {
    actorId?: number; // @primaryKey @required True
    contacts?: CollectionModel<ContactModel>; // @required True
    documentViews?: CollectionModel<DocumentViewModel>; // @required True
    emailAddress?: string; // @required False @length 200
    fullSearch?: string; // @required False @length 4000
    meetingAttendees?: CollectionModel<MeetingAttendeeModel>; // @required True
    name?: string; // @required False @length 200
    noteFollowers?: CollectionModel<NoteFollowerModel>; // @required True
    noteViews?: CollectionModel<NoteViewModel>; // @required True
    resources?: CollectionModel<ResourceModel>; // @required True
    users?: CollectionModel<UserModel>; // @required True
}
export interface ActorSelectionModel {
    contacts?: CollectionSelectionModel<ContactSelectionModel>;
    documentViews?: CollectionSelectionModel<DocumentViewSelectionModel>;
    meetingAttendees?: CollectionSelectionModel<MeetingAttendeeSelectionModel>;
    noteFollowers?: CollectionSelectionModel<NoteFollowerSelectionModel>;
    noteViews?: CollectionSelectionModel<NoteViewSelectionModel>;
    resources?: CollectionSelectionModel<ResourceSelectionModel>;
    users?: CollectionSelectionModel<UserSelectionModel>;
}
export interface AddFileRequestModel {
    batchNumber?: string;
    businessUnitId?: number;
    contractId?: number;
    description?: string;
    documentCategoryId?: number;
    extension?: string;
    generatedByReport?: boolean;
    hidden?: boolean;
    inspectionId?: number;
    isMyHomeShareOverride?: boolean;
    isSupplierShareOverride?: boolean;
    jobFileDocumentId?: number;
    keyWords?: string;
    largeUrl?: string;
    masterContractId?: number;
    mediumUrl?: string;
    name?: string;
    noteId?: number;
    path?: string;
    purchaseOrderId?: number;
    signingDocumentId?: number;
    signingDocumentRuleId?: number;
    signingId?: number;
    smallUrl?: string;
    taskId?: number;
    tenderId?: number;
    thumbnailUrl?: string;
    title?: string;
    variationId?: number;
    versionType?: number;
}
export interface AddressModel {
    address?: string;
    postCode?: string;
    state?: string;
    street1?: string;
    street2?: string;
    suburb?: string;
}
export interface AddressWithCoordinatesModel {
    address?: string;
    latitude?: string;
    longitude?: string;
    postCode?: string;
    state?: string;
    street1?: string;
    street2?: string;
    suburb?: string;
}
export interface AdminCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    quickSearch?: string;
}
export interface AdminSecurityModel {
    canAdminOverview?: boolean;
    canAdminUsers?: boolean;
}
export interface AdminSecuritySelectionModel {

}
export interface AgeRangeModel {
    from?: number;
    standardRange?: string;
    to?: number;
}
export interface AggregateErrorModel {
    errors?: ErrorModel[];
}
export interface ApiKeyLoginModel {
    apiKey?: string;
}
export interface AppCustomisationCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    customisationAreas?: number[];
    customisationTypes?: number[];
    ids?: number[];
    includeInactive?: boolean;
}
export interface AppCustomisationModel {
    appArea?: number; // @enum CustomisationAreas @required True
    appCustomisationId?: number; // @primaryKey @required True
    businessUnit?: BusinessUnitModel; // @required True
    customisationName?: string; // @required True @length 50
    customisationType?: number; // @enum CustomisationType @required True
    metaData?: MetaDataModel;
    operation?: number; // @required False
    parameters?: string; // @required False @length 400
    security?: SecurityModel;
}
export interface AppCustomisationSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface AppointmentModel {
    additionalData?: number;
    additionalType?: number;
    alternativeLocation?: string;
    attendees?: CollectionModel<MeetingAttendeeModel>;
    body?: string;
    calendarFile?: FileModel;
    contract?: ContractModel;
    duration?: number;
    fieldDevice?: boolean;
    jobFile?: boolean;
    mailAddressInformation?: string;
    mailSystemIntegration?: string;
    meeting?: DateString;
    meetingFiles?: CollectionModel<MeetingFileModel>;
    meetingId?: number;
    meetingStatus?: number;
    metaData?: MetaDataModel;
    myHome?: boolean;
    note?: NoteModel;
    organiser?: MetaDataUserModel;
    room?: ResourceModel;
    security?: SecurityModel;
    subject?: string;
    task?: TaskModel;
}
export interface AppointmentRequestModel {
    activityDate?: DateString;
    attendeesContacts?: ContactModel[];
    attendeesUsers?: MetaDataUserModel[];
    body?: string;
    contactPoint?: ReferralSourceModel;
    contract?: ContractModel;
    duration?: number;
    isClientMeeting?: boolean;
    meetingLocation?: string;
    meetingWith?: MetaDataUserModel;
    preventConflicts?: number;
    relatedTask?: TaskModel;
    room?: ResourceModel;
    sendInvites?: boolean;
    subject?: string;
}
export interface AppointmentSecurityModel {
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
}
export interface AppointmentSelectionModel {
    attendees?: CollectionSelectionModel<MeetingAttendeeSelectionModel>;
    calendarFile?: FileSelectionModel;
    contract?: ContractSelectionModel;
    meetingFiles?: CollectionSelectionModel<MeetingFileSelectionModel>;
    metaData?: MetaDataSelectionModel;
    note?: NoteSelectionModel;
    organiser?: UserSelectionModel;
    room?: ResourceSelectionModel;
    security?: SecuritySelectionModel;
    task?: TaskSelectionModel;
}
export interface ApprovalQueueCriteriaModel {
    ageRange?: AgeRangeModel;
    approvalQueueIds?: number[];
    approvalStatuses?: number[];
    approvalTypes?: number[];
    approver?: UserCriteriaModel;
    contract?: ContractCriteriaModel;
    includeInactive?: boolean;
    raisedBy?: UserCriteriaModel;
}
export interface ApprovalQueueModel {
    amount?: number; // @required False
    approvalQueueId?: number; // @primaryKey @required True
    approveReason?: number; // @required False
    approvedRejected?: DateString; // @required False
    approver?: MetaDataUserModel; // @required True
    comments?: string; // @required False @length 4000
    contract?: ContractModel; // @required True
    description?: string; // @required False @length 4000
    document?: DocumentModel; // @required True
    file?: FileModel; // @required True
    inspection?: InspRequiredModel;
    invoice?: InvoiceModel;
    metaData?: MetaDataModel;
    pOHeader?: POHeaderModel;
    raisedBy?: MetaDataUserModel; // @required True
    relatedKeyId?: number;
    requisition?: RequisitionModel;
    resource?: ResourceModel; // @required False
    security?: ApprovalQueueSecurityModel;
    status?: number; // @enum ApprovalStatus @required True
    task?: TaskModel; // @required False
    tender?: TenderModel;
    type?: number; // @enum ApprovalType @required True
    variation?: TenderVariationModel;
}
export interface ApprovalQueueSecurityModel {
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
}
export interface ApprovalQueueSelectionModel {
    approver?: UserSelectionModel;
    contract?: ContractSelectionModel;
    file?: FileSelectionModel;
    inspection?: InspRequiredSelectionModel;
    invoice?: InvoiceSelectionModel;
    metaData?: MetaDataSelectionModel;
    pOHeader?: POHeaderSelectionModel;
    raisedBy?: UserSelectionModel;
    reference?: ReferenceSelectionModel;
    requisition?: RequisitionSelectionModel;
    resource?: ResourceSelectionModel;
    security?: SecuritySelectionModel;
    task?: TaskSelectionModel;
    tender?: TenderSelectionModel;
    variation?: TenderVariationSelectionModel;
}
export interface ApprovalRequestModel {
    amount?: number;
    approvalQueueId?: number;
    approveReason?: number;
    approvedRejected?: DateString;
    approver?: MetaDataUserModel;
    comments?: string;
    contract?: ContractModel;
    contractId?: number;
    description?: string;
    document?: DocumentModel;
    file?: FileModel;
    inspection?: InspRequiredModel;
    invoice?: InvoiceModel;
    metaData?: MetaDataModel;
    pOHeader?: POHeaderModel;
    raisedBy?: MetaDataUserModel;
    relatedKeyId?: number;
    requisition?: RequisitionModel;
    resource?: ResourceModel;
    security?: ApprovalQueueSecurityModel;
    status?: number;
    task?: TaskModel;
    tender?: TenderModel;
    type?: number;
    variation?: TenderVariationModel;
}
export interface ApproveSigningRequestModel {
    immediate?: boolean;
}
export interface ApproveTenderPriceReviewsRequestModel {
    batchIds?: string[];
    batchNumbers?: number[];
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    effectiveDate?: DateString;
    groupCodes?: string[];
    hasOverrideCost?: boolean;
    hasOverrideSellPrice?: boolean;
    houseType?: HouseTypeCriteriaModel;
    isDirty?: boolean;
    lastReview?: AgeRangeModel;
    lastReviewedByUser?: UserCriteriaModel;
    margin?: DecimalValueRangeModel;
    ready?: boolean;
    sellPrice?: DecimalValueRangeModel;
    sellPriceChange?: DecimalValueRangeModel;
    tenderOption?: TenderOptionCriteriaModel;
    tenderPackage?: TenderPackageCriteriaModel;
    tenderPriceLevel?: TenderPriceLevelCriteriaModel;
    tenderPriceReviewIds?: number[];
}
export interface ApproveTenderPriceReviewsResponseModel {
    backEndJobId?: number;
    count?: number;
}
export interface AutomatedEmailModel {
    allDocCategory1?: DocCategoryModel; // @required False
    allDocCategory2?: DocCategoryModel; // @required False
    allTaskDocs?: boolean; // @required True
    automatedMessageId?: number; // @primaryKey @required True
    bCCEmailRecipients?: string; // @required False @length 400
    cCEmailRecipients?: string; // @required False @length 400
    clientSharedAllDocs?: boolean; // @required True
    clientSharedTaskDocs?: boolean; // @required True
    createNoteRecord?: boolean; // @required True
    emailAllContacts?: number; // @enum EmailTo @required True
    emailAssignedResource?: number; // @enum EmailTo @required True
    emailClient?: number; // @enum EmailTo @required True
    emailContact1?: number; // @enum EmailTo @required True
    emailContact2?: number; // @enum EmailTo @required True
    emailContractAdmin?: number; // @enum EmailTo @required True
    emailFrom?: string; // @required False @length 400
    emailFromAssignedResource?: boolean; // @required True
    emailFromRole?: SecurityRoleModel; // @required False
    emailJobContact?: number; // @enum EmailTo @required True
    emailMaintContacts?: number; // @enum EmailTo @required True
    emailRecipients?: string; // @required False @length 400
    emailSalesPerson?: number; // @enum EmailTo @required True
    emailSupervisor?: number; // @enum EmailTo @required True
    messagePurpose?: string; // @required True @length 100
    messageTemplate?: MessageTemplateModel; // @required True
    metaData?: MetaDataModel;
    taskDocCategory1?: DocCategoryModel; // @required False
    taskDocCategory2?: DocCategoryModel; // @required False
    taskFlexFieldDocs?: boolean; // @required True
}
export interface AutomatedEmailSelectionModel {
    allDocCategory1?: DocCategorySelectionModel;
    allDocCategory2?: DocCategorySelectionModel;
    emailFromRole?: SecurityRoleSelectionModel;
    messageTemplate?: MessageTemplateSelectionModel;
    metaData?: MetaDataSelectionModel;
    taskDocCategory1?: DocCategorySelectionModel;
    taskDocCategory2?: DocCategorySelectionModel;
}
export interface AutomationOperationCriteriaModel {
    ageRange?: AgeRangeModel;
    clickHomePlus?: boolean;
    contracts?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    jobFile?: boolean;
    opCodes?: number[];
    queued?: boolean;
    result?: string;
}
export interface AutomationOperationModel {
    additionalId?: number;
    businessUnitId?: number;
    codeValue1?: string;
    codeValue2?: string;
    contractId?: number;
    dateValue1?: string;
    dateValue2?: string;
    dateValue3?: string;
    dateValue4?: string;
    decimalValue1?: number;
    decimalValue2?: number;
    idValue1?: number;
    idValue2?: number;
    immediate?: boolean;
    largeText?: string;
    lastError?: string;
    operationCode?: number;
    resultCode?: string;
    runAfter?: DateString;
    textValue1?: string;
    textValue2?: string;
    userId?: number;
}
export interface AutomationOperationSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface AvailabilityModel {
    duration?: number;
    end?: DateString;
    start?: DateString;
}
export interface BackEndJobCriteriaModel {
    ageRange?: AgeRangeModel;
    clickHomePlus?: boolean;
    contracts?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    jobFile?: boolean;
    opCodes?: number[];
    queued?: boolean;
    result?: string;
}
export interface BackEndJobModel {
    backEndJobId?: number; // @primaryKey @required True
    businessUnit?: BusinessUnitModel; // @required True
    codeValue1?: string; // @required False @length 10
    codeValue2?: string; // @required False @length 10
    contract?: ContractModel; // @required False
    dateValue1?: DateString; // @required False
    dateValue2?: DateString; // @required False
    dateValue3?: DateString; // @required False
    dateValue4?: DateString; // @required False
    decimalValue1?: number; // @required False
    decimalValue2?: number; // @required False
    failureCount?: number; // @required True
    iDValue1?: number; // @required False
    iDValue2?: number; // @required False
    lastError?: string; // @required False @length 200
    metaData?: MetaDataModel;
    notes?: string; // @required False
    operationCode?: number; // @enum OperationCode @required True
    primaryKeyId?: number;
    result?: string; // @required False @length 10
    runAfter?: DateString; // @required False
    textValue1?: string; // @required False @length 400
    textValue2?: string; // @required False @length 400
    user?: MetaDataUserModel; // @required False
}
export interface BackEndJobSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface BaseActiveCriteriaModel {
    ids?: number[];
    includeInactive?: boolean;
}
export interface BaseBusinessUnitCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
}
export interface BaseCriteriaModel {
    ids?: number[];
}
export interface BaseSelectionModel {

}
export interface BinCriteriaModel {
    binId?: number;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    only1Bin?: boolean;
}
export interface BinDefinitionModel {
    bin?: BinModel; // @required True
    binDefinitionsId?: number; // @primaryKey @required True
    businessUnit?: BusinessUnitModel; // @required True
    endCalc?: string; // @required True @length 1
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    startCalc?: string; // @required True @length 1
    summaryEnd?: SummaryModel; // @required True
    summaryStart?: SummaryModel; // @required True
    template?: TemplateModel; // @required False
}
export interface BinDefinitionSelectionModel {
    bin?: BinSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    summaryEnd?: SummarySelectionModel;
    summaryStart?: SummarySelectionModel;
    template?: TemplateSelectionModel;
}
export interface BinModel {
    binDefinitions?: CollectionModel<BinDefinitionModel>; // @required True
    binId?: number; // @primaryKey @required True
    binName?: string; // @required True @length 200
    binSummaryGroupLinks?: CollectionModel<BinSummaryGroupLinkModel>; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataModel;
    security?: SecurityModel;
}
export interface BinSelectionModel {
    binDefinitions?: CollectionSelectionModel<BinDefinitionSelectionModel>;
    binSummaryGroupLinks?: CollectionSelectionModel<BinSummaryGroupLinkSelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface BinSummaryGroupLinkModel {
    bin?: BinModel; // @required True
    binSummaryGroupLinkId?: number; // @primaryKey @required True
    budgetFigureCode?: string; // @required False @length 10
    metaData?: MetaDataModel;
    order?: number; // @required True
    priority?: number; // @required True
    summaryGroup?: SummaryGroupModel; // @required True
}
export interface BinSummaryGroupLinkSelectionModel {
    bin?: BinSelectionModel;
    metaData?: MetaDataSelectionModel;
    summaryGroup?: SummaryGroupSelectionModel;
}
export interface BOQAdjustmentModel {
    adjustmentCost?: number; // @required False
    adjustmentType?: number; // @enum AdjustmentType @required True
    allowanceFigure?: number; // @required False
    allowanceType?: number; // @enum AllowanceType @required True
    bOQAdjustmentId?: number; // @primaryKey @required True
    bOQDescription?: string; // @required True @length 400
    expiryDate?: DateString; // @required False
    metaData?: MetaDataModel;
}
export interface BOQAdjustmentSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface BrandCriteriaModel {
    brandIds?: number[];
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
}
export interface BrandModel {
    alternateName?: string; // @required False @length 50
    brandId?: number; // @primaryKey @required True
    brandName?: string; // @required True @length 50
    businessUnit?: BusinessUnitModel; // @required True
    childBrands?: CollectionModel<BrandModel>; // @required True
    cover?: FileModel; // @required False
    defaultContractRoles?: CollectionModel<DefaultContractRoleModel>; // @required True
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    footer?: FileModel; // @required False
    groupBrandAbbreviated?: string; // @required False @length 200
    groupBrandLegalName?: string; // @required False @length 200
    groupBrandName?: string; // @required False @length 200
    groupBrandWebsite?: string; // @required False @length 200
    header?: FileModel; // @required False
    headerBackgroundColour?: number; // @required False
    headingColour?: number; // @required False
    headingTextColour?: number; // @required False
    houseListings?: CollectionModel<HouseListingModel>; // @required True
    houseTypes?: CollectionModel<HouseTypeModel>; // @required True
    logo?: FileModel; // @required False
    metaData?: MetaDataModel;
    parent?: BrandModel; // @required False
    security?: SecurityModel;
    subheadingColour?: number; // @required False
    subheadingTextColour?: number; // @required False
    templateSelectionRules?: CollectionModel<TemplateSelxnRuleModel>; // @required True
    tenderContractRules?: CollectionModel<TenderContractRuleModel>; // @required True
    tenderPriceLevelRules?: CollectionModel<TenderPriceLevelRuleModel>; // @required True
    tenderSurcharges?: CollectionModel<TenderSurchargeModel>; // @required True
    userBrands?: CollectionModel<UserBrandModel>; // @required True
}
export interface BrandSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    childBrands?: CollectionSelectionModel<BrandSelectionModel>;
    cover?: FileSelectionModel;
    defaultContractRoles?: CollectionSelectionModel<DefaultContractRoleSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    footer?: FileSelectionModel;
    header?: FileSelectionModel;
    houseListings?: CollectionSelectionModel<HouseListingSelectionModel>;
    houseTypes?: CollectionSelectionModel<HouseTypeSelectionModel>;
    logo?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    parent?: BrandSelectionModel;
    templateSelectionRules?: CollectionSelectionModel<TemplateSelxnRuleSelectionModel>;
    tenderContractRules?: CollectionSelectionModel<TenderContractRuleSelectionModel>;
    tenderPriceLevelRules?: CollectionSelectionModel<TenderPriceLevelRuleSelectionModel>;
    tenderSurcharges?: CollectionSelectionModel<TenderSurchargeSelectionModel>;
    userBrands?: CollectionSelectionModel<UserBrandSelectionModel>;
}
export interface BudgetFigureCriteriaModel {
    budgetCode?: string;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    contract?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    other1Ids?: number[];
    other2Ids?: number[];
    period?: AgeRangeModel;
    resourceCode?: ResourceCodeCriteriaModel;
    summaryIds?: number[];
    user?: UserCriteriaModel;
}
export interface BudgetFigureModel {
    budgetFigureCode?: string; // @required True @length 10
    budgetFigureId?: number; // @primaryKey @required True
    budgetValue?: number; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    contract?: ContractModel; // @required False
    end?: DateString; // @required False
    metaData?: MetaDataModel;
    region?: RegionModel; // @required True
    resourceCode?: ResourceCodeModel; // @required False
    security?: SecurityModel;
    start?: DateString; // @required False
    statFigure?: number; // @required True
    summary?: SummaryModel; // @required False
    user?: MetaDataUserModel; // @required False
}
export interface BudgetFigureSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    summary?: SummarySelectionModel;
    user?: UserSelectionModel;
}
export interface BulkImportModel<T = any> {
    batchId?: string;
    businessUnitId?: number;
    callbackURL?: string;
    immediate?: boolean;
    items?: T[];
    parameters?: string;
}
export interface BulkImportResponseModel<T = any, U = any> {
    batchId?: string;
    failed?: T;
    passed?: U;
}
export interface BulkRequestModel<T = any, U = any> {
    criteria?: T;
    operation?: U;
}
export interface BulkTenderEstimatorRequestUpdateModel {
    approvals?: TenderSelxnsApprovalModel;
    deselects?: TenderSelxnsModel;
}
export interface BulkTenderRequestUpdateModel {
    optionSelxns?: TenderOptionSelxnModel[];
    packageSelxns?: TenderPackageSelxnModel[];
}
export interface BulkTenderResponseUpdateModel {
    errorMessage?: string;
    optionSelxns?: BulkUpdateResponseModel<PagedResponseModel<TenderOptionSelxnModel>, PagedResponseModel<TenderOptionSelxnModel>>;
    packageSelxns?: BulkUpdateResponseModel<PagedResponseModel<TenderPackageSelxnModel>, PagedResponseModel<TenderPackageSelxnModel>>;
    updatedTender?: TenderDisplayModel;
}
export interface BulkUpdateResponseModel<T = any, U = any> {
    failed?: T;
    passed?: U;
}
export interface BusinessCalendarCriteriaModel {
    ageRange?: AgeRangeModel;
    businessUnitIds?: number[];
    nonWorkingDaysOnly?: boolean;
}
export interface BusinessCalendarModel {
    businessCalendarId?: number; // @primaryKey @required True
    businessUnit?: BusinessUnitModel; // @required False
    businessday?: number; // @required True
    calendarDate?: DateString; // @required True
    daysFromStart?: number; // @required False
}
export interface BusinessCalendarSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
}
export interface BusinessDaysCalculationModel {
    comment?: string;
    deltaDays?: number;
    newDate?: DateString;
    oldDate?: DateString;
    referenceId?: number;
}
export interface BusinessUnitCriteriaModel {
    businessUnitIds?: number[];
    includeChildBusinessUnits?: boolean;
    includeInactive?: boolean;
    includeParentBusinessUnits?: boolean;
}
export interface BusinessUnitModel {
    appCustomisations?: CollectionModel<AppCustomisationModel>; // @required True
    binDefinitions?: CollectionModel<BinDefinitionModel>; // @required True
    bins?: CollectionModel<BinModel>; // @required True
    brands?: CollectionModel<BrandModel>; // @required True
    businessCalendars?: CollectionModel<BusinessCalendarModel>; // @required True
    businessUnitId?: number; // @primaryKey @required True
    businessUnitName?: string; // @required True @length 50
    businessUnitSlogan?: string; // @required False @length 4000
    childBusinessUnits?: CollectionModel<BusinessUnitModel>; // @required True
    claimTemplates?: CollectionModel<ClaimTemplateModel>; // @required True
    colour?: number; // @required True
    contractCategories?: CollectionModel<ContractCategoryModel>; // @required True
    contractTypes?: CollectionModel<ContractTypeModel>; // @required True
    defaultContractRoles?: CollectionModel<DefaultContractRoleModel>; // @required True
    departments?: CollectionModel<DepartmentModel>; // @required True
    developmentLocations?: CollectionModel<DevelopmentLocationModel>; // @required True
    displays?: CollectionModel<DisplayModel>; // @required True
    docCategories?: CollectionModel<DocCategoryModel>; // @required True
    fAQs?: CollectionModel<FAQModel>; // @required True
    fileConfigs?: CollectionModel<FileConfigModel>; // @required True
    flexFieldDefinitions?: CollectionModel<FlexFieldDefinitionModel>; // @required True
    flexFieldGroups?: CollectionModel<FlexFieldGroupModel>; // @required True
    footer?: FileModel; // @required False
    groupBusinessName?: string; // @required False @length 200
    groupLegalName?: string; // @required False @length 200
    groupWebsite?: string; // @required False @length 200
    houseTypes?: CollectionModel<HouseTypeModel>; // @required True
    inspCategories?: CollectionModel<InspCategoryModel>; // @required True
    inspPolicies?: CollectionModel<InspPolicyModel>; // @required True
    inspTemplates?: CollectionModel<InspTemplateModel>; // @required True
    interfaceBatches?: CollectionModel<InterfaceBatchModel>; // @required True
    issueCategories?: CollectionModel<IssueCategoryModel>; // @required True
    logo?: FileModel; // @required False
    masterDimensions?: CollectionModel<MasterDimensionModel>; // @required True
    masterReports?: CollectionModel<MasterReportModel>; // @required True
    messageTemplates?: CollectionModel<MessageTemplateModel>; // @required True
    metaData?: MetaDataModel;
    myHomeTemplateSets?: CollectionModel<MyHomeTemplateSetModel>; // @required True
    myHomeTemplates?: CollectionModel<MyHomeTemplateModel>; // @required True
    notificationSettings?: CollectionModel<NotificationSettingModel>; // @required True
    parent?: BusinessUnitModel; // @required False
    plusFilters?: CollectionModel<PlusFilterModel>; // @required True
    processEvents?: CollectionModel<ProcessEventModel>; // @required True
    referralSources?: CollectionModel<ReferralSourceModel>; // @required True
    regionLinks?: CollectionModel<BusinessUnitRegionLinkModel>; // @required True
    regions?: CollectionModel<RegionModel>; // @required True
    reportCategories?: CollectionModel<ReportCategoryModel>; // @required True
    resourceCodes?: CollectionModel<ResourceCodeModel>; // @required True
    resourcePools?: CollectionModel<ResourcePoolModel>; // @required True
    rfqTemplateSets?: CollectionModel<RfqTemplateSetModel>; // @required True
    rfqTemplates?: CollectionModel<RfqTemplateModel>; // @required True
    savedSearches?: CollectionModel<SavedSearchModel>;
    security?: SecurityModel;
    securityRoles?: CollectionModel<SecurityRoleModel>; // @required True
    summaries?: CollectionModel<SummaryModel>; // @required True
    taskActions?: CollectionModel<TaskActionModel>; // @required True
    templateSelectionRules?: CollectionModel<TemplateSelxnRuleModel>; // @required True
    templates?: CollectionModel<TemplateModel>; // @required True
    tenderAttributes?: CollectionModel<TenderAttributeModel>; // @required True
    tenderPhaseSets?: CollectionModel<TenderPhaseSetModel>; // @required True
    tenderPriceDisplays?: CollectionModel<TenderPriceDisplayModel>; // @required True
    tenderPriceFunctions?: CollectionModel<TenderPriceFunctionModel>; // @required True
    tenderPriceLevelRules?: CollectionModel<TenderPriceLevelRuleModel>; // @required True
    timeZone?: string; // @required False @length 100
    users?: CollectionModel<UserModel>; // @required True
    validationEntries?: CollectionModel<ValidationEntryModel>; // @required True
    webhooks?: CollectionModel<WebhookModel>; // @required True
}
export interface BusinessUnitRegionCriteriaModel {
    businessUnitIds?: number[];
    includeChildBusinessUnits?: boolean;
    includeInactive?: boolean;
    includeParentBusinessUnits?: boolean;
    jobTypes?: string[];
    masterContract?: MasterContractCriteriaModel;
    regionIds?: number[];
}
export interface BusinessUnitRegionLinkModel {
    businessUnit?: BusinessUnitModel; // @required True
    businessUnitRegionLinkId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    region?: RegionModel; // @required True
}
export interface BusinessUnitRegionLinkSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
}
export interface BusinessUnitSelectionModel {
    appCustomisations?: CollectionSelectionModel<AppCustomisationSelectionModel>;
    binDefinitions?: CollectionSelectionModel<BinDefinitionSelectionModel>;
    bins?: CollectionSelectionModel<BinSelectionModel>;
    brands?: CollectionSelectionModel<BrandSelectionModel>;
    businessCalendars?: CollectionSelectionModel<BusinessCalendarSelectionModel>;
    childBusinessUnits?: CollectionSelectionModel<BusinessUnitSelectionModel>;
    claimTemplates?: CollectionSelectionModel<ClaimTemplateSelectionModel>;
    contractCategories?: CollectionSelectionModel<ContractCategorySelectionModel>;
    contractTypes?: CollectionSelectionModel<ContractTypeSelectionModel>;
    defaultContractRoles?: CollectionSelectionModel<DefaultContractRoleSelectionModel>;
    departments?: CollectionSelectionModel<DepartmentSelectionModel>;
    developmentLocations?: CollectionSelectionModel<DevelopmentLocationSelectionModel>;
    displays?: CollectionSelectionModel<DisplaySelectionModel>;
    docCategories?: CollectionSelectionModel<DocCategorySelectionModel>;
    fAQs?: CollectionSelectionModel<FAQSelectionModel>;
    fileConfigs?: CollectionSelectionModel<FileConfigSelectionModel>;
    flexFieldDefinitions?: CollectionSelectionModel<FlexFieldDefinitionSelectionModel>;
    flexFieldGroups?: CollectionSelectionModel<FlexFieldGroupSelectionModel>;
    footer?: FileSelectionModel;
    houseTypes?: CollectionSelectionModel<HouseTypeSelectionModel>;
    inspCategories?: CollectionSelectionModel<InspCategorySelectionModel>;
    inspPolicies?: CollectionSelectionModel<InspPolicySelectionModel>;
    inspTemplates?: CollectionSelectionModel<InspTemplateSelectionModel>;
    interfaceBatches?: CollectionSelectionModel<InterfaceBatchSelectionModel>;
    issueCategories?: CollectionSelectionModel<IssueCategorySelectionModel>;
    logo?: FileSelectionModel;
    masterDimensions?: CollectionSelectionModel<MasterDimensionSelectionModel>;
    masterReports?: CollectionSelectionModel<MasterReportSelectionModel>;
    messageTemplates?: CollectionSelectionModel<MessageTemplateSelectionModel>;
    metaData?: MetaDataSelectionModel;
    myHomeTemplateSets?: CollectionSelectionModel<MyHomeTemplateSetSelectionModel>;
    myHomeTemplates?: CollectionSelectionModel<MyHomeTemplateSelectionModel>;
    notificationSettings?: CollectionSelectionModel<NotificationSettingSelectionModel>;
    parent?: BusinessUnitSelectionModel;
    plusFilters?: CollectionSelectionModel<PlusFilterSelectionModel>;
    processEvents?: CollectionSelectionModel<ProcessEventSelectionModel>;
    referralSources?: CollectionSelectionModel<ReferralSourceSelectionModel>;
    regionLinks?: CollectionSelectionModel<BusinessUnitRegionLinkSelectionModel>;
    regions?: CollectionSelectionModel<RegionSelectionModel>;
    reportCategories?: CollectionSelectionModel<ReportCategorySelectionModel>;
    resourceCodes?: CollectionSelectionModel<ResourceCodeSelectionModel>;
    resourcePools?: CollectionSelectionModel<ResourcePoolSelectionModel>;
    rfqTemplateSets?: CollectionSelectionModel<RfqTemplateSetSelectionModel>;
    rfqTemplates?: CollectionSelectionModel<RfqTemplateSelectionModel>;
    savedSearches?: CollectionSelectionModel<SavedSearchSelectionModel>;
    securityRoles?: CollectionSelectionModel<SecurityRoleSelectionModel>;
    summaries?: CollectionSelectionModel<SummarySelectionModel>;
    taskActions?: CollectionSelectionModel<TaskActionSelectionModel>;
    templateSelectionRules?: CollectionSelectionModel<TemplateSelxnRuleSelectionModel>;
    templates?: CollectionSelectionModel<TemplateSelectionModel>;
    tenderAttributes?: CollectionSelectionModel<TenderAttributeSelectionModel>;
    tenderPhaseSets?: CollectionSelectionModel<TenderPhaseSetSelectionModel>;
    tenderPriceDisplays?: CollectionSelectionModel<TenderPriceDisplaySelectionModel>;
    tenderPriceFunctions?: CollectionSelectionModel<TenderPriceFunctionSelectionModel>;
    tenderPriceLevelRules?: CollectionSelectionModel<TenderPriceLevelRuleSelectionModel>;
    users?: CollectionSelectionModel<UserSelectionModel>;
    validationEntries?: CollectionSelectionModel<ValidationEntrySelectionModel>;
    webhooks?: CollectionSelectionModel<WebhookSelectionModel>;
}
export interface CacheRequestModel {
    clients?: ClientSelectionModel[];
    listClients?: ClientSelectionModel[];
    listMasterContracts?: MasterContractSelectionModel[];
    listTasks?: TaskSelectionModel[];
    masterContracts?: MasterContractSelectionModel[];
    tasks?: TaskSelectionModel[];
}
export interface CallupModel {
    callupEnd?: DateString; // @required False
    callupId?: number; // @primaryKey @required True
    callupRequested?: DateString; // @required False
    callupStart?: DateString; // @required False
    callupStatus?: number; // @enum CallupStatus @required True
    callupType?: number; // @enum CallupType @required True
    duration?: number; // @required False
    metaData?: MetaDataModel;
    priority?: number; // @required True
    resource?: ResourceModel; // @required False
    task?: TaskModel; // @required True
}
export interface CallupSelectionModel {
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    task?: TaskSelectionModel;
}
export interface CheckClientDuplicateModel {
    businessUnit?: BusinessUnitModel;
    clientId?: number;
    clientTitle?: string;
    clientType?: number;
    contact1?: ContactModel;
    contact2?: ContactModel;
    contactDetails?: ContactDetailsModel;
    contactInteractions?: CollectionModel<ContactInteractionModel>;
    contacts?: CollectionModel<ClientContactModel>;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    hasStickyNote?: boolean;
    homeAddress?: InternationalAddressModel;
    letterCasual?: string;
    letterEdit?: number;
    letterSalutation?: string;
    letterTitle?: string;
    mPClientTitleKey1?: string;
    mPClientTitleKey2?: string;
    mPSuburbKey1?: string;
    mPSuburbKey2?: string;
    masterContracts?: CollectionModel<MasterContractModel>;
    metaData?: MetaDataModel;
    myHomePassword?: string;
    myHomeUsername?: string;
    notes?: CollectionModel<NoteModel>;
    otherContracts?: CollectionModel<MasterContractModel>;
    profilePhoto?: FileModel;
    referralTraffics?: CollectionModel<ReferralTrafficModel>;
    region?: RegionModel;
    relatedContracts?: CollectionModel<ContractClientLinkModel>;
    security?: ClientSecurityModel;
    signingsEnabled?: boolean;
    skip?: number;
    specialContact?: boolean;
    tags?: CollectionModel<TagModel>;
    take?: number;
    taxNumber?: string;
    userDefined10?: string;
    userDefined1?: string;
    userDefined2?: string;
    userDefined3?: string;
    userDefined4?: string;
    userDefined5?: string;
    userDefined6?: string;
    userDefined7?: string;
    userDefined8?: string;
    userDefined9?: string;
}
export interface ClaimTemplateItemModel {
    affinityToEvent?: number; // @enum PaymentEvents @required True
    allowedDays?: number; // @required True
    claimItemName?: string; // @required True @length 50
    claimRule?: number; // @enum ClaimRule @required True
    claimSequence?: number; // @required True
    claimTemplate?: ClaimTemplateModel; // @required True
    claimTemplateItemId?: number; // @primaryKey @required True
    fixedAmount?: number; // @required True
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    percentage?: number; // @required True
    runEvents?: string; // @required False
    runEventsOnDelay?: string; // @required False
}
export interface ClaimTemplateItemSelectionModel {
    claimTemplate?: ClaimTemplateSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ClaimTemplateModel {
    businessUnit?: BusinessUnitModel; // @required True
    claimTemplate?: string; // @required True @length 50
    claimTemplateId?: number; // @primaryKey @required True
    claimTemplateItems?: CollectionModel<ClaimTemplateItemModel>; // @required True
    metaData?: MetaDataModel;
    security?: SecurityModel;
}
export interface ClaimTemplateSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    claimTemplateItems?: CollectionSelectionModel<ClaimTemplateItemSelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface ClickHomePlusAccountRequestModel {
    clickHomeApiUrl?: string;
    password?: string;
    username?: string;
}
export interface ClickHomePlusConfigurationModel {
    baseUrl?: string;
    clickHomeApiUrl?: string;
    clickHomePlusPassword?: string;
    clickHomePlusUsername?: string;
    clickHomeUser?: MetaDataUserModel;
    clientAppId?: string;
    interval?: number;
    overrideFromEmail?: boolean;
    queueUrl?: string;
    userPoolId?: string;
}
export interface ClickHomePlusMessageQueueRequestModel {
    count?: number;
}
export interface ClickHomePlusRegisterResponseModel {
    message?: string;
    resultCode?: number;
    resultName?: string;
}
export interface ClickHomePlusSettingsModel {
    baseUrl?: string;
    overrideFromEmail?: boolean;
}
export interface ClientClientLinkModel {
    client?: ClientModel; // @required True
    clientClientLinkId?: number; // @primaryKey @required True
    clientOther?: ClientModel; // @required True
    linkType?: number; // @enum ClientClientLinkTypes @required True
    metaData?: MetaDataModel;
}
export interface ClientClientLinkSelectionModel {
    client?: ClientSelectionModel;
    clientOther?: ClientSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ClientContactLinkModel {
    client?: ClientModel; // @required True
    clientContactLinkId?: number; // @primaryKey @required True
    contact?: ContactModel; // @required True
    linkType?: number; // @enum ContactType @required True
    metaData?: MetaDataModel;
}
export interface ClientContactModel {
    actor?: ActorModel;
    address?: InternationalAddressModel;
    ageGroup?: string;
    businessUnit?: BusinessUnitModel;
    clientContactLinkId?: number;
    companyName?: string;
    contactAvailability?: string;
    contactDetails?: ContactDetailsModel;
    contactId?: number;
    contactInstructions?: string;
    contactInteractions?: CollectionModel<ContactInteractionModel>;
    contactTracker?: string;
    contracts?: CollectionModel<ContractModel>;
    dateofBirth?: DateString;
    employmentStatus?: string;
    firstName?: string;
    fullName?: string;
    jobTitle?: string;
    lastName?: string;
    linkType?: number;
    mPFirstNameKey1?: string;
    mPFirstNameKey2?: string;
    mPLastNameKey1?: string;
    mPLastNameKey2?: string;
    marketingOptions?: string;
    masterContracts?: CollectionModel<MasterContractModel>;
    metaData?: MetaDataModel;
    myHomeFeedbacks?: CollectionModel<MyHomeFeedbackModel>;
    myHomePassword?: string;
    myHomeUsername?: string;
    otherNames?: string;
    postalAddress?: InternationalAddressModel;
    prefix?: string;
    profilePhoto?: FileModel;
    resourcesContactsLinks?: CollectionModel<ResourceContactLinkModel>;
    salut?: string;
    sex?: string;
    signingRecipients?: CollectionModel<SigningRecipientModel>;
    ssoId?: string;
    streetAddressPreferred?: boolean;
    suffix?: string;
    title?: string;
    useClientHome?: boolean;
    useClientPostal?: boolean;
}
export interface ClientCriteriaModel {
    clientIds?: number[];
    clientName?: string;
    contact?: ContactCriteriaModel;
    duplicates?: ContactCriteriaModel;
    includeInactive?: boolean;
    masterContract?: MasterContractCriteriaModel;
    myHomePassword?: string;
    myHomeUserName?: string;
    quickSearch?: string;
    simpleDuplicates?: ContactCriteriaModel;
}
export interface ClientModel {
    businessUnit?: BusinessUnitModel; // @required True
    clientId?: number; // @primaryKey @required True
    clientTitle?: string; // @required True @length 400
    clientType?: number; // @enum ClientType @required True
    contact1?: ContactModel; // @required False
    contact2?: ContactModel; // @required False
    contactDetails?: ContactDetailsModel;
    contactInteractions?: CollectionModel<ContactInteractionModel>; // @required True
    contacts?: CollectionModel<ClientContactModel>;
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    hasStickyNote?: boolean; // @required True
    homeAddress?: InternationalAddressModel; // @required False @length 400
    letterCasual?: string; // @required True @length 400
    letterEdit?: number; // @required True
    letterSalutation?: string; // @required True @length 400
    letterTitle?: string; // @required True @length 400
    mPClientTitleKey1?: string; // @required False @length 4
    mPClientTitleKey2?: string; // @required False @length 4
    mPSuburbKey1?: string; // @required False @length 4
    mPSuburbKey2?: string; // @required False @length 4
    masterContracts?: CollectionModel<MasterContractModel>; // @required True
    metaData?: MetaDataModel;
    myHomePassword?: string; // @required False @length 50
    myHomeUsername?: string; // @required False @length 100
    notes?: CollectionModel<NoteModel>; // @required True
    otherContracts?: CollectionModel<MasterContractModel>;
    profilePhoto?: FileModel; // @required False
    referralTraffics?: CollectionModel<ReferralTrafficModel>; // @required True
    region?: RegionModel; // @required True
    relatedContracts?: CollectionModel<ContractClientLinkModel>; // @required True
    security?: ClientSecurityModel;
    signingsEnabled?: boolean; // @required False
    specialContact?: boolean; // @required False
    tags?: CollectionModel<TagModel>;
    taxNumber?: string; // @required False @length 50
    userDefined10?: string; // @required False @length 50
    userDefined1?: string; // @required False @length 50
    userDefined2?: string; // @required False @length 50
    userDefined3?: string; // @required False @length 50
    userDefined4?: string; // @required False @length 50
    userDefined5?: string; // @required False @length 50
    userDefined6?: string; // @required False @length 50
    userDefined7?: string; // @required False @length 50
    userDefined8?: string; // @required False @length 50
    userDefined9?: string; // @required False @length 50
}
export interface ClientSecurityModel {
    canDelete?: boolean;
    canEdit?: boolean;
    canMyHomeLoginAsClient?: boolean;
    canView?: boolean;
}
export interface ClientSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contact1?: ContactSelectionModel;
    contact2?: ContactSelectionModel;
    contactInteractions?: CollectionSelectionModel<ContactInteractionSelectionModel>;
    contacts?: CollectionSelectionModel<ContactSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    masterContracts?: CollectionSelectionModel<MasterContractSelectionModel>;
    metaData?: MetaDataSelectionModel;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    otherContracts?: CollectionSelectionModel<MasterContractSelectionModel>;
    profilePhoto?: FileSelectionModel;
    referralTraffics?: CollectionSelectionModel<ReferralTrafficSelectionModel>;
    region?: RegionSelectionModel;
    relatedContracts?: CollectionSelectionModel<ContractClientLinkSelectionModel>;
    security?: SecuritySelectionModel;
    tags?: CollectionSelectionModel<TagSelectionModel>;
}
export interface ClientTagModel {
    client?: ClientModel; // @required True
    clientTagId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    tag?: TagModel; // @required True
}
export interface ClientTagSelectionModel {
    client?: ClientSelectionModel;
    metaData?: MetaDataSelectionModel;
    tag?: TagSelectionModel;
}
export interface CollectionModel<T = any> {
    count?: number;
    list?: T[];
}
export interface CollectionSelectionModel<T = any> {
    includeInactive?: boolean;
    list?: T;
    topOnly?: boolean;
}
export interface CommonCallsheetModel {
    contract?: ContractModel; // @primaryKey @required True
    contracts?: CollectionModel<ContractModel>;
    itemName?: string; // @required False @length 100
    sumCompleted?: number; // @required False
    sumPending?: number; // @required False
    sumPlanned?: number; // @required False
    sumStarted?: number; // @required False
    templateItem?: TemplateItemModel; // @required False
}
export interface CommonCallsheetSelectionModel {
    contract?: ContractSelectionModel;
    templateItem?: TemplateItemSelectionModel;
}
export interface ConfigOptionsCriteriaModel {
    businessUnits?: BusinessUnitCriteriaModel;
    jobTypes?: string[];
}
export interface ConfigurationCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    contractCategory?: ContractCategoryCriteriaModel;
    contractType?: ContractTypeCriteriaModel;
    council?: DevelopmentLocationCriteriaModel;
    estate?: DevelopmentLocationCriteriaModel;
    estateStage?: EstateStageCriteriaModel;
    flexFieldDefinition?: FlexFieldDefinitionCriteriaModel;
    houseType?: HouseTypeCriteriaModel;
    ignoreUser?: boolean;
    priceDisplay?: BaseBusinessUnitCriteriaModel;
    referralSource?: ReferralSourceCriteriaModel;
    role?: SecurityRoleCriteriaModel;
    signingRule?: SigningRuleCriteriaModel;
    summary?: SummaryCriteriaModel;
    template?: TemplateCriteriaModel;
    templateItem?: TemplateItemCriteriaModel;
    tenderAttribute?: TenderAttributeCriteriaModel;
    tenderOptionCategory?: TenderOptionCategoryCriteriaModel;
    tenderPackageCategory?: TenderPackageCategoryCriteriaModel;
    tenderPhase?: TenderPhaseCriteriaModel;
    tenderPhaseSet?: TenderPhaseSetCriteriaModel;
    tenderPriceFunction?: TenderPriceFunctionCriteriaModel;
    tenderPriceLevel?: TenderPriceLevelCriteriaModel;
    user?: UserCriteriaModel;
}
export interface ConfigurationModel {
    appCustomisations?: CollectionModel<AppCustomisationModel>;
    brands?: CollectionModel<BrandModel>;
    businessUnit?: BusinessUnitModel;
    calendars?: CollectionModel<BusinessCalendarModel>;
    childBusinessUnits?: CollectionModel<OptionsModel<BusinessUnitModel>>;
    claimTemplates?: CollectionModel<ClaimTemplateModel>;
    contractCategories?: CollectionModel<OptionsModel<ContractCategoryModel>>;
    contractTypes?: CollectionModel<OptionsModel<ContractTypeModel>>;
    councils?: CollectionModel<DevelopmentLocationModel>;
    customBins?: CollectionModel<BinModel>;
    departments?: CollectionModel<OptionsModel<DepartmentModel>>;
    displays?: CollectionModel<DisplayModel>;
    docCategories?: CollectionModel<DocCategoryModel>;
    estateStages?: CollectionModel<EstateStageModel>;
    estates?: CollectionModel<DevelopmentLocationModel>;
    flexFieldDefinitions?: CollectionModel<FlexFieldDefinitionModel>;
    houseTypes?: CollectionModel<OptionsModel<HouseTypeModel>>;
    inspCategories?: CollectionModel<InspCategoryModel>;
    inspPolicies?: CollectionModel<InspPolicyModel>;
    inspTemplates?: CollectionModel<InspTemplateModel>;
    issueCategories?: CollectionModel<IssueCategoryModel>;
    masterAreas?: CollectionModel<MasterAreaModel>;
    messageTemplates?: CollectionModel<MessageTemplateModel>;
    myHomeTemplates?: CollectionModel<MyHomeTemplateModel>;
    processEvents?: CollectionModel<ProcessEventModel>;
    referralSources?: CollectionModel<OptionsModel<ReferralSourceModel>>;
    regions?: CollectionModel<OptionsModel<RegionModel>>;
    resourceCodes?: CollectionModel<ResourceCodeModel>;
    rfqTemplateSets?: CollectionModel<RfqTemplateSetModel>;
    rfqTemplates?: CollectionModel<RfqTemplateModel>;
    roles?: CollectionModel<SecurityRoleModel>;
    signingRules?: CollectionModel<SigningRuleModel>;
    stages?: CollectionModel<StageModel>;
    standardBins?: CollectionModel<StandardBinModel>;
    standardSummaries?: CollectionModel<StandardSummaryModel>;
    suburbs?: CollectionModel<SuburbModel>;
    summaries?: CollectionModel<SummaryModel>;
    summaryGroups?: CollectionModel<SummaryGroupModel>;
    templateItems?: CollectionModel<OptionsModel<TemplateItemModel>>;
    templateSubProcesses?: CollectionModel<TemplateSubProcessModel>;
    templates?: CollectionModel<OptionsModel<TemplateModel>>;
    tenderAttributes?: CollectionModel<TenderAttributeModel>;
    tenderOptionCategories?: CollectionModel<TenderOptionCategoryModel>;
    tenderPackageCategories?: CollectionModel<TenderPackageCategoryModel>;
    tenderPhaseSets?: CollectionModel<TenderPhaseSetModel>;
    tenderPhases?: CollectionModel<TenderPhaseModel>;
    tenderPriceDisplays?: CollectionModel<TenderPriceDisplayModel>;
    tenderPriceFunctions?: CollectionModel<TenderPriceFunctionModel>;
    tenderPriceLevels?: CollectionModel<TenderPriceLevelModel>;
    tenderReportHeaders?: CollectionModel<TenderReportHeaderModel>;
    users?: CollectionModel<OptionsModel<UserModel>>;
}
export interface ConfigurationRequestModel<T = any, U = any> {
    criteria?: U;
    selection?: T;
}
export interface ConfigurationSelectionModel {
    appCustomisations?: CollectionSelectionModel<AppCustomisationSelectionModel>;
    brands?: CollectionSelectionModel<BrandSelectionModel>;
    calendars?: CollectionSelectionModel<BusinessCalendarSelectionModel>;
    childBusinessUnits?: CollectionSelectionModel<BusinessUnitSelectionModel>;
    claimTemplates?: CollectionSelectionModel<ClaimTemplateSelectionModel>;
    contractCategories?: CollectionSelectionModel<ContractCategorySelectionModel>;
    contractTypes?: CollectionSelectionModel<ContractTypeSelectionModel>;
    councils?: CollectionSelectionModel<DevelopmentLocationSelectionModel>;
    customBins?: CollectionSelectionModel<BinSelectionModel>;
    departments?: CollectionSelectionModel<DepartmentSelectionModel>;
    displays?: CollectionSelectionModel<DisplaySelectionModel>;
    docCategories?: CollectionSelectionModel<DocCategorySelectionModel>;
    estateStages?: CollectionSelectionModel<EstateStageSelectionModel>;
    estates?: CollectionSelectionModel<DevelopmentLocationSelectionModel>;
    flexFieldDefinitions?: CollectionSelectionModel<FlexFieldDefinitionSelectionModel>;
    houseTypes?: CollectionSelectionModel<HouseTypeSelectionModel>;
    inspCategories?: CollectionSelectionModel<InspCategorySelectionModel>;
    inspPolicies?: CollectionSelectionModel<InspPolicySelectionModel>;
    inspTemplates?: CollectionSelectionModel<InspTemplateSelectionModel>;
    issueCategories?: CollectionSelectionModel<IssueCategorySelectionModel>;
    masterAreas?: CollectionSelectionModel<MasterAreaSelectionModel>;
    messageTemplates?: CollectionSelectionModel<MessageTemplateSelectionModel>;
    myHomeTemplates?: CollectionSelectionModel<MyHomeTemplateSelectionModel>;
    processEvents?: CollectionSelectionModel<ProcessEventSelectionModel>;
    referralSources?: CollectionSelectionModel<ReferralSourceSelectionModel>;
    regions?: CollectionSelectionModel<RegionSelectionModel>;
    resourceCodes?: CollectionSelectionModel<ResourceCodeSelectionModel>;
    rfqTemplateSets?: CollectionSelectionModel<RfqTemplateSetSelectionModel>;
    rfqTemplates?: CollectionSelectionModel<RfqTemplateSelectionModel>;
    roles?: CollectionSelectionModel<SecurityRoleSelectionModel>;
    signingRules?: CollectionSelectionModel<SigningRuleSelectionModel>;
    stages?: CollectionSelectionModel<StageSelectionModel>;
    standardBins?: CollectionSelectionModel<StandardBinSelectionModel>;
    standardSummaries?: CollectionSelectionModel<StandardSummarySelectionModel>;
    suburbs?: CollectionSelectionModel<SuburbSelectionModel>;
    summaries?: CollectionSelectionModel<SummarySelectionModel>;
    summaryGroups?: CollectionSelectionModel<SummaryGroupSelectionModel>;
    templateItems?: CollectionSelectionModel<TemplateItemSelectionModel>;
    templateSubProcesses?: CollectionSelectionModel<TemplateSubProcessSelectionModel>;
    templates?: CollectionSelectionModel<TemplateSelectionModel>;
    tenderAttributes?: CollectionSelectionModel<TenderAttributeSelectionModel>;
    tenderOptionCategories?: CollectionSelectionModel<TenderOptionCategorySelectionModel>;
    tenderPackageCategories?: CollectionSelectionModel<TenderPackageCategorySelectionModel>;
    tenderPhaseSets?: CollectionSelectionModel<TenderPhaseSetSelectionModel>;
    tenderPhases?: CollectionSelectionModel<TenderPhaseSelectionModel>;
    tenderPriceDisplays?: CollectionSelectionModel<TenderPriceDisplaySelectionModel>;
    tenderPriceFunctions?: CollectionSelectionModel<TenderPriceFunctionSelectionModel>;
    tenderPriceLevels?: CollectionSelectionModel<TenderPriceLevelSelectionModel>;
    tenderReportHeaders?: CollectionSelectionModel<TenderReportHeaderSelectionModel>;
    users?: CollectionSelectionModel<UserSelectionModel>;
}
export interface ContactCriteriaModel {
    contactDetails?: ContactDetailsCriteriaModel;
    contactIds?: number[];
    contracts?: ContractCriteriaModel;
    firstName?: string;
    hasSsoId?: boolean;
    includeInactive?: boolean;
    lastName?: string;
    quickSearch?: string;
    ssoId?: string;
}
export interface ContactDetailsCriteriaModel {
    emailAddress?: string;
    hasEmail?: boolean;
    homePhone?: string;
    mobilePhone?: string;
    workPhone?: string;
}
export interface ContactDetailsModel {
    contactMethod?: string;
    emailAddress?: string;
    faxNumber?: string;
    homePhone?: string;
    mobilePhone?: string;
    workPhone?: string;
}
export interface ContactInteractionModel {
    action?: string; // @required False @length 10
    client?: ClientModel; // @required False
    comment?: string; // @required False @length 400
    contact?: ContactModel; // @required False
    contactInteractionId?: number; // @primaryKey @required True
    contract?: ContractModel; // @required False
    interactionDate?: DateString; // @required False
    metaData?: MetaDataBaseModel;
    notes?: string; // @required False
    reference?: string; // @required False @length 200
    referralSource?: ReferralSourceModel; // @required True
}
export interface ContactInteractionSelectionModel {
    client?: ClientSelectionModel;
    contact?: ContactSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    referralSource?: ReferralSourceSelectionModel;
}
export interface ContactModel {
    actor?: ActorModel; // @required False
    address?: InternationalAddressModel; // @required False @length 400
    ageGroup?: string; // @required False @length 1
    businessUnit?: BusinessUnitModel; // @required True
    companyName?: string; // @required False @length 255
    contactAvailability?: string; // @required False @length 400
    contactDetails?: ContactDetailsModel;
    contactId?: number; // @primaryKey @required True
    contactInstructions?: string; // @required False @length 400
    contactInteractions?: CollectionModel<ContactInteractionModel>; // @required True
    contactTracker?: string; // @required True @length 64
    contracts?: CollectionModel<ContractModel>; // @required True
    dateofBirth?: DateString; // @required False
    employmentStatus?: string; // @required False @length 1
    firstName?: string; // @required False @length 50
    fullName?: string; // @required True @length 100
    jobTitle?: string; // @required False @length 50
    lastName?: string; // @required False @length 50
    mPFirstNameKey1?: string; // @required False @length 4
    mPFirstNameKey2?: string; // @required False @length 4
    mPLastNameKey1?: string; // @required False @length 4
    mPLastNameKey2?: string; // @required False @length 4
    marketingOptions?: string; // @required False @length 10
    masterContracts?: CollectionModel<MasterContractModel>; // @required True
    metaData?: MetaDataModel;
    myHomeFeedbacks?: CollectionModel<MyHomeFeedbackModel>; // @required True
    myHomePassword?: string; // @required False @length 50
    myHomeUsername?: string; // @required False @length 100
    otherNames?: string; // @required False @length 50
    postalAddress?: InternationalAddressModel; // @required False @length 400
    prefix?: string; // @required False @length 50
    profilePhoto?: FileModel; // @required False
    resourcesContactsLinks?: CollectionModel<ResourceContactLinkModel>; // @required True
    salut?: string; // @required False @length 50
    sex?: string; // @enum Sex? @required False
    signingRecipients?: CollectionModel<SigningRecipientModel>; // @required True
    ssoId?: string; // @required False @length 400
    streetAddressPreferred?: boolean; // @required False
    suffix?: string; // @required False @length 50
    title?: string; // @required False @length 50
    useClientHome?: boolean; // @required False
    useClientPostal?: boolean; // @required False
}
export interface ContactSelectionModel {
    actor?: ActorSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    contactInteractions?: CollectionSelectionModel<ContactInteractionSelectionModel>;
    contracts?: CollectionSelectionModel<ContractSelectionModel>;
    masterContracts?: CollectionSelectionModel<MasterContractSelectionModel>;
    metaData?: MetaDataSelectionModel;
    myHomeFeedbacks?: CollectionSelectionModel<MyHomeFeedbackSelectionModel>;
    profilePhoto?: FileSelectionModel;
    resourcesContactsLinks?: CollectionSelectionModel<ResourceContactLinkSelectionModel>;
    signingRecipients?: CollectionSelectionModel<SigningRecipientSelectionModel>;
}
export interface ContractActivityModel {

}
export interface ContractAppointmentsNext5Model {

}
export interface ContractBaselineModel {
    baselineEndDate?: DateString; // @required False
    baselineStartDate?: DateString; // @required False
    contract?: ContractModel; // @required True
    contractBaselineId?: number; // @primaryKey @required True
    createdOn?: DateString; // @required True
    task?: TaskModel; // @required True
    type?: number; // @enum BaselineType @required True
}
export interface ContractBaselineSelectionModel {
    contract?: ContractSelectionModel;
    task?: TaskSelectionModel;
}
export interface ContractCalendarModel {
    businessDaysFromStart?: number; // @required False
    businessday?: number; // @required True
    calendarDate?: DateString; // @required True
    contract?: ContractModel; // @required True
    contractCalendarId?: number; // @primaryKey @required True
    daysFromStart?: number; // @required False
    stopday?: number; // @required False
}
export interface ContractCalendarSelectionModel {
    contract?: ContractSelectionModel;
}
export interface ContractCategoryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    contractCategoryIds?: number[];
    includeInactive?: boolean;
    jobTypes?: string[];
}
export interface ContractCategoryModel {
    businessUnit?: BusinessUnitModel; // @required True
    code?: string; // @required True @length 10
    contractCategoryId?: number; // @primaryKey @required True
    display?: string; // @required True @length 50
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataOrderModel;
    security?: SecurityModel;
}
export interface ContractCategorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ContractClaimCriteriaModel {
    completed?: AgeRangeModel;
    forecast?: AgeRangeModel;
    ids?: number[];
    includeInactive?: boolean;
    masterContracts?: MasterContractCriteriaModel;
}
export interface ContractClaimModel {
    amount?: number; // @required False
    claimTemplateItem?: ClaimTemplateItemModel; // @required True
    contractClaimId?: number; // @primaryKey @required True
    dateDue?: DateString; // @required False
    dateExpected?: DateString; // @required False
    datePaid?: DateString; // @required False
    dateRaised?: DateString; // @required False
    file?: FileModel; // @required False
    invoiceReference?: string; // @required False @length 50
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataModel;
    paymentReference?: string; // @required False @length 50
    task?: TaskModel; // @required False
}
export interface ContractClaimSelectionModel {
    claimTemplateItem?: ClaimTemplateItemSelectionModel;
    file?: FileSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    task?: TaskSelectionModel;
}
export interface ContractClientLinkModel {
    client?: ClientModel; // @required True
    contractClientLinkId?: number; // @primaryKey @required True
    linkType?: number; // @enum ContractClientLinks @required True
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataModel;
}
export interface ContractClientLinkSelectionModel {
    client?: ClientSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ContractClientSelectionModel {
    client?: ClientSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ContractCriteriaModel {
    ageRange?: AgeRangeModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    categoryIds?: number[];
    contractAdmin?: UserCriteriaModel;
    contractAdminIds?: number[];
    contractIds?: number[];
    contractNumber?: string;
    contractNumbers?: string[];
    contractTypeIds?: number[];
    councilIds?: number[];
    customSearch1?: boolean;
    customSearch2?: boolean;
    customSearch3?: boolean;
    customSearch4?: boolean;
    customSearch5?: boolean;
    customSearch6?: boolean;
    dashboard?: DashboardCriteriaModel;
    daysAhead?: AgeRangeModel;
    estateIds?: number[];
    facade?: TenderPackageCriteriaModel;
    fieldDeviceJobs?: boolean;
    fieldVisibleJobs?: boolean;
    filter?: number;
    flexfields?: FlexFieldCriteriaModel[];
    handoverActivityRange?: AgeRangeModel;
    houseType?: HouseTypeCriteriaModel;
    includeInactive?: boolean;
    isSubscribed?: UserCriteriaModel;
    issue?: IssueCriteriaModel;
    jobTypes?: string[];
    lastActivityRange?: AgeRangeModel;
    lotAddress?: string;
    masterContract?: MasterContractCriteriaModel;
    milestone?: SummaryCriteriaModel;
    notes?: string[];
    progress?: ProgressCriteriaModel;
    salesActivityRange?: AgeRangeModel;
    salesInterest?: SalesInterestCriteriaModel;
    salesPerson?: UserCriteriaModel;
    salesPersonIds?: number[];
    siteStartActivityRange?: AgeRangeModel;
    stageIds?: number[];
    statusChange?: ContractStatusChangeCriteriaModel;
    statuses?: string[];
    summaryIds?: number[];
    supervisor?: UserCriteriaModel;
    supervisorIds?: number[];
    tasks?: TaskCriteriaModel[];
    templateIds?: number[];
    valueRange?: ValueRangeModel;
    velocity?: ValueRangeModel;
    whiteSpace?: ValueRangeModel;
}
export interface ContractDateAdjustmentModel {
    adjustmentType?: number; // @enum ContractDateAdjustmentType @required True
    bpesRetained?: boolean; // @required False
    contractDateAdjustmentId?: number; // @primaryKey @required True
    duration?: number; // @required False
    metaData?: MetaDataModel;
    newHousePrice?: TenderHousePriceModel; // @required False
    newHouseSellPrice?: number; // @required False
    oldHousePrice?: TenderHousePriceModel; // @required False
    oldHouseSellPrice?: number; // @required False
    originalAdjustment?: ContractDateAdjustmentModel; // @required False
    reason?: string; // @required False @length 255
    targetDate?: DateString; // @required False
    tender?: TenderModel; // @required True
    tenderContractRule?: TenderContractRuleModel; // @required False
    tenderOptionSelection?: TenderOptionSelxnModel; // @required False
    tenderVariation?: TenderVariationModel; // @required False
    tldsRetained?: boolean; // @required False
    value?: number; // @required True
}
export interface ContractDateAdjustmentSelectionModel {
    metaData?: MetaDataSelectionModel;
    newHousePrice?: TenderHousePriceSelectionModel;
    oldHousePrice?: TenderHousePriceSelectionModel;
    originalAdjustment?: ContractDateAdjustmentSelectionModel;
    tender?: TenderSelectionModel;
    tenderContractRule?: TenderContractRuleSelectionModel;
    tenderOptionSelection?: TenderOptionSelxnSelectionModel;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface ContractDayModel {
    additionalDays?: number; // @required True
    comment?: string; // @required False @length 400
    contract?: ContractModel; // @required True
    contractDayId?: number; // @primaryKey @required True
    metaData?: MetaDataBaseModel;
    reason?: string; // @required True @length 10
    tenderVariation?: TenderVariationModel; // @required False
}
export interface ContractDaySelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface ContractHistoryCriteriaModel {
    contact?: ContactCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
}
export interface ContractHistoryModel {
    allowedDays?: number; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    category?: string; // @required False @length 10
    changed?: DateString; // @required True
    client?: ClientModel; // @required False
    clientAdvisedDate?: DateString; // @required False
    commonName?: string; // @required True @length 50
    contact?: ContactModel; // @required False
    contactPoint?: ReferralSourceModel; // @required False
    contract?: ContractModel; // @required True
    contractAdmin?: MetaDataUserModel; // @required False
    contractCategory?: ContractCategoryModel; // @required False
    contractHistoryId?: number; // @primaryKey @required True
    contractNotes?: string; // @required False
    contractNumber?: string; // @required True @length 20
    contractPriority?: number; // @required True
    contractStatus?: string; // @enum ContractStatuses @required True
    contractType?: ContractTypeModel; // @required False
    contractValue?: number; // @required False
    council?: DevelopmentLocationModel; // @required False
    description?: string; // @required False @length 50
    display?: DisplayModel; // @required False
    estate?: DevelopmentLocationModel; // @required False
    estimatedClientMoveInDate?: DateString; // @required False
    estimatedCompleteDate?: DateString; // @required False
    facadePackage?: TenderPackageModel; // @required False
    hasStickyNote?: boolean; // @required True
    houseType?: HouseTypeModel; // @required False
    jobFileJobId?: number; // @required False
    jobType?: string; // @enum JobTypes @required True
    lastActivityDate?: DateString; // @required False
    lastModifiedBy?: MetaDataUserModel; // @required True
    latitude?: string; // @required False @length 50
    longitude?: string; // @required False @length 50
    lotAddress?: string; // @required False @length 400
    lotLevelNo?: string; // @required False @length 20
    lotNo?: string; // @required False @length 20
    lotPostCode?: string; // @required False @length 10
    lotState?: string; // @required False @length 10
    lotStreet1?: string; // @required False @length 60
    lotStreet2?: string; // @required False @length 60
    lotStreetNo?: string; // @required False @length 20
    lotSuburb?: string; // @required False @length 50
    lotUnitNo?: string; // @required False @length 20
    masterContract?: MasterContractModel; // @required False
    order?: number; // @required True
    programmedCompleteDate?: DateString; // @required False
    projectCode?: string; // @required False @length 50
    referralData?: string; // @required False @length 100
    region?: RegionModel; // @required True
    salesPerson?: MetaDataUserModel; // @required False
    salesStatus?: string; // @enum SalesStatus? @required False
    salespersonAssignedDate?: DateString; // @required False
    scheduleStartDate?: DateString; // @required False
    schedulingStatus?: string; // @enum SchedulingStatuses @required True
    sourceContract?: ContractModel; // @required False
    stage?: StageModel; // @required False
    standardDirections?: string; // @required False @length 400
    standardInstructions?: string; // @required False @length 400
    suburb?: SuburbModel; // @required False
    summary?: SummaryModel; // @required False
    supervisor2?: MetaDataUserModel; // @required False
    supervisor?: MetaDataUserModel; // @required True
    supervisorQC?: MetaDataUserModel; // @required False
    supervisorStatus?: string; // @enum SupervisorStatuses @required True
    targetEndDate?: DateString; // @required False
    targetStartDate?: DateString; // @required False
    template?: TemplateModel; // @required False
    userDefined10?: string; // @required False @length 50
    userDefined1?: string; // @required False @length 50
    userDefined2?: string; // @required False @length 50
    userDefined3?: string; // @required False @length 50
    userDefined4?: string; // @required False @length 50
    userDefined5?: string; // @required False @length 50
    userDefined6?: string; // @required False @length 50
    userDefined7?: string; // @required False @length 50
    userDefined8?: string; // @required False @length 50
    userDefined9?: string; // @required False @length 50
}
export interface ContractHistorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    client?: ClientSelectionModel;
    contact?: ContactSelectionModel;
    contactPoint?: ReferralSourceSelectionModel;
    contract?: ContractSelectionModel;
    contractAdmin?: UserSelectionModel;
    contractCategory?: ContractCategorySelectionModel;
    contractType?: ContractTypeSelectionModel;
    council?: DevelopmentLocationSelectionModel;
    display?: DisplaySelectionModel;
    estate?: DevelopmentLocationSelectionModel;
    facadePackage?: TenderPackageSelectionModel;
    houseType?: HouseTypeSelectionModel;
    lastModifiedBy?: UserSelectionModel;
    masterContract?: MasterContractSelectionModel;
    region?: RegionSelectionModel;
    salesPerson?: UserSelectionModel;
    sourceContract?: ContractSelectionModel;
    stage?: StageSelectionModel;
    suburb?: SuburbSelectionModel;
    summary?: SummarySelectionModel;
    supervisor2?: UserSelectionModel;
    supervisor?: UserSelectionModel;
    supervisorQC?: UserSelectionModel;
    template?: TemplateSelectionModel;
}
export interface ContractIncludedAreaModel {
    contractIncludedAreaId?: number; // @primaryKey @required True
    masterArea?: MasterAreaModel; // @required True
    metaData?: MetaDataOrderModel;
}
export interface ContractIncludedAreaSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ContractMetricModel {
    businessAvgVelocity?: number; // @required False
    contract?: ContractModel; // @required True
    contractMetricId?: number; // @primaryKey @required True
    currentVelocity?: number; // @required False
    lastUpdate?: DateString; // @required True
    lwBusinessAvgVelocity?: number; // @required False
    lwCurrentVelocity?: number; // @required False
    lwSupervisorAvgVelocity?: number; // @required False
    lwTeamAvgVelocity?: number; // @required False
    lwWhiteSpace?: number; // @required True
    maBusinessAvgVelocity?: number; // @required False
    maCurrentVelocity?: number; // @required False
    maSupervisorAvgVelocity?: number; // @required False
    maTeamAvgVelocity?: number; // @required False
    maWhiteSpace?: number; // @required False
    nwWhiteSpace?: number; // @required True
    supervisorAvgVelocity?: number; // @required False
    teamAvgVelocity?: number; // @required False
    weeksActive?: number; // @required True
    whiteSpace?: number; // @required True
}
export interface ContractMetricSelectionModel {
    contract?: ContractSelectionModel;
}
export interface ContractMilestoneModel {
    actualEndDate?: DateString; // @required False
    actualStartDate?: DateString; // @required False
    baselineEndDate?: DateString; // @required False
    baselineStartDate?: DateString; // @required False
    contractMilestoneId?: number; // @primaryKey @required True
    count?: number; // @required True
    forecastEndDate?: DateString; // @required False
    forecastStartDate?: DateString; // @required False
    metaData?: MetaDataBaseModel;
    pcntComplete?: number; // @required True
    summary?: SummaryModel; // @required True
    targetEndDate?: DateString; // @required False
    targetStartDate?: DateString; // @required False
}
export interface ContractMilestoneSelectionModel {
    metaData?: MetaDataSelectionModel;
    summary?: SummarySelectionModel;
}
export interface ContractModel {
    activities?: CollectionModel<ActivityModel>;
    allowedDays?: number; // @required False
    appointments?: CollectionModel<MeetingModel>; // @required True
    approvalQueues?: CollectionModel<ApprovalQueueModel>; // @required True
    areas?: CollectionModel<MasterAreaModel>;
    baselines?: CollectionModel<ContractBaselineModel>; // @required True
    calendars?: CollectionModel<ContractCalendarModel>; // @required True
    clientAdvisedDate?: DateString; // @required False
    committedTo?: CollectionModel<SalesCommitmentModel>; // @required True
    commonCallsheets?: CollectionModel<CommonCallsheetModel>;
    commonName?: string; // @required True @length 50
    contactInteractions?: CollectionModel<ContactInteractionModel>; // @required True
    contractAdmin?: MetaDataUserModel; // @required False
    contractCategory?: ContractCategoryModel; // @required False
    contractDays?: CollectionModel<ContractDayModel>; // @required True
    contractHistories?: CollectionModel<ContractHistoryModel>; // @required True
    contractId?: number; // @primaryKey @required True
    contractMetrics?: CollectionModel<ContractMetricModel>; // @required True
    contractNotes?: string; // @required False
    contractNumber?: string; // @required True @length 20
    contractStatus?: string; // @enum ContractStatuses @required True
    contractStatusChanges?: CollectionModel<ContractStatusChanxModel>; // @required True
    contractsLogs?: CollectionModel<ContractsLogModel>; // @required True
    dashStandardSummaryStats?: CollectionModel<DashStandardSummaryStatModel>;
    deadlines?: CollectionModel<DeadlineModel>; // @required True
    dependentIssues?: CollectionModel<IssueModel>; // @required True
    documents?: CollectionModel<DocumentModel>;
    estimatedClientMoveInDate?: DateString; // @required False
    estimatedCompleteDate?: DateString; // @required False
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    files?: CollectionModel<FileModel>;
    flexFields?: FlexFieldModel[]; // @required True
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    hasStickyNote?: boolean; // @required True
    inspRequireds?: CollectionModel<InspRequiredModel>; // @required True
    interestedIn?: CollectionModel<SalesInterestModel>; // @required True
    invoices?: CollectionModel<InvoiceModel>; // @required True
    issues?: CollectionModel<IssueModel>; // @required True
    jobFileJobId?: number; // @required False
    jobNotReadies?: CollectionModel<JobNotReadyModel>; // @required True
    jobType?: string; // @enum JobTypes @required True
    land?: LandModel;
    landPricings?: CollectionModel<LandPricingModel>; // @required True
    lastActivityDate?: DateString; // @required False
    leadQueues?: CollectionModel<LeadsQueueModel>; // @required True
    maintenanceJob?: MaintenanceJobModel; // @required False
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    milestones?: CollectionModel<ContractMilestoneModel>; // @required True
    myHomeFeatures?: CollectionModel<MyHomeFeatureModel>; // @required True
    myHomeStories?: CollectionModel<MyHomeStoryModel>; // @required True
    notes?: CollectionModel<NoteModel>; // @required True
    programmedCompleteDate?: DateString; // @required False
    purchaseOrders?: CollectionModel<POHeaderModel>; // @required True
    quoteResponses?: CollectionModel<QuoteResponseModel>; // @required True
    referralData?: string; // @required False @length 100
    region?: RegionModel; // @required True
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>; // @required True
    requisitions?: CollectionModel<RequisitionModel>; // @required True
    rfqActualSummaries?: CollectionModel<RfqActualSummaryModel>; // @required True
    rfqActuals?: CollectionModel<RfqActualModel>; // @required True
    salesCommitments?: CollectionModel<SalesCommitmentModel>; // @required True
    salesInterests?: CollectionModel<SalesInterestModel>; // @required True
    salesPerson?: MetaDataUserModel; // @required False
    salesStatus?: string; // @enum SalesStatus? @required False
    salespersonAssignedDate?: DateString; // @required False
    scheduleStartDate?: DateString; // @required False
    schedulingStatus?: string; // @enum SchedulingStatuses @required True
    security?: ContractSecurityModel;
    sharedCommissions?: CollectionModel<SharedCommissionModel>; // @required True
    signings?: CollectionModel<SigningModel>; // @required True
    sourceContract?: ContractModel; // @required False
    stage?: StageModel; // @required False
    stats?: ContractStatModel;
    statusReports?: CollectionModel<StatusReportModel>; // @required True
    stopDays?: CollectionModel<ContractStopDayModel>; // @required True
    subscriptions?: CollectionModel<SubscriptionModel>; // @required True
    summary?: SummaryModel; // @required False
    supervisor2?: MetaDataUserModel; // @required False
    supervisor?: MetaDataUserModel; // @required True
    supervisorQc?: MetaDataUserModel; // @required False
    supervisorStatus?: string; // @enum SupervisorStatuses @required True
    tags?: CollectionModel<TagModel>;
    targetEndDate?: DateString; // @required False
    targetStartDate?: DateString; // @required False
    tasks?: CollectionModel<TaskModel>; // @required True
    template?: TemplateModel; // @required False
    tenderVariations?: CollectionModel<TenderVariationModel>; // @required True
    userDefined10?: string; // @required False @length 50
    userDefined1?: string; // @required False @length 50
    userDefined2?: string; // @required False @length 50
    userDefined3?: string; // @required False @length 50
    userDefined4?: string; // @required False @length 50
    userDefined5?: string; // @required False @length 50
    userDefined6?: string; // @required False @length 50
    userDefined7?: string; // @required False @length 50
    userDefined8?: string; // @required False @length 50
    userDefined9?: string; // @required False @length 50
}
export interface ContractNoteModel {

}
export interface ContractResourceLinkModel {
    contract?: ContractModel; // @required False
    contractResourceLinkId?: number; // @primaryKey @required True
    linkType?: number; // @enum SupplierLinkTypes @required True
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataModel;
    resource?: ResourceModel; // @required True
}
export interface ContractResourceLinkSelectionModel {
    contract?: ContractSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
}
export interface ContractResourceSelectionModel {
    contract?: ContractSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
}
export interface ContractSaleCriteriaModel {
    aCCDeadline?: AgeRangeModel;
    achievedACC?: boolean;
    includeInactive?: boolean;
}
export interface ContractSaleModel {
    actualACCDate?: DateString; // @required False
    baseDeadlineACC?: DateString; // @required False
    basePriceExpiry?: DateString; // @required False
    contractSigned?: DateString; // @required False
    deadlineACC?: DateString; // @required False
    deadlineConstruction?: DateString; // @required False
    depositAmount2?: number; // @required False
    depositAmount?: number; // @required False
    depositDate2?: DateString; // @required False
    depositDate?: DateString; // @required False
    depositReceipt2?: string; // @required False @length 100
    depositReceipt?: string; // @required False @length 100
    financeApproved?: DateString; // @required False
    financeDeadline?: DateString; // @required False
    financeType?: number; // @required True
    lastBtr?: DateString; // @required False
    masterContract?: MasterContractModel; // @required True
    masterContractId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    resource?: ResourceModel; // @required False
    tender?: TenderModel; // @required False
    tenderContractRule?: TenderContractRuleModel; // @required False
}
export interface ContractSaleSelectionModel {
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    tender?: TenderSelectionModel;
    tenderContractRule?: TenderContractRuleSelectionModel;
}
export interface ContractSecurityModel {
    canAcceptQuote?: boolean;
    canAddDocs?: boolean;
    canAddInspection?: boolean;
    canAddIssues?: boolean;
    canAddNoteCustomTopics?: boolean;
    canAddNotes?: boolean;
    canAddRequisitions?: boolean;
    canAddTasks?: boolean;
    canAddTender?: boolean;
    canChangeContractAdministrator?: boolean;
    canChangeSalesPerson?: boolean;
    canChangeSalesStatus?: boolean;
    canChangeStatus?: boolean;
    canChangeSupervisor?: boolean;
    canCommitToBuySpecSale?: boolean;
    canDelete?: boolean;
    canDeleteOptionalTasks?: boolean;
    canEdit?: boolean;
    canEditFlexFields?: boolean;
    canEditLotAddress?: boolean;
    canEditMilestones?: boolean;
    canInitiateQuote?: boolean;
    canInitiateSigning?: boolean;
    canOverrideTenderOptionPackagePrice?: boolean;
    canPublishDocumentsToMyHome?: boolean;
    canPublishNotesToMyHome?: boolean;
    canReRunPOLoad?: boolean;
    canResetTasks?: boolean;
    canRestoreDeletedTasks?: boolean;
    canRunBaseline?: boolean;
    canRunForecast?: boolean;
    canRunSubProcess?: boolean;
    canSetSalesAppointment?: boolean;
    canUnCommitToBuySpecSale?: boolean;
    canUnDoneCompleteTasks?: boolean;
    canUnlockPOBySupplier?: boolean;
    canUnsellContract?: boolean;
    canView?: boolean;
    canViewContractLogs?: boolean;
    canViewSpecSales?: boolean;
    documentSecurity?: DocumentSecurityModel;
    isQuotesSuperUser?: boolean;
}
export interface ContractSelectionModel {
    activities?: CollectionSelectionModel<ActivitySelectionModel>;
    appointments?: CollectionSelectionModel<MeetingSelectionModel>;
    approvalQueues?: CollectionSelectionModel<ApprovalQueueSelectionModel>;
    areas?: CollectionSelectionModel<MasterAreaSelectionModel>;
    baselines?: CollectionSelectionModel<ContractBaselineSelectionModel>;
    calendars?: CollectionSelectionModel<ContractCalendarSelectionModel>;
    committedTo?: CollectionSelectionModel<SalesCommitmentSelectionModel>;
    commonCallsheets?: CollectionSelectionModel<CommonCallsheetSelectionModel>;
    contactInteractions?: CollectionSelectionModel<ContactInteractionSelectionModel>;
    contractAdmin?: UserSelectionModel;
    contractCategory?: ContractCategorySelectionModel;
    contractDays?: CollectionSelectionModel<ContractDaySelectionModel>;
    contractHistories?: CollectionSelectionModel<ContractHistorySelectionModel>;
    contractMetrics?: CollectionSelectionModel<ContractMetricSelectionModel>;
    contractStatusChanges?: CollectionSelectionModel<ContractStatusChanxSelectionModel>;
    contractsLogs?: CollectionSelectionModel<ContractsLogSelectionModel>;
    dashStandardSummary?: DashStandardSummaryStatSelectionModel;
    deadlines?: CollectionSelectionModel<DeadlineSelectionModel>;
    dependentIssues?: CollectionSelectionModel<IssueSelectionModel>;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    fast?: boolean;
    files?: CollectionSelectionModel<FileSelectionModel>;
    flexFields?: CollectionSelectionModel<FlexFieldSelectionModel>;
    geoTrackings?: CollectionSelectionModel<GeoTrackingSelectionModel>;
    includeInactive?: boolean;
    inspRequireds?: CollectionSelectionModel<InspRequiredSelectionModel>;
    interestedIn?: CollectionSelectionModel<SalesInterestSelectionModel>;
    invoices?: CollectionSelectionModel<InvoiceSelectionModel>;
    issues?: CollectionSelectionModel<IssueSelectionModel>;
    jobNotReadies?: CollectionSelectionModel<JobNotReadySelectionModel>;
    land?: LandSelectionModel;
    landPricings?: CollectionSelectionModel<LandPricingSelectionModel>;
    leadQueues?: CollectionSelectionModel<LeadsQueueSelectionModel>;
    maintenanceJob?: MaintenanceJobSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    milestones?: CollectionSelectionModel<ContractMilestoneSelectionModel>;
    myHomeFeatures?: CollectionSelectionModel<MyHomeFeatureSelectionModel>;
    myHomeStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    purchaseOrders?: CollectionSelectionModel<POHeaderSelectionModel>;
    quoteResponses?: CollectionSelectionModel<QuoteResponseSelectionModel>;
    region?: RegionSelectionModel;
    requisitionHistories?: CollectionSelectionModel<RequisitionHistorySelectionModel>;
    requisitions?: CollectionSelectionModel<RequisitionSelectionModel>;
    rfqActualSummaries?: CollectionSelectionModel<RfqActualSummarySelectionModel>;
    rfqActuals?: CollectionSelectionModel<RfqActualSelectionModel>;
    salesCommitments?: CollectionSelectionModel<SalesCommitmentSelectionModel>;
    salesInterests?: CollectionSelectionModel<SalesInterestSelectionModel>;
    salesPerson?: UserSelectionModel;
    security?: SecuritySelectionModel;
    sharedCommissions?: CollectionSelectionModel<SharedCommissionSelectionModel>;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
    sourceContract?: ContractSelectionModel;
    stage?: StageSelectionModel;
    stats?: ContractStatSelectionModel;
    statusReports?: CollectionSelectionModel<StatusReportSelectionModel>;
    stopDays?: CollectionSelectionModel<ContractStopDaySelectionModel>;
    subscriptions?: CollectionSelectionModel<SubscriptionSelectionModel>;
    summary?: SummarySelectionModel;
    supervisor2?: UserSelectionModel;
    supervisor?: UserSelectionModel;
    supervisorQc?: UserSelectionModel;
    tags?: CollectionSelectionModel<TagSelectionModel>;
    tasks?: CollectionSelectionModel<TaskSelectionModel>;
    template?: TemplateSelectionModel;
    tenderVariations?: CollectionSelectionModel<TenderVariationSelectionModel>;
}
export interface ContractsLogModel {
    contractLogId?: number; // @primaryKey @required True
    description?: string; // @required False @length 150
    keyDateChange?: DateString; // @required False
    keyDateOriginal?: DateString; // @required False
    logDate?: DateString; // @required True
    reason?: string; // @required False @length 10
    user?: MetaDataUserModel; // @required True
}
export interface ContractsLogSelectionModel {
    user?: UserSelectionModel;
}
export interface ContractsOperationFlagModel {
    contractsOperationFlagId?: number; // @primaryKey @required True
    failureCount?: number; // @required True
    flag?: string; // @required False @length 20
    operationCode?: number; // @enum OperationCode @required True
    operationPerformed?: DateString; // @required True
    operationWaitUntil?: DateString; // @required True
    otherValue?: number; // @required False
}
export interface ContractStatModel {
    accDate?: DateString;
    activities7Days?: number;
    activitiesTotal?: number;
    appointments7Days?: number;
    appointmentsTotal?: number;
    approvals?: number;
    approvalsOpen?: number;
    completedDuration?: number;
    completedPoints?: number;
    contract?: ContractModel;
    depositDate?: DateString;
    docs7Days?: number;
    docsTotal?: number;
    expectedSignUp?: DateString;
    fileToConstruction?: DateString;
    inspectFailed7Days?: number;
    inspectPassed7Days?: number;
    issueTotal?: number;
    issuesClosed?: number;
    issuesOpen?: number;
    landCommitmentDate?: DateString;
    landRegistrationDate?: DateString;
    lastLeadActivityDate?: DateString;
    meetingSet?: number;
    myHomePercent?: number;
    notes7Days?: number;
    notesTotal?: number;
    practicalCompletionDate?: DateString;
    registrationDate?: DateString;
    siteStartDate?: DateString;
    taskTotal?: number;
    tasksActive?: number;
    tasksAvailable?: number;
    tasksBookedIn?: number;
    tasksCompleted7Days?: number;
    tasksCompleted?: number;
    tasksStarted?: number;
    tasksTentative?: number;
    tasksUnplanned?: number;
    totalDuration?: number;
    totalPoints?: number;
}
export interface ContractStatSelectionModel {

}
export interface ContractStatusChangeCriteriaModel {
    ageRange?: AgeRangeModel;
    changeAgeRange?: AgeRangeModel;
    includeInactive?: boolean;
    newStatus?: string[];
    oldStatus?: string[];
}
export interface ContractStatusChanxModel {
    changedBy?: MetaDataUserModel; // @required False
    contractAdmin?: MetaDataUserModel; // @required False
    dateChanged?: DateString; // @required True
    dateRequested?: DateString; // @required False
    dateReview?: DateString; // @required False
    metaData?: MetaDataModel;
    newStatus?: string; // @enum ContractStatuses? @required False
    oldStatus?: string; // @enum ContractStatuses? @required False
    reasonChanged?: string; // @required False @length 255
    reasonCode?: string; // @required False @length 10
    statusChangeId?: number; // @primaryKey @required True
}
export interface ContractStatusChanxSelectionModel {
    changedBy?: UserSelectionModel;
    contractAdmin?: UserSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ContractStickyNoteModel {

}
export interface ContractStickyNoteSelectionModel {

}
export interface ContractStopDayCriteriaModel {
    approved?: boolean;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    contracts?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    raisedBy?: UserCriteriaModel;
    stopDay?: AgeRangeModel;
}
export interface ContractStopDayModel {
    approvedBy?: MetaDataUserModel; // @required False
    comment?: string; // @required False @length 400
    contract?: ContractModel; // @required True
    contractStopDayId?: number; // @primaryKey @required True
    isApproved?: boolean; // @required False
    metaData?: MetaDataModel;
    reason?: string; // @required True @length 10
    stopDay?: DateString; // @required True
}
export interface ContractStopDaySelectionModel {
    approvedBy?: UserSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ContractTagModel {
    contract?: ContractModel; // @required True
    contractTagId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    tag?: TagModel; // @required True
}
export interface ContractTagSelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    tag?: TagSelectionModel;
}
export interface ContractTypeCriteriaModel {
    contractTypeIds?: number[];
    includeInactive?: boolean;
}
export interface ContractTypeModel {
    businessUnit?: BusinessUnitModel; // @required True
    code?: string; // @required True @length 10
    contractTypeId?: number; // @primaryKey @required True
    description?: string; // @required True @length 50
    masterContracts?: CollectionModel<MasterContractModel>; // @required True
    metaData?: MetaDataOrderModel;
}
export interface ContractTypeSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    masterContracts?: CollectionSelectionModel<MasterContractSelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface ContractUpdateStatusModel {
    dateRequest?: DateString;
    dateReview?: DateString;
    otherReason?: string;
    reasonCode?: string;
    status?: string;
}
export interface CreateUserRequestModel {
    activeDirectoryPath?: string;
    actor?: ActorModel;
    address?: AddressModel;
    apiKey?: string;
    brands?: CollectionModel<UserBrandModel>;
    businessUnit?: BusinessUnitModel;
    callupMessages?: UserCallupMessagesModel;
    contact?: ContactModel;
    contactDetails?: ContactDetailsModel;
    devices?: CollectionModel<UserDeviceModel>;
    firstName?: string;
    fullName?: string;
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    isInternal?: boolean;
    jobTitle?: string;
    lastName?: string;
    manager?: MetaDataUserModel;
    metaData?: MetaDataModel;
    myHome?: boolean;
    notificationPreferences?: CollectionModel<NotificationPreferenceModel>;
    otherNames?: string;
    password?: string;
    prefix?: string;
    profile?: string;
    profilePhoto?: FileModel;
    regions?: CollectionModel<UserRegionModel>;
    resource?: ResourceModel;
    roles?: CollectionModel<UserRoleModel>;
    salut?: string;
    savedSearches?: CollectionModel<SavedSearchModel>;
    security?: UserSecurityModel;
    signingRecipients?: CollectionModel<SigningRecipientModel>;
    suffix?: string;
    team?: CollectionModel<UserModel>;
    teamMembers?: CollectionModel<ManagersSubordinateModel>;
    timeZone?: string;
    userBusinessUnits?: CollectionModel<UserBusinessUnitModel>;
    userId?: number;
    userName?: string;
    userPreference?: UserPreferenceModel;
    userReports?: CollectionModel<UserReportModel>;
    userSettings?: CollectionModel<UserSettingModel>;
    workTimers?: CollectionModel<WorkTimerModel>;
}
export interface CurrentUserModel {
    activeDirectoryPath?: string;
    actor?: ActorModel;
    actorId?: number;
    address?: AddressModel;
    apiKey?: string;
    brands?: CollectionModel<UserBrandModel>;
    businessUnit?: BusinessUnitModel;
    callupMessages?: UserCallupMessagesModel;
    clientId?: number;
    contact?: ContactModel;
    contactDetails?: ContactDetailsModel;
    devices?: CollectionModel<UserDeviceModel>;
    firstName?: string;
    fullName?: string;
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    isInternal?: boolean;
    jobTitle?: string;
    lastName?: string;
    manager?: MetaDataUserModel;
    masterContractId?: number;
    metaData?: MetaDataModel;
    myHome?: boolean;
    notificationPreferences?: CollectionModel<NotificationPreferenceModel>;
    notifications?: NoteModel[];
    otherNames?: string;
    prefix?: string;
    profile?: string;
    profilePhoto?: FileModel;
    regions?: CollectionModel<UserRegionModel>;
    resource?: ResourceModel;
    roles?: CollectionModel<UserRoleModel>;
    salut?: string;
    savedSearches?: CollectionModel<SavedSearchModel>;
    security?: UserSecurityModel;
    signingRecipients?: CollectionModel<SigningRecipientModel>;
    suffix?: string;
    team?: CollectionModel<UserModel>;
    teamMembers?: CollectionModel<ManagersSubordinateModel>;
    timeZone?: string;
    userBusinessUnits?: CollectionModel<UserBusinessUnitModel>;
    userId?: number;
    userName?: string;
    userPreference?: UserPreferenceModel;
    userReports?: CollectionModel<UserReportModel>;
    userSettings?: CollectionModel<UserSettingModel>;
    userType?: number;
    workTimers?: CollectionModel<WorkTimerModel>;
}
export interface CurrentVersionModel {
    actualVersion?: string;
    clickHomePlus?: ClickHomePlusSettingsModel;
    isDebug?: boolean;
    isInternal?: boolean;
    oidc?: OidcSettingsModel;
    saml?: SamlSettingsModel;
}
export interface DailyPerformanceLogModel {
    activeTasks?: number; // @required True
    calledTasks?: number; // @required True
    calledToday?: number; // @required True
    client?: ClientModel; // @required False
    contract?: ContractModel; // @required True
    contractStatus?: string; // @enum ContractStatuses @required True
    dailyPerformanceId?: number; // @primaryKey @required True
    dateEstimatedComplete1?: DateString; // @required False
    dateEstimatedComplete2?: DateString; // @required False
    dateEstimatedComplete3?: DateString; // @required False
    dateEstimatedComplete4?: DateString; // @required False
    daysAhead1?: number; // @required False
    daysAhead2?: number; // @required False
    daysAhead3?: number; // @required False
    daysAhead4?: number; // @required False
    daysRemaining1?: number; // @required False
    daysRemaining2?: number; // @required False
    daysRemaining3?: number; // @required False
    daysRemaining4?: number; // @required False
    metaData?: MetaDataModel;
    stage?: StageModel; // @required False
    statDate?: DateString; // @required True
    summary?: SummaryModel; // @required False
    user1?: MetaDataUserModel; // @required False
    user2?: MetaDataUserModel; // @required False
    user?: MetaDataUserModel; // @required True
}
export interface DashboardCriteriaModel {
    age?: AgeRangeModel;
    summary?: SummaryCriteriaModel;
}
export interface DashboardDefinitionModel<T = any> {
    colourSet?: string;
    criteria?: T;
    description?: string;
    format?: string;
    grouping?: number;
    label?: string;
    layout?: string;
    name?: string;
    source?: string;
}
export interface DashboardGroupModel<T = any> {
    label?: string;
    metric?: number;
    order?: number;
    result?: T;
}
export interface DashboardRequestModel<T = any, U = any> {
    criteria?: U;
    expiry?: number;
    selection?: DashboardSelectionModel<T>;
    sorting?: SortModel[];
}
export interface DashboardResponseModel<T = any, U = any> {
    count?: number;
    groups?: DashboardGroupModel<T>[];
    metric?: number;
    results?: U[];
}
export interface DashboardSelectionModel<T = any> {
    grouping?: number;
    metric?: number;
    selection?: T;
}
export interface DashStandardSummaryStatModel {
    event?: DateString; // @required False
}
export interface DashStandardSummaryStatSelectionModel {

}
export interface DeadlineCriteriaModel {
    contact?: ContactCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    land?: LandCriteriaModel;
}
export interface DeadlineModel {
    contract?: ContractModel; // @required True
    deadline?: DateString; // @required True
    deadlineId?: number; // @primaryKey @required True
    deadlineType?: number; // @enum DeadLineType @required True
    description?: string; // @required True @length 100
    metaData?: MetaDataOrderModel;
    severity?: number; // @enum SeverityType @required True
}
export interface DeadlineSelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface DecimalValueRangeModel {
    from?: number;
    isNull?: boolean;
    to?: number;
}
export interface DefaultContractRoleCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    role?: SecurityRoleCriteriaModel;
    template?: TemplateCriteriaModel;
    user?: UserCriteriaModel;
}
export interface DefaultContractRoleModel {
    brand?: BrandModel; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    defaultContractRoleId?: number; // @primaryKey @required True
    jobType?: string; // @enum JobTypes? @required False
    metaData?: MetaDataModel;
    region?: RegionModel; // @required True
    security?: SecurityModel;
    securityRole?: SecurityRoleModel; // @required True
    template?: TemplateModel; // @required False
    user?: MetaDataUserModel; // @required True
}
export interface DefaultContractRoleSelectionModel {
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    template?: TemplateSelectionModel;
    user?: UserSelectionModel;
}
export interface DefaultOptionsModel<T = any> {
    isDefault?: boolean;
    key?: T;
    label?: string;
}
export interface DeleteTenderPriceReviewsRequestModel {
    batchId?: string;
    deleteDirty?: boolean;
    tenderPriceReviewIds?: number[];
}
export interface DepartmentModel {
    businessUnit?: BusinessUnitModel; // @required True
    departmentId?: number; // @primaryKey @required True
    departmentName?: string; // @required True @length 50
    managers?: CollectionModel<DeptManagerModel>; // @required True
    metaData?: MetaDataModel;
    resourceCodes?: CollectionModel<ResourceCodeModel>; // @required True
}
export interface DepartmentSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    managers?: CollectionSelectionModel<DeptManagerSelectionModel>;
    metaData?: MetaDataSelectionModel;
    resourceCodes?: CollectionSelectionModel<ResourceCodeSelectionModel>;
}
export interface DependentOptionsModel<T = any, U = any> {
    associatedKeys?: U[];
    key?: T;
    label?: string;
}
export interface DeptManagerModel {
    department?: DepartmentModel; // @required True
    deptManagersId?: number; // @primaryKey @required True
    metaData?: MetaDataBaseModel;
    user?: MetaDataUserModel; // @required True
}
export interface DeptManagerSelectionModel {
    department?: DepartmentSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface DevelopmentLocationCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    company?: ResourceCriteriaModel;
    constructionRegion?: RegionCriteriaModel;
    councilLocation?: DevelopmentLocationCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    maintenanceSupervisor?: UserCriteriaModel;
    name?: string;
    salesRegion?: RegionCriteriaModel;
    suburbs?: string[];
    supervisor?: UserCriteriaModel;
    types?: string[];
}
export interface DevelopmentLocationModel {
    boundaryPolygon?: string; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    company?: ResourceModel; // @required False
    conditions?: string; // @required False
    constructionRegion?: RegionModel; // @required False
    council?: DevelopmentLocationModel; // @required False
    description?: string; // @required False @length 400
    devLocFiles?: CollectionModel<DevLocFileModel>; // @required True
    developmentLocationId?: number; // @primaryKey @required True
    developmentLocationName?: string; // @required True @length 100
    estateStages?: CollectionModel<EstateStageModel>; // @required True
    latitude?: string; // @required False @length 50
    longitude?: string; // @required False @length 50
    metaData?: MetaDataModel;
    salesRegion?: RegionModel; // @required False
    savedSearchGroup?: SavedSearchGroupModel; // @required False
    security?: SecurityModel;
    settings?: CollectionModel<DevLocSettingModel>; // @required True
    suburbs?: CollectionModel<SuburbModel>; // @required True
    templateSelectionRules1?: CollectionModel<TemplateSelxnRuleModel>; // @required True
    templateSelectionRules?: CollectionModel<TemplateSelxnRuleModel>; // @required True
    tenderPackageDevLinks?: CollectionModel<TenderPackageDevLinkModel>; // @required True
    type?: string; // @enum DevelopmentLocationTypes @required True
    uRL?: string; // @required False @length 255
}
export interface DevelopmentLocationSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    company?: ResourceSelectionModel;
    constructionRegion?: RegionSelectionModel;
    council?: DevelopmentLocationSelectionModel;
    devLocFiles?: CollectionSelectionModel<DevLocFileSelectionModel>;
    estateStages?: CollectionSelectionModel<EstateStageSelectionModel>;
    metaData?: MetaDataSelectionModel;
    salesRegion?: RegionSelectionModel;
    savedSearchGroup?: SavedSearchGroupSelectionModel;
    settings?: CollectionSelectionModel<DevLocSettingSelectionModel>;
    suburbs?: CollectionSelectionModel<SuburbSelectionModel>;
    templateSelectionRules1?: CollectionSelectionModel<TemplateSelxnRuleSelectionModel>;
    templateSelectionRules?: CollectionSelectionModel<TemplateSelxnRuleSelectionModel>;
    tenderPackageDevLinks?: CollectionSelectionModel<TenderPackageDevLinkSelectionModel>;
}
export interface DevLocFileModel {
    devLocFileId?: number; // @primaryKey @required True
    developmentLocation?: DevelopmentLocationModel; // @required True
    estateStage?: EstateStageModel; // @required False
    file?: FileModel; // @required True
    metaData?: MetaDataModel;
}
export interface DevLocFileSelectionModel {
    developmentLocation?: DevelopmentLocationSelectionModel;
    estateStage?: EstateStageSelectionModel;
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface DevLocSettingModel {
    devLocCode?: string; // @required True @length 10
    devLocSettingId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    textValue1?: string; // @required False @length 400
    textValue2?: string; // @required False @length 400
    value1?: number; // @required False
    value2?: number; // @required False
}
export interface DevLocSettingSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface DisplayCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    displayLocations?: ReferralSourceCriteriaModel;
    displayName?: string;
    houseTypes?: HouseTypeCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    salesPersons?: UserCriteriaModel;
}
export interface DisplayModel {
    businessUnit?: BusinessUnitModel; // @required True
    closingDate?: DateString; // @required False
    contracts?: CollectionModel<ContractModel>; // @required True
    description?: string; // @required False
    displayHost?: MetaDataUserModel; // @required False
    displayId?: number; // @primaryKey @required True
    displayName?: string; // @required True @length 255
    displayUrl?: string; // @required False @length 255
    facade?: TenderPackageModel; // @required False
    features?: string; // @required False
    houseType?: HouseTypeModel; // @required True
    landSize?: string; // @required False @length 50
    latitude?: string; // @required False @length 50
    longitude?: string; // @required False @length 50
    mapDepth?: string; // @required False @length 50
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    openTimes?: string; // @required False @length 255
    openingDate?: DateString; // @required False
    referralSource?: ReferralSourceModel; // @required False
    salesPerson?: MetaDataUserModel; // @required False
    security?: SecurityModel;
    sellingPrice?: number; // @required False
    tender?: TenderModel; // @required False
}
export interface DisplaySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contracts?: CollectionSelectionModel<ContractSelectionModel>;
    displayHost?: UserSelectionModel;
    facade?: TenderPackageSelectionModel;
    houseType?: HouseTypeSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    referralSource?: ReferralSourceSelectionModel;
    salesPerson?: UserSelectionModel;
    tender?: TenderSelectionModel;
}
export interface DocCategoryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    categoryGroups?: number[];
    categoryName?: string;
    clientShares?: number[];
    constructionShares?: number[];
    ids?: number[];
    includeInactive?: boolean;
    myHomeDocCategories?: number[];
}
export interface DocCategoryGroupModel {
    docCategories?: CollectionModel<DocCategoryModel>; // @required True
    docCategoryGroupId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    name?: string; // @required True @length 50
}
export interface DocCategoryGroupSelectionModel {
    docCategories?: CollectionSelectionModel<DocCategorySelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface DocCategoryModel {
    automatedEmails1?: CollectionModel<AutomatedEmailModel>; // @required True
    automatedEmails2?: CollectionModel<AutomatedEmailModel>; // @required True
    automatedEmails3?: CollectionModel<AutomatedEmailModel>; // @required True
    automatedEmails?: CollectionModel<AutomatedEmailModel>; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    callup?: boolean; // @required True
    categoryName?: string; // @required True @length 50
    clientShare?: number; // @enum DocClientShare? @required False
    constructionShare?: number; // @enum DocConstructionShare? @required False
    docCategoryGroup?: DocCategoryGroupModel; // @required True
    documentCategoryId?: number; // @primaryKey @required True
    files?: CollectionModel<FileModel>; // @required True
    isFieldDevice?: boolean;
    isJobFile?: boolean;
    isMyHome?: boolean;
    jobFileDocType?: number; // @required False
    maxFastPreview?: number; // @enum FileType? @required False
    metaData?: MetaDataModel;
    myHome?: boolean; // @required True
    myHomeCategory?: number; // @enum MyHomeDocCategory? @required False
    resourceAccess?: boolean; // @required True
    security?: SecurityModel;
    showAsImage?: boolean; // @required True
    signingDocumentRules1?: CollectionModel<SigningDocumentRuleModel>; // @required True
    signingDocuments?: CollectionModel<SigningDocumentModel>; // @required True
    signingRules?: CollectionModel<SigningRuleModel>; // @required True
    signings?: CollectionModel<SigningModel>; // @required True
}
export interface DocCategorySelectionModel {
    automatedEmails1?: CollectionSelectionModel<AutomatedEmailSelectionModel>;
    automatedEmails2?: CollectionSelectionModel<AutomatedEmailSelectionModel>;
    automatedEmails3?: CollectionSelectionModel<AutomatedEmailSelectionModel>;
    automatedEmails?: CollectionSelectionModel<AutomatedEmailSelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    docCategoryGroup?: DocCategoryGroupSelectionModel;
    files?: CollectionSelectionModel<FileSelectionModel>;
    metaData?: MetaDataSelectionModel;
    signingDocumentRules1?: CollectionSelectionModel<SigningDocumentRuleSelectionModel>;
    signingDocuments?: CollectionSelectionModel<SigningDocumentSelectionModel>;
    signingRules?: CollectionSelectionModel<SigningRuleSelectionModel>;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
}
export interface DocResourceLinkModel {
    docResourceLinkId?: number; // @primaryKey @required True
    file?: FileModel; // @required True
    metaData?: MetaDataModel;
    resource?: ResourceModel; // @required True
}
export interface DocResourceLinkSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
}
export interface DocTaskLinkModel {
    docTaskLinkId?: number; // @primaryKey @required True
    file?: FileModel; // @required True
    metaData?: MetaDataModel;
    task?: TaskModel; // @required True
}
export interface DocTaskLinkSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    task?: TaskSelectionModel;
}
export interface DocTemplateMatchModel {
    contractLevel?: boolean; // @required True
    docCategory?: DocCategoryModel; // @required False
    docFileMatch?: string; // @required True @length 400
    docTemplateMatchId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    required?: boolean; // @required True
    template?: TemplateModel; // @required True
    templateItem?: TemplateItemModel; // @required True
}
export interface DocTemplateMatchSelectionModel {
    docCategory?: DocCategorySelectionModel;
    metaData?: MetaDataSelectionModel;
    template?: TemplateSelectionModel;
    templateItem?: TemplateItemSelectionModel;
}
export interface DocumentCriteriaModel {
    addedBy?: UserCriteriaModel;
    ageRange?: AgeRangeModel;
    categories?: number[];
    contract?: ContractCriteriaModel;
    fullPath?: string;
    ids?: number[];
    includeInactive?: boolean;
    quickSearch?: string;
    tasks?: TaskCriteriaModel;
    visibleClient?: boolean;
    visibleConstruction?: boolean;
    visibleJobFile?: boolean;
}
export interface DocumentModel {
    availableFrom?: DateString; // @required True
    availableTo?: DateString; // @required True
    categoryActiveDoc?: boolean; // @required True
    contract?: ContractModel; // @required False
    description?: string; // @required False @length 400
    documentCategory?: DocCategoryModel;
    documentId?: number; // @primaryKey @required True
    documentName?: string; // @required False @length 50
    documentViews?: CollectionModel<DocumentViewModel>;
    documentsTags?: CollectionModel<DocumentsTagModel>;
    extension?: string; // @required True @length 10
    externalDocuments?: CollectionModel<DocumentModel>;
    externalLinks?: CollectionModel<DocumentUrlLinkModel>;
    fullPath?: string; // @required False @length 2000
    hasThumbnail?: boolean; // @required True
    hidden?: boolean; // @required True
    isMyHomeShareOverride?: boolean; // @required True
    isResourceShareOverride?: boolean; // @required True
    jobFileDocumentId?: number; // @required False
    keyWords?: string; // @required False @length 400
    loadedDate?: DateString; // @required True
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    myHomeTemplates?: CollectionModel<MyHomeTemplateModel>;
    productLibraryDocumentId?: number; // @required False
    referenceNumber?: string; // @required False @length 20
    security?: DocumentSecurityModel;
    source?: number; // @enum Source @required True
    sourceContract?: ContractModel;
    storageType?: number; // @enum DocumentStorageType @required True
    submittedBy?: MetaDataUserModel; // @required True
    summaries?: CollectionModel<SummaryModel>;
    taskLinks?: CollectionModel<DocTaskLinkModel>;
    thumbnailUrl?: string;
    title?: string; // @required True @length 100
    url?: string;
}
export interface DocumentSecurityModel {
    canDelete?: boolean;
    canEdit?: boolean;
    canShareMyHome?: boolean;
    canShareSupplier?: boolean;
    canView?: boolean;
}
export interface DocumentSelectionModel {
    contract?: ContractSelectionModel;
    documentCategory?: DocCategorySelectionModel;
    documentViews?: CollectionSelectionModel<DocumentViewSelectionModel>;
    documentsTags?: CollectionSelectionModel<DocumentsTagSelectionModel>;
    externalDocuments?: CollectionSelectionModel<DocumentSelectionModel>;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    myHomeTemplates?: CollectionSelectionModel<MyHomeTemplateSelectionModel>;
    security?: SecuritySelectionModel;
    submittedBy?: UserSelectionModel;
    summaries?: CollectionSelectionModel<SummarySelectionModel>;
    taskLinks?: CollectionSelectionModel<DocTaskLinkSelectionModel>;
    thumbnailUrl?: boolean;
    url?: boolean;
}
export interface DocumentsTagModel {
    documentsTagId?: number; // @primaryKey @required True
    file?: FileModel; // @required True
    metaData?: MetaDataModel;
    tag?: TagModel; // @required True
}
export interface DocumentsTagSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    tag?: TagSelectionModel;
}
export interface DocumentUrlLinkModel {
    documentUrlLinkId?: number; // @primaryKey @required True
    notes?: string; // @required False @length 500
    stdCreatedOn?: DateString; // @required True
    stdLastModifiedOn?: DateString; // @required True
    type?: number; // @enum FileType @required True
    url?: string; // @required False @length 2000
}
export interface DocumentViewModel {
    actor?: ActorModel; // @required True
    documentViewId?: number; // @primaryKey @required True
    file?: FileModel; // @required True
    fileVersion?: FileVersionModel; // @required True
    timestamp?: DateString; // @required True
}
export interface DocumentViewSelectionModel {
    actor?: ActorSelectionModel;
    file?: FileSelectionModel;
    fileVersion?: FileVersionSelectionModel;
}
export interface DuplicateClientModel {
    businessUnit?: BusinessUnitModel;
    clientId?: number;
    clientTitle?: string;
    clientType?: number;
    contact1?: ContactModel;
    contact2?: ContactModel;
    contactDetails?: ContactDetailsModel;
    contactInteractions?: CollectionModel<ContactInteractionModel>;
    contacts?: CollectionModel<ClientContactModel>;
    emailAddressMatchScore?: number;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    hasStickyNote?: boolean;
    homeAddress?: InternationalAddressModel;
    homePhoneMatchScore?: number;
    isMatchingEmail?: boolean;
    isMatchingHomePhone?: boolean;
    isMatchingMobilePhone?: boolean;
    isMatchingName?: boolean;
    isMatchingWorkPhone?: boolean;
    letterCasual?: string;
    letterEdit?: number;
    letterSalutation?: string;
    letterTitle?: string;
    mPClientTitleKey1?: string;
    mPClientTitleKey2?: string;
    mPSuburbKey1?: string;
    mPSuburbKey2?: string;
    masterContracts?: CollectionModel<MasterContractModel>;
    metaData?: MetaDataModel;
    mobilePhoneMatchScore?: number;
    myHomePassword?: string;
    myHomeUsername?: string;
    nameMatchScore?: number;
    notes?: CollectionModel<NoteModel>;
    otherContracts?: CollectionModel<MasterContractModel>;
    profilePhoto?: FileModel;
    referralTraffics?: CollectionModel<ReferralTrafficModel>;
    region?: RegionModel;
    relatedContracts?: CollectionModel<ContractClientLinkModel>;
    security?: ClientSecurityModel;
    signingsEnabled?: boolean;
    specialContact?: boolean;
    tags?: CollectionModel<TagModel>;
    taxNumber?: string;
    userDefined10?: string;
    userDefined1?: string;
    userDefined2?: string;
    userDefined3?: string;
    userDefined4?: string;
    userDefined5?: string;
    userDefined6?: string;
    userDefined7?: string;
    userDefined8?: string;
    userDefined9?: string;
    workPhoneMatchScore?: number;
}
export interface EntityEventModel {
    codeValue1?: string; // @required False @length 10
    codeValue2?: string; // @required False @length 10
    dateValue1?: DateString; // @required False
    dateValue2?: DateString; // @required False
    entityEventId?: number; // @primaryKey @required True
    eventType?: number; // @enum EventType @required True
    masterContract?: MasterContractModel; // @required False
    notes?: string; // @required False
    otherId1?: number; // @required False
    otherId2?: number; // @required False
    primaryId?: number; // @required False
    runAfter?: DateString; // @required True
    sourceContact?: ContactModel; // @required False
    sourceUser?: MetaDataUserModel; // @required False
    textValue1?: string; // @required False @length 400
    textValue2?: string; // @required False @length 400
    timestamp?: DateString; // @required True
}
export interface EntityEventSelectionModel {
    masterContract?: MasterContractSelectionModel;
    sourceContact?: ContactSelectionModel;
    sourceUser?: UserSelectionModel;
}
export interface ErrorModel {
    message?: string;
}
export interface ErrorResponseModel {
    message?: string;
}
export interface EstateStageCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    developmentLocation?: DevelopmentLocationCriteriaModel;
    houseRestrictionSystem?: string;
    houseRestrictionsDisplay?: string;
    ids?: number[];
    includeInactive?: boolean;
    lands?: LandCriteriaModel[];
    registrationEstimate?: AgeRangeModel;
    stageName?: string;
    stageStatuses?: number[];
}
export interface EstateStageModel {
    devLocFiles?: CollectionModel<DevLocFileModel>; // @required True
    developmentLocation?: DevelopmentLocationModel; // @required True
    estateStageId?: number; // @primaryKey @required True
    houseRestrictionSystem?: string; // @required False
    houseRestrictionsDisplay?: string; // @required False
    lands?: CollectionModel<LandModel>; // @required True
    metaData?: MetaDataModel;
    registrationEstimate?: DateString; // @required False
    security?: SecurityModel;
    stageName?: string; // @required True @length 50
    stageStatus?: number; // @enum StageStatus @required True
}
export interface EstateStageSelectionModel {
    devLocFiles?: CollectionSelectionModel<DevLocFileSelectionModel>;
    developmentLocation?: DevelopmentLocationSelectionModel;
    lands?: CollectionSelectionModel<LandSelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface EventQueueProcessRequestModel {
    count?: number;
}
export interface ExpiryDetailsModel {
    days?: number;
    hours?: number;
    minutes?: number;
    months?: number;
    seconds?: number;
    weeks?: number;
    years?: number;
}
export interface ExportQueueModel {
    data?: string; // @required True
    exportQueueId?: number; // @primaryKey @required True
    exportType?: number; // @required True
    metaData?: MetaDataModel;
    processed?: boolean; // @required True
}
export interface ExternalLinkModel {
    externalLinkId?: number; // @primaryKey @required True
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required True
    key?: string; // @required True @length 16
    label?: string; // @required True @length 50
    metaData?: MetaDataBaseModel;
    uRL?: string; // @required True @length 400
}
export interface ExternalLinkSelectionModel {
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ExternalReferenceCriteriaModel {
    keys?: string[];
    values?: string[];
}
export interface ExternalReferenceGroupModel {
    externalLinks?: CollectionModel<ExternalLinkModel>; // @required True
    externalReferenceGroupId?: number; // @primaryKey @required True
    externalReferences?: CollectionModel<ExternalReferenceModel>; // @required True
    metaData?: MetaDataBaseModel;
}
export interface ExternalReferenceGroupSelectionModel {
    externalLinks?: CollectionSelectionModel<ExternalLinkSelectionModel>;
    externalReferences?: CollectionSelectionModel<ExternalReferenceSelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface ExternalReferenceModel {
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required True
    externalReferenceId?: number; // @primaryKey @required True
    key?: string; // @required True @length 16
    metaData?: MetaDataBaseModel;
    value?: string; // @required True @length 64
}
export interface ExternalReferenceSelectionModel {
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface FAQCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
}
export interface FAQModel {
    businessUnit?: BusinessUnitModel; // @required True
    fAQId?: number; // @primaryKey @required True
    faqDescription?: string; // @required True @length 100
    faqDetails?: string; // @required True
    metaData?: MetaDataModel;
    resourceCode?: ResourceCodeModel; // @required True
}
export interface FAQSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
}
export interface FastTenderPackageSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface FastTenderPriceSummarySelectionModel {

}
export interface FileConfigModel {
    businessUnit?: BusinessUnitModel; // @required True
    docCategory?: DocCategoryModel; // @required False
    docStorageType?: number; // @enum DocumentStorageType @required True
    extension?: string; // @required False @length 20
    fileConfigId?: number; // @primaryKey @required True
    isClientShare?: boolean; // @required False
    isGeneratedByReport?: boolean; // @required False
    jobHasTender?: boolean; // @required False
    jobType?: string; // @enum JobTypes? @required False
    keywordMatching?: string; // @required False @length 1000
    metaData?: MetaDataModel;
    onContract?: boolean; // @required True
    onInspection?: boolean; // @required False
    onNote?: boolean; // @required False
    onProduct?: boolean; // @required False
    onPurchaseOrder?: boolean; // @required False
    onResource?: boolean; // @required False
    onTask?: boolean; // @required False
    onTender?: boolean; // @required False
    onVariation?: boolean; // @required False
    pathPattern?: string; // @required False @length 500
    security?: SecurityModel;
    storageSetting?: StorageSettingModel; // @required False
    storageStrategy?: number; // @enum DocumentDuplicateStrategy @required True
}
export interface FileConfigSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    docCategory?: DocCategorySelectionModel;
    metaData?: MetaDataSelectionModel;
    storageSetting?: StorageSettingSelectionModel;
}
export interface FileContentModel {
    fileContents?: number[];
    fileName?: string;
    mimeType?: string;
}
export interface FileCriteriaModel {
    addedBy?: UserCriteriaModel;
    ageRange?: AgeRangeModel;
    batchNumber?: string;
    businessUnit?: BusinessUnitCriteriaModel;
    categories?: number[];
    contract?: ContractCriteriaModel;
    fullPath?: string;
    globalSearch?: boolean;
    ids?: number[];
    includeInactive?: boolean;
    masterContract?: MasterContractCriteriaModel;
    productSearch?: string;
    quickSearch?: string;
    tasks?: TaskCriteriaModel;
    visibleClient?: boolean;
    visibleConstruction?: boolean;
    visibleJobFile?: boolean;
}
export interface FileKeywordRequestModel {
    fileId?: number;
    houseTypeId?: number;
    optionId?: number;
    packageId?: number;
}
export interface FileModel {
    availableFrom?: DateString; // @required True
    availableTo?: DateString; // @required False
    batchNumber?: string; // @required False @length 50
    businessUnit?: BusinessUnitModel; // @required True
    contract?: ContractModel; // @required False
    description?: string; // @required False @length 400
    directLink?: string;
    docRefNo?: string; // @required False @length 20
    documentCategory?: DocCategoryModel; // @required True
    documentViews?: CollectionModel<DocumentViewModel>; // @required True
    documentsTags?: CollectionModel<DocumentsTagModel>; // @required True
    fileConfig?: FileConfigModel; // @required False
    fileId?: number; // @primaryKey @required True
    fileURLs?: CollectionModel<FileURLModel>; // @required True
    hidden?: boolean; // @required True
    jobFileDocumentId?: number; // @required False
    keyWords?: string; // @required False @length 400
    largeUrl?: string;
    masterContract?: MasterContractModel; // @required False
    mediumUrl?: string;
    metaData?: MetaDataModel;
    notes?: CollectionModel<NoteModel>;
    productLibraryDocumentId?: number; // @required False
    relatedProducts?: CollectionModel<FileProductLinkModel>; // @required True
    security?: DocumentSecurityModel;
    smallUrl?: string;
    source?: number; // @enum Source @required True
    sourceContract?: ContractModel;
    taskLinks?: CollectionModel<DocTaskLinkModel>; // @required True
    thumbnailUrl?: string;
    title?: string; // @required True @length 100
    url?: string;
    versions?: CollectionModel<FileVersionModel>; // @required True
}
export interface FileProductLinkModel {
    file?: FileModel; // @required True
    productType?: number; // @enum RelatedFileType @required True
    relatedProduct?: string; // @required False @length 818
}
export interface FileProductLinkSelectionModel {
    file?: FileSelectionModel;
}
export interface FileSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contract?: ContractSelectionModel;
    directLink?: boolean;
    documentCategory?: DocCategorySelectionModel;
    documentViews?: CollectionSelectionModel<DocumentViewSelectionModel>;
    documentsTags?: CollectionSelectionModel<DocumentsTagSelectionModel>;
    fileConfig?: FileConfigSelectionModel;
    fileURLs?: CollectionSelectionModel<FileURLSelectionModel>;
    largeUrl?: boolean;
    masterContract?: MasterContractSelectionModel;
    mediumUrl?: boolean;
    metaData?: MetaDataSelectionModel;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    relatedProducts?: CollectionSelectionModel<FileProductLinkSelectionModel>;
    security?: SecuritySelectionModel;
    smallUrl?: boolean;
    taskLinks?: CollectionSelectionModel<DocTaskLinkSelectionModel>;
    thumbnailUrl?: boolean;
    url?: boolean;
    versions?: CollectionSelectionModel<FileVersionSelectionModel>;
}
export interface FileURLModel {
    documentExt?: string; // @required True @length 10
    documentName?: string; // @required False @length 50
    file?: FileModel; // @required True
    fileVersion?: FileVersionModel; // @required True
    fullPath?: string; // @required False @length 2000
    storageType?: number; // @enum DocumentStorageType @required True
    type?: number; // @enum FileType @required True
    url?: string; // @required False @length 400
}
export interface FileURLSelectionModel {
    file?: FileSelectionModel;
    fileVersion?: FileVersionSelectionModel;
}
export interface FileVersionCriteriaModel {
    externalId?: string;
    fullPath?: string;
    ids?: number[];
    includeInactive?: boolean;
    storageType?: number;
}
export interface FileVersionModel {
    contentModified?: DateString; // @required True
    custom?: string; // @required False @length 20
    documentExt?: string; // @required True @length 10
    documentName?: string; // @required False @length 50
    documentViews?: CollectionModel<DocumentViewModel>; // @required True
    externalId?: string; // @required False @length 50
    file?: FileModel; // @required True
    fileVersionId?: number; // @primaryKey @required True
    fullPath?: string; // @required False @length 2000
    height?: number; // @required False
    jobFileDocumentId?: number; // @required False
    jobFileOverride?: boolean; // @required True
    metaData?: MetaDataBaseModel;
    myHomeOverride?: boolean; // @required True
    notes?: string; // @required False @length 500
    size?: number; // @required False
    storageType?: number; // @enum DocumentStorageType @required True
    type?: number; // @enum FileType @required True
    url?: string;
    versionType?: number; // @enum DocumentVersionType @required True
    width?: number; // @required False
}
export interface FileVersionSelectionModel {
    documentViews?: CollectionSelectionModel<DocumentViewSelectionModel>;
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    url?: boolean;
}
export interface FlagModel<T = any> {
    item?: T;
    true?: boolean;
}
export interface FlexFieldCriteriaModel {
    flexFieldDefinition?: BaseActiveCriteriaModel;
    ids?: number[];
    value?: string;
}
export interface FlexFieldDefinitionCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    businessUnits?: BusinessUnitCriteriaModel;
    flexFieldTypes?: string[];
    includeInactive?: boolean;
    quickSearch?: string;
}
export interface FlexFieldDefinitionModel {
    businessUnit?: BusinessUnitModel; // @required True
    caption?: string; // @required True @length 100
    data?: string; // @enum FlexFieldDataTypes @required True
    dataValues?: string; // @required False
    fieldSecurity?: string; // @enum FlexFieldSecurity @required True
    flexFieldDefinitionId?: number; // @primaryKey @required True
    flexFieldDefinitionSecurity?: SecurityModel;
    flexFieldGroup?: FlexFieldGroupModel; // @required False
    flexFieldLinks?: CollectionModel<FlexFieldLinkModel>; // @required True
    internal?: boolean; // @required True
    mandatory?: boolean; // @required True
    metaData?: MetaDataModel;
    myHomeEditable?: boolean; // @required True
    myHomeVisible?: boolean; // @required True
    replication?: string; // @enum FlexFieldReplication @required True
    type?: string; // @enum FlexFieldTypes @required True
    values?: KeyLabelPairModel[];
}
export interface FlexFieldDefinitionSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    flexFieldGroup?: FlexFieldGroupSelectionModel;
    flexFieldLinks?: CollectionSelectionModel<FlexFieldLinkSelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface FlexFieldGroupModel {
    businessUnit?: BusinessUnitModel; // @required True
    fFGroupName?: string; // @required True @length 50
    flexFieldGroupId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
}
export interface FlexFieldGroupSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface FlexFieldLinkModel {
    definition?: FlexFieldDefinitionModel; // @required True
    flexFieldLinkId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    template?: TemplateModel; // @required True
    templateItem?: TemplateItemModel; // @required False
}
export interface FlexFieldLinkSelectionModel {
    definition?: FlexFieldDefinitionSelectionModel;
    metaData?: MetaDataSelectionModel;
    template?: TemplateSelectionModel;
    templateItem?: TemplateItemSelectionModel;
}
export interface FlexFieldModel {
    businessUnit?: BusinessUnitModel;
    caption?: string;
    data?: string;
    dataValues?: string;
    dateValue?: DateString;
    decValue?: number;
    definitionMetaData?: MetaDataModel;
    fieldSecurity?: string;
    file?: FileModel;
    flexFieldDefinitionId?: number;
    flexFieldDefinitionSecurity?: SecurityModel;
    flexFieldGroup?: FlexFieldGroupModel;
    flexFieldId?: number;
    flexFieldLinks?: CollectionModel<FlexFieldLinkModel>;
    flexFieldValue?: string;
    internal?: boolean;
    mandatory?: boolean;
    metaData?: MetaDataModel;
    myHomeEditable?: boolean;
    myHomeVisible?: boolean;
    note?: NoteModel;
    replication?: string;
    security?: SecurityModel;
    textValue?: string;
    type?: string;
    values?: KeyLabelPairModel[];
}
export interface FlexFieldSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    definitionMetaData?: MetaDataSelectionModel;
    flexFieldGroup?: FlexFieldGroupSelectionModel;
    flexFieldLinks?: CollectionSelectionModel<FlexFieldLinkSelectionModel>;
    metaData?: MetaDataSelectionModel;
    values?: boolean;
}
export interface FlexFieldValueModel {
    contract?: ContractModel; // @required True
    dateValue?: DateString; // @required False
    decValue?: number; // @required False
    definition?: FlexFieldDefinitionModel; // @required True
    flexFieldValueId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    task?: TaskModel; // @required False
    textValue?: string; // @required False @length 100
}
export interface FlexFieldValueSelectionModel {
    contract?: ContractSelectionModel;
    definition?: FlexFieldDefinitionSelectionModel;
    metaData?: MetaDataSelectionModel;
    task?: TaskSelectionModel;
}
export interface GenerateTenderOptionPriceReviewsRequestModel {
    batchId?: string;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    createMissingPriceReviews?: boolean;
    currentAt?: DateString;
    effectiveDate?: AgeRangeModel;
    importFromExistingPrices?: boolean;
    includeInactive?: boolean;
    option?: TenderOptionCriteriaModel;
    priceLevel?: TenderPriceLevelCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    validity?: ProductValidityCriteriaModel;
}
export interface GenerateTenderPackagePriceReviewsRequestModel {
    batchId?: string;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    createMissingPriceReviews?: boolean;
    currentAt?: DateString;
    effectiveDate?: AgeRangeModel;
    importFromExistingPrices?: boolean;
    includeInactive?: boolean;
    package?: TenderPackageCriteriaModel;
    priceLevel?: TenderPriceLevelCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    tenderPackageHouseLink?: TenderPackageHouseLinkCriteriaModel;
    validity?: ProductValidityCriteriaModel;
}
export interface GenerateTenderPriceReviewsResponseModel {
    backEndJobId?: number;
    batchId?: string;
    count?: number;
}
export interface GenericCriteriaModel {
    approvalQueue?: ApprovalQueueCriteriaModel;
    businessUnit?: BusinessUnitCriteriaModel;
    client?: ClientCriteriaModel;
    contract?: ContractCriteriaModel;
    houseListing?: HouseListingCriteriaModel;
    houseType?: HouseTypeCriteriaModel;
    inspection?: InspectionCriteriaModel;
    issue?: IssueCriteriaModel;
    masterContract?: MasterContractCriteriaModel;
    note?: NoteCriteriaModel;
    resource?: ResourceCriteriaModel;
    task?: TaskCriteriaModel;
    template?: TemplateCriteriaModel;
    tender?: TenderCriteriaModel;
    user?: UserCriteriaModel;
}
export interface GeoLocationModel {
    latitude?: string;
    longitude?: string;
}
export interface GeoTrackingModel {
    geoTrackingId?: number; // @primaryKey @required True
    latitude?: string; // @required True @length 50
    longitude?: string; // @required True @length 50
    operationCode?: number; // @enum OperationCode @required True
    recorded?: DateString; // @required False
    type?: number; // @enum GeoTrackerType @required True
    user?: MetaDataUserModel; // @required True
}
export interface GeoTrackingSelectionModel {
    user?: UserSelectionModel;
}
export interface GrovellerBatchUpdateModel {
    batch?: GrovellerFileUpdateModel[];
    job?: GrovellerJobModel;
    matches?: number;
    scannedFiles?: number;
    status?: number;
    statusMessage?: string;
}
export interface GrovellerConfigurationModel {
    credentials?: KeyLabelPairModel;
    domain?: string;
    extensions?: string[];
    filters?: CollectionModel<GrovellerFilterModel>;
    grovellerId?: number;
    interval?: number;
    monitoringEnabled?: boolean;
    name?: string;
    paths?: string[];
    storageType?: number;
    templateMatches?: CollectionModel<DocTemplateMatchModel>;
}
export interface GrovellerConfigurationRequestModel {
    grovellerId?: number;
    name?: string;
}
export interface GrovellerCriteriaModel {
    ids?: number[];
    includeInactive?: boolean;
    name?: string;
    subscription?: string;
}
export interface GrovellerFileUpdateModel {
    // parameters?: Dictionary<string, string>;
    contentModified?: DateString;
    docCategory?: number;
    externalId?: string;
    matchingJobTypes?: string[];
    newPath?: string;
    path?: string;
    size?: number;
    storageType?: number;
    templateMatches?: CollectionModel<DocTemplateMatchModel>;
    updateType?: number;
}
export interface GrovellerFilterModel {
    documentCategory?: DocCategoryModel;
    jobTypes?: string[];
    name?: string;
    order?: number;
    pattern?: string;
}
export interface GrovellerJobModel {
    event?: number; // @enum GrovellerEvent @required True
    groveller?: GrovellerModel; // @required True
    grovellerJobId?: number; // @primaryKey @required True
    lastFile?: string; // @required False @length 400
    matches?: number; // @required True
    metaData?: MetaDataBaseModel;
    scanPath?: string; // @required False @length 400
    scannedFiles?: number; // @required True
    security?: SecurityModel;
    sent?: DateString; // @required False
    status?: number; // @enum GrovellerStatus @required True
    statusMessage?: string; // @required False @length 400
}
export interface GrovellerJobSelectionModel {
    groveller?: GrovellerSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface GrovellerModel {
    description?: string; // @required False @length 255
    externalToken?: string; // @required False @length 255
    grovellerId?: number; // @primaryKey @required True
    grovellerJobs?: CollectionModel<GrovellerJobModel>; // @required True
    interval?: number; // @required False
    lastHeartbeat?: DateString; // @required False
    metaData?: MetaDataBaseModel;
    monitorPath?: string; // @required False @length 400
    name?: string; // @required False @length 255
    security?: SecurityModel;
    storageSetting?: StorageSettingModel; // @required False
    storageType?: number; // @enum DocumentStorageType @required True
    subscription?: string; // @required False @length 255
    subscriptionExpiry?: DateString; // @required False
}
export interface GrovellerSelectionModel {
    grovellerJobs?: CollectionSelectionModel<GrovellerJobSelectionModel>;
    metaData?: MetaDataSelectionModel;
    storageSetting?: StorageSettingSelectionModel;
}
export interface HardFileTrackingModel {
    action?: string; // @required True @length 50
    hardFileTitle?: string; // @required True @length 200
    hardFileTrackingId?: number; // @primaryKey @required True
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataModel;
    otherLocation?: string; // @required False @length 50
    user?: MetaDataUserModel; // @required False
}
export interface HardFileTrackingSelectionModel {
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface HouseAreaCriteriaModel {
    includeInactive?: boolean;
    masterArea?: MasterAreaCriteriaModel;
}
export interface HouseAreaModel {
    houseAreasId?: number; // @primaryKey @required True
    masterArea?: MasterAreaModel; // @required True
    metaData?: MetaDataModel;
    valueArea?: number; // @required False
    valueLength?: number; // @required False
    valueWidth?: number; // @required False
}
export interface HouseAreaSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface HouseDimensionModel {
    formula?: string; // @required False @length 400
    houseDimensionId?: number; // @primaryKey @required True
    houseType?: HouseTypeModel; // @required True
    lastCalcUpdate?: DateString; // @required True
    masterArea?: MasterAreaModel; // @required True
    masterDimension?: MasterDimensionModel; // @required True
    metaData?: MetaDataBaseModel;
    quantity?: number; // @required True
}
export interface HouseDimensionSelectionModel {
    houseType?: HouseTypeSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    masterDimension?: MasterDimensionSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface HouseListingCriteriaModel {
    bathroomCount?: number[];
    bedCount?: number[];
    brand?: BrandCriteriaModel;
    carPortCount?: number[];
    hasAlfresco?: boolean;
    hasEnSuite?: boolean;
    hasMediaRoom?: boolean;
    hasStudy?: boolean;
    houseSize?: ValueRangeModel;
    houseType?: HouseTypeCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    land?: LandCriteriaModel;
    landShapes?: number[];
    landSize?: ValueRangeModel;
    locations?: DevelopmentLocationCriteriaModel;
    masterContract?: MasterContractCriteriaModel;
    price?: ValueRangeModel;
    specSaleType?: number[];
    statuses?: number[];
    stories?: number[];
    suburbs?: SuburbCriteriaModel;
    uploads?: HouseListingUploadCriteriaModel;
    users?: UserCriteriaModel;
}
export interface HouseListingDocModel {
    file?: FileModel; // @required True
    houseListingDocId?: number; // @primaryKey @required True
    isFloorPlan?: boolean; // @required True
    isHeroImage?: boolean; // @required True
    metaData?: MetaDataOrderModel;
}
export interface HouseListingDocSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface HouseListingInclusionModel {
    houseListingInclusionId?: number; // @primaryKey @required True
    inclusionDescription?: string; // @required False @length 255
    tenderPackageSelection?: TenderPackageSelxnModel; // @required True
}
export interface HouseListingInclusionSelectionModel {
    tenderPackageSelection?: TenderPackageSelxnSelectionModel;
}
export interface HouseListingModel {
    addressDisplayType?: number; // @enum DisplayAddressType @required True
    bathrooms?: number; // @required True
    bedrooms?: number; // @required True
    brand?: BrandModel; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    carports?: number; // @required True
    category?: number; // @enum HomeCategory @required True
    contactDetails?: string; // @required False
    displayPrice?: boolean; // @required True
    energyRating?: number; // @required False
    ensuiteNo?: number; // @required False
    features?: string; // @required False
    floorSpace?: number; // @required False
    floorSpaceUnit?: number; // @required True
    garage?: number; // @required True
    hasEnsuites?: boolean; // @required True
    headline?: string; // @required False @length 150
    houseDescription?: string; // @required False
    houseListingDocs?: CollectionModel<HouseListingDocModel>; // @required True
    houseListingId?: number; // @primaryKey @required True
    houseListingInclusions?: CollectionModel<HouseListingInclusionModel>; // @required True
    houseStatus?: number; // @enum HouseListStatus @required True
    houseType?: HouseTypeModel; // @required True
    iGNORE_inBathrooms?: number; // @required True
    introduction?: string; // @required False
    land?: LandModel; // @required True
    landArea?: number; // @required False
    landAreaUnit?: number; // @required True
    lifestyleOptions?: string; // @required False @length 255
    listType?: number; // @enum ListingType @required True
    livingArea?: number; // @required False
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataModel;
    openSpaces?: number; // @required True
    priceMax?: number; // @required False
    priceMin?: number; // @required False
    priceView?: string; // @required False @length 150
    pricingType?: boolean; // @required True
    productLibraryId?: number; // @required False
    propertyLocation?: string; // @required False @length 50
    propertyName?: string; // @required False @length 100
    salesPerson1?: MetaDataUserModel; // @required False
    salesPerson2?: MetaDataUserModel; // @required False
    salesPerson3?: MetaDataUserModel; // @required False
    salesType?: number; // @enum SaleHouseType @required True
    security?: SecurityModel;
    soldPrice?: number; // @required False
    tender?: TenderModel; // @required False
    termsAndConditions?: string; // @required False
    toilet?: number; // @required True
    uploadStatus?: string; // @enum ProductLibraryUploadStatus @required True
    uploads?: CollectionModel<HouseListingUploadModel>; // @required True
    videoUrl?: string; // @required False @length 255
}
export interface HouseListingSelectionModel {
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    houseListingDocs?: CollectionSelectionModel<HouseListingDocSelectionModel>;
    houseListingInclusions?: CollectionSelectionModel<HouseListingInclusionSelectionModel>;
    houseType?: HouseTypeSelectionModel;
    land?: LandSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    salesPerson1?: UserSelectionModel;
    salesPerson2?: UserSelectionModel;
    salesPerson3?: UserSelectionModel;
    tender?: TenderSelectionModel;
    uploads?: CollectionSelectionModel<HouseListingUploadSelectionModel>;
}
export interface HouseListingUploadCriteriaModel {
    ids?: number[];
    includeInactive?: boolean;
    listings?: HouseListingCriteriaModel;
    portals?: ListingPortalCriteriaModel;
    uploadStatuses?: string[];
}
export interface HouseListingUploadModel {
    houseListing?: HouseListingModel; // @required True
    houseListingUploadId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    portal?: ListingPortalModel; // @required True
    uploadStatus?: string; // @enum ProductLibraryUploadStatus @required True
}
export interface HouseListingUploadSelectionModel {
    houseListing?: HouseListingSelectionModel;
    metaData?: MetaDataSelectionModel;
    portal?: ListingPortalSelectionModel;
}
export interface HouseTypeCriteriaModel {
    area?: DecimalValueRangeModel;
    available?: boolean;
    baths?: number[];
    beds?: number[];
    brand?: BrandCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    cars?: number[];
    depth?: DecimalValueRangeModel;
    expired?: boolean;
    externalReference?: string;
    externalReferences?: ExternalReferenceCriteriaModel;
    houseAreas?: HouseAreaCriteriaModel;
    houseTypeIds?: number[];
    houseTypeName?: string;
    includeInactive?: boolean;
    price?: DecimalValueRangeModel;
    priceLevel?: TenderRuleCriteriaModel;
    quickSearch?: string;
    rating?: number[];
    roomTypes?: number[];
    storeys?: number[];
    width?: DecimalValueRangeModel;
}
export interface HouseTypeModel {
    allowAdditions?: boolean; // @required True
    allowCustomisation?: boolean; // @required False
    allowPackages?: boolean; // @required True
    availableDate?: DateString; // @required True
    bOQStatus?: number; // @enum TenderBOQStatus @required True
    baseDescription?: string; // @required False
    bathrooms?: number; // @required False
    bedrooms?: number; // @required False
    brand?: BrandModel; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    carSpaces?: number; // @required False
    claimTemplate?: ClaimTemplateModel; // @required False
    colourPackage?: TenderPackageModel; // @required False
    coloursLocked?: boolean; // @required True
    constructionNotes?: string; // @required False
    coverImage?: FileModel; // @required False
    displayOnWeb?: boolean; // @required True
    displays?: CollectionModel<DisplayModel>; // @required True
    documents?: CollectionModel<DocumentModel>;
    expiredDate?: DateString; // @required True
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    facadeLocked?: boolean; // @required True
    facadePackage?: TenderPackageModel; // @required False
    files?: CollectionModel<FileModel>;
    floorPlan?: FileModel; // @required False
    fullSearch?: string; // @required False
    houseAreas?: CollectionModel<HouseAreaModel>; // @required True
    houseDimensions?: CollectionModel<HouseDimensionModel>; // @required True
    houseListings?: CollectionModel<HouseListingModel>; // @required True
    houseName?: string; // @required True @length 50
    housePackage?: TenderPackageModel; // @required False
    housePackageLocked?: boolean; // @required True
    houseSize?: number; // @required False
    houseTypeId?: number; // @primaryKey @required True
    houseTypeUrl?: string; // @required False @length 255
    houseVariations?: CollectionModel<HouseVariationModel>; // @required True
    iGNORE_inBathrooms?: number; // @required False
    inclusionPackage?: TenderPackageModel; // @required False
    inclusionsLocked?: boolean; // @required True
    interfaceTenderPackageCosts?: CollectionModel<InterfaceTenderPackageCostModel>; // @required True
    livingArea?: number; // @required False
    livingRooms?: number; // @required False
    mainImage?: FileModel; // @required False
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    minimumDepth?: number; // @required False
    minimumWidth?: number; // @required False
    modelCode?: string; // @required False @length 50
    parent?: HouseTypeModel; // @required False
    presiteNotes?: string; // @required False
    priceReviewed?: DateString; // @required False
    productLibrary?: number; // @required False
    roofArea?: number; // @required False
    salesNotes?: string; // @required False
    salesStarRating?: number; // @required True
    security?: SecurityModel;
    space1?: number; // @required False
    space2?: number; // @required False
    space3?: number; // @required False
    space4?: number; // @required False
    space5?: number; // @required False
    space6?: number; // @required False
    specificPackages?: CollectionModel<TenderPackageModel>; // @required True
    status?: number; // @enum HouseStatus @required True
    storeys?: number; // @required True
    tenderHousePrices?: CollectionModel<TenderHousePriceModel>; // @required True
    tenderPackageHouseLinks?: CollectionModel<TenderPackageHouseLinkModel>; // @required True
    tenderPriceReviews?: CollectionModel<TenderPriceReviewModel>; // @required True
    tenderSurcharges?: CollectionModel<TenderSurchargeModel>; // @required True
    totalArea?: number; // @required True
    visualDefaultDirection?: number; // @required False
    visualisation?: number; // @enum VisualisationStatus @required True
    webDocument?: FileModel; // @required False
    webFacade?: TenderPackageModel; // @required False
}
export interface HouseTypeSelectionModel {
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    claimTemplate?: ClaimTemplateSelectionModel;
    colourPackage?: TenderPackageSelectionModel;
    coverImage?: FileSelectionModel;
    displays?: CollectionSelectionModel<DisplaySelectionModel>;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    facadePackage?: TenderPackageSelectionModel;
    files?: CollectionSelectionModel<FileSelectionModel>;
    floorPlan?: FileSelectionModel;
    houseAreas?: CollectionSelectionModel<HouseAreaSelectionModel>;
    houseDimensions?: CollectionSelectionModel<HouseDimensionSelectionModel>;
    houseListings?: CollectionSelectionModel<HouseListingSelectionModel>;
    housePackage?: TenderPackageSelectionModel;
    houseVariations?: CollectionSelectionModel<HouseVariationSelectionModel>;
    inclusionPackage?: TenderPackageSelectionModel;
    interfaceTenderPackageCosts?: CollectionSelectionModel<InterfaceTenderPackageCostSelectionModel>;
    mainImage?: FileSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    parent?: HouseTypeSelectionModel;
    specificPackages?: CollectionSelectionModel<TenderPackageSelectionModel>;
    tenderHousePrices?: CollectionSelectionModel<TenderHousePriceSelectionModel>;
    tenderPackageHouseLinks?: CollectionSelectionModel<TenderPackageHouseLinkSelectionModel>;
    tenderPriceReviews?: CollectionSelectionModel<TenderPriceReviewSelectionModel>;
    tenderSurcharges?: CollectionSelectionModel<TenderSurchargeSelectionModel>;
    webDocument?: FileSelectionModel;
    webFacade?: TenderPackageSelectionModel;
}
export interface HouseVariationModel {
    available?: DateString; // @required True
    expired?: DateString; // @required True
    houseVariationId?: number; // @primaryKey @required True
    houseVariationSetups?: CollectionModel<HouseVariationSetupModel>; // @required True
    metaData?: MetaDataModel;
    status?: number; // @enum HouseStatus @required True
    variationName?: string; // @required True @length 200
    variationType?: number; // @enum HouseVariationType @required True
    visualisation?: number; // @enum VisualisationStatus @required True
}
export interface HouseVariationSelectionModel {
    houseVariationSetups?: CollectionSelectionModel<HouseVariationSetupSelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface HouseVariationSetupModel {
    houseVariation?: HouseVariationModel; // @required True
    houseVariationSetupId?: number; // @primaryKey @required True
    metaData?: MetaDataOrderModel;
    tenderPackage?: TenderPackageModel; // @required False
}
export interface HouseVariationSetupSelectionModel {
    houseVariation?: HouseVariationSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
}
export interface ImpersonateLoginModel {
    deviceApplication?: number;
    deviceId?: string;
    deviceType?: number;
    password?: string;
    rememberMe?: boolean;
    systemUsername?: string;
    username?: string;
}
export interface ImpersonateRequestModel {
    username?: string;
}
export interface ImportTenderPriceReviewResponseModel {
    backEndJobId?: number;
    errors?: ErrorModel[];
}
export interface InspAreaModel {
    inspAreaId?: number; // @primaryKey @required True
    mandatory?: boolean; // @required True
    masterArea?: MasterAreaModel; // @required True
    metaData?: MetaDataModel;
}
export interface InspAreaSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface InspCategoryModel {
    businessUnit?: BusinessUnitModel; // @required True
    inspCategory?: string; // @required True @length 50
    inspCategoryId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    security?: SecurityModel;
}
export interface InspCategorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface InspDocumentModel {
    file?: FileModel; // @required True
    inspDocumentId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
}
export interface InspDocumentSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface InspectionCriteriaModel {
    ageRange?: AgeRangeModel;
    contract?: ContractCriteriaModel;
    includeInactive?: boolean;
    inspectionIds?: number[];
    inspectionTemplate?: InspTemplateCriteriaModel;
    passed?: boolean;
    recentOrOutstanding?: boolean;
    task?: TaskCriteriaModel;
}
export interface InspPolicyModel {
    businessUnit?: BusinessUnitModel; // @required True
    daysInAdvance?: number; // @required True
    frequency?: string; // @required False @length 50
    inspPolicyId?: number; // @primaryKey @required True
    inspectionPolicy?: string; // @required True @length 50
    metaData?: MetaDataModel;
    region?: RegionModel; // @required True
    resourceCode?: ResourceCodeModel; // @required False
    security?: SecurityModel;
}
export interface InspPolicySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
}
export interface InspQuestionAreaModel {
    inspQuestionAreaId?: number; // @primaryKey @required True
    masterArea?: MasterAreaModel; // @required True
    metaData?: MetaDataModel;
}
export interface InspQuestionAreaSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface InspQuestionModel {
    commentBelow?: number; // @required True
    defaultResult?: number; // @required False
    failBelow?: number; // @required True
    inspCategory?: InspCategoryModel; // @required False
    inspQuestionAreas?: CollectionModel<InspQuestionAreaModel>; // @required True
    inspQuestionId?: number; // @primaryKey @required True
    inspTemplate?: InspTemplateModel; // @required True
    metaData?: MetaDataModel;
    photoBelow?: number; // @required True
    question?: string; // @required True @length 400
    resourceCode?: ResourceCodeModel; // @required False
    responseType?: number; // @enum InspectionResponseTypes @required True
    sourceQuestion?: InspQuestionModel; // @required False
    sourceQuestions?: CollectionModel<InspQuestionModel>; // @required True
}
export interface InspQuestionSelectionModel {
    inspCategory?: InspCategorySelectionModel;
    inspQuestionAreas?: CollectionSelectionModel<InspQuestionAreaSelectionModel>;
    inspTemplate?: InspTemplateSelectionModel;
    metaData?: MetaDataSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    sourceQuestion?: InspQuestionSelectionModel;
    sourceQuestions?: CollectionSelectionModel<InspQuestionSelectionModel>;
}
export interface InspReqdAreaModel {
    areaOrder?: number; // @required True
    included?: boolean; // @required True
    inspReqdAreaId?: number; // @primaryKey @required True
    mandatory?: boolean; // @required True
    masterArea?: MasterAreaModel; // @required True
    skipped?: boolean; // @required True
}
export interface InspReqdAreaSelectionModel {
    masterArea?: MasterAreaSelectionModel;
}
export interface InspRequiredModel {
    areas?: CollectionModel<InspReqdAreaModel>; // @required True
    comment?: string; // @required False @length 4000
    contract?: ContractModel; // @required True
    documents?: CollectionModel<DocumentModel>;
    files?: CollectionModel<FileModel>;
    followUp?: InspRequiredModel; // @required False
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    inspRequiredId?: number; // @primaryKey @required True
    inspStatus?: boolean; // @required False
    inspectedOn?: DateString; // @required False
    masterAreas?: CollectionModel<MasterAreaModel>;
    metaData?: MetaDataModel;
    resource?: ResourceModel; // @required False
    results?: CollectionModel<InspResultModel>; // @required True
    security?: SecurityModel;
    sig1Name?: string; // @required False @length 255
    sig2Name?: string; // @required False @length 255
    sigBlob1?: number[]; // @required False
    sigBlob2?: number[]; // @required False
    task?: TaskModel; // @required False
    template?: InspTemplateModel; // @required True
    user?: MetaDataUserModel; // @required True
}
export interface InspRequiredSelectionModel {
    areas?: CollectionSelectionModel<InspReqdAreaSelectionModel>;
    contract?: ContractSelectionModel;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    files?: CollectionSelectionModel<FileSelectionModel>;
    followUp?: InspRequiredSelectionModel;
    geoTrackings?: CollectionSelectionModel<GeoTrackingSelectionModel>;
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    results?: CollectionSelectionModel<InspResultSelectionModel>;
    security?: SecuritySelectionModel;
    task?: TaskSelectionModel;
    template?: InspTemplateSelectionModel;
    user?: UserSelectionModel;
}
export interface InspResultModel {
    comment?: string; // @required False @length 400
    documents?: CollectionModel<DocumentModel>;
    files?: CollectionModel<FileModel>;
    inspFiles?: CollectionModel<InspDocumentModel>; // @required True
    inspResultId?: number; // @primaryKey @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    question?: InspQuestionModel; // @required False
    result?: number; // @required False
}
export interface InspResultSelectionModel {
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    files?: CollectionSelectionModel<FileSelectionModel>;
    inspFiles?: CollectionSelectionModel<InspDocumentSelectionModel>;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    question?: InspQuestionSelectionModel;
}
export interface InspStdCommentModel {
    comment?: string; // @required True @length 255
    inspCommentId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
}
export interface InspStdCommentSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface InspTaskLinkModel {
    inspTaskLinkId?: number; // @primaryKey @required True
    inspTemplate?: InspTemplateModel; // @required True
    metaData?: MetaDataModel;
    templateItem?: TemplateItemModel; // @required True
}
export interface InspTaskLinkSelectionModel {
    inspTemplate?: InspTemplateSelectionModel;
    metaData?: MetaDataSelectionModel;
    templateItem?: TemplateItemSelectionModel;
}
export interface InspTemplateCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    filterAdHoc?: boolean;
    ids?: number[];
    includeInactive?: boolean;
    types?: number[];
}
export interface InspTemplateModel {
    adHoc?: boolean; // @required True
    areas?: CollectionModel<InspAreaModel>; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    inspPolicy?: InspPolicyModel; // @required True
    inspTemplateId?: number; // @primaryKey @required True
    inspType?: number; // @enum InspType @required True
    inspectionGroup?: string; // @required True @length 50
    instructions?: string; // @required False
    metaData?: MetaDataModel;
    mirrorTemplate?: InspTemplateModel; // @required False
    mirrorTemplates?: CollectionModel<InspTemplateModel>; // @required True
    postInspectionAction?: string; // @required False @length 20
    questions?: CollectionModel<InspQuestionModel>; // @required True
    security?: SecurityModel;
    standardComments?: CollectionModel<InspStdCommentModel>; // @required True
}
export interface InspTemplateSelectionModel {
    areas?: CollectionSelectionModel<InspAreaSelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    inspPolicy?: InspPolicySelectionModel;
    metaData?: MetaDataSelectionModel;
    mirrorTemplate?: InspTemplateSelectionModel;
    mirrorTemplates?: CollectionSelectionModel<InspTemplateSelectionModel>;
    questions?: CollectionSelectionModel<InspQuestionSelectionModel>;
    standardComments?: CollectionSelectionModel<InspStdCommentSelectionModel>;
}
export interface InterfaceBatchModel {
    batchId?: string; // @required False @length 50
    batchStatus?: number; // @enum InterfaceBatchStatus @required True
    batchType?: number; // @enum InterfaceBatchType @required True
    businessUnit?: BusinessUnitModel; // @required True
    callbackURL?: string; // @required False @length 400
    failureCount?: number; // @required True
    interfaceBatchId?: number; // @primaryKey @required True
    lastCallbackError?: string; // @required False @length 400
    lastError?: string; // @required False @length 200
    metaData?: MetaDataBaseModel;
    parameters?: string; // @required False @length 400
    result?: string; // @required False @length 10
    targetCount?: number; // @required True
}
export interface InterfaceBatchSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface InterfaceClientModel {
    batchId?: string; // @required False @length 50
    clientPkId?: number; // @required False
    clientTitle?: string; // @required False @length 400
    clientType?: number; // @required False
    contactMethod?: string; // @required False @length 1
    emailAddress?: string; // @required False @length 100
    faxNumber?: string; // @required False @length 20
    homeAddress?: string; // @required False @length 400
    homeCountry?: string; // @required False @length 60
    homePhone?: string; // @required False @length 20
    homePostCode?: string; // @required False @length 10
    homeState?: string; // @required False @length 10
    homeStreet1?: string; // @required False @length 60
    homeStreet2?: string; // @required False @length 60
    homeSuburb?: string; // @required False @length 50
    interfaceClientId?: number; // @primaryKey @required True
    interfaceContacts?: CollectionModel<InterfaceContactModel>; // @required True
    lastError?: string; // @required False @length 200
    letterCasual?: string; // @required False @length 400
    letterEdit?: number; // @required False
    letterSalut?: string; // @required False @length 400
    letterTitle?: string; // @required False @length 400
    lookupBusinessUnit?: string; // @required False @length 50
    lookupRegion?: string; // @required False @length 50
    mobilePhone?: string; // @required False @length 20
    myHomePassword?: string; // @required False @length 50
    myHomeUsername?: string; // @required False @length 100
    operationCode?: number; // @required False
    result?: string; // @required False @length 10
    stdCustomOrder?: number; // @required False
    stdExtRef?: string; // @required False @length 50
    taxNumber?: string; // @required False @length 50
    userDefined10?: string; // @required False @length 50
    userDefined1?: string; // @required False @length 50
    userDefined2?: string; // @required False @length 50
    userDefined3?: string; // @required False @length 50
    userDefined4?: string; // @required False @length 50
    userDefined5?: string; // @required False @length 50
    userDefined6?: string; // @required False @length 50
    userDefined7?: string; // @required False @length 50
    userDefined8?: string; // @required False @length 50
    userDefined9?: string; // @required False @length 50
    workPhone?: string; // @required False @length 20
}
export interface InterfaceClientSelectionModel {
    interfaceContacts?: CollectionSelectionModel<InterfaceContactSelectionModel>;
}
export interface InterfaceContactModel {
    address?: string; // @required False @length 400
    ageGroup?: string; // @required False @length 1
    batchId?: string; // @required False @length 50
    clientId?: number;
    contactInstructions?: string; // @required False @length 400
    contactMethod?: string; // @required False @length 1
    contactPkId?: number; // @required False
    contactType?: number; // @required False
    country?: string; // @required False @length 60
    dateofBirth?: DateString; // @required False
    emailAddress?: string; // @required False @length 100
    employmentStatus?: string; // @required False @length 1
    faxNumber?: string; // @required False @length 20
    firstName?: string; // @required False @length 50
    fullName?: string; // @required False @length 100
    homePhone?: string; // @required False @length 20
    interfaceClient?: InterfaceClientModel; // @required False
    interfaceContactId?: number; // @primaryKey @required True
    jobTitle?: string; // @required False @length 50
    lastError?: string; // @required False @length 200
    lastName?: string; // @required False @length 50
    lookupClient?: string; // @required False @length 50
    lookupResource?: string; // @required False @length 50
    marketingOptions?: string; // @required False @length 10
    mobilePhone?: string; // @required False @length 20
    operationCode?: number; // @required False
    otherNames?: string; // @required False @length 50
    postCode?: string; // @required False @length 10
    prefix?: string; // @required False @length 50
    resourceId?: number;
    result?: string; // @required False @length 10
    salut?: string; // @required False @length 50
    sex?: string; // @required False @length 1
    state?: string; // @required False @length 10
    stdCustomOrder?: number; // @required False
    stdExtRef?: string; // @required False @length 50
    street1?: string; // @required False @length 60
    street2?: string; // @required False @length 60
    suburb?: string; // @required False @length 50
    suffix?: string; // @required False @length 50
    title?: string; // @required False @length 50
    workPhone?: string; // @required False @length 20
}
export interface InterfaceContactSelectionModel {
    interfaceClient?: InterfaceClientSelectionModel;
}
export interface InterfaceContractModel {
    allowedDays?: number; // @required False
    batchId?: string; // @required False @length 50
    businessUnitId?: number;
    category?: string; // @required False @length 10
    clientAdvised?: DateString; // @required False
    clientId?: number;
    commonName?: string; // @required False @length 50
    contractNo?: string; // @required False @length 20
    contractPkId?: number; // @required False
    contractPriority?: number; // @required False
    contractStatus?: string; // @required False @length 1
    contractType?: string; // @required False
    contractValue?: number; // @required False
    dateEstimatedClientMoveIn?: DateString; // @required False
    dateEstimatedComplete?: DateString; // @required False
    dateStartSchedule?: DateString; // @required False
    interfaceContractId?: number; // @primaryKey @required True
    jobType?: string; // @required False @length 1
    lastError?: string; // @required False @length 200
    latitude?: string; // @required False @length 50
    longitude?: string; // @required False @length 50
    lookupBusinessUnit?: string; // @required False @length 50
    lookupClient?: string; // @required False @length 50
    lookupContractAdmin?: string; // @required False @length 50
    lookupCouncil?: string; // @required False @length 50
    lookupDisplay?: string; // @required False @length 50
    lookupEstate?: string; // @required False @length 50
    lookupFacadePackage?: string; // @required False @length 50
    lookupHouseType?: string; // @required False @length 50
    lookupMasterContract?: string; // @required False @length 100
    lookupParent?: string; // @required False @length 50
    lookupRefSrcContactPoint?: string; // @required False @length 50
    lookupReferralSource?: string; // @required False @length 50
    lookupRegion?: string; // @required False @length 50
    lookupSalesPerson?: string; // @required False @length 50
    lookupStage?: string; // @required False @length 50
    lookupSuburb?: string; // @required False @length 50
    lookupSupervisor2?: string; // @required False @length 50
    lookupSupervisor?: string; // @required False @length 50
    lookupSupervisorQC?: string; // @required False @length 50
    lookupTemplate?: string; // @required False @length 50
    lotAddress?: string; // @required False @length 400
    lotLevelNo?: string; // @required False @length 20
    lotNo?: string; // @required False @length 20
    lotPostCode?: string; // @required False @length 10
    lotState?: string; // @required False @length 10
    lotStreet1?: string; // @required False @length 60
    lotStreet2?: string; // @required False @length 60
    lotStreetNo?: string; // @required False @length 20
    lotSuburb?: string; // @required False @length 50
    lotUnitNo?: string; // @required False @length 20
    notes?: string; // @required False
    operationCode?: number; // @required False
    programmedComplete?: DateString; // @required False
    projectCode?: string; // @required False @length 50
    referralData?: string; // @required False @length 100
    regionId?: number;
    result?: string; // @required False @length 10
    schedulingStatus?: string; // @required False @length 1
    standardDirections?: string; // @required False @length 400
    standardInstructions?: string; // @required False @length 400
    stdCustomOrder?: number; // @required False
    stdExtRef?: string; // @required False @length 50
    supervisorStatus?: string; // @required False @length 1
    userDefined10?: string; // @required False @length 50
    userDefined1?: string; // @required False @length 50
    userDefined2?: string; // @required False @length 50
    userDefined3?: string; // @required False @length 50
    userDefined4?: string; // @required False @length 50
    userDefined5?: string; // @required False @length 50
    userDefined6?: string; // @required False @length 50
    userDefined7?: string; // @required False @length 50
    userDefined8?: string; // @required False @length 50
    userDefined9?: string; // @required False @length 50
}
export interface InterfaceContractSelectionModel {

}
export interface InterfaceFlexFieldValueModel {
    batchId?: string; // @required False @length 50
    dateValue?: DateString; // @required False
    decValue?: number; // @required False
    interfaceFFValueId?: number; // @primaryKey @required True
    jobType?: string; // @required False @length 1
    lastError?: string; // @required False @length 200
    lookupContract?: string; // @required False @length 50
    lookupFFDefinition?: string; // @required False @length 50
    lookupTaskWBS?: string; // @required False @length 50
    operationCode?: number; // @required False
    result?: string; // @required False @length 10
    textValue?: string; // @required False @length 100
}
export interface InterfaceFlexFieldValueSelectionModel {

}
export interface InterfaceImportCriteriaModel {
    batchId?: string;
    externalReference?: string;
    ids?: number[];
    includeInactive?: boolean;
    relatedIds?: number[];
    result?: string;
    status?: string;
}
export interface InterfaceNoteModel {
    batchId?: string; // @required False @length 50
    conversation?: number; // @required False
    dateActivity?: DateString; // @required False
    dateCreated?: DateString; // @required False
    dateReminder?: DateString; // @required False
    description?: string; // @required False @length 100
    duration?: number; // @required False
    interfaceNotesId?: number; // @primaryKey @required True
    jobType?: string; // @required False @length 1
    lastError?: string; // @required False @length 200
    lookupAuthor?: string; // @required False @length 50
    lookupClient?: string; // @required False @length 50
    lookupContract?: string; // @required False @length 50
    lookupNoteForRole?: string; // @required False @length 50
    lookupNoteForUser?: string; // @required False @length 50
    lookupResourceCode?: string; // @required False @length 50
    lookupTaskWBS?: string; // @required False @length 50
    myHome?: boolean; // @required False
    notePkId?: number; // @required False
    noteType?: string; // @required False @length 1
    notes?: string; // @required False
    operationCode?: number; // @required False
    resourceAccess?: boolean; // @required False
    result?: string; // @required False @length 10
    stdExtRef?: string; // @required False @length 50
}
export interface InterfaceNoteSelectionModel {

}
export interface InterfacePOHeaderModel {
    approvedPercent?: number; // @required False
    batchId?: string; // @required False @length 50
    contactBy?: string; // @required False @length 100
    contactMethod?: string; // @required False @length 1
    contactPerson?: string; // @required False @length 100
    contractId?: number;
    fileName?: string; // @required False @length 100
    interfacePOHeaderId?: number; // @primaryKey @required True
    interfacePOLines?: CollectionModel<InterfacePOLineModel>; // @required True
    jobType?: string; // @required False @length 1
    lastError?: string; // @required False @length 200
    lookupContract?: string; // @required False @length 50
    operationCode?: number; // @enum OperationCode? @required False
    pODate?: DateString; // @required False
    pOHeaderPkId?: number; // @required False
    pOReference?: string; // @required False @length 50
    partialPayment?: boolean; // @required False
    requisitionId?: number;
    requisitionReference?: string; // @required False @length 50
    resourceExtRef?: string; // @required False @length 50
    resourceId?: number;
    result?: string; // @required False @length 10
    status?: string; // @required False @length 1
    stdExtRef?: string; // @required False @length 50
    totalPrice?: number; // @required False
    totalTax?: number; // @required False
}
export interface InterfacePOHeaderSelectionModel {
    interfacePOLines?: CollectionSelectionModel<InterfacePOLineSelectionModel>;
}
export interface InterfacePOLineModel {
    contractId?: number;
    costCode?: string; // @required False @length 50
    extendedPrice?: number; // @required False
    extendedTax?: number; // @required False
    interfacePOHeader?: InterfacePOHeaderModel; // @required False
    interfacePOLineId?: number; // @primaryKey @required True
    itemCode?: string; // @required False @length 50
    itemDescription?: string; // @required False @length 400
    jobType?: string; // @required False @length 1
    lastError?: string; // @required False @length 200
    lineCutLength?: number; // @required False
    lineQuantity?: number; // @required False
    lookupContract?: string; // @required False @length 50
    pOLineReference?: string; // @required False @length 50
    pOReference?: string; // @required False @length 50
    requisitionId?: number;
    resourceId?: number;
    result?: string; // @required False @length 10
    sequence?: number; // @required False
    stdExtRef?: string; // @required False @length 50
    uOM?: string; // @required False @length 10
    unitPrice?: number; // @required False
}
export interface InterfacePOLineSelectionModel {
    interfacePOHeader?: InterfacePOHeaderSelectionModel;
}
export interface InterfaceResourceModel {
    address?: string; // @required False @length 400
    batchId?: string; // @required False @length 50
    branchRule?: number; // @required False
    businessUnitId?: number;
    contactMethod?: string; // @required False @length 1
    contactName?: string; // @required False @length 50
    emailAddress?: string; // @required False @length 100
    faxNumber?: string; // @required False @length 20
    gTIN?: string; // @required False @length 100
    inheritResourceCodes?: boolean; // @required False
    interfaceResourceId?: number; // @primaryKey @required True
    interfaceResourceRegions?: CollectionModel<InterfaceResourceRegionModel>; // @required True
    lastError?: string; // @required False @length 200
    latitude?: string; // @required False @length 50
    longitude?: string; // @required False @length 50
    lookupBusinessUnit?: string; // @required False @length 50
    lookupHeadOffice?: string; // @required False @length 50
    lookupSupervisorOwner?: string; // @required False @length 50
    messageGroup?: string; // @required False @length 1
    mobilePhone?: string; // @required False @length 20
    operationCode?: number; // @required False
    postCode?: string; // @required False @length 10
    reminderMethod?: string; // @required False @length 1
    resourceAvailable?: boolean; // @required False
    resourceCapacity?: string; // @required False @length 50
    resourceCodes?: string; // @required False @length 500
    resourceName?: string; // @required False @length 100
    resourcePkId?: number; // @required False
    resourcePriority?: number; // @required False
    resourceProdUnits?: number; // @required False
    resourceRating?: number; // @required False
    resourceTypeId?: number;
    resourceWorkRate?: number; // @required False
    result?: string; // @required False @length 10
    state?: string; // @required False @length 10
    stdCustomOrder?: number; // @required False
    stdExtRef?: string; // @required False @length 50
    street1?: string; // @required False @length 60
    street2?: string; // @required False @length 60
    suburb?: string; // @required False @length 50
    taxNumber?: string; // @required False @length 50
    wEBURL?: string; // @required False @length 255
    workPhone?: string; // @required False @length 20
}
export interface InterfaceResourceRegionModel {
    batchId?: string; // @required False @length 50
    deliveryDays?: number; // @required False
    interfaceResource?: InterfaceResourceModel; // @required False
    interfaceResourceRegionId?: number; // @primaryKey @required True
    lastError?: string; // @required False @length 200
    lookupRegion?: string; // @required False @length 50
    lookupResource?: string; // @required False @length 50
    operationCode?: number; // @required False
    result?: string; // @required False @length 10
    stdCustomOrder?: number; // @required False
    stdExtRef?: string; // @required False @length 50
}
export interface InterfaceResourceRegionSelectionModel {
    interfaceResource?: InterfaceResourceSelectionModel;
}
export interface InterfaceResourceSelectionModel {
    interfaceResourceRegions?: CollectionSelectionModel<InterfaceResourceRegionSelectionModel>;
}
export interface InterfaceSetupValidationModel {
    batchId?: string; // @required False @length 50
    display?: string; // @required False @length 50
    interfaceSetupId?: number; // @primaryKey @required True
    lastError?: string; // @required False @length 200
    lookupBusinessUnit?: string; // @required False @length 50
    operationCode?: number; // @required False
    result?: string; // @required False @length 10
    stdCustomOrder?: number; // @required False
    stdExtRef?: string; // @required False @length 50
    textValue?: string; // @required False @length 50
    validCode?: string; // @required False @length 10
    value?: number; // @required False
}
export interface InterfaceSetupValidationSelectionModel {

}
export interface InterfaceTenderOptionCostModel {
    batchNumber?: number; // @required False
    effectiveDate?: DateString; // @required False
    groupCode?: string; // @required False @length 50
    interfaceTenderOptionCostId?: number; // @primaryKey @required True
    lastError?: string; // @required False @length 200
    lookupOption?: string; // @required False @length 50
    lookupPriceLevel?: string; // @required False @length 50
    optionCompareCost?: number; // @required False
    optionCost?: number; // @required False
    optionCostTax?: number; // @required False
    optionOverrideCost?: number; // @required False
    result?: string; // @required False @length 10
    tenderOption?: TenderOptionModel; // @required False
    tenderPriceLevel?: TenderPriceLevelModel; // @required False
}
export interface InterfaceTenderOptionCostSelectionModel {
    tenderOption?: TenderOptionSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
}
export interface InterfaceTenderPackageCostModel {
    batchNumber?: number; // @required False
    effectiveDate?: DateString; // @required False
    groupCode?: string; // @required False @length 50
    houseType?: HouseTypeModel; // @required False
    interfaceTenderPackageCostId?: number; // @primaryKey @required True
    lastError?: string; // @required False @length 200
    lookupHouse?: string; // @required False @length 50
    lookupPackage?: string; // @required False @length 50
    lookupPackageHouseLink?: string; // @required False @length 50
    lookupPriceLevel?: string; // @required False @length 50
    packageCompareCost?: number; // @required False
    packageCost?: number; // @required False
    packageCostTax?: number; // @required False
    packageOverrideCost?: number; // @required False
    result?: string; // @required False @length 10
    tenderPackage?: TenderPackageModel; // @required False
    tenderPackageHouseLink?: TenderPackageHouseLinkModel; // @required False
    tenderPriceLevel?: TenderPriceLevelModel; // @required False
}
export interface InterfaceTenderPackageCostSelectionModel {
    houseType?: HouseTypeSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPackageHouseLink?: TenderPackageHouseLinkSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
}
export interface InternationalAddressModel {
    address?: string;
    country?: string;
    postCode?: string;
    state?: string;
    street1?: string;
    street2?: string;
    suburb?: string;
}
export interface InvoiceLineModel {
    costCode?: string; // @required False @length 50
    description?: string; // @required False @length 400
    extendedTotal?: number; // @required False
    invoice?: InvoiceModel; // @required True
    invoiceLineId?: number; // @primaryKey @required True
    itemCode?: string; // @required False @length 50
    metaData?: MetaDataBaseModel;
    price?: number; // @required False
    quantity?: number; // @required False
    sequence?: number; // @required True
    tax?: number; // @required False
    total?: number; // @required False
    uOM?: string; // @required False @length 10
    unitPrice?: number; // @required False
}
export interface InvoiceLineSelectionModel {
    invoice?: InvoiceSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface InvoiceModel {
    attentionTo?: string; // @required False @length 400
    clientAbn?: string; // @required False @length 14
    clientAddress?: string; // @required False @length 400
    clientEmail?: string; // @required False @length 100
    clientName?: string; // @required False @length 400
    comment?: string; // @required False @length 800
    contract?: ContractModel; // @required False
    due?: DateString; // @required False
    extendedTotal?: number; // @required False
    file?: FileModel; // @required False
    invoiceId?: number; // @primaryKey @required True
    invoiceLines?: CollectionModel<InvoiceLineModel>; // @required True
    invoiceNumber?: string; // @required True @length 50
    issued?: DateString; // @required False
    metaData?: MetaDataBaseModel;
    pOHeader?: POHeaderModel; // @required False
    paid?: DateString; // @required False
    paymentInformation?: string; // @required False @length 800
    resource?: ResourceModel; // @required True
    resourceAbn?: string; // @required False @length 14
    resourceAddress?: string; // @required False @length 400
    resourceEmail?: string; // @required False @length 100
    resourceInvoiceStatus?: string; // @enum InvoiceStatus? @required False
    resourceName?: string; // @required False @length 400
    tax?: number; // @required False
    total?: number; // @required False
}
export interface InvoiceSelectionModel {
    contract?: ContractSelectionModel;
    file?: FileSelectionModel;
    invoiceLines?: CollectionSelectionModel<InvoiceLineSelectionModel>;
    metaData?: MetaDataSelectionModel;
    pOHeader?: POHeaderSelectionModel;
    resource?: ResourceSelectionModel;
}
export interface IssueCategoryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    description?: string;
    includeInactive?: boolean;
    issueCategoryIds?: number[];
}
export interface IssueCategoryModel {
    businessUnit?: BusinessUnitModel; // @required True
    description?: string; // @required True @length 50
    issueCatResourceCodeLinks?: CollectionModel<IssueCatResourceCodeLinkModel>; // @required True
    issueCategoryId?: number; // @primaryKey @required True
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    myHome?: boolean; // @required True
    security?: SecurityModel;
}
export interface IssueCategorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    issueCatResourceCodeLinks?: CollectionSelectionModel<IssueCatResourceCodeLinkSelectionModel>;
    metaData?: MetaDataSelectionModel;
}
export interface IssueCatResourceCodeLinkModel {
    issueCatResourceCodeLinkId?: number; // @primaryKey @required True
    issueCategory?: IssueCategoryModel; // @required True
    metaData?: MetaDataBaseModel;
    resourceCode?: ResourceCodeModel; // @required True
}
export interface IssueCatResourceCodeLinkSelectionModel {
    issueCategory?: IssueCategorySelectionModel;
    metaData?: MetaDataSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
}
export interface IssueCompleteActionModel {
    codeValue1?: string; // @required False @length 10
    codeValue2?: string; // @required False @length 10
    dateValue1?: DateString; // @required False
    dateValue2?: DateString; // @required False
    dateValue3?: DateString; // @required False
    dateValue4?: DateString; // @required False
    failureCount?: number; // @required True
    iDValue1?: number; // @required False
    iDValue2?: number; // @required False
    issue?: IssueModel; // @required True
    issueCompleteActionId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    notes?: string; // @required False
    operationCode?: number; // @required True
    textValue1?: string; // @required False @length 400
    textValue2?: string; // @required False @length 400
}
export interface IssueCompleteActionSelectionModel {
    issue?: IssueSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface IssueCriteriaModel {
    activeIssuesOnly?: boolean;
    ageRange?: AgeRangeModel;
    assignedTo?: UserCriteriaModel;
    contact?: ContactCriteriaModel;
    contract?: ContractCriteriaModel;
    includeInactive?: boolean;
    involved?: UserCriteriaModel;
    issueCategory?: IssueCategoryCriteriaModel;
    issueIds?: number[];
    lastModifiedRange?: AgeRangeModel;
    masterArea?: MasterAreaCriteriaModel;
    myHome?: boolean;
    raisedBy?: UserCriteriaModel;
    recentOrOutstanding?: boolean;
    resolvedBy?: UserCriteriaModel;
    resourceCode?: ResourceCodeCriteriaModel;
    severity?: number;
    statuses?: number[];
    subscribed?: UserCriteriaModel;
    urgency?: number;
}
export interface IssueErrorResponseModel {
    issueId?: number;
    message?: string;
}
export interface IssueHistoryModel {
    changedBy?: MetaDataUserModel; // @required False
    changedByExternal?: string; // @required False @length 50
    dateChanged?: DateString; // @required True
    externalReason?: string; // @required False @length 255
    internalReason?: string; // @required False @length 255
    issue?: IssueModel; // @required True
    issueHistoryId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    newStatus?: number; // @enum IssueStatus @required True
    oldStatus?: number; // @enum IssueStatus @required True
    reasonCode?: string; // @required False @length 10
    solution?: NoteModel; // @required False
    source?: number; // @enum Source @required True
}
export interface IssueHistorySelectionModel {
    changedBy?: UserSelectionModel;
    issue?: IssueSelectionModel;
    metaData?: MetaDataSelectionModel;
    solution?: NoteSelectionModel;
}
export interface IssueModel {
    adhocWorkflow?: ContractModel; // @required False
    assignedTo?: MetaDataUserModel; // @required True
    body?: string;
    businessUnit?: BusinessUnitModel; // @required True
    client?: ClientModel; // @required False
    contact?: ContactModel; // @required False
    contract?: ContractModel; // @required False
    conversations?: CollectionModel<NoteModel>;
    costEstimate?: number; // @required False
    dateCompleted?: DateString; // @required False
    dateDeadline?: DateString; // @required False
    dateRaised?: DateString; // @required True
    description?: string; // @required False @length 100
    documents?: CollectionModel<DocumentModel>;
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    files?: CollectionModel<FileModel>;
    issueCategory?: IssueCategoryModel; // @required False
    issueCompleteActions?: CollectionModel<IssueCompleteActionModel>; // @required True
    issueHistories?: CollectionModel<IssueHistoryModel>; // @required True
    issueId?: number; // @primaryKey @required True
    issueSignOffLinks?: CollectionModel<IssueSignOffLinkModel>; // @required True
    issueStatus?: number; // @enum IssueStatus @required True
    issueType?: string; // @enum IssueTypes @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    myHome?: boolean; // @required True
    primaryNote?: NoteModel; // @required False
    raisedBy?: MetaDataUserModel; // @required True
    resourceCode?: ResourceCodeModel; // @required False
    security?: IssueSecurityModel;
    severity?: number; // @enum SeverityType @required True
    signOffs?: CollectionModel<IssueSignOffModel>;
    solution?: NoteModel; // @required False
    source?: number; // @enum Source @required True
    subscribers?: CollectionModel<MetaDataUserModel>;
    taskIssueLinks?: CollectionModel<TaskIssueLinkModel>; // @required True
    tasks?: CollectionModel<TaskModel>;
    urgency?: number; // @enum Urgency @required True
}
export interface IssueNotificationModel {
    adhocWorkflow?: ContractModel;
    assignedTo?: MetaDataUserModel;
    assignedUser?: MetaDataUserModel;
    body?: string;
    businessUnit?: BusinessUnitModel;
    client?: ClientModel;
    contact?: ContactModel;
    contract?: ContractModel;
    conversations?: CollectionModel<NoteModel>;
    costEstimate?: number;
    dateCompleted?: DateString;
    dateDeadline?: DateString;
    dateRaised?: DateString;
    description?: string;
    documents?: CollectionModel<DocumentModel>;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    files?: CollectionModel<FileModel>;
    issueCategory?: IssueCategoryModel;
    issueCompleteActions?: CollectionModel<IssueCompleteActionModel>;
    issueHistories?: CollectionModel<IssueHistoryModel>;
    issueId?: number;
    issueSignOffLinks?: CollectionModel<IssueSignOffLinkModel>;
    issueStatus?: number;
    issueType?: string;
    masterArea?: MasterAreaModel;
    metaData?: MetaDataModel;
    myHome?: boolean;
    note?: NoteNotificationModel;
    primaryNote?: NoteModel;
    raisedBy?: MetaDataUserModel;
    resourceCode?: ResourceCodeModel;
    security?: IssueSecurityModel;
    severity?: number;
    signOff?: IssueSignOffModel;
    signOffs?: CollectionModel<IssueSignOffModel>;
    solution?: NoteModel;
    source?: number;
    subscribers?: CollectionModel<MetaDataUserModel>;
    taskIssueLinks?: CollectionModel<TaskIssueLinkModel>;
    tasks?: CollectionModel<TaskModel>;
    unassignedUser?: MetaDataUserModel;
    urgency?: number;
}
export interface IssueSecurityModel {
    canAddFile?: boolean;
    canChangeStatus?: boolean;
    canComment?: boolean;
    canDelegate?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canResolve?: boolean;
    canView?: boolean;
}
export interface IssueSelectionModel {
    adhocWorkflow?: ContractSelectionModel;
    assignedTo?: UserSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    client?: ClientSelectionModel;
    contact?: ContactSelectionModel;
    contract?: ContractSelectionModel;
    conversations?: CollectionSelectionModel<NoteSelectionModel>;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    files?: CollectionSelectionModel<FileSelectionModel>;
    issueCategory?: IssueCategorySelectionModel;
    issueCompleteActions?: CollectionSelectionModel<IssueCompleteActionSelectionModel>;
    issueHistories?: CollectionSelectionModel<IssueHistorySelectionModel>;
    issueSignOffLinks?: CollectionSelectionModel<IssueSignOffLinkSelectionModel>;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    raisedBy?: UserSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    security?: SecuritySelectionModel;
    signOffs?: CollectionSelectionModel<IssueSignOffSelectionModel>;
    solution?: NoteSelectionModel;
    subscribers?: CollectionSelectionModel<UserSelectionModel>;
    taskIssueLinks?: CollectionSelectionModel<TaskIssueLinkSelectionModel>;
    tasks?: CollectionSelectionModel<TaskSelectionModel>;
}
export interface IssueSignOffLinkModel {
    issue?: IssueModel; // @required True
    issueSignOff?: IssueSignOffModel; // @required True
    issueSignOffLinkId?: number; // @primaryKey @required True
    metaData?: MetaDataBaseModel;
}
export interface IssueSignOffLinkSelectionModel {
    issue?: IssueSelectionModel;
    issueSignOff?: IssueSignOffSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface IssueSignOffModel {
    issueSignOffId?: number; // @primaryKey @required True
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataBaseModel;
    sigBlob1?: number[]; // @required False
    signByName?: string; // @required True @length 100
    signedDate?: DateString; // @required False
}
export interface IssueSignOffSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface IssueStatusUpdateModel {
    changedBy?: MetaDataUserModel;
    changedByExternal?: string;
    externalReason?: string;
    internalReason?: string;
    reasonCode?: string;
    source?: number;
    status?: number;
}
export interface IssueSubscriberModel {
    issue?: IssueModel; // @required True
    issueSubscriberId?: number; // @primaryKey @required True
    metaData?: MetaDataBaseModel;
    responsible?: boolean; // @required True
    user?: MetaDataUserModel; // @required True
}
export interface IssueSubscriberSelectionModel {
    issue?: IssueSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface JobFileConfigurationModel {
    futureTasks?: number;
    pOLinesForContractorOrders?: boolean;
    photoCategoryId?: number;
    registrationMode?: number;
    useDueDate?: boolean;
    useProgressData?: boolean;
    username?: string;
    webServiceURL?: string;
}
export interface JobFileConfigurationUpdateModel {
    futureTasks?: number;
    pOLinesForContractorOrders?: boolean;
    password?: string;
    photoCategoryId?: number;
    registrationMode?: number;
    useDueDate?: boolean;
    useProgressData?: boolean;
    username?: string;
    webServiceURL?: string;
}
export interface JobNotReadyCriteriaModel {
    contract?: ContractCriteriaModel;
    description?: string;
    ids?: number[];
    includeInactive?: boolean;
    note?: NoteCriteriaModel;
    notes?: string;
    reason?: string;
    reset?: AgeRangeModel;
    resetComment?: string;
    resetNote?: NoteCriteriaModel;
    resource?: ResourceCriteriaModel;
    task?: TaskCriteriaModel;
}
export interface JobNotReadyModel {
    contract?: ContractModel; // @required True
    description?: string; // @required False @length 200
    jobNotReadyId?: number; // @primaryKey @required True
    metaData?: MetaDataBaseModel;
    note?: NoteModel; // @required False
    notes?: string; // @required False
    reason?: string; // @required False @length 10
    reset?: DateString; // @required False
    resetBy?: MetaDataUserModel; // @required False
    resetComment?: string; // @required False
    resetNote?: NoteModel; // @required False
    resource?: ResourceModel; // @required True
    task?: TaskModel; // @required True
}
export interface JobNotReadySelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    note?: NoteSelectionModel;
    resetBy?: UserSelectionModel;
    resetNote?: NoteSelectionModel;
    resource?: ResourceSelectionModel;
    task?: TaskSelectionModel;
}
export interface JobTypeOptionsModel<T = any> {
    jobType?: string;
    list?: OptionsModel<T>[];
}
export interface LandCheckModel {
    check?: string; // @required True @length 10
    land?: LandModel; // @required True
    landCheckId?: number; // @primaryKey @required True
    metaData?: MetaDataOrderModel;
    validationEntry?: ValidationEntryModel; // @required True
}
export interface LandCheckSelectionModel {
    land?: LandSelectionModel;
    metaData?: MetaDataSelectionModel;
    validationEntry?: ValidationEntrySelectionModel;
}
export interface LandContractRequestModel {
    activities?: CollectionModel<ActivityModel>;
    allowedDays?: number;
    appointments?: CollectionModel<MeetingModel>;
    approvalQueues?: CollectionModel<ApprovalQueueModel>;
    areas?: CollectionModel<MasterAreaModel>;
    baselines?: CollectionModel<ContractBaselineModel>;
    businessUnit?: BusinessUnitModel;
    calendars?: CollectionModel<ContractCalendarModel>;
    clientAdvisedDate?: DateString;
    committedTo?: CollectionModel<SalesCommitmentModel>;
    commonCallsheets?: CollectionModel<CommonCallsheetModel>;
    commonName?: string;
    contactInteractions?: CollectionModel<ContactInteractionModel>;
    contractAdmin?: MetaDataUserModel;
    contractCategory?: ContractCategoryModel;
    contractDays?: CollectionModel<ContractDayModel>;
    contractHistories?: CollectionModel<ContractHistoryModel>;
    contractId?: number;
    contractMetrics?: CollectionModel<ContractMetricModel>;
    contractNotes?: string;
    contractNumber?: string;
    contractStatus?: string;
    contractStatusChanges?: CollectionModel<ContractStatusChanxModel>;
    contractsLogs?: CollectionModel<ContractsLogModel>;
    council?: DevelopmentLocationModel;
    dashStandardSummaryStats?: CollectionModel<DashStandardSummaryStatModel>;
    deadlines?: CollectionModel<DeadlineModel>;
    deliveryInstructions?: string;
    dependentIssues?: CollectionModel<IssueModel>;
    documents?: CollectionModel<DocumentModel>;
    estate?: DevelopmentLocationModel;
    estimatedClientMoveInDate?: DateString;
    estimatedCompleteDate?: DateString;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    files?: CollectionModel<FileModel>;
    flexFields?: FlexFieldModel[];
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    hasStickyNote?: boolean;
    inspRequireds?: CollectionModel<InspRequiredModel>;
    interestedIn?: CollectionModel<SalesInterestModel>;
    invoices?: CollectionModel<InvoiceModel>;
    issues?: CollectionModel<IssueModel>;
    jobFileJobId?: number;
    jobNotReadies?: CollectionModel<JobNotReadyModel>;
    jobType?: string;
    land?: LandModel;
    landPricings?: CollectionModel<LandPricingModel>;
    lastActivityDate?: DateString;
    leadQueues?: CollectionModel<LeadsQueueModel>;
    lotAddress?: LotAddressModel;
    maintenanceJob?: MaintenanceJobModel;
    masterContract?: MasterContractModel;
    metaData?: MetaDataModel;
    milestones?: CollectionModel<ContractMilestoneModel>;
    myHomeFeatures?: CollectionModel<MyHomeFeatureModel>;
    myHomeStories?: CollectionModel<MyHomeStoryModel>;
    notes?: CollectionModel<NoteModel>;
    obligationDate?: DateString;
    programmedCompleteDate?: DateString;
    purchaseOrders?: CollectionModel<POHeaderModel>;
    quoteResponses?: CollectionModel<QuoteResponseModel>;
    referralData?: string;
    region?: RegionModel;
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>;
    requisitions?: CollectionModel<RequisitionModel>;
    rfqActualSummaries?: CollectionModel<RfqActualSummaryModel>;
    rfqActuals?: CollectionModel<RfqActualModel>;
    salesCommitments?: CollectionModel<SalesCommitmentModel>;
    salesInterests?: CollectionModel<SalesInterestModel>;
    salesPerson?: MetaDataUserModel;
    salesStatus?: string;
    salespersonAssignedDate?: DateString;
    scheduleStartDate?: DateString;
    schedulingStatus?: string;
    security?: ContractSecurityModel;
    sharedCommissions?: CollectionModel<SharedCommissionModel>;
    signings?: CollectionModel<SigningModel>;
    siteInstructions?: string;
    sourceContract?: ContractModel;
    stage?: StageModel;
    stats?: ContractStatModel;
    statusReports?: CollectionModel<StatusReportModel>;
    stopDays?: CollectionModel<ContractStopDayModel>;
    subscriptions?: CollectionModel<SubscriptionModel>;
    summary?: SummaryModel;
    supervisor2?: MetaDataUserModel;
    supervisor?: MetaDataUserModel;
    supervisorQc?: MetaDataUserModel;
    supervisorStatus?: string;
    tags?: CollectionModel<TagModel>;
    targetEndDate?: DateString;
    targetStartDate?: DateString;
    tasks?: CollectionModel<TaskModel>;
    template?: TemplateModel;
    tenderVariations?: CollectionModel<TenderVariationModel>;
    userDefined10?: string;
    userDefined1?: string;
    userDefined2?: string;
    userDefined3?: string;
    userDefined4?: string;
    userDefined5?: string;
    userDefined6?: string;
    userDefined7?: string;
    userDefined8?: string;
    userDefined9?: string;
}
export interface LandCriteriaModel {
    contract?: ContractCriteriaModel;
    depth?: DecimalValueRangeModel;
    estate?: DevelopmentLocationCriteriaModel;
    estateStage?: EstateStageCriteriaModel;
    includeInactive?: boolean;
    landIds?: number[];
    landShape?: number[];
    landSize?: DecimalValueRangeModel;
    lotAddress?: LotAddressCriteriaModel;
    obligation?: number[];
    price?: DecimalValueRangeModel;
    public?: boolean;
    salesStatus?: string[];
    suburb?: SuburbCriteriaModel;
    tender?: TenderCriteriaModel;
    width?: DecimalValueRangeModel;
}
export interface LandModel {
    callExpiryDate?: DateString; // @required False
    contract?: ContractModel; // @required False
    depositAmount?: number; // @required True
    depositDate?: DateString; // @required False
    developer?: ResourceModel; // @required False
    effectivePrice?: LandPricingModel;
    estateStage?: EstateStageModel; // @required False
    exchangeCost?: number; // @required True
    financeApprovedDate?: DateString; // @required False
    houseListings?: CollectionModel<HouseListingModel>; // @required True
    houseRestrictionSystem?: string; // @required False
    houseRestrictionsDisplay?: string; // @required False
    landChecks?: CollectionModel<LandCheckModel>; // @required True
    landExchangeDate?: DateString; // @required False
    landId?: number; // @primaryKey @required True
    landShape?: number; // @enum LandShape @required True
    landStatus?: number; // @enum LandStatus @required True
    listedDate?: DateString; // @required False
    lotAddress?: LotAddressModel; // @required False @length 400
    lotDepth?: number; // @required True
    lotSize?: number; // @required True
    lotWidth?: number; // @required True
    masterContracts?: CollectionModel<MasterContractModel>; // @required True
    metaData?: MetaDataModel;
    numberOfBlocks?: number; // @required True
    obligation?: number; // @enum LandObligation @required True
    obligationDate?: DateString;
    orientation?: number; // @enum CompassDirection @required True
    public?: boolean; // @required True
    putExpiryDate?: DateString; // @required False
    rebateDeadlineDate?: DateString; // @required False
    rebateType?: number; // @enum RebateType? @required False
    rebateValue?: number; // @required False
    registrationEstimatedDate?: DateString; // @required False
    salesPersons?: CollectionModel<LandSalesPersonLinkModel>; // @required True
    security?: SecurityModel;
    settlementActualDate?: DateString; // @required False
    specSales?: CollectionModel<SpecSaleModel>; // @required True
    standardDirections?: string; // @required False @length 400
    standardInstructions?: string; // @required False @length 400
    tenders?: CollectionModel<TenderModel>; // @required True
    workflow?: number; // @enum LandWorkflowType @required True
}
export interface LandPricingModel {
    costPrice?: number; // @required True
    effectiveFrom?: DateString; // @required True
    holdingCost?: number; // @required True
    landPricingId?: number; // @primaryKey @required True
    margin?: number; // @required True
    marketingFee?: number; // @required True
    metaData?: MetaDataExtRefModel;
    otherFee?: number; // @required True
    otherTax?: number; // @required True
    siteCosts?: number; // @required True
    stampDuty?: number; // @required True
    totalSellPrice?: number; // @required True
}
export interface LandPricingSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface LandSalesPersonLinkModel {
    hidden?: boolean; // @required True
    land?: LandModel; // @required True
    landSalesPersonLinkId?: number; // @primaryKey @required True
    metaData?: MetaDataBaseModel;
    salesPerson?: MetaDataUserModel; // @required True
}
export interface LandSalesPersonLinkSelectionModel {
    land?: LandSelectionModel;
    metaData?: MetaDataSelectionModel;
    salesPerson?: UserSelectionModel;
}
export interface LandSelectionModel {
    contract?: ContractSelectionModel;
    developer?: ResourceSelectionModel;
    effectivePrice?: LandPricingSelectionModel;
    estateStage?: EstateStageSelectionModel;
    houseListings?: CollectionSelectionModel<HouseListingSelectionModel>;
    landChecks?: CollectionSelectionModel<LandCheckSelectionModel>;
    masterContracts?: CollectionSelectionModel<MasterContractSelectionModel>;
    metaData?: MetaDataSelectionModel;
    salesPersons?: CollectionSelectionModel<LandSalesPersonLinkSelectionModel>;
    specSales?: CollectionSelectionModel<SpecSaleSelectionModel>;
    tenders?: CollectionSelectionModel<TenderSelectionModel>;
}
export interface LeadScoreModel {
    leadScore?: number; // @required True
    leadScoreId?: number; // @primaryKey @required True
    leadScoreType?: number; // @enum LeadScoreType @required True
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataBaseModel;
}
export interface LeadScoreRequestModel {
    isCalculated?: boolean;
    newScore?: number;
}
export interface LeadScoreSelectionModel {
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface LeadsQueueModel {
    actionOnExpiry?: number; // @required False
    addedToQueue?: DateString; // @required False
    contract?: ContractModel; // @required True
    leadsQueueId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    queueExpiry?: DateString; // @required False
    queueStatus?: number; // @enum LeadQueueStatus @required True
    queueType?: number; // @enum LeadQueueType @required True
    salesPerson?: MetaDataUserModel; // @required False
}
export interface LeadsQueueSelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    salesPerson?: UserSelectionModel;
}
export interface LicenceCategoryModel {
    isLicenced?: boolean;
    isOverQuota?: boolean;
    licenceCount?: number;
    name?: string;
    usageCount?: number;
    value?: number;
}
export interface LicenceInfoModel {
    errorMessage?: string;
    expiry?: DateString;
    licenceKey?: string;
    licenceOwner?: string;
    machineIds?: string[];
    maxBusinessUnits?: number;
    maxContracts?: number;
    maxResources?: number;
    maxSalesPerson?: number;
    maxSupervisors?: number;
    nonQuotaCategories?: LicenceCategoryModel[];
    overQuota?: boolean;
    quotaCategories?: LicenceCategoryModel[];
    supplierAccess?: string;
    systemName?: string;
    validLicence?: boolean;
    version?: string;
}
export interface LicenseFileModel {
    licenceData?: number[]; // @required True
    licenceKey?: string; // @required True @length 60
    licenceOwner?: string; // @required True @length 200
    licenseFileId?: number; // @primaryKey @required True
    systemName?: string; // @required True @length 60
}
export interface LinkedTaskCalculationModel {
    linkedDates?: BusinessDaysCalculationModel[];
    newDate?: DateString;
    oldDate?: DateString;
}
export interface LinkedTaskScheduleRequestModel {
    delivery?: string;
    deliveryText?: string;
    dueDate?: DateString;
    expectedCompletion?: DateString;
    messageAction?: number;
    plannedDate?: DateString;
    resource?: ResourceModel;
    taskId?: number;
}
export interface ListingPortalCriteriaModel {
    ids?: number[];
    includeInactive?: boolean;
    name?: string;
}
export interface ListingPortalModel {
    listingPortalId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    name?: string; // @required True @length 50
    productLibraryOptions1?: CollectionModel<ProductLibraryOptionModel>; // @required True
    productLibraryOptions2?: CollectionModel<ProductLibraryOptionModel>; // @required True
    productLibraryOptions?: CollectionModel<ProductLibraryOptionModel>; // @required True
    security?: SecurityModel;
}
export interface ListingPortalSelectionModel {
    metaData?: MetaDataSelectionModel;
    productLibraryOptions1?: CollectionSelectionModel<ProductLibraryOptionSelectionModel>;
    productLibraryOptions2?: CollectionSelectionModel<ProductLibraryOptionSelectionModel>;
    productLibraryOptions?: CollectionSelectionModel<ProductLibraryOptionSelectionModel>;
}
export interface LoginModel {
    deviceApplication?: number;
    deviceId?: string;
    deviceType?: number;
    password?: string;
    rememberMe?: boolean;
    username?: string;
}
export interface LoginUserModel {
    ipAddress?: string; // @required False @length 50
    loginId?: number; // @primaryKey @required True
    loginTime?: DateString; // @required False
    logoutTime?: DateString; // @required False
    machineName?: string; // @required False @length 200
    metaData?: MetaDataBaseModel;
    user?: MetaDataUserModel; // @required True
    userToken?: string; // @required True @length 200
}
export interface LotAddressCriteriaModel {
    address?: string;
    latitude?: string;
    levelNo?: string;
    longitude?: string;
    lotNo?: string;
    lotOrStreetNo?: boolean;
    postCode?: string;
    state?: string;
    street1?: string;
    street2?: string;
    streetNo?: string;
    suburb?: string;
    unitNo?: string;
}
export interface LotAddressModel {
    address?: string;
    latitude?: string;
    levelNo?: string;
    longitude?: string;
    lotNo?: string;
    postCode?: string;
    state?: string;
    street1?: string;
    street2?: string;
    streetNo?: string;
    suburb?: string;
    unitNo?: string;
}
export interface MailSystemIntegrationModel {
    address?: string;
    messageId?: string;
}
export interface MaintenanceContractModel {
    activities?: CollectionModel<ActivityModel>;
    allowedDays?: number;
    appointments?: CollectionModel<MeetingModel>;
    approvalQueues?: CollectionModel<ApprovalQueueModel>;
    areas?: CollectionModel<MasterAreaModel>;
    baselines?: CollectionModel<ContractBaselineModel>;
    calendars?: CollectionModel<ContractCalendarModel>;
    client?: ClientModel;
    clientAdvisedDate?: DateString;
    committedTo?: CollectionModel<SalesCommitmentModel>;
    commonCallsheets?: CollectionModel<CommonCallsheetModel>;
    commonName?: string;
    contactInteractions?: CollectionModel<ContactInteractionModel>;
    contractAdmin?: MetaDataUserModel;
    contractCategory?: ContractCategoryModel;
    contractDays?: CollectionModel<ContractDayModel>;
    contractHistories?: CollectionModel<ContractHistoryModel>;
    contractId?: number;
    contractMetrics?: CollectionModel<ContractMetricModel>;
    contractNotes?: string;
    contractNumber?: string;
    contractStatus?: string;
    contractStatusChanges?: CollectionModel<ContractStatusChanxModel>;
    contractsLogs?: CollectionModel<ContractsLogModel>;
    dashStandardSummaryStats?: CollectionModel<DashStandardSummaryStatModel>;
    deadlines?: CollectionModel<DeadlineModel>;
    dependentIssues?: CollectionModel<IssueModel>;
    documents?: CollectionModel<DocumentModel>;
    estimatedClientMoveInDate?: DateString;
    estimatedCompleteDate?: DateString;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    files?: CollectionModel<FileModel>;
    flexFields?: FlexFieldModel[];
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    hasStickyNote?: boolean;
    inspRequireds?: CollectionModel<InspRequiredModel>;
    interestedIn?: CollectionModel<SalesInterestModel>;
    invoices?: CollectionModel<InvoiceModel>;
    issues?: CollectionModel<IssueModel>;
    jobFileJobId?: number;
    jobNotReadies?: CollectionModel<JobNotReadyModel>;
    jobType?: string;
    land?: LandModel;
    landPricings?: CollectionModel<LandPricingModel>;
    lastActivityDate?: DateString;
    leadQueues?: CollectionModel<LeadsQueueModel>;
    maintenanceJob?: MaintenanceJobModel;
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    milestones?: CollectionModel<ContractMilestoneModel>;
    myHomeFeatures?: CollectionModel<MyHomeFeatureModel>;
    myHomeStories?: CollectionModel<MyHomeStoryModel>;
    notes?: CollectionModel<NoteModel>;
    programmedCompleteDate?: DateString;
    purchaseOrders?: CollectionModel<POHeaderModel>;
    quoteResponses?: CollectionModel<QuoteResponseModel>;
    referralData?: string;
    region?: RegionModel;
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>;
    requisitions?: CollectionModel<RequisitionModel>;
    rfqActualSummaries?: CollectionModel<RfqActualSummaryModel>;
    rfqActuals?: CollectionModel<RfqActualModel>;
    salesCommitments?: CollectionModel<SalesCommitmentModel>;
    salesInterests?: CollectionModel<SalesInterestModel>;
    salesPerson?: MetaDataUserModel;
    salesStatus?: string;
    salespersonAssignedDate?: DateString;
    scheduleStartDate?: DateString;
    schedulingStatus?: string;
    security?: ContractSecurityModel;
    sharedCommissions?: CollectionModel<SharedCommissionModel>;
    signings?: CollectionModel<SigningModel>;
    sourceContract?: ContractModel;
    stage?: StageModel;
    stats?: ContractStatModel;
    statusReports?: CollectionModel<StatusReportModel>;
    stopDays?: CollectionModel<ContractStopDayModel>;
    subscriptions?: CollectionModel<SubscriptionModel>;
    summary?: SummaryModel;
    supervisor2?: MetaDataUserModel;
    supervisor?: MetaDataUserModel;
    supervisorQc?: MetaDataUserModel;
    supervisorStatus?: string;
    tags?: CollectionModel<TagModel>;
    targetEndDate?: DateString;
    targetStartDate?: DateString;
    tasks?: CollectionModel<TaskModel>;
    template?: TemplateModel;
    tenderVariations?: CollectionModel<TenderVariationModel>;
    userDefined10?: string;
    userDefined1?: string;
    userDefined2?: string;
    userDefined3?: string;
    userDefined4?: string;
    userDefined5?: string;
    userDefined6?: string;
    userDefined7?: string;
    userDefined8?: string;
    userDefined9?: string;
}
export interface MaintenanceContractSelectionModel {
    activities?: CollectionSelectionModel<ActivitySelectionModel>;
    appointments?: CollectionSelectionModel<MeetingSelectionModel>;
    approvalQueues?: CollectionSelectionModel<ApprovalQueueSelectionModel>;
    areas?: CollectionSelectionModel<MasterAreaSelectionModel>;
    baselines?: CollectionSelectionModel<ContractBaselineSelectionModel>;
    calendars?: CollectionSelectionModel<ContractCalendarSelectionModel>;
    committedTo?: CollectionSelectionModel<SalesCommitmentSelectionModel>;
    commonCallsheets?: CollectionSelectionModel<CommonCallsheetSelectionModel>;
    contactInteractions?: CollectionSelectionModel<ContactInteractionSelectionModel>;
    contractAdmin?: UserSelectionModel;
    contractCategory?: ContractCategorySelectionModel;
    contractDays?: CollectionSelectionModel<ContractDaySelectionModel>;
    contractHistories?: CollectionSelectionModel<ContractHistorySelectionModel>;
    contractMetrics?: CollectionSelectionModel<ContractMetricSelectionModel>;
    contractStatusChanges?: CollectionSelectionModel<ContractStatusChanxSelectionModel>;
    contractsLogs?: CollectionSelectionModel<ContractsLogSelectionModel>;
    dashStandardSummary?: DashStandardSummaryStatSelectionModel;
    deadlines?: CollectionSelectionModel<DeadlineSelectionModel>;
    dependentIssues?: CollectionSelectionModel<IssueSelectionModel>;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    fast?: boolean;
    files?: CollectionSelectionModel<FileSelectionModel>;
    flexFields?: CollectionSelectionModel<FlexFieldSelectionModel>;
    geoTrackings?: CollectionSelectionModel<GeoTrackingSelectionModel>;
    includeInactive?: boolean;
    inspRequireds?: CollectionSelectionModel<InspRequiredSelectionModel>;
    interestedIn?: CollectionSelectionModel<SalesInterestSelectionModel>;
    invoices?: CollectionSelectionModel<InvoiceSelectionModel>;
    issues?: CollectionSelectionModel<IssueSelectionModel>;
    jobNotReadies?: CollectionSelectionModel<JobNotReadySelectionModel>;
    land?: LandSelectionModel;
    landPricings?: CollectionSelectionModel<LandPricingSelectionModel>;
    leadQueues?: CollectionSelectionModel<LeadsQueueSelectionModel>;
    maintenanceJob?: MaintenanceJobSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    milestones?: CollectionSelectionModel<ContractMilestoneSelectionModel>;
    myHomeFeatures?: CollectionSelectionModel<MyHomeFeatureSelectionModel>;
    myHomeStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    purchaseOrders?: CollectionSelectionModel<POHeaderSelectionModel>;
    quoteResponses?: CollectionSelectionModel<QuoteResponseSelectionModel>;
    region?: RegionSelectionModel;
    requisitionHistories?: CollectionSelectionModel<RequisitionHistorySelectionModel>;
    requisitions?: CollectionSelectionModel<RequisitionSelectionModel>;
    rfqActualSummaries?: CollectionSelectionModel<RfqActualSummarySelectionModel>;
    rfqActuals?: CollectionSelectionModel<RfqActualSelectionModel>;
    salesCommitments?: CollectionSelectionModel<SalesCommitmentSelectionModel>;
    salesInterests?: CollectionSelectionModel<SalesInterestSelectionModel>;
    salesPerson?: UserSelectionModel;
    security?: SecuritySelectionModel;
    sharedCommissions?: CollectionSelectionModel<SharedCommissionSelectionModel>;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
    sourceContract?: ContractSelectionModel;
    stage?: StageSelectionModel;
    stats?: ContractStatSelectionModel;
    statusReports?: CollectionSelectionModel<StatusReportSelectionModel>;
    stopDays?: CollectionSelectionModel<ContractStopDaySelectionModel>;
    subscriptions?: CollectionSelectionModel<SubscriptionSelectionModel>;
    summary?: SummarySelectionModel;
    supervisor2?: UserSelectionModel;
    supervisor?: UserSelectionModel;
    supervisorQc?: UserSelectionModel;
    tags?: CollectionSelectionModel<TagSelectionModel>;
    tasks?: CollectionSelectionModel<TaskSelectionModel>;
    template?: TemplateSelectionModel;
    tenderVariations?: CollectionSelectionModel<TenderVariationSelectionModel>;
}
export interface MaintenanceDetailedStatModel {
    acceptedIssueCompletedTasks?: number; // @required True
    acceptedIssueOpenTasks?: number; // @required True
    acceptedIssuePlannedTasks?: number; // @required True
    acceptedIssues?: number; // @required True
    activeIssues?: number; // @required True
    activeJobs?: number; // @required True
    activeTasks?: number; // @required True
    completedIssues?: number; // @required True
    lateTasks?: number; // @required True
    masterContractId?: number; // @primaryKey @required True
    newIssueCompletedTasks?: number; // @required True
    newIssueOpenTasks?: number; // @required True
    newIssuePlannedTasks?: number; // @required True
    newIssues?: number; // @required True
    pendingIssueCompletedTasks?: number; // @required True
    pendingIssueOpenTasks?: number; // @required True
    pendingIssuePlannedTasks?: number; // @required True
    pendingIssues?: number; // @required True
    rejectedIssues?: number; // @required True
    resolvedIssues?: number; // @required True
    tasksLinkedToIssues?: number; // @required True
    tasksWithoutIssue?: number;
    totalIssues?: number; // @required True
    totalJobs?: number; // @required True
    totalTasks?: number; // @required True
}
export interface MaintenanceDetailedStatSelectionModel {

}
export interface MaintenanceJobCriteriaModel {
    anyContact?: ContactCriteriaModel;
    ids?: number[];
}
export interface MaintenanceJobModel {
    client?: ClientModel; // @required False
    contact1?: ContactModel; // @required False
    contact1Availability?: string; // @required False @length 400
    contact2?: ContactModel; // @required False
    contact2Availability?: string; // @required False @length 400
    contract?: ContractModel; // @required True
    contractId?: number; // @primaryKey @required True
}
export interface MaintenanceJobSelectionModel {
    client?: ClientSelectionModel;
    contact1?: ContactSelectionModel;
    contact2?: ContactSelectionModel;
    contract?: ContractSelectionModel;
}
export interface MaintenanceStatModel {
    activeIssues?: number; // @required True
    activeJobs?: number; // @required True
    activeTasks?: number; // @required True
    totalIssues?: number; // @required True
    totalJobs?: number; // @required True
    totalTasks?: number; // @required True
}
export interface MaintenanceStatSelectionModel {

}
export interface ManagersSubordinateModel {
    managementId?: number; // @primaryKey @required True
    manager?: MetaDataUserModel; // @required True
    metaData?: MetaDataModel;
    securityRole?: SecurityRoleModel; // @required False
    teamMember?: MetaDataUserModel; // @required True
}
export interface ManagersSubordinateSelectionModel {
    manager?: UserSelectionModel;
    metaData?: MetaDataSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    teamMember?: UserSelectionModel;
}
export interface ManualPrecedentModel {
    deltaDays?: number; // @required True
    manualPrecedentId?: number; // @primaryKey @required True
    message?: string; // @required False @length 50
    metaData?: MetaDataModel;
    parentTask?: TaskModel; // @required True
    precedentTask?: TaskModel; // @required True
}
export interface ManualPrecedentSelectionModel {
    metaData?: MetaDataSelectionModel;
    parentTask?: TaskSelectionModel;
    precedentTask?: TaskSelectionModel;
}
export interface MasterAreaCriteriaModel {
    areaIds?: number[];
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    name?: string;
    notRoomGroups?: string[];
    roomGroups?: string[];
}
export interface MasterAreaModel {
    area?: string; // @required True @length 50
    cadRoomCode?: string; // @required False @length 50
    calculateArea?: boolean; // @required True
    childAreas?: CollectionModel<MasterAreaModel>; // @required True
    includeOnEveryHouse?: boolean; // @required True
    internal?: boolean; // @required True
    mandatory?: boolean; // @required True
    masterAreaId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    parentArea?: MasterAreaModel; // @required False
    roomGroup?: string; // @required False @length 50
    security?: SecurityModel;
    showOnVisualisation?: boolean; // @required True
    statOnly?: boolean; // @required True
    tenderOptionCategories?: CollectionModel<TenderOptionCategoryModel>;
    tenderPackageCategories?: CollectionModel<TenderPackageCategoryModel>;
    tenderReportHeader?: TenderReportHeaderModel; // @required False
    webPromoVisible?: boolean; // @required True
}
export interface MasterAreaSelectionModel {
    childAreas?: CollectionSelectionModel<MasterAreaSelectionModel>;
    metaData?: MetaDataSelectionModel;
    parentArea?: MasterAreaSelectionModel;
    tenderReportHeader?: TenderReportHeaderSelectionModel;
}
export interface MasterContractCriteriaModel {
    and?: MasterContractCriteriaModel;
    anyContract?: ContractCriteriaModel;
    brand?: BrandCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    clickHomeKey?: string;
    client?: ClientCriteriaModel;
    constructionContract?: ContractCriteriaModel;
    contractNumber?: string;
    contractSale?: ContractSaleCriteriaModel;
    customBins?: BinCriteriaModel[];
    externalReferences?: ExternalReferenceCriteriaModel;
    favourite?: boolean;
    includeInactive?: boolean;
    land?: LandCriteriaModel;
    landContract?: ContractCriteriaModel;
    leadContract?: ContractCriteriaModel;
    leadScoreCalc?: ValueRangeModel;
    leadScoreManual?: ValueRangeModel;
    lotAddress?: LotAddressCriteriaModel;
    maintenanceContract?: ContractCriteriaModel;
    masterContractIds?: number[];
    not?: MasterContractCriteriaModel;
    notTags?: TagCriteriaModel[];
    or?: MasterContractCriteriaModel;
    parent?: MasterContractCriteriaModel;
    preconstructionContract?: ContractCriteriaModel;
    quickSearch?: string;
    relatedClient?: ClientCriteriaModel;
    relatedResource?: ResourceCriteriaModel;
    roles?: MasterContractRoleCriteriaModel[];
    standardBins?: BinCriteriaModel[];
    tags?: TagCriteriaModel[];
    tender?: TenderCriteriaModel;
}
export interface MasterContractModel {
    activeContract?: ContractModel;
    activeTender?: TenderModel;
    adhocWorkflows?: CollectionModel<ContractModel>;
    appointments?: CollectionModel<MeetingModel>;
    brand?: BrandModel; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    childContracts?: CollectionModel<ContractModel>; // @required True
    childFiles?: CollectionModel<FileModel>;
    childProjects?: CollectionModel<MasterContractModel>; // @required True
    claims?: CollectionModel<ContractClaimModel>; // @required True
    clickHomeKey?: string; // @required True @length 64
    client?: ClientModel; // @required False
    constructionContract?: ContractModel; // @required False
    contact?: ContactModel; // @required False
    contactPoint?: ReferralSourceModel; // @required False
    contractNumber?: string; // @required True @length 20
    contractPriority?: number; // @required True
    contractSale?: ContractSaleModel; // @required False
    contractType?: ContractTypeModel; // @required False
    contractValue?: number; // @required False
    council?: DevelopmentLocationModel; // @required False
    customerSatisfaction?: number; // @required True
    documents?: CollectionModel<DocumentModel>;
    estate?: DevelopmentLocationModel; // @required False
    externalLinks?: CollectionModel<ExternalLinkModel>;
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    externalReferences?: CollectionModel<ExternalReferenceModel>;
    facade?: TenderPackageModel; // @required False
    favourite?: boolean;
    files?: CollectionModel<FileModel>;
    hardFileTracking?: CollectionModel<HardFileTrackingModel>; // @required True
    hasStickyNote?: boolean; // @required True
    houseListings?: CollectionModel<HouseListingModel>; // @required True
    houseType?: HouseTypeModel; // @required False
    isProject?: boolean; // @required True
    issues?: CollectionModel<IssueModel>;
    land?: LandModel; // @required False
    landContract?: ContractModel; // @required False
    leadContract?: ContractModel; // @required False
    leadScores?: CollectionModel<LeadScoreModel>; // @required True
    lotAddress?: LotAddressModel; // @required False @length 400
    maintenanceContracts?: CollectionModel<ContractModel>;
    maintenanceDetailedStats?: MaintenanceDetailedStatModel;
    maintenanceStats?: MaintenanceStatModel;
    marketingActivity?: ReferralSourceModel; // @required False
    masterContractId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    myHomeFeatures?: CollectionModel<MyHomeFeatureModel>; // @required True
    myHomeFeedbacks?: CollectionModel<MyHomeFeedbackModel>; // @required True
    myHomeStories?: CollectionModel<MyHomeStoryModel>; // @required True
    notes?: CollectionModel<NoteModel>;
    otherClients?: CollectionModel<ClientModel>;
    parent?: MasterContractModel; // @required False
    preconstructionContract?: ContractModel; // @required False
    projectCode?: string; // @required False @length 50
    relatedClients?: CollectionModel<ContractClientLinkModel>; // @required True
    relatedResources?: CollectionModel<ContractResourceLinkModel>; // @required True
    resourcePools?: CollectionModel<ResourcePoolModel>; // @required True
    rfqActualSummaries?: CollectionModel<RfqActualSummaryModel>; // @required True
    rfqActuals?: CollectionModel<RfqActualModel>; // @required True
    roleChanges?: CollectionModel<MasterContractRoleChanxModel>; // @required True
    roles?: CollectionModel<MasterContractRoleModel>; // @required True
    salesStatus?: string; // @enum SalesStatus? @required False
    security?: MasterContractSecurityModel;
    signings?: CollectionModel<SigningModel>; // @required True
    standardDirections?: string; // @required False @length 400
    standardInstructions?: string; // @required False @length 400
    stickyNotes?: CollectionModel<NoteModel>;
    tags?: CollectionModel<TagModel>;
    tenders?: CollectionModel<TenderModel>; // @required True
    timeLines?: CollectionModel<TimeLineModel>;
    wishLists?: CollectionModel<WishListModel>; // @required True
}
export interface MasterContractNotificationModel {
    activeContract?: ContractModel;
    activeTender?: TenderModel;
    adhocWorkflows?: CollectionModel<ContractModel>;
    appointments?: CollectionModel<MeetingModel>;
    brand?: BrandModel;
    businessUnit?: BusinessUnitModel;
    childContracts?: CollectionModel<ContractModel>;
    childFiles?: CollectionModel<FileModel>;
    childProjects?: CollectionModel<MasterContractModel>;
    claims?: CollectionModel<ContractClaimModel>;
    clickHomeKey?: string;
    client?: ClientModel;
    constructionContract?: ContractModel;
    contact?: ContactModel;
    contactPoint?: ReferralSourceModel;
    contractNumber?: string;
    contractPriority?: number;
    contractSale?: ContractSaleModel;
    contractType?: ContractTypeModel;
    contractValue?: number;
    council?: DevelopmentLocationModel;
    customerSatisfaction?: number;
    documents?: CollectionModel<DocumentModel>;
    estate?: DevelopmentLocationModel;
    externalLinks?: CollectionModel<ExternalLinkModel>;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    externalReferences?: CollectionModel<ExternalReferenceModel>;
    facade?: TenderPackageModel;
    favourite?: boolean;
    files?: CollectionModel<FileModel>;
    hardFileTracking?: CollectionModel<HardFileTrackingModel>;
    hasStickyNote?: boolean;
    houseListings?: CollectionModel<HouseListingModel>;
    houseType?: HouseTypeModel;
    isProject?: boolean;
    issues?: CollectionModel<IssueModel>;
    land?: LandModel;
    landContract?: ContractModel;
    leadContract?: ContractModel;
    leadScores?: CollectionModel<LeadScoreModel>;
    lotAddress?: LotAddressModel;
    maintenanceContracts?: CollectionModel<ContractModel>;
    maintenanceDetailedStats?: MaintenanceDetailedStatModel;
    maintenanceStats?: MaintenanceStatModel;
    marketingActivity?: ReferralSourceModel;
    masterContractId?: number;
    metaData?: MetaDataModel;
    myHomeFeatures?: CollectionModel<MyHomeFeatureModel>;
    myHomeFeedbacks?: CollectionModel<MyHomeFeedbackModel>;
    myHomeStories?: CollectionModel<MyHomeStoryModel>;
    notes?: CollectionModel<NoteModel>;
    otherClients?: CollectionModel<ClientModel>;
    parent?: MasterContractModel;
    preconstructionContract?: ContractModel;
    projectCode?: string;
    relatedClients?: CollectionModel<ContractClientLinkModel>;
    relatedResources?: CollectionModel<ContractResourceLinkModel>;
    resourcePools?: CollectionModel<ResourcePoolModel>;
    rfqActualSummaries?: CollectionModel<RfqActualSummaryModel>;
    rfqActuals?: CollectionModel<RfqActualModel>;
    roleChanges?: CollectionModel<MasterContractRoleChanxModel>;
    roles?: CollectionModel<MasterContractRoleModel>;
    salesStatus?: string;
    security?: MasterContractSecurityModel;
    signings?: CollectionModel<SigningModel>;
    standardDirections?: string;
    standardInstructions?: string;
    stickyNotes?: CollectionModel<NoteModel>;
    tags?: CollectionModel<TagModel>;
    tenders?: CollectionModel<TenderModel>;
    timeLines?: CollectionModel<TimeLineModel>;
    updatedRole?: MasterContractRoleModel;
    wishLists?: CollectionModel<WishListModel>;
}
export interface MasterContractPriorityUpdateModel {
    priority?: number;
}
export interface MasterContractRoleChanxModel {
    action?: number; // @enum CreateUpdateDeleteActions @required True
    contractRole?: SecurityRoleModel; // @required False
    description?: string; // @required False @length 50
    masterContractRoleChangeId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    user?: MetaDataUserModel; // @required True
}
export interface MasterContractRoleChanxSelectionModel {
    contractRole?: SecurityRoleSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface MasterContractRoleCriteriaModel {
    includeInactive?: boolean;
    role?: SecurityRoleCriteriaModel;
    user?: UserCriteriaModel;
}
export interface MasterContractRoleModel {
    contractRole?: SecurityRoleModel; // @required True
    managersSubordinate?: ManagersSubordinateModel; // @required False
    masterContractRoleId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    user?: MetaDataUserModel; // @required True
}
export interface MasterContractRoleSelectionModel {
    contractRole?: SecurityRoleSelectionModel;
    managersSubordinate?: ManagersSubordinateSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface MasterContractSecurityModel {
    canAddConstructionJob?: boolean;
    canAddInspections?: boolean;
    canAddLeadJob?: boolean;
    canAddMaintenanceJob?: boolean;
    canAddPreconstructionJob?: boolean;
    canAddPricingOnlyTender?: boolean;
    canAddRelatedClient?: boolean;
    canAddRelatedSupplier?: boolean;
    canAddTender?: boolean;
    canCommitToBuySpecSale?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canEditLotAddress?: boolean;
    canInitiateSigning?: boolean;
    canMoveToDeadPool?: boolean;
    canMyHomeLoginAsClient?: boolean;
    canRemoveFromDeadPool?: boolean;
    canUnCommitToBuySpecSale?: boolean;
    canView?: boolean;
}
export interface MasterContractSelectionModel {
    activeContract?: ContractSelectionModel;
    activeTender?: TenderSelectionModel;
    adhocWorkflows?: CollectionSelectionModel<ContractSelectionModel>;
    anyContract?: ContractSelectionModel;
    appointments?: CollectionSelectionModel<MeetingSelectionModel>;
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    childContracts?: CollectionSelectionModel<ContractSelectionModel>;
    childFiles?: CollectionSelectionModel<FileSelectionModel>;
    childProjects?: CollectionSelectionModel<MasterContractSelectionModel>;
    claims?: CollectionSelectionModel<ContractClaimSelectionModel>;
    client?: ClientSelectionModel;
    constructionContract?: ContractSelectionModel;
    contact?: ContactSelectionModel;
    contactPoint?: ReferralSourceSelectionModel;
    contractSale?: ContractSaleSelectionModel;
    contractType?: ContractTypeSelectionModel;
    council?: DevelopmentLocationSelectionModel;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    estate?: DevelopmentLocationSelectionModel;
    externalLinks?: CollectionSelectionModel<ExternalLinkSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    externalReferences?: CollectionSelectionModel<ExternalReferenceSelectionModel>;
    facade?: TenderPackageSelectionModel;
    fast?: boolean;
    favourite?: boolean;
    files?: CollectionSelectionModel<FileSelectionModel>;
    hardFileTracking?: CollectionSelectionModel<HardFileTrackingSelectionModel>;
    houseListings?: CollectionSelectionModel<HouseListingSelectionModel>;
    houseType?: HouseTypeSelectionModel;
    issues?: CollectionSelectionModel<IssueSelectionModel>;
    land?: LandSelectionModel;
    landContract?: ContractSelectionModel;
    leadContract?: ContractSelectionModel;
    leadScores?: CollectionSelectionModel<LeadScoreSelectionModel>;
    maintenanceContracts?: CollectionSelectionModel<ContractSelectionModel>;
    maintenanceDetailedStats?: MaintenanceDetailedStatSelectionModel;
    maintenanceStats?: MaintenanceStatSelectionModel;
    marketingActivity?: ReferralSourceSelectionModel;
    metaData?: MetaDataSelectionModel;
    myHomeFeatures?: CollectionSelectionModel<MyHomeFeatureSelectionModel>;
    myHomeFeedbacks?: CollectionSelectionModel<MyHomeFeedbackSelectionModel>;
    myHomeStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    otherClients?: CollectionSelectionModel<ClientSelectionModel>;
    parent?: MasterContractSelectionModel;
    preconstructionContract?: ContractSelectionModel;
    relatedClients?: CollectionSelectionModel<ContractClientLinkSelectionModel>;
    relatedResources?: CollectionSelectionModel<ContractResourceLinkSelectionModel>;
    resourcePools?: CollectionSelectionModel<ResourcePoolSelectionModel>;
    rfqActualSummaries?: CollectionSelectionModel<RfqActualSummarySelectionModel>;
    rfqActuals?: CollectionSelectionModel<RfqActualSelectionModel>;
    roleChanges?: CollectionSelectionModel<MasterContractRoleChanxSelectionModel>;
    roles?: CollectionSelectionModel<MasterContractRoleSelectionModel>;
    security?: SecuritySelectionModel;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
    stickyNotes?: CollectionSelectionModel<NoteSelectionModel>;
    tags?: CollectionSelectionModel<TagSelectionModel>;
    tenders?: CollectionSelectionModel<TenderSelectionModel>;
    timeLines?: CollectionSelectionModel<TimeLineSelectionModel>;
    wishLists?: CollectionSelectionModel<WishListSelectionModel>;
}
export interface MasterContractTagModel {
    masterContract?: MasterContractModel; // @required True
    masterContractTagId?: number; // @primaryKey @required True
    stdCreatedOn?: DateString; // @required True
    tag?: TagModel; // @required True
}
export interface MasterContractTagSelectionModel {
    masterContract?: MasterContractSelectionModel;
    tag?: TagSelectionModel;
}
export interface MasterDimensionModel {
    businessUnit?: BusinessUnitModel; // @required True
    houseDimensions?: CollectionModel<HouseDimensionModel>; // @required True
    masterDimensionId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    tenderDimensions?: CollectionModel<TenderDimensionModel>; // @required True
    tenderPackageSetups?: CollectionModel<TenderPackageSetupModel>; // @required True
}
export interface MasterDimensionSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    houseDimensions?: CollectionSelectionModel<HouseDimensionSelectionModel>;
    metaData?: MetaDataSelectionModel;
    tenderDimensions?: CollectionSelectionModel<TenderDimensionSelectionModel>;
    tenderPackageSetups?: CollectionSelectionModel<TenderPackageSetupSelectionModel>;
}
export interface MasterReportCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    reportAreas?: number[];
    reportCategories?: BaseCriteriaModel;
    reportTitle?: string;
    specialReports?: BaseCriteriaModel;
}
export interface MasterReportModel {
    activityReports?: CollectionModel<ActivityReportModel>; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    defaultParameters?: string; // @required False @length 1000
    legacyConstruction?: boolean; // @required True
    legacyOffice?: boolean; // @required True
    masterReportId?: number; // @primaryKey @required True
    mayExport?: boolean; // @required True
    metaData?: MetaDataModel;
    reportArea?: number; // @enum ReportAreas @required True
    reportCategory?: ReportCategoryModel; // @required True
    reportFileName?: string; // @required False @length 255
    reportInstructions?: string; // @required False
    reportTitle?: string; // @required True @length 255
    security?: SecurityModel;
    securityRole?: SecurityRoleModel; // @required True
    specialReport?: number; // @enum SpecialReport? @required False
    standard?: boolean; // @required True
    userReports?: CollectionModel<UserReportModel>; // @required True
}
export interface MasterReportSelectionModel {
    activityReports?: CollectionSelectionModel<ActivityReportSelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    reportCategory?: ReportCategorySelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    userReports?: CollectionSelectionModel<UserReportSelectionModel>;
}
export interface MeetingAttendeeCriteriaModel {
    actors?: ActorCriteriaModel;
    ids?: number[];
    meetings?: MeetingCriteriaModel;
}
export interface MeetingAttendeeModel {
    actor?: ActorModel; // @required True
    alternativeTimes?: string; // @required False @length 400
    meetingAttendeeId?: number; // @primaryKey @required True
    meetingStatus?: number; // @enum AppointmentStatus @required True
    metaData?: MetaDataBaseModel;
}
export interface MeetingAttendeeSelectionModel {
    actor?: ActorSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface MeetingCriteriaModel {
    ageRange?: AgeRangeModel;
    attendees?: MeetingAttendeeCriteriaModel;
    clients?: ClientCriteriaModel;
    contracts?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    meetingStatuses?: number[];
    meetingTasks?: TaskCriteriaModel;
    myHomeVisible?: boolean;
    organiser?: UserCriteriaModel;
    quickSearch?: string;
    rooms?: ResourceCriteriaModel;
    tasks?: TaskCriteriaModel;
}
export interface MeetingFileModel {
    file?: FileModel; // @required True
    meeting?: MeetingModel; // @required True
    meetingFileId?: number; // @primaryKey @required True
    metaData?: MetaDataModel;
    myHomeOverride?: boolean; // @required True
}
export interface MeetingFileSelectionModel {
    file?: FileSelectionModel;
    meeting?: MeetingSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface MeetingModel {
    additionalData?: number; // @required False
    additionalType?: number; // @enum ApprovalType? @required False
    alternativeLocation?: string; // @required False @length 400
    attendees?: CollectionModel<MeetingAttendeeModel>; // @required True
    body?: string; // @required False
    calendarFile?: FileModel; // @required False
    contract?: ContractModel; // @required False
    duration?: number; // @required False
    fieldDevice?: boolean; // @required True
    jobFile?: boolean; // @required True
    mailAddressInformation?: string; // @required False @length 1000
    mailSystemIntegration?: string;
    meeting?: DateString; // @required False
    meetingFiles?: CollectionModel<MeetingFileModel>; // @required True
    meetingId?: number; // @primaryKey @required True
    meetingStatus?: number; // @enum AppointmentStatus @required True
    metaData?: MetaDataModel;
    myHome?: boolean; // @required True
    note?: NoteModel; // @required False
    organiser?: MetaDataUserModel; // @required False
    room?: ResourceModel; // @required False
    security?: SecurityModel;
    subject?: string; // @required True @length 400
    task?: TaskModel; // @required False
}
export interface MeetingSelectionModel {
    attendees?: CollectionSelectionModel<MeetingAttendeeSelectionModel>;
    calendarFile?: FileSelectionModel;
    contract?: ContractSelectionModel;
    meetingFiles?: CollectionSelectionModel<MeetingFileSelectionModel>;
    metaData?: MetaDataSelectionModel;
    note?: NoteSelectionModel;
    organiser?: UserSelectionModel;
    room?: ResourceSelectionModel;
    security?: SecuritySelectionModel;
    task?: TaskSelectionModel;
}
export interface MessageCriteriaModel {
    ageRange?: AgeRangeModel;
    contactMethod?: string[];
    includeInactive?: boolean;
    includeSuperseded?: boolean;
    messageFrom?: UserCriteriaModel;
    messageIds?: number[];
    succeeded?: boolean;
    supplier?: ResourceCriteriaModel;
    task?: TaskCriteriaModel;
}
export interface MessageForwardRequestModel {
    messageBy?: string;
    messageTo?: string;
}
export interface MessageModel {
    deliveryMessage?: string; // @required False
    jobFileURL?: string; // @required False @length 500
    message?: DateString; // @required False
    messageBody?: string; // @required False
    messageBy?: string; // @enum ContactMethods @required True
    messageCreated?: DateString; // @required True
    messageFrom?: MetaDataUserModel; // @required True
    messageId?: number; // @primaryKey @required True
    messageTo?: string; // @required True @length 255
    metaData?: MetaDataModel;
    onHold?: boolean; // @required True
    previousResource?: ResourceModel; // @required False
    priority?: number; // @required True
    receiptDetails?: string; // @required False @length 255
    rescheduleReason?: string; // @required False @length 255
    resource?: ResourceModel; // @required True
    task?: TaskModel; // @required True
    taskResource?: ResourceModel; // @required False
    transmissionDetails?: string; // @required False @length 255
    type?: string; // @enum MessageTypes @required True
    wIDateExpectedCompletion?: DateString; // @required False
    wIDatePlanned?: DateString; // @required False
    wIDelivery?: string; // @enum WorkItemDeliveryOptions? @required False
    wIPreviousDateExpectedCompletion?: DateString; // @required False
    wIPreviousDatePlanned?: DateString; // @required False
}
export interface MessagePriorityUpdateModel {
    acknowledge?: boolean;
    priority?: number;
}
export interface MessageSelectionModel {
    messageFrom?: UserSelectionModel;
    metaData?: MetaDataSelectionModel;
    previousResource?: ResourceSelectionModel;
    resource?: ResourceSelectionModel;
    task?: TaskSelectionModel;
    taskResource?: ResourceSelectionModel;
}
export interface MessageTemplateModel {
    body?: string; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    messageTemplateId?: number; // @primaryKey @required True
    messageType?: number; // @enum MessageTemplateType @required True
    metaData?: MetaDataModel;
    name?: string; // @required True @length 100
    subject?: string; // @required True @length 400
    templateId?: string; // @required True @length 100
}
export interface MessageTemplateSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface MetaDataBaseModel {
    active?: boolean;
    createdBy?: MetaDataUserModel;
    createdOn?: DateString;
    modifiedBy?: MetaDataUserModel;
    modifiedOn?: DateString;
}
export interface MetaDataExtRefModel {
    active?: boolean;
    createdBy?: MetaDataUserModel;
    createdOn?: DateString;
    extRef?: string;
    modifiedBy?: MetaDataUserModel;
    modifiedOn?: DateString;
}
export interface MetaDataModel {
    active?: boolean;
    createdBy?: MetaDataUserModel;
    createdOn?: DateString;
    customOrder?: number;
    extRef?: string;
    modifiedBy?: MetaDataUserModel;
    modifiedOn?: DateString;
}
export interface MetaDataOrderModel {
    active?: boolean;
    createdBy?: MetaDataUserModel;
    createdOn?: DateString;
    customOrder?: number;
    modifiedBy?: MetaDataUserModel;
    modifiedOn?: DateString;
}
export interface MetaDataSelectionModel {

}
export interface MetaDataUserModel {
    businessUnitId?: number;
    businessUnitName?: string; // @required False @length 50
    emailAddress?: string; // @required False @length 60
    extRef?: string;
    fullName?: string;
    fullUser?: UserModel;
    profilePhoto?: FileModel;
    stdExtRef?: string; // @required False @length 50
    userFullName?: string; // @required True @length 100
    userId?: number; // @primaryKey @required True
    userName?: string; // @required True @length 50
}
export interface MyHomeAccountDetailsModel {
    contact?: ContactModel;
    password?: string;
    url?: string;
    username?: string;
}
export interface MyHomeFeatureModel {
    available?: DateString; // @required True
    contract?: ContractModel; // @required True
    expired?: DateString; // @required True
    feature?: string; // @required True @length 10
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataBaseModel;
    myHomeFeatureId?: number; // @primaryKey @required True
}
export interface MyHomeFeatureSelectionModel {
    contract?: ContractSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface MyHomeFeedbackModel {
    comment?: string; // @required False @length 400
    contact?: ContactModel; // @required False
    customerSatisfaction?: number; // @required True
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataBaseModel;
    myHomeFeedbackId?: number; // @primaryKey @required True
}
export interface MyHomeFeedbackSelectionModel {
    contact?: ContactSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface MyHomeRegistrationDetailsModel {
    contact?: ContactModel;
    expiry?: DateString;
    url?: string;
}
export interface MyHomeRegistrationRequestModel {
    contactId?: number;
    password?: string;
    sendPassword?: boolean;
    username?: string;
}
export interface MyHomeSsoRegistrationLinkResponseModel {
    contact?: ContactModel;
    expiry?: DateString;
    url?: string;
}
export interface MyHomeStoryModel {
    contract?: ContractModel; // @required False
    dateCompleted?: DateString; // @required False
    dateForecast?: DateString; // @required False
    description?: string; // @required False @length 255
    documents?: CollectionModel<DocumentModel>;
    files?: CollectionModel<FileModel>;
    flexFields?: CollectionModel<FlexFieldModel>;
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    myHomeStoryId?: number; // @primaryKey @required True
    myHomeTemplate?: MyHomeTemplateModel; // @required False
    note?: NoteModel; // @required False
    soon?: boolean; // @required True
    sourceTask?: TaskModel; // @required False
    storyAfter?: string; // @required False
    storyBefore?: string; // @required False
    storyDuring?: string; // @required False
    tasks?: CollectionModel<TaskModel>;
}
export interface MyHomeStorySelectionModel {
    contract?: ContractSelectionModel;
    files?: CollectionSelectionModel<FileSelectionModel>;
    metaData?: MetaDataSelectionModel;
    myHomeTemplate?: MyHomeTemplateSelectionModel;
    note?: NoteSelectionModel;
    sourceTask?: TaskSelectionModel;
    tasks?: CollectionSelectionModel<TaskSelectionModel>;
}
export interface MyHomeTemplateModel {
    alternativeTaskName?: string; // @required False @length 255
    businessUnit?: BusinessUnitModel; // @required True
    dateDisplay?: number; // @enum MyHomeDateDisplay @required True
    daysAfterEnd?: number; // @required True
    daysAfterStart?: number; // @required True
    daysBeforeEnd?: number; // @required True
    daysBeforeStart?: number; // @required True
    description?: string; // @required False
    estimateRequired?: boolean; // @required True
    file?: FileModel; // @required False
    metaData?: MetaDataModel;
    myHomeStories?: CollectionModel<MyHomeStoryModel>; // @required True
    myHomeTemplateId?: number; // @primaryKey @required True
    myHomeTemplateSetups?: CollectionModel<MyHomeTemplateSetupModel>; // @required True
    security?: SecurityModel;
    specialFunction?: number; // @enum MyHomeSpecialFunction @required True
    storyAfter?: string; // @required False
    storyBefore?: string; // @required False
    storyDuring?: string; // @required False
    summary?: SummaryModel; // @required False
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>; // @required True
    templateItems?: CollectionModel<TemplateItemModel>; // @required True
    templateName?: string; // @required True @length 255
}
export interface MyHomeTemplateSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    myHomeStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    myHomeTemplateSetups?: CollectionSelectionModel<MyHomeTemplateSetupSelectionModel>;
    summary?: SummarySelectionModel;
    templateItemHistories?: CollectionSelectionModel<TemplateItemHistorySelectionModel>;
    templateItems?: CollectionSelectionModel<TemplateItemSelectionModel>;
}
export interface MyHomeTemplateSetModel {
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataModel;
    myHomeTemplateSetId?: number; // @primaryKey @required True
    myHomeTemplateSetups?: CollectionModel<MyHomeTemplateSetupModel>; // @required True
    security?: SecurityModel;
    summary?: SummaryModel; // @required False
    templateName?: string; // @required True @length 255
}
export interface MyHomeTemplateSetSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    myHomeTemplateSetups?: CollectionSelectionModel<MyHomeTemplateSetupSelectionModel>;
    summary?: SummarySelectionModel;
}
export interface MyHomeTemplateSetupModel {
    metaData?: MetaDataModel;
    myHomeTemplate?: MyHomeTemplateModel; // @required True
    myHomeTemplateSet?: MyHomeTemplateSetModel; // @required True
    myHomeTemplateSetupId?: number; // @primaryKey @required True
    security?: SecurityModel;
}
export interface MyHomeTemplateSetupSelectionModel {
    metaData?: MetaDataSelectionModel;
    myHomeTemplate?: MyHomeTemplateSelectionModel;
    myHomeTemplateSet?: MyHomeTemplateSetSelectionModel;
}
export interface MyTaskModel {
    myTaskId?: number; // @primaryKey @required True
}
export interface NoteCriteriaModel {
    ageRange?: AgeRangeModel;
    byUsers?: UserCriteriaModel;
    clients?: ClientCriteriaModel;
    complete?: boolean;
    excludeNoteTypes?: string[];
    files?: FileCriteriaModel;
    forUsers?: UserCriteriaModel;
    includeInactive?: boolean;
    isSticky?: boolean;
    jobs?: ContractCriteriaModel;
    myHomeVisible?: boolean;
    noteIds?: number[];
    noteTypes?: string[];
    notifyUsers?: UserCriteriaModel;
    quickSearch?: string;
    reminderDateRange?: AgeRangeModel;
    reminderDue?: boolean;
    reminderSent?: boolean;
    source?: number;
    tasks?: TaskCriteriaModel;
}
export interface NoteDocLinkModel {
    file?: FileModel; // @required True
    metaData?: MetaDataModel;
    note?: NoteModel; // @required True
    noteDocLinkId?: number; // @primaryKey @required True
}
export interface NoteFollowerModel {
    actor?: ActorModel; // @required False
    metaData?: MetaDataBaseModel;
    note?: NoteModel; // @required True
    noteFollowerId?: number; // @primaryKey @required True
    reminderDate?: DateString; // @required False
    user?: MetaDataUserModel; // @required False
}
export interface NoteFollowerSelectionModel {
    actor?: ActorSelectionModel;
    metaData?: MetaDataSelectionModel;
    note?: NoteSelectionModel;
    user?: UserSelectionModel;
}
export interface NoteGroupModel {
    metaData?: MetaDataBaseModel;
    noteGroupId?: number; // @primaryKey @required True
    notes?: CollectionModel<NoteModel>; // @required True
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>; // @required True
    requisitions?: CollectionModel<RequisitionModel>; // @required True
}
export interface NoteGroupSelectionModel {
    metaData?: MetaDataSelectionModel;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    requisitionHistories?: CollectionSelectionModel<RequisitionHistorySelectionModel>;
    requisitions?: CollectionSelectionModel<RequisitionSelectionModel>;
}
export interface NoteModel {
    activityDate?: DateString; // @required True
    appointments?: CollectionModel<MeetingModel>; // @required True
    author?: MetaDataUserModel; // @required True
    body?: string; // @required False
    client?: ClientModel; // @required False
    completedDate?: DateString; // @required False
    contract?: ContractModel; // @required False
    conversation?: NoteModel; // @required False
    conversationId?: number; // @required False
    conversations?: CollectionModel<NoteModel>; // @required True
    documents?: CollectionModel<DocumentModel>;
    duration?: number; // @required False
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    files?: CollectionModel<FileModel>;
    for?: MetaDataUserModel; // @required False
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    isFieldDeviceVisible?: boolean; // @required True
    isMyHomeVisible?: boolean; // @required True
    isResourceAccessVisible?: boolean; // @required True
    isSeen?: boolean;
    isSticky?: boolean;
    isSupplierAccessVisible?: boolean;
    jobFileNoteId?: number; // @required False
    mailSystemIntegration?: MailSystemIntegrationModel;
    meetingLocation?: string; // @required False @length 1000
    metaData?: MetaDataModel;
    myHomeStories?: CollectionModel<MyHomeStoryModel>; // @required True
    noteForRole?: SecurityRoleModel; // @required True
    noteForUser?: CollectionModel<NoteFollowerModel>; // @required True
    noteGroup?: NoteGroupModel; // @required False
    noteId?: number; // @primaryKey @required True
    noteResources?: CollectionModel<NoteResourceModel>; // @required True
    noteType?: string; // @enum NoteTypes @required True
    noteViews?: CollectionModel<NoteViewModel>; // @required True
    reminderDate?: DateString; // @required False
    reminderSent?: boolean; // @required True
    replies?: CollectionModel<NoteModel>; // @required True
    replyTo?: NoteModel; // @required False
    resource?: ResourceModel; // @required False
    resourceCode?: ResourceCodeModel; // @required False
    security?: NoteSecurityModel;
    source?: number; // @enum Source @required True
    stickyNote?: number; // @enum StickyNotes @required True
    subject?: string; // @required False @length 100
    tags?: CollectionModel<TagModel>;
    task?: TaskModel; // @required False
    unknownAuthor?: string; // @required False @length 500
    webVisitId?: string;
}
export interface NoteNotificationModel {
    activityDate?: DateString;
    activityEndDate?: DateString;
    appointmentLocation?: ResourceModel;
    appointments?: CollectionModel<MeetingModel>;
    author?: MetaDataUserModel;
    authorName?: string;
    body?: string;
    client?: ClientModel;
    completedDate?: DateString;
    contract?: ContractModel;
    conversation?: NoteModel;
    conversationId?: number;
    conversations?: CollectionModel<NoteModel>;
    documents?: CollectionModel<DocumentModel>;
    duration?: number;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    files?: CollectionModel<FileModel>;
    for?: MetaDataUserModel;
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    isFieldDeviceVisible?: boolean;
    isMyHomeVisible?: boolean;
    isResourceAccessVisible?: boolean;
    isSeen?: boolean;
    isSticky?: boolean;
    isSupplierAccessVisible?: boolean;
    jobFileNoteId?: number;
    mailSystemIntegration?: MailSystemIntegrationModel;
    meetingLocation?: string;
    metaData?: MetaDataModel;
    myHomeStories?: CollectionModel<MyHomeStoryModel>;
    noteForRole?: SecurityRoleModel;
    noteForUser?: CollectionModel<NoteFollowerModel>;
    noteGroup?: NoteGroupModel;
    noteId?: number;
    noteResources?: CollectionModel<NoteResourceModel>;
    noteType?: string;
    noteViews?: CollectionModel<NoteViewModel>;
    reminderDate?: DateString;
    reminderSent?: boolean;
    replies?: CollectionModel<NoteModel>;
    replyTo?: NoteModel;
    resource?: ResourceModel;
    resourceCode?: ResourceCodeModel;
    security?: NoteSecurityModel;
    source?: number;
    stickyNote?: number;
    subject?: string;
    taggedUser?: MetaDataUserModel;
    tags?: CollectionModel<TagModel>;
    task?: TaskModel;
    unknownAuthor?: string;
    webVisitId?: string;
}
export interface NoteResourceModel {
    metaData?: MetaDataBaseModel;
    note?: NoteModel; // @required True
    noteResourceId?: number; // @primaryKey @required True
    resource?: ResourceModel; // @required True
}
export interface NoteResourceSelectionModel {
    metaData?: MetaDataSelectionModel;
    note?: NoteSelectionModel;
    resource?: ResourceSelectionModel;
}
export interface NoteSecurityModel {
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
}
export interface NoteSelectionModel {
    appointments?: CollectionSelectionModel<MeetingSelectionModel>;
    author?: UserSelectionModel;
    client?: ClientSelectionModel;
    contract?: ContractSelectionModel;
    conversation?: NoteSelectionModel;
    conversations?: CollectionSelectionModel<NoteSelectionModel>;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    files?: CollectionSelectionModel<FileSelectionModel>;
    for?: UserSelectionModel;
    geoTrackings?: CollectionSelectionModel<GeoTrackingSelectionModel>;
    metaData?: MetaDataSelectionModel;
    myHomeStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    noteForRole?: SecurityRoleSelectionModel;
    noteForUser?: CollectionSelectionModel<NoteFollowerSelectionModel>;
    noteGroup?: NoteGroupSelectionModel;
    noteResources?: CollectionSelectionModel<NoteResourceSelectionModel>;
    noteViews?: CollectionSelectionModel<NoteViewSelectionModel>;
    replies?: CollectionSelectionModel<NoteSelectionModel>;
    replyTo?: NoteSelectionModel;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    security?: SecuritySelectionModel;
    tags?: CollectionSelectionModel<TagSelectionModel>;
    task?: TaskSelectionModel;
}
export interface NotesTagModel {
    metaData?: MetaDataModel;
    notesTagId?: number; // @primaryKey @required True
    tag?: TagModel; // @required True
}
export interface NotesTagSelectionModel {
    metaData?: MetaDataSelectionModel;
    tag?: TagSelectionModel;
}
export interface NoteViewModel {
    actor?: ActorModel; // @required True
    note?: NoteModel; // @required True
    noteViewId?: number; // @primaryKey @required True
    timestamp?: DateString; // @required True
}
export interface NoteViewSelectionModel {
    actor?: ActorSelectionModel;
    note?: NoteSelectionModel;
}
export interface NotificationCriteriaModel {
    idRange?: ValueRangeModel;
    ids?: number[];
    includeInactive?: boolean;
    supervisor?: UserCriteriaModel;
}
export interface NotificationModel {
    codeValue1?: string; // @required False @length 10
    codeValue2?: string; // @required False @length 10
    contract?: ContractModel; // @required False
    dateValue1?: DateString; // @required False
    dateValue2?: DateString; // @required False
    dateValue3?: DateString; // @required False
    dateValue4?: DateString; // @required False
    iDValue1?: number; // @required False
    iDValue2?: number; // @required False
    metaData?: MetaDataModel;
    notes1?: string; // @required False
    notes2?: string; // @required False
    notificationId?: number; // @primaryKey @required True
    notificationMessage?: string; // @required False @length 100
    notificationPriority?: number; // @required True
    notificationType?: string; // @required True @length 3
    primaryKey?: number; // @required False
    textValue1?: string; // @required False @length 100
    textValue2?: string; // @required False @length 100
    user?: MetaDataUserModel; // @required True
}
export interface NotificationPreferenceCriteriaModel {
    ids?: number[];
    includeInactive?: boolean;
    notificationSettings?: NotificationSettingCriteriaModel;
    users?: UserCriteriaModel;
}
export interface NotificationPreferenceModel {
    metaData?: MetaDataBaseModel;
    methods?: number; // @enum NotificationMethods @required True
    notificationPreferenceId?: number; // @primaryKey @required True
    notificationSetting?: NotificationSettingModel; // @required True
    user?: MetaDataUserModel; // @required True
}
export interface NotificationPreferenceSelectionModel {
    metaData?: MetaDataSelectionModel;
    notificationSetting?: NotificationSettingSelectionModel;
    user?: UserSelectionModel;
}
export interface NotificationSelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface NotificationSettingCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    eventTypes?: number[];
    ids?: number[];
    includeInactive?: boolean;
    jobTypes?: string[];
    mandatory?: boolean;
}
export interface NotificationSettingModel {
    authorEmail?: string; // @required False @length 100
    businessUnit?: BusinessUnitModel; // @required True
    description?: string; // @required False @length 100
    emailAddress?: string; // @required False @length 100
    eventType?: number; // @enum EventType @required True
    jobTypes?: number; // @enum JobTypesMask @required True
    masterReport?: MasterReportModel; // @required False
    messageTemplate?: MessageTemplateModel; // @required False
    metaData?: MetaDataModel;
    methods?: number; // @enum NotificationMethods @required True
    notificationPreferences?: CollectionModel<NotificationPreferenceModel>; // @required True
    notificationPriority?: number; // @enum NotificationPriority @required True
    notificationSettingId?: number; // @primaryKey @required True
    recipients?: number; // @enum NotificationRecipients? @required False
    security?: SecurityModel;
    source?: number; // @enum Source? @required False
    urlDestinations?: number; // @enum DeepLinkTargets @required True
    user?: MetaDataUserModel; // @required False
}
export interface NotificationSettingSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    masterReport?: MasterReportSelectionModel;
    messageTemplate?: MessageTemplateSelectionModel;
    metaData?: MetaDataSelectionModel;
    notificationPreferences?: CollectionSelectionModel<NotificationPreferenceSelectionModel>;
    user?: UserSelectionModel;
}
export interface OidcSettingsModel {
    authorityUrl?: string;
    clientId?: string;
    scope?: string;
}
export interface OptionsModel<T = any> {
    key?: T;
    label?: string;
}
export interface PagedRequestModel<T = any, U = any> {
    criteria?: U;
    pagination?: PagingDetailsModel;
    selection?: T;
    sorting?: SortModel[];
}
export interface PagedResponseModel<T = any> {
    results?: T[];
    totalCount?: number;
}
export interface PagingDetailsModel {
    skip?: number;
    take?: number;
}
export interface PasswordRequestModel {
    password?: string;
}
export interface PlusFilterCriteriaModel {
    businessUnitId?: number;
    eventType?: number;
}
export interface PlusFilterModel {
    businessUnit?: BusinessUnitModel; // @required True
    contractStatusFilter?: string; // @required False @length 8
    eventType?: number; // @enum EventType @required True
    jobTypeFilter?: string; // @required False @length 5
    plusFilterId?: number; // @primaryKey @required True
    plusSubscription?: PlusSubscriptionModel; // @required True
}
export interface PlusFilterSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    plusSubscription?: PlusSubscriptionSelectionModel;
}
export interface PlusMessageModel {
    codeValue1?: string; // @required False @length 10
    codeValue2?: string; // @required False @length 10
    dateValue1?: DateString; // @required False
    dateValue2?: DateString; // @required False
    eventType?: number; // @enum EventType @required True
    masterContractId?: number; // @required False
    notes?: string; // @required False
    otherId1?: number; // @required False
    otherId2?: number; // @required False
    plusMessageId?: number; // @primaryKey @required True
    primaryId?: number; // @required False
    textValue1?: string; // @required False @length 400
    textValue2?: string; // @required False @length 400
    timestamp?: DateString; // @required True
}
export interface PlusMessageSelectionModel {

}
export interface PlusSubscriptionCriteriaModel {
    plusExternalIds?: string[];
    plusFilters?: PlusFilterCriteriaModel;
    plusSubscriptionIds?: number[];
}
export interface PlusSubscriptionModel {
    metaData?: MetaDataModel;
    plusExternalId?: string; // @required True @length 36
    plusFilters?: CollectionModel<PlusFilterModel>; // @required True
    plusSubscriptionId?: number; // @primaryKey @required True
}
export interface PlusSubscriptionSelectionModel {
    metaData?: MetaDataSelectionModel;
    plusFilters?: CollectionSelectionModel<PlusFilterSelectionModel>;
}
export interface POAutoTaskRuleModel {
    administration?: boolean; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataModel;
    pOAutoTaskRuleId?: number; // @primaryKey @required True
    pOMatchingRule?: string; // @required True @length 50
    resourceCode?: ResourceCodeModel; // @required True
    ruleEnd?: DateString; // @required False
    ruleStart?: DateString; // @required False
    taskName?: string; // @required True @length 50
    taskOrder?: number; // @required True
}
export interface POAutoTaskRuleSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
}
export interface POHeaderCriteriaModel {
    contract?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    pOReference?: string;
    resource?: ResourceCriteriaModel;
    task?: TaskCriteriaModel;
}
export interface POHeaderModel {
    approvedPercent?: number; // @required True
    contactBy?: string; // @required False @length 100
    contactMethod?: string; // @enum ContactMethods? @required False
    contactPerson?: string; // @required False @length 100
    contract?: ContractModel; // @required True
    file?: FileModel; // @required False
    fileName?: string; // @required False @length 100
    invoices?: CollectionModel<InvoiceModel>; // @required True
    metaData?: MetaDataModel;
    pODate?: DateString; // @required True
    pOHeaderId?: number; // @primaryKey @required True
    pOLines?: CollectionModel<POLineModel>; // @required True
    pOPayments?: CollectionModel<POPaymentModel>; // @required True
    pOReceipts?: CollectionModel<POReceiptModel>; // @required True
    pOReference?: string; // @required True @length 50
    partialPayment?: boolean; // @required False
    requisition?: RequisitionModel; // @required False
    requisitionReference?: string; // @required False @length 50
    resource?: ResourceModel; // @required False
    resourceExtRef?: string; // @required False @length 50
    sOHeaders?: CollectionModel<SOHeaderModel>; // @required True
    status?: string; // @enum POStatuses @required True
    taskLinks?: CollectionModel<POTaskLinkModel>; // @required True
    tasks?: CollectionModel<TaskModel>;
    totalPrice?: number; // @required False
    totalTax?: number; // @required False
}
export interface POHeaderSelectionModel {
    contract?: ContractSelectionModel;
    file?: FileSelectionModel;
    invoices?: CollectionSelectionModel<InvoiceSelectionModel>;
    metaData?: MetaDataSelectionModel;
    pOLines?: CollectionSelectionModel<POLineSelectionModel>;
    pOPayments?: CollectionSelectionModel<POPaymentSelectionModel>;
    pOReceipts?: CollectionSelectionModel<POReceiptSelectionModel>;
    requisition?: RequisitionSelectionModel;
    resource?: ResourceSelectionModel;
    sOHeaders?: CollectionSelectionModel<SOHeaderSelectionModel>;
    taskLinks?: CollectionSelectionModel<POTaskLinkSelectionModel>;
    tasks?: CollectionSelectionModel<TaskSelectionModel>;
}
export interface POLineModel {
    contract?: ContractModel; // @required False
    costCode?: string; // @required False @length 50
    extendedPrice?: number; // @required False
    extendedTax?: number; // @required False
    itemCode?: string; // @required False @length 50
    itemDescription?: string; // @required False @length 400
    lineCutLength?: number; // @required False
    lineQuantity?: number; // @required True
    metaData?: MetaDataModel;
    pOHeader?: POHeaderModel; // @required True
    pOLineId?: number; // @primaryKey @required True
    pOLineReference?: string; // @required False @length 50
    pOReceipts?: CollectionModel<POReceiptModel>; // @required True
    sequence?: number; // @required True
    uOM?: string; // @required False @length 10
    unitPrice?: number; // @required False
}
export interface POLineSelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    pOHeader?: POHeaderSelectionModel;
    pOReceipts?: CollectionSelectionModel<POReceiptSelectionModel>;
}
export interface POPaymentModel {
    amount?: number; // @required True
    metaData?: MetaDataModel;
    pOHeader?: POHeaderModel; // @required True
    pOPaymentId?: number; // @primaryKey @required True
    payment?: DateString; // @required True
    paymentReference?: string; // @required False @length 50
}
export interface POPaymentSelectionModel {
    metaData?: MetaDataSelectionModel;
    pOHeader?: POHeaderSelectionModel;
}
export interface POReceiptModel {
    metaData?: MetaDataModel;
    pOHeader?: POHeaderModel; // @required True
    pOLine?: POLineModel; // @required False
    pOReceiptId?: number; // @primaryKey @required True
    quantity?: number; // @required True
    receipt?: DateString; // @required False
    task?: TaskModel; // @required False
}
export interface POReceiptSelectionModel {
    metaData?: MetaDataSelectionModel;
    pOHeader?: POHeaderSelectionModel;
    pOLine?: POLineSelectionModel;
    task?: TaskSelectionModel;
}
export interface POTaskLinkModel {
    approvePercent?: number; // @required True
    manualOverride?: boolean; // @required True
    matched?: string; // @enum POMatchOn @required True
    metaData?: MetaDataModel;
    pOHeader?: POHeaderModel; // @required True
    pOTaskLinkId?: number; // @primaryKey @required True
    pOTemplateMatch?: POTemplateMatchModel; // @required False
    task?: TaskModel; // @required True
}
export interface POTaskLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    pOHeader?: POHeaderSelectionModel;
    pOTemplateMatch?: POTemplateMatchSelectionModel;
    task?: TaskSelectionModel;
}
export interface POTemplateMatchModel {
    approvePercent?: number; // @required True
    comparisonAmount?: number; // @required True
    distribute?: boolean; // @required True
    matchOn?: string; // @required True @length 10
    metaData?: MetaDataModel;
    pOSearch?: string; // @required True @length 400
    pOTaskLinks?: CollectionModel<POTaskLinkModel>; // @required True
    pOTemplateMatchId?: number; // @primaryKey @required True
    partialPayment?: boolean; // @required True
    priority?: number; // @required True
    requirement?: boolean; // @required True
    ruleEnd?: DateString; // @required False
    ruleStart?: DateString; // @required False
    scaleRatio?: number; // @required True
    scaleType?: string; // @enum POScaleTypes @required True
    templateItem?: TemplateItemModel; // @required True
}
export interface POTemplateMatchSelectionModel {
    metaData?: MetaDataSelectionModel;
    pOTaskLinks?: CollectionSelectionModel<POTaskLinkSelectionModel>;
    templateItem?: TemplateItemSelectionModel;
}
export interface POUpdateModel {
    linkedTasks?: number[];
    pOHeaderId?: number;
    removeTasks?: number[];
}
export interface PrecedentModel {
    customWorkflowLogic?: string; // @required False @length 2000
    deltaDays?: number; // @required True
    diagramData?: string; // @required False
    message?: string; // @required True @length 100
    metaData?: MetaDataModel;
    parentTemplateItem?: TemplateItemModel; // @required True
    precedentId?: number; // @primaryKey @required True
    precedentTemplateItem?: TemplateItemModel; // @required True
    precedentType?: number; // @enum PrecedentTypes @required True
    restriction?: number; // @enum PrecedentRuleRestrictions @required True
}
export interface PrecedentRuleModel {
    getToTaskStatus?: string;
    mustHaveTaskStatus?: string;
}
export interface PrecedentSelectionModel {
    metaData?: MetaDataSelectionModel;
    parentTemplateItem?: TemplateItemSelectionModel;
    precedentTemplateItem?: TemplateItemSelectionModel;
}
export interface PricingTierModel {
    percentage1?: number;
    percentage2?: number;
    percentage3?: number;
    tier1?: string;
    tier2?: string;
    tier3?: string;
}
export interface ProcessEventModel {
    businessUnit?: BusinessUnitModel; // @required True
    direction?: string; // @enum ProcessEventDirections @required True
    eventCode?: string; // @required True @length 10
    eventName?: string; // @required True @length 50
    jobCanProgress?: string; // @required False @length 10
    jobCanSchedule?: string; // @required False @length 10
    metaData?: MetaDataModel;
    processEventId?: number; // @primaryKey @required True
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>; // @required True
    templateItems?: CollectionModel<TemplateItemModel>; // @required True
}
export interface ProcessEventSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    templateItemHistories?: CollectionSelectionModel<TemplateItemHistorySelectionModel>;
    templateItems?: CollectionSelectionModel<TemplateItemSelectionModel>;
}
export interface ProductLibraryBrandCriteriaModel {
    brands?: BrandCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
}
export interface ProductLibraryBrandModel {
    brandName?: string; // @required True @length 50
    metaData?: MetaDataModel;
    productLibraryBrandId?: number; // @primaryKey @required True
    productLibraryBrandRules?: CollectionModel<ProductLibraryBrandRuleModel>; // @required True
    productLibraryOptions?: CollectionModel<ProductLibraryOptionModel>; // @required True
    security?: SecurityModel;
}
export interface ProductLibraryBrandRuleModel {
    brand?: BrandModel; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataModel;
    productLibraryBrand?: ProductLibraryBrandModel; // @required True
    productLibraryBrandRuleId?: number; // @primaryKey @required True
    region?: RegionModel; // @required True
    security?: SecurityModel;
}
export interface ProductLibraryBrandRuleSelectionModel {
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    productLibraryBrand?: ProductLibraryBrandSelectionModel;
    region?: RegionSelectionModel;
}
export interface ProductLibraryBrandSelectionModel {
    metaData?: MetaDataSelectionModel;
    productLibraryBrandRules?: CollectionSelectionModel<ProductLibraryBrandRuleSelectionModel>;
    productLibraryOptions?: CollectionSelectionModel<ProductLibraryOptionSelectionModel>;
}
export interface ProductLibraryOptionModel {
    agentId?: string; // @required True @length 32
    metaData?: MetaDataModel;
    password?: string; // @required True @length 64
    portal?: ListingPortalModel; // @required True
    productLibraryBrand?: ProductLibraryBrandModel; // @required True
    productLibraryOptionId?: number; // @primaryKey @required True
    userName?: string; // @required True @length 64
}
export interface ProductLibraryOptionSelectionModel {
    metaData?: MetaDataSelectionModel;
    portal?: ListingPortalSelectionModel;
    productLibraryBrand?: ProductLibraryBrandSelectionModel;
}
export interface ProductValidityCriteriaModel {
    brand?: BrandCriteriaModel;
    houseType?: HouseTypeCriteriaModel;
    phase?: TenderPhaseCriteriaModel;
    priceLevel?: TenderRuleCriteriaModel;
}
export interface ProgressCriteriaModel {
    completed?: TaskCriteriaModel;
    notCompleted?: TaskCriteriaModel;
    notPlanned?: TaskCriteriaModel;
    planned?: TaskCriteriaModel;
}
export interface ProjectListModel<T = any> {
    contracts?: ContractModel[];
    resources?: ResourceModel[];
    summaries?: SummaryModel[];
    tasks?: T[];
    totalCount?: number;
}
export interface ProjectListRequestModel {
    contractSelection?: ContractSelectionModel;
    criteria?: WorkflowCriteriaModel;
    resourceSelection?: ResourceSelectionModel;
    summarySelection?: SummarySelectionModel;
    taskSelection?: TaskSelectionModel;
}
export interface QuoteItemModel {
    accepted?: boolean; // @required True
    metaData?: MetaDataModel;
    quantity?: number; // @required False
    quoteCost?: number; // @required True
    quoteItemId?: number; // @primaryKey @required True
    quoteResponses?: QuoteResponseModel; // @required True
    quoteTax?: number; // @required True
    responseDescription?: string; // @required False @length 400
    rfqTemplateItem?: RfqTemplateItemModel; // @required False
}
export interface QuoteItemSelectionModel {
    metaData?: MetaDataSelectionModel;
    quoteResponses?: QuoteResponseSelectionModel;
    rfqTemplateItem?: RfqTemplateItemSelectionModel;
}
export interface QuoteResponseCriteriaModel {
    contact?: ContactCriteriaModel;
    contracts?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    resources?: ResourceCriteriaModel;
    rfqActuals?: RfqActualCriteriaModel;
    tasks?: TaskCriteriaModel;
}
export interface QuoteResponseModel {
    conditions?: string; // @required False @length 400
    contact?: ContactModel; // @required False
    contract?: ContractModel; // @required True
    earliestAvail?: DateString; // @required False
    metaData?: MetaDataModel;
    quoteContact?: string; // @required False @length 50
    quoteEmail?: string; // @required False @length 60
    quoteExpiry?: DateString; // @required False
    quoteItems?: CollectionModel<QuoteItemModel>; // @required True
    quotePhone?: string; // @required False @length 50
    quoteReceived?: DateString; // @required True
    quoteReference?: string; // @required False @length 50
    quoteResponseId?: number; // @primaryKey @required True
    resource?: ResourceModel; // @required True
    rfqActual?: RfqActualModel; // @required False
    rfqTemplate?: RfqTemplateModel; // @required True
}
export interface QuoteResponseSelectionModel {
    contact?: ContactSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    quoteItems?: CollectionSelectionModel<QuoteItemSelectionModel>;
    resource?: ResourceSelectionModel;
    rfqActual?: RfqActualSelectionModel;
    rfqTemplate?: RfqTemplateSelectionModel;
}
export interface RecentMessageModel {

}
export interface ReferenceSelectionModel {

}
export interface ReferralSourceCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    defaultUsers?: UserCriteriaModel;
    displays?: DisplayCriteriaModel;
    includeInactive?: boolean;
    referralSourceIds?: number[];
    referralTypes?: string[];
}
export interface ReferralSourceDefaultHourCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    referralSources?: ReferralSourceCriteriaModel;
}
export interface ReferralSourceDefaultHourModel {
    dayOfWeek?: number; // @required True
    endTime?: DateString; // @required True
    metaData?: MetaDataModel;
    referralSource?: ReferralSourceModel; // @required True
    referralSourceDefaultHourId?: number; // @primaryKey @required True
    referralSourceDefaultRoles?: CollectionModel<ReferralSourceDefaultRoleModel>; // @required True
    security?: SecurityModel;
    startTime?: DateString; // @required True
}
export interface ReferralSourceDefaultHourSelectionModel {
    metaData?: MetaDataSelectionModel;
    referralSource?: ReferralSourceSelectionModel;
    referralSourceDefaultRoles?: CollectionSelectionModel<ReferralSourceDefaultRoleSelectionModel>;
}
export interface ReferralSourceDefaultRoleModel {
    endTime?: DateString; // @required True
    metaData?: MetaDataModel;
    referralSourceDefRoleId?: number; // @primaryKey @required True
    referralSourceDefaultHour?: ReferralSourceDefaultHourModel; // @required True
    security?: SecurityModel;
    securityRole?: SecurityRoleModel; // @required False
    startTime?: DateString; // @required True
    user?: MetaDataUserModel; // @required False
}
export interface ReferralSourceDefaultRoleSelectionModel {
    metaData?: MetaDataSelectionModel;
    referralSourceDefaultHour?: ReferralSourceDefaultHourSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    user?: UserSelectionModel;
}
export interface ReferralSourceModel {
    activeEnd?: DateString; // @required True
    activeStart?: DateString; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    contactInteractions?: CollectionModel<ContactInteractionModel>; // @required True
    defaultStatus?: string; // @enum ContractStatuses? @required False
    displays?: CollectionModel<DisplayModel>; // @required True
    latitude?: string; // @required False @length 50
    longitude?: string; // @required False @length 50
    mapDepth?: string; // @required False @length 50
    metaData?: MetaDataModel;
    referralSourceDefaultHours?: CollectionModel<ReferralSourceDefaultHourModel>; // @required True
    referralSourceId?: number; // @primaryKey @required True
    referralSourceName?: string; // @required True @length 50
    referralSourceOpenings?: CollectionModel<ReferralSourceOpeningModel>; // @required True
    referralSourceUrl?: string; // @required False @length 255
    referralType?: string; // @enum ReferralTypes @required True
    salesRegion?: RegionModel; // @required False
    security?: ReferralSourceSecurityModel;
    template?: TemplateModel; // @required False
    traffics?: CollectionModel<ReferralTrafficModel>; // @required True
}
export interface ReferralSourceOpeningCriteriaModel {
    ageRange?: AgeRangeModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    referralSources?: ReferralSourceCriteriaModel;
}
export interface ReferralSourceOpeningModel {
    dateDay?: DateString; // @required True
    endTime?: DateString; // @required True
    metaData?: MetaDataModel;
    referralSource?: ReferralSourceModel; // @required True
    referralSourceOpeningId?: number; // @primaryKey @required True
    referralSourceOpeningRoles?: CollectionModel<ReferralSourceOpeningRoleModel>; // @required True
    security?: SecurityModel;
    startTime?: DateString; // @required True
}
export interface ReferralSourceOpeningRoleModel {
    dateDay?: DateString; // @required True
    endTime?: DateString; // @required True
    metaData?: MetaDataModel;
    referralSourceOpening?: ReferralSourceOpeningModel; // @required True
    referralSourceOpeningRoleId?: number; // @primaryKey @required True
    security?: SecurityModel;
    securityRole?: SecurityRoleModel; // @required False
    startTime?: DateString; // @required True
    user?: MetaDataUserModel; // @required True
}
export interface ReferralSourceOpeningRoleSelectionModel {
    metaData?: MetaDataSelectionModel;
    referralSourceOpening?: ReferralSourceOpeningSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    user?: UserSelectionModel;
}
export interface ReferralSourceOpeningSelectionModel {
    metaData?: MetaDataSelectionModel;
    referralSource?: ReferralSourceSelectionModel;
    referralSourceOpeningRoles?: CollectionSelectionModel<ReferralSourceOpeningRoleSelectionModel>;
}
export interface ReferralSourceSecurityModel {
    canAddTraffic?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
}
export interface ReferralSourceSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contactInteractions?: CollectionSelectionModel<ContactInteractionSelectionModel>;
    displays?: CollectionSelectionModel<DisplaySelectionModel>;
    metaData?: MetaDataSelectionModel;
    referralSourceDefaultHours?: CollectionSelectionModel<ReferralSourceDefaultHourSelectionModel>;
    referralSourceOpenings?: CollectionSelectionModel<ReferralSourceOpeningSelectionModel>;
    salesRegion?: RegionSelectionModel;
    template?: TemplateSelectionModel;
    traffics?: CollectionSelectionModel<ReferralTrafficSelectionModel>;
}
export interface ReferralTrafficCriteriaModel {
    ageRange?: AgeRangeModel;
    contact?: ContactCriteriaModel;
    defaultUsers?: UserCriteriaModel;
    displays?: DisplayCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    referralSources?: ReferralSourceCriteriaModel;
}
export interface ReferralTrafficModel {
    client?: ClientModel; // @required False
    contact?: ContactModel; // @required False
    contactPoint?: ReferralSourceModel; // @required False
    contract?: ContractModel; // @required False
    dateTraffic?: DateString; // @required True
    metaData?: MetaDataModel;
    qtyRepresented?: number; // @required True
    referralSource?: ReferralSourceModel; // @required False
    referralTrafficId?: number; // @primaryKey @required True
    security?: SecurityModel;
    userValue1?: string; // @required False @length 50
    userValue2?: string; // @required False @length 50
    userValue3?: string; // @required False @length 50
    userValue4?: string; // @required False @length 50
    userValue5?: string; // @required False @length 50
    userValue6?: string; // @required False @length 50
    userValue7?: string; // @required False @length 50
    userValue8?: string; // @required False @length 50
}
export interface ReferralTrafficSelectionModel {
    client?: ClientSelectionModel;
    contact?: ContactSelectionModel;
    contactPoint?: ReferralSourceSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    referralSource?: ReferralSourceSelectionModel;
}
export interface RegionCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    jobTypes?: string[];
    regionIds?: number[];
}
export interface RegionModel {
    boundaryPolygon?: string; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    businessUnitRegionLinks?: CollectionModel<BusinessUnitRegionLinkModel>; // @required True
    colour?: number; // @required True
    defaultContractRoles?: CollectionModel<DefaultContractRoleModel>; // @required True
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    presiteRegion?: RegionModel; // @required False
    regionId?: number; // @primaryKey @required True
    regionName?: string; // @required True @length 50
    security?: SecurityModel;
    tenderContractRules?: CollectionModel<TenderContractRuleModel>; // @required True
    tenderSurcharges?: CollectionModel<TenderSurchargeModel>; // @required True
}
export interface RegionSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    businessUnitRegionLinks?: CollectionSelectionModel<BusinessUnitRegionLinkSelectionModel>;
    defaultContractRoles?: CollectionSelectionModel<DefaultContractRoleSelectionModel>;
    metaData?: MetaDataSelectionModel;
    presiteRegion?: RegionSelectionModel;
    tenderContractRules?: CollectionSelectionModel<TenderContractRuleSelectionModel>;
    tenderSurcharges?: CollectionSelectionModel<TenderSurchargeSelectionModel>;
}
export interface ReportCategoryModel {
    businessUnit?: BusinessUnitModel; // @required True
    masterReports?: CollectionModel<MasterReportModel>; // @required True
    metaData?: MetaDataModel;
    repCategory?: string; // @required True @length 50
    reportCategoryId?: number; // @primaryKey @required True
    reportCategoryParent?: ReportCategoryModel; // @required False
    reports?: ReportModel[];
    subCategories?: CollectionModel<ReportCategoryModel>; // @required True
}
export interface ReportCategorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    masterReports?: CollectionSelectionModel<MasterReportSelectionModel>;
    metaData?: MetaDataSelectionModel;
    reportCategoryParent?: ReportCategorySelectionModel;
    subCategories?: CollectionSelectionModel<ReportCategorySelectionModel>;
}
export interface ReportModel {
    description?: string;
    displayReportUrl?: string;
    guid?: string;
    reportId?: number;
    reportName?: string;
    reportTypeId?: number;
    reportUrl?: string;
}
export interface ReportRequestModel<T = any> {
    parameter?: T;
    reportId?: number;
}
export interface ReqRFCLinkModel {
    reqRFCLinkId?: number; // @primaryKey @required True
    requestForCredit?: RequisitionModel; // @required True
    requisition?: RequisitionModel; // @required True
}
export interface ReqRFCLinkSelectionModel {
    requestForCredit?: RequisitionSelectionModel;
    requisition?: RequisitionSelectionModel;
}
export interface RequisitionCriteriaModel {
    ageRange?: AgeRangeModel;
    approver?: UserCriteriaModel;
    contract?: ContractCriteriaModel;
    files?: FileCriteriaModel;
    includeInactive?: boolean;
    raisedBy?: UserCriteriaModel;
    reqProcessType?: number[];
    requisitionIds?: number[];
    resource?: ResourceCriteriaModel;
    resourceStatuses?: number[];
    statuses?: number[];
}
export interface RequisitionDocLinkModel {
    file?: FileModel; // @required True
    metaData?: MetaDataOrderModel;
    requisitionDocLinkId?: number; // @primaryKey @required True
}
export interface RequisitionDocLinkSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface RequisitionHistoryModel {
    amount?: number; // @required True
    appRejReason?: number; // @required False
    appRejReasonText?: string; // @required False @length 400
    contract?: ContractModel; // @required True
    costCode?: string; // @required False @length 50
    dateReqAppReject?: DateString; // @required False
    dateReqNeeded?: DateString; // @required False
    dateReqRaised?: DateString; // @required False
    description?: string; // @required True @length 4000
    explanation?: string; // @required False @length 4000
    internalComments?: string; // @required False @length 4000
    itemCode?: string; // @required False @length 50
    jobFileRfcId?: number; // @required False
    metaData?: MetaDataModel;
    noteGroup?: NoteGroupModel; // @required False
    otherReferenceNumber?: string; // @required False @length 50
    pOReference?: string; // @required False @length 50
    quantity?: number; // @required True
    reqProcessType?: number; // @required True
    reqReason?: number; // @required True
    reqStatus?: number; // @required True
    reqType?: number; // @required True
    requisition?: RequisitionModel; // @required True
    requisitionHistoryId?: number; // @primaryKey @required True
    resource?: ResourceModel; // @required False
    rfcReferenceNumber?: string; // @required False @length 50
    task?: TaskModel; // @required False
    user1?: MetaDataUserModel; // @required True
    user?: MetaDataUserModel; // @required False
}
export interface RequisitionHistorySelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    noteGroup?: NoteGroupSelectionModel;
    requisition?: RequisitionSelectionModel;
    resource?: ResourceSelectionModel;
    task?: TaskSelectionModel;
    user1?: UserSelectionModel;
    user?: UserSelectionModel;
}
export interface RequisitionModel {
    amount?: number; // @required True
    appRejReason?: number; // @required False
    appRejReasonText?: string; // @required False @length 400
    approvedBy?: MetaDataUserModel; // @required False
    contract?: ContractModel; // @required True
    costCode?: string; // @required False @length 50
    dateReqAppReject?: DateString; // @required False
    dateReqNeeded?: DateString; // @required False
    dateReqRaised?: DateString; // @required False
    description?: string; // @required True @length 4000
    explanation?: string; // @required False @length 4000
    files?: CollectionModel<FileModel>;
    internalComments?: string; // @required False @length 4000
    itemCode?: string; // @required False @length 50
    jobFileRfcId?: number; // @required False
    metaData?: MetaDataModel;
    noteGroup?: NoteGroupModel; // @required False
    notes?: CollectionModel<NoteModel>;
    otherReferenceNumber?: string; // @required False @length 50
    pOHeaders?: CollectionModel<POHeaderModel>; // @required True
    pOReference?: string; // @required False @length 50
    quantity?: number; // @required True
    raisedBy?: MetaDataUserModel; // @required True
    reqProcessType?: number; // @enum ReqProcessType @required True
    reqReason?: number; // @required True
    reqResourceStatus?: number; // @enum RequisitionStatus @required True
    reqStatus?: number; // @enum RequisitionStatus @required True
    reqType?: number; // @enum RequisitionCostAmountType @required True
    requestForCredits?: CollectionModel<ReqRFCLinkModel>; // @required True
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>; // @required True
    requisitionId?: number; // @primaryKey @required True
    requisitions?: CollectionModel<ReqRFCLinkModel>; // @required True
    resource?: ResourceModel; // @required False
    resourceExplanation?: string; // @required False @length 4000
    rfcAppRejByName?: string; // @required False @length 100
    rfcAppRejByTitle?: string; // @required False @length 50
    rfcReferenceNumber?: string; // @required False @length 50
    security?: SecurityModel;
    task?: TaskModel; // @required False
}
export interface RequisitionNotificationModel {
    amount?: number;
    appRejReason?: number;
    appRejReasonText?: string;
    approvedBy?: MetaDataUserModel;
    contract?: ContractModel;
    costCode?: string;
    dateReqAppReject?: DateString;
    dateReqNeeded?: DateString;
    dateReqRaised?: DateString;
    description?: string;
    explanation?: string;
    files?: CollectionModel<FileModel>;
    internalComments?: string;
    itemCode?: string;
    jobFileRfcId?: number;
    metaData?: MetaDataModel;
    noteGroup?: NoteGroupModel;
    notes?: CollectionModel<NoteModel>;
    otherReferenceNumber?: string;
    pOHeaders?: CollectionModel<POHeaderModel>;
    pOReference?: string;
    quantity?: number;
    raisedBy?: MetaDataUserModel;
    reqProcessType?: number;
    reqReason?: number;
    reqResourceStatus?: number;
    reqStatus?: number;
    reqType?: number;
    requestForCredits?: CollectionModel<ReqRFCLinkModel>;
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>;
    requisitionId?: number;
    requisitions?: CollectionModel<ReqRFCLinkModel>;
    resource?: ResourceModel;
    resourceExplanation?: string;
    rfcAppRejByName?: string;
    rfcAppRejByTitle?: string;
    rfcReferenceNumber?: string;
    security?: SecurityModel;
    task?: TaskModel;
}
export interface RequisitionRequestModel {
    rfcLinkIds?: number[];
}
export interface RequisitionSelectionModel {
    approvedBy?: UserSelectionModel;
    contract?: ContractSelectionModel;
    files?: CollectionSelectionModel<FileSelectionModel>;
    metaData?: MetaDataSelectionModel;
    noteGroup?: NoteGroupSelectionModel;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    pOHeaders?: CollectionSelectionModel<POHeaderSelectionModel>;
    raisedBy?: UserSelectionModel;
    requestForCredits?: CollectionSelectionModel<ReqRFCLinkSelectionModel>;
    requisitionHistories?: CollectionSelectionModel<RequisitionHistorySelectionModel>;
    requisitions?: CollectionSelectionModel<ReqRFCLinkSelectionModel>;
    resource?: ResourceSelectionModel;
    task?: TaskSelectionModel;
}
export interface ResetPasswordModel {
    email?: string;
}
export interface ResourceAllocationModel {
    maxProjectCommitment?: number; // @required True
    metaData?: MetaDataModel;
    minProjectCommitment?: number; // @required True
    relativeCost?: number; // @required True
    resource?: ResourceModel; // @required True
    resourceAllocationId?: number; // @primaryKey @required True
    resourceCode?: ResourceCodeModel; // @required True
    resourcePool?: ResourcePoolModel; // @required True
    unlimited?: boolean; // @required True
}
export interface ResourceAllocationSelectionModel {
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    resourcePool?: ResourcePoolSelectionModel;
}
export interface ResourceCalendarModel {
    calendar?: DateString; // @required True
    dayDate?: DateString; // @required False
    description?: string; // @required False @length 100
    duration?: number; // @required False
    forceAvailable?: boolean; // @required True
    mailAddressInformation?: string; // @required False @length 1000
    mailSystemIntegration?: string;
    resourceCalendarId?: number; // @primaryKey @required True
    type?: string; // @required False @length 10
}
export interface ResourceCalendarSelectionModel {

}
export interface ResourceCodeCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    code?: string;
    departmentIds?: number[];
    description?: string;
    includeInactive?: boolean;
    officeOnly?: boolean;
    resourceCodeIds?: number[];
}
export interface ResourceCodeModel {
    businessUnit?: BusinessUnitModel; // @required True
    department?: DepartmentModel; // @required False
    description?: string; // @required True @length 50
    issueCatResourceCodeLinks?: CollectionModel<IssueCatResourceCodeLinkModel>; // @required True
    issueCategories?: CollectionModel<IssueCategoryModel>;
    jobFileResCodeId?: number; // @required False
    metaData?: MetaDataModel;
    officeOnly?: boolean; // @required True
    resourceCode?: string; // @required True @length 10
    resourceCodeId?: number; // @primaryKey @required True
    resources?: CollectionModel<ResourceModel>;
    security?: SecurityModel;
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>; // @required True
}
export interface ResourceCodeResourceLinkModel {
    alternate?: boolean; // @required True
    leadTimeOverride?: number; // @required False
    metaData?: MetaDataModel;
    resource?: ResourceModel; // @required True
    resourceCode?: ResourceCodeModel; // @required True
    resourceCodeResourceLinkId?: number; // @primaryKey @required True
}
export interface ResourceCodeResourceLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
}
export interface ResourceCodeResourceModel {
    actor?: ActorModel;
    address?: AddressWithCoordinatesModel;
    alternate?: boolean;
    alternateResourceCodes?: ResourceCodeModel[];
    branchRule?: number;
    branches?: CollectionModel<ResourceModel>;
    businessUnit?: BusinessUnitModel;
    commitments?: CollectionModel<ResourceCommitmentModel>;
    compliant?: boolean;
    contactDetails?: ContactDetailsModel;
    contactName?: string;
    contacts?: CollectionModel<ResourceContactModel>;
    contractSales?: CollectionModel<ContractSaleModel>;
    documents?: CollectionModel<DocumentModel>;
    external?: boolean;
    files?: CollectionModel<FileModel>;
    fullSearch?: string;
    gtin?: string;
    headOffice?: ResourceModel;
    inheritResourceCodes?: boolean;
    jobFile?: string;
    jobFileLastModified?: DateString;
    leadTimeOverride?: number;
    linkedContracts?: CollectionModel<ContractResourceLinkModel>;
    messageGroup?: string;
    metaData?: MetaDataModel;
    noteResources?: CollectionModel<NoteResourceModel>;
    pendingJobFileReview?: number;
    productLibrary?: number;
    regions?: CollectionModel<ResourceRegionModel>;
    reminderMethod?: string;
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>;
    resourceAvailable?: boolean;
    resourceCapacity?: string;
    resourceCodeLinks?: CollectionModel<ResourceCodeResourceLinkModel>;
    resourceCodeResourceLinkId?: number;
    resourceCodes?: ResourceCodeModel[];
    resourceId?: number;
    resourceName?: string;
    resourcePriority?: number;
    resourceProdUnits?: number;
    resourceRating?: number;
    resourceTaskActivities?: CollectionModel<ResourceTaskActivityModel>;
    resourceType?: ResourceTypeModel;
    resourceWorkRate?: number;
    security?: ResourceSecurityModel;
    settings?: CollectionModel<ResourceSettingModel>;
    signingRecipients?: CollectionModel<SigningRecipientModel>;
    signings?: CollectionModel<SigningModel>;
    supervisorOwner?: MetaDataUserModel;
    tagLinks?: CollectionModel<ResourcesTagModel>;
    tags?: CollectionModel<TagModel>;
    taxNumber?: string;
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>;
    tradingName?: string;
    usageSlots?: string;
    users?: CollectionModel<UserModel>;
    wEBURL?: string;
}
export interface ResourceCodeSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    department?: DepartmentSelectionModel;
    issueCatResourceCodeLinks?: CollectionSelectionModel<IssueCatResourceCodeLinkSelectionModel>;
    issueCategories?: CollectionSelectionModel<IssueCategorySelectionModel>;
    metaData?: MetaDataSelectionModel;
    resources?: CollectionSelectionModel<ResourceSelectionModel>;
    templateItemHistories?: CollectionSelectionModel<TemplateItemHistorySelectionModel>;
}
export interface ResourceCommitmentCriteriaModel {
    ageRange?: AgeRangeModel;
    ids?: number[];
    includeInactive?: boolean;
    resource?: ResourceCriteriaModel;
    task?: TaskCriteriaModel;
    types?: string[];
}
export interface ResourceCommitmentModel {
    businessUnit?: BusinessUnitModel; // @required False
    dateComplete?: DateString; // @required False
    dateStart?: DateString; // @required False
    description?: string; // @required False @length 400
    duration?: number; // @required False
    primaryId?: number; // @primaryKey @required True
    region?: RegionModel; // @required False
    resource?: ResourceModel; // @required False
    task?: TaskModel; // @required False
    type?: string; // @enum ResourceCommitmentType @required True
}
export interface ResourceCommitmentSelectionModel {
    resource?: ResourceSelectionModel;
    task?: TaskSelectionModel;
}
export interface ResourceContactLinkModel {
    contact?: ContactModel; // @required True
    linkType?: number; // @enum ContactTypeForSuppliers @required True
    metaData?: MetaDataModel;
    resourceCode?: ResourceCodeModel; // @required False
    resourceContactId?: number; // @primaryKey @required True
}
export interface ResourceContactLinkSelectionModel {
    contact?: ContactSelectionModel;
    metaData?: MetaDataSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
}
export interface ResourceContactModel {
    actor?: ActorModel;
    address?: InternationalAddressModel;
    ageGroup?: string;
    businessUnit?: BusinessUnitModel;
    companyName?: string;
    contactAvailability?: string;
    contactDetails?: ContactDetailsModel;
    contactId?: number;
    contactInstructions?: string;
    contactInteractions?: CollectionModel<ContactInteractionModel>;
    contactTracker?: string;
    contracts?: CollectionModel<ContractModel>;
    dateofBirth?: DateString;
    employmentStatus?: string;
    firstName?: string;
    fullName?: string;
    jobTitle?: string;
    lastName?: string;
    linkType?: number;
    mPFirstNameKey1?: string;
    mPFirstNameKey2?: string;
    mPLastNameKey1?: string;
    mPLastNameKey2?: string;
    marketingOptions?: string;
    masterContracts?: CollectionModel<MasterContractModel>;
    metaData?: MetaDataModel;
    myHomeFeedbacks?: CollectionModel<MyHomeFeedbackModel>;
    myHomePassword?: string;
    myHomeUsername?: string;
    otherNames?: string;
    postalAddress?: InternationalAddressModel;
    prefix?: string;
    profilePhoto?: FileModel;
    resourceCode?: ResourceCodeModel;
    resourceContactLinkId?: number;
    resourcesContactsLinks?: CollectionModel<ResourceContactLinkModel>;
    salut?: string;
    sex?: string;
    signingRecipients?: CollectionModel<SigningRecipientModel>;
    ssoId?: string;
    streetAddressPreferred?: boolean;
    suffix?: string;
    title?: string;
    useClientHome?: boolean;
    useClientPostal?: boolean;
}
export interface ResourceCriteriaModel {
    actor?: ActorCriteriaModel;
    ageRange?: AgeRangeModel;
    available?: boolean;
    businessUnit?: BusinessUnitRegionCriteriaModel;
    businessUnitIds?: number[];
    canDelegate?: boolean;
    canDelegateTasks?: TaskCriteriaModel;
    compliant?: boolean;
    contacts?: ContactCriteriaModel;
    emailAddress?: string;
    external?: boolean;
    fieldDevice?: boolean;
    hasCompliance?: boolean;
    includeInactive?: boolean;
    isUser?: boolean;
    jobFile?: boolean;
    jobFileIds?: string[];
    jobFileLastModified?: AgeRangeModel;
    pendingJobFileReview?: number[];
    quickSearch?: string;
    recentlyUsedBy?: UserCriteriaModel;
    reference?: string;
    resourceCodes?: ResourceCodeCriteriaModel[];
    resourceIds?: number[];
    resourceTypes?: number[];
    system?: boolean;
    tags?: TagCriteriaModel[];
    tasks?: TaskCriteriaModel;
    user?: UserCriteriaModel;
}
export interface ResourceModel {
    actor?: ActorModel; // @required False
    address?: AddressWithCoordinatesModel; // @required False @length 400
    alternateResourceCodes?: ResourceCodeModel[];
    branchRule?: number; // @enum BranchRules @required True
    branches?: CollectionModel<ResourceModel>; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    commitments?: CollectionModel<ResourceCommitmentModel>;
    compliant?: boolean; // @required False
    contactDetails?: ContactDetailsModel;
    contactName?: string; // @required False @length 50
    contacts?: CollectionModel<ResourceContactModel>;
    contractSales?: CollectionModel<ContractSaleModel>; // @required True
    documents?: CollectionModel<DocumentModel>;
    external?: boolean; // @required True
    files?: CollectionModel<FileModel>;
    fullSearch?: string; // @required False @length 4000
    gtin?: string; // @required False @length 100
    headOffice?: ResourceModel; // @required False
    inheritResourceCodes?: boolean; // @required True
    jobFile?: string; // @required False @length 100
    jobFileLastModified?: DateString; // @required False
    linkedContracts?: CollectionModel<ContractResourceLinkModel>; // @required True
    messageGroup?: string; // @enum MessageGroupingOptions @required True
    metaData?: MetaDataModel;
    noteResources?: CollectionModel<NoteResourceModel>; // @required True
    pendingJobFileReview?: number; // @enum JobFileReview @required True
    productLibrary?: number; // @required False
    regions?: CollectionModel<ResourceRegionModel>; // @required True
    reminderMethod?: string; // @enum ReminderMethods @required True
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>; // @required True
    resourceAvailable?: boolean; // @required True
    resourceCapacity?: string; // @required False @length 50
    resourceCodeLinks?: CollectionModel<ResourceCodeResourceLinkModel>; // @required True
    resourceCodes?: ResourceCodeModel[];
    resourceId?: number; // @primaryKey @required True
    resourceName?: string; // @required True @length 100
    resourcePriority?: number; // @required False
    resourceProdUnits?: number; // @required False
    resourceRating?: number; // @required True
    resourceTaskActivities?: CollectionModel<ResourceTaskActivityModel>; // @required True
    resourceType?: ResourceTypeModel; // @required True
    resourceWorkRate?: number; // @required False
    security?: ResourceSecurityModel;
    settings?: CollectionModel<ResourceSettingModel>; // @required True
    signingRecipients?: CollectionModel<SigningRecipientModel>; // @required True
    signings?: CollectionModel<SigningModel>; // @required True
    supervisorOwner?: MetaDataUserModel; // @required False
    tagLinks?: CollectionModel<ResourcesTagModel>; // @required True
    tags?: CollectionModel<TagModel>;
    taxNumber?: string; // @required False @length 50
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>; // @required True
    tradingName?: string; // @required False @length 100
    usageSlots?: string; // @required False @length 4000
    users?: CollectionModel<UserModel>; // @required True
    wEBURL?: string; // @required False @length 255
}
export interface ResourcePoolModel {
    businessUnit?: BusinessUnitModel; // @required True
    masterContract?: MasterContractModel; // @required False
    maxSlippage?: number; // @required True
    metaData?: MetaDataModel;
    resourceAllocations?: CollectionModel<ResourceAllocationModel>; // @required True
    resourcePool?: string; // @required True @length 50
    resourcePoolId?: number; // @primaryKey @required True
}
export interface ResourcePoolSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    resourceAllocations?: CollectionSelectionModel<ResourceAllocationSelectionModel>;
}
export interface ResourceRegionModel {
    deliveryDays?: number; // @required True
    metaData?: MetaDataModel;
    region?: RegionModel; // @required True
    resource?: ResourceModel; // @required True
    resourceRegionId?: number; // @primaryKey @required True
}
export interface ResourceRegionSelectionModel {
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
    resource?: ResourceSelectionModel;
}
export interface ResourceSecurityModel {
    canDelete?: boolean;
    canEdit?: boolean;
    canEditCompliance?: boolean;
    canInitiateSigning?: boolean;
    canView?: boolean;
}
export interface ResourceSelectionModel {
    actor?: ActorSelectionModel;
    branches?: CollectionSelectionModel<ResourceSelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    commitments?: CollectionSelectionModel<ResourceCommitmentSelectionModel>;
    contacts?: CollectionSelectionModel<ContactSelectionModel>;
    contractSales?: CollectionSelectionModel<ContractSaleSelectionModel>;
    files?: CollectionSelectionModel<FileSelectionModel>;
    headOffice?: ResourceSelectionModel;
    linkedContracts?: CollectionSelectionModel<ContractResourceLinkSelectionModel>;
    metaData?: MetaDataSelectionModel;
    noteResources?: CollectionSelectionModel<NoteResourceSelectionModel>;
    regions?: CollectionSelectionModel<ResourceRegionSelectionModel>;
    requisitionHistories?: CollectionSelectionModel<RequisitionHistorySelectionModel>;
    resourceCodeLinks?: CollectionSelectionModel<ResourceCodeResourceLinkSelectionModel>;
    resourceCodes?: CollectionSelectionModel<ResourceCodeSelectionModel>;
    resourceTaskActivities?: CollectionSelectionModel<ResourceTaskActivitySelectionModel>;
    resourceType?: ResourceTypeSelectionModel;
    security?: SecuritySelectionModel;
    settings?: CollectionSelectionModel<ResourceSettingSelectionModel>;
    signingRecipients?: CollectionSelectionModel<SigningRecipientSelectionModel>;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
    supervisorOwner?: UserSelectionModel;
    tagLinks?: CollectionSelectionModel<ResourcesTagSelectionModel>;
    tags?: CollectionSelectionModel<TagSelectionModel>;
    templateItemHistories?: CollectionSelectionModel<TemplateItemHistorySelectionModel>;
    users?: CollectionSelectionModel<UserSelectionModel>;
}
export interface ResourceSettingModel {
    codeValue1?: string; // @required False @length 10
    metaData?: MetaDataModel;
    numberValue1?: number; // @required False
    resourceSettingId?: number; // @primaryKey @required True
    setting?: string; // @required True @length 10
    stringValue1?: string; // @required False @length 100
}
export interface ResourceSettingSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface ResourcesTagModel {
    metaData?: MetaDataModel;
    resource?: ResourceModel; // @required True
    resourcesTagId?: number; // @primaryKey @required True
    tag?: TagModel; // @required True
}
export interface ResourcesTagSelectionModel {
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    tag?: TagSelectionModel;
}
export interface ResourceTaskActivityCriteriaModel {
    ids?: number[];
    resources?: ResourceCriteriaModel;
    tasks?: TaskCriteriaModel;
}
export interface ResourceTaskActivityModel {
    activity?: DateString; // @required True
    comments?: string; // @required False @length 1000
    compliant?: boolean; // @required False
    countOnSite?: number; // @required False
    metaData?: MetaDataBaseModel;
    ratingQuality?: number; // @required True
    resource?: ResourceModel; // @required True
    resourceTaskActivityId?: number; // @primaryKey @required True
    task?: TaskModel; // @required True
}
export interface ResourceTaskActivitySelectionModel {
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    task?: TaskSelectionModel;
}
export interface ResourceTypeModel {
    construction?: boolean; // @required True
    labour?: boolean; // @required True
    leads?: boolean; // @required True
    materials?: boolean; // @required True
    metaData?: MetaDataModel;
    presite?: boolean; // @required True
    resourceType?: string; // @required True @length 50
    resourceTypeId?: number; // @primaryKey @required True
    resourceTypeParent?: ResourceTypeModel; // @required False
    resources?: CollectionModel<ResourceModel>; // @required True
    subTypes?: CollectionModel<ResourceTypeModel>; // @required True
    timeCost?: boolean; // @required True
    warranty?: boolean; // @required True
}
export interface ResourceTypeSelectionModel {
    metaData?: MetaDataSelectionModel;
    resourceTypeParent?: ResourceTypeSelectionModel;
    resources?: CollectionSelectionModel<ResourceSelectionModel>;
    subTypes?: CollectionSelectionModel<ResourceTypeSelectionModel>;
}
export interface RestrictedRequestModel<U = any, T = any> {
    criteria?: U;
    selection?: T;
}
export interface RfqActualCriteriaModel {
    contact?: ContactCriteriaModel;
    contracts?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    resources?: ResourceCriteriaModel;
    rfqActualSummary?: RfqActualSummaryCriteriaModel;
    rfqTemplates?: RfqTemplateCriteriaModel;
    statuses?: number[];
    tasks?: TaskCriteriaModel;
}
export interface RfqActualItemModel {
    costCode?: string; // @required False @length 50
    mandatory?: boolean; // @required True
    metaData?: MetaDataBaseModel;
    quantity?: number; // @required True
    rfqActual?: RfqActualModel; // @required True
    rfqActualItemId?: number; // @primaryKey @required True
    rfqItemDescription?: string; // @required True @length 400
    rfqTemplateItem?: RfqTemplateItemModel; // @required False
    sequence?: number; // @required True
    uOM?: string; // @required True @length 10
}
export interface RfqActualItemSelectionModel {
    metaData?: MetaDataSelectionModel;
    rfqActual?: RfqActualSelectionModel;
    rfqTemplateItem?: RfqTemplateItemSelectionModel;
}
export interface RfqActualModel {
    approvedBy?: MetaDataUserModel; // @required False
    contact?: ContactModel; // @required False
    contract?: ContractModel; // @required True
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    quoteResponses?: CollectionModel<QuoteResponseModel>; // @required True
    raisedBy?: MetaDataUserModel; // @required True
    reponseReqd?: DateString; // @required False
    resource?: ResourceModel; // @required True
    response?: number;
    responseReqd?: boolean; // @required False
    rfqActualId?: number; // @primaryKey @required True
    rfqActualItems?: CollectionModel<RfqActualItemModel>; // @required True
    rfqActualSummary?: RfqActualSummaryModel; // @required True
    rfqInstructions?: string; // @required False @length 400
    rfqPrepared?: DateString; // @required True
    rfqSent?: DateString; // @required False
    rfqStatus?: number; // @enum QuoteStatus @required True
    rfqTemplate?: RfqTemplateModel; // @required True
    taskForecast?: DateString; // @required False
}
export interface RfqActualSelectionModel {
    approvedBy?: UserSelectionModel;
    contact?: ContactSelectionModel;
    contract?: ContractSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    quoteResponses?: CollectionSelectionModel<QuoteResponseSelectionModel>;
    raisedBy?: UserSelectionModel;
    resource?: ResourceSelectionModel;
    rfqActualItems?: CollectionSelectionModel<RfqActualItemSelectionModel>;
    rfqActualSummary?: RfqActualSummarySelectionModel;
    rfqTemplate?: RfqTemplateSelectionModel;
}
export interface RfqActualSummaryCriteriaModel {
    contracts?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    rfqTemplates?: RfqTemplateCriteriaModel;
}
export interface RfqActualSummaryModel {
    contract?: ContractModel; // @required True
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    rfqActualSummaryId?: number; // @primaryKey @required True
    rfqActuals?: CollectionModel<RfqActualModel>; // @required True
    rfqSummaryStatus?: number; // @enum QuoteStatus @required True
    rfqTemplate?: RfqTemplateModel; // @required True
}
export interface RfqActualSummarySelectionModel {
    contract?: ContractSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    rfqActuals?: CollectionSelectionModel<RfqActualSelectionModel>;
    rfqTemplate?: RfqTemplateSelectionModel;
}
export interface RfqTemplateCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    rfqTemplateSets?: BaseActiveCriteriaModel;
    tasks?: TaskCriteriaModel;
}
export interface RfqTemplateItemModel {
    acceptableVariation?: number; // @required True
    costCode?: string; // @required False @length 50
    estMax?: number; // @required True
    estMin?: number; // @required True
    mandatory?: boolean; // @required True
    metaData?: MetaDataModel;
    rfqItemDescription?: string; // @required True @length 400
    rfqTemplateItemId?: number; // @primaryKey @required True
    sequence?: number; // @required True
    uOM?: string; // @required True @length 10
}
export interface RfqTemplateItemSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface RfqTemplateModel {
    businessUnit?: BusinessUnitModel; // @required True
    mandatory?: boolean; // @required True
    metaData?: MetaDataModel;
    minResponseReqd?: number; // @required True
    minRfq?: number; // @required True
    reqdDays?: number; // @required True
    rfqDescription?: string; // @required False @length 400
    rfqFormat?: string; // @required False @length 50
    rfqName?: string; // @required True @length 50
    rfqNotify?: SecurityRoleModel; // @required False
    rfqSet?: RfqTemplateSetModel; // @required True
    rfqTemplateId?: number; // @primaryKey @required True
    rfqTemplateItems?: CollectionModel<RfqTemplateItemModel>; // @required True
    rfqTemplateResources?: CollectionModel<RfqTemplateResourceModel>; // @required True
    rfqTemplatesDocsToIncludes?: CollectionModel<RfqTemplatesDocsToIncludeModel>; // @required True
    security?: SecurityModel;
}
export interface RfqTemplateResourceModel {
    mandatory?: boolean; // @required True
    metaData?: MetaDataModel;
    resource?: ResourceModel; // @required True
    rfqTemplate?: RfqTemplateModel; // @required True
    rfqTemplateResourceId?: number; // @primaryKey @required True
    security?: SecurityModel;
}
export interface RfqTemplateResourceSelectionModel {
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    rfqTemplate?: RfqTemplateSelectionModel;
}
export interface RfqTemplatesDocsToIncludeModel {
    docCategory?: DocCategoryModel; // @required True
    latestOnly?: boolean; // @required True
    metaData?: MetaDataModel;
    rfqTemplate?: RfqTemplateModel; // @required True
    rfqTemplateDocToIncludeId?: number; // @primaryKey @required True
    security?: SecurityModel;
}
export interface RfqTemplatesDocsToIncludeSelectionModel {
    docCategory?: DocCategorySelectionModel;
    metaData?: MetaDataSelectionModel;
    rfqTemplate?: RfqTemplateSelectionModel;
}
export interface RfqTemplateSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    rfqNotify?: SecurityRoleSelectionModel;
    rfqSet?: RfqTemplateSetSelectionModel;
    rfqTemplateItems?: CollectionSelectionModel<RfqTemplateItemSelectionModel>;
    rfqTemplateResources?: CollectionSelectionModel<RfqTemplateResourceSelectionModel>;
    rfqTemplatesDocsToIncludes?: CollectionSelectionModel<RfqTemplatesDocsToIncludeSelectionModel>;
}
export interface RfqTemplateSetModel {
    acceptance?: string; // @enum RFQAcceptance @required True
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataModel;
    name?: string; // @required True @length 50
    rfqTemplateSetId?: number; // @primaryKey @required True
    rfqTemplates?: CollectionModel<RfqTemplateModel>; // @required True
    rfqTriggers?: CollectionModel<RfqTriggerModel>; // @required True
    security?: SecurityModel;
}
export interface RfqTemplateSetSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    rfqTemplates?: CollectionSelectionModel<RfqTemplateSelectionModel>;
    rfqTriggers?: CollectionSelectionModel<RfqTriggerSelectionModel>;
}
export interface RfqTemplatesOptionCatLinkModel {
    includeTemplateItems?: boolean; // @required True
    metaData?: MetaDataBaseModel;
    quoteRequiredOnly?: boolean; // @required True
    rfqTemplate?: RfqTemplateModel; // @required True
    rfqTemplatesOptionCatLinkId?: number; // @primaryKey @required True
    security?: SecurityModel;
    tenderOptionCat?: TenderOptionCategoryModel; // @required True
}
export interface RfqTemplatesOptionCatLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    rfqTemplate?: RfqTemplateSelectionModel;
    tenderOptionCat?: TenderOptionCategorySelectionModel;
}
export interface RfqTriggerModel {
    metaData?: MetaDataModel;
    operation?: string; // @enum QuoteOperation @required True
    rfqSet?: RfqTemplateSetModel; // @required True
    rfqTriggerId?: number; // @primaryKey @required True
    security?: SecurityModel;
    templateItem?: TemplateItemModel; // @required True
}
export interface RfqTriggerSelectionModel {
    metaData?: MetaDataSelectionModel;
    rfqSet?: RfqTemplateSetSelectionModel;
    templateItem?: TemplateItemSelectionModel;
}
export interface SalesCommitmentCriteriaModel {
    contractsOfInterest?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    leadRegisteredTo?: ContractCriteriaModel;
    tenders?: TenderCriteriaModel;
}
export interface SalesCommitmentModel {
    commitmentDate?: DateString; // @required True
    contractOfCommitment?: ContractModel; // @required True
    leadRegisteredTo?: ContractModel; // @required True
    metaData?: MetaDataModel;
    salesCommitmentId?: number; // @primaryKey @required True
    tender?: TenderModel; // @required False
    user?: MetaDataUserModel; // @required True
}
export interface SalesCommitmentSelectionModel {
    contractOfCommitment?: ContractSelectionModel;
    leadRegisteredTo?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    tender?: TenderSelectionModel;
    user?: UserSelectionModel;
}
export interface SalesInterestCriteriaModel {
    contractsOfInterest?: ContractCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    leadRegisteredTo?: ContractCriteriaModel;
    tenders?: TenderCriteriaModel;
    users?: UserCriteriaModel;
}
export interface SalesInterestModel {
    contractOfInterest?: ContractModel; // @required True
    leadRegisteredTo?: ContractModel; // @required True
    metaData?: MetaDataModel;
    registeredDate?: DateString; // @required True
    salesInterestId?: number; // @primaryKey @required True
    tender?: TenderModel; // @required False
    user?: MetaDataUserModel; // @required True
}
export interface SalesInterestSelectionModel {
    contractOfInterest?: ContractSelectionModel;
    leadRegisteredTo?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    tender?: TenderSelectionModel;
    user?: UserSelectionModel;
}
export interface SamlSettingsModel {
    url?: string;
}
export interface SavedSearchGroupModel {
    developmentLocations?: CollectionModel<DevelopmentLocationModel>; // @required True
    savedSearchGroupId?: number; // @primaryKey @required True
    savedSearches?: CollectionModel<SavedSearchModel>; // @required True
}
export interface SavedSearchGroupSelectionModel {
    developmentLocations?: CollectionSelectionModel<DevelopmentLocationSelectionModel>;
    savedSearches?: CollectionSelectionModel<SavedSearchSelectionModel>;
}
export interface SavedSearchModel {
    friendlyName?: string; // @required True @length 50
    metaData?: MetaDataModel;
    savedSearchGroup?: SavedSearchGroupModel; // @required True
    savedSearchId?: number; // @primaryKey @required True
    savedSearchType?: number; // @enum SavedSearch @required True
    searchText?: GenericCriteriaModel; // @required True
}
export interface SavedSearchSelectionModel {
    metaData?: MetaDataSelectionModel;
    savedSearchGroup?: SavedSearchGroupSelectionModel;
}
export interface ScoredItemModel<T = any> {
    item?: T;
    score?: number;
}
export interface SecurityModel {
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
}
export interface SecurityRoleCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    description?: string;
    ids?: number[];
    includeInactive?: boolean;
    isJobRole?: boolean;
    name?: string;
}
export interface SecurityRoleModel {
    businessUnit?: BusinessUnitModel; // @required True
    description?: string; // @required True @length 255
    jobRole?: boolean; // @required True
    metaData?: MetaDataModel;
    myHome?: boolean; // @required True
    myHomeRoleName?: string; // @required False @length 50
    projectInherit?: boolean; // @required True
    referralSourceDefaultRoles?: CollectionModel<ReferralSourceDefaultRoleModel>; // @required True
    referralSourceOpeningRoles?: CollectionModel<ReferralSourceOpeningRoleModel>; // @required True
    resource?: ResourceModel; // @required False
    roleName?: string; // @required True @length 50
    security?: SecurityModel;
    securityRoleId?: number; // @primaryKey @required True
    securityRolePermissions?: CollectionModel<SecurityRolePermissionModel>; // @required True
    userRoles?: CollectionModel<UserRoleModel>; // @required True
}
export interface SecurityRolePermissionCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    isLeadsRelation?: boolean;
    operationCodes?: number[];
    roles?: SecurityRoleCriteriaModel;
}
export interface SecurityRolePermissionModel {
    metaData?: MetaDataModel;
    operation?: number; // @enum OperationCode @required True
    requiredRelation?: number; // @enum SecurityRelation @required True
    securityRole?: SecurityRoleModel; // @required True
    securityRolePermissionId?: number; // @primaryKey @required True
}
export interface SecurityRolePermissionSelectionModel {
    metaData?: MetaDataSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
}
export interface SecurityRoleSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    referralSourceDefaultRoles?: CollectionSelectionModel<ReferralSourceDefaultRoleSelectionModel>;
    referralSourceOpeningRoles?: CollectionSelectionModel<ReferralSourceOpeningRoleSelectionModel>;
    resource?: ResourceSelectionModel;
    securityRolePermissions?: CollectionSelectionModel<SecurityRolePermissionSelectionModel>;
    userRoles?: CollectionSelectionModel<UserRoleSelectionModel>;
}
export interface SecuritySelectionModel {
    readOnly?: boolean;
}
export interface SellHistoryModel {
    businessUnit?: BusinessUnitModel; // @required False
    buyerMasterContract?: MasterContractModel; // @required False
    client?: ClientModel; // @required False
    constructionContract?: ContractModel; // @required False
    constructionSalesPerson?: MetaDataUserModel; // @required False
    landContract?: ContractModel; // @required False
    leadContract?: ContractModel; // @required False
    leadMasterContractRoles?: string; // @required False @length 200
    metaData?: MetaDataBaseModel;
    presiteContract?: ContractModel; // @required False
    presiteSalesPerson?: MetaDataUserModel; // @required False
    sellHistoryId?: number; // @primaryKey @required True
    soldMasterContract?: MasterContractModel; // @required False
    sourceContract?: ContractModel; // @required False
}
export interface SellHistorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    buyerMasterContract?: MasterContractSelectionModel;
    client?: ClientSelectionModel;
    constructionContract?: ContractSelectionModel;
    constructionSalesPerson?: UserSelectionModel;
    landContract?: ContractSelectionModel;
    leadContract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    presiteContract?: ContractSelectionModel;
    presiteSalesPerson?: UserSelectionModel;
    soldMasterContract?: MasterContractSelectionModel;
    sourceContract?: ContractSelectionModel;
}
export interface SettingsModel {
    addDefaultExtraOptionsSub?: boolean;
    cmaFunctionId?: number;
    constructionListStatusFilter?: string[];
    dRCompletedAhead?: number;
    dRCompletedBehind?: number;
    dRDueAhead?: number;
    dRDueBehind?: number;
    dRPlannedAhead?: number;
    dRPlannedBehind?: number;
    dRStartedAhead?: number;
    dRStartedBehind?: number;
    emailValidationRegex?: string;
    flexFieldExtendedLayout?: boolean;
    homePhoneValidation?: string;
    jobFileEnabled?: boolean;
    landCommitToBuy?: string;
    landEnabled?: boolean;
    landListStatusFilter?: string[];
    leadListStatusFilter?: string[];
    leadsEnabled?: boolean;
    leadsShowStageView?: boolean;
    maintenanceEnabled?: boolean;
    maintenanceInitialAppointmentName?: string;
    maintenanceListStatusFilter?: string[];
    maintenanceTaskPrefix?: string;
    maxFileSize?: number;
    mobileLeadsUrl?: string;
    mobilePhoneValidation?: string;
    myHomeUrl?: string;
    permitCustomTopics?: boolean;
    preconCommitToBuy?: string;
    presiteListStatusFilter?: string[];
    projectsEnabled?: boolean;
    projectsNthLevelType?: string;
    showCustomPOLoad?: boolean;
    showPhoneContact?: boolean;
    signingWitnessesEnabled?: boolean;
    statusChangeNeedsReason?: string[];
    tendersSuburbRequired?: boolean;
    workPhoneValidation?: string;
}
export interface SharedCommissionModel {
    commisionShare?: number; // @required True
    fixedAmount?: number; // @required False
    metaData?: MetaDataModel;
    sharedCommissionId?: number; // @primaryKey @required True
    user?: MetaDataUserModel; // @required True
}
export interface SharedCommissionSelectionModel {
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface SharePointWebhookModel {
    clientState?: string;
    expirationDateTime?: DateString;
    resource?: string;
    siteUrl?: string;
    subscriptionId?: string;
    tenantId?: string;
    webId?: string;
}
export interface SharePointWebhookWrapperModel {
    value?: SharePointWebhookModel[];
}
export interface SigningCriteriaModel {
    ageRange?: AgeRangeModel;
    approvedBy?: UserCriteriaModel;
    code?: string;
    contract?: ContractCriteriaModel;
    createdBy?: UserCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    masterContract?: MasterContractCriteriaModel;
    name?: string;
    resource?: ResourceCriteriaModel;
    signingDocuments?: SigningDocumentCriteriaModel;
    signingRecipients?: SigningRecipientCriteriaModel;
    signingRule?: SigningRuleCriteriaModel;
    statuses?: string[];
    subject?: string;
    task?: TaskCriteriaModel;
    tender?: TenderCriteriaModel;
    tenderVariation?: TenderVariationCriteriaModel;
}
export interface SigningDocumentCriteriaModel {
    file?: FileCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    signing?: SigningCriteriaModel;
}
export interface SigningDocumentModel {
    description?: string; // @required False
    file?: FileModel; // @required False
    metaData?: MetaDataOrderModel;
    newDocCategory?: DocCategoryModel; // @required False
    signatureRequired?: boolean; // @required True
    signedAsNewFile?: boolean; // @required False
    signing?: SigningModel; // @required True
    signingDocumentId?: number; // @primaryKey @required True
    signingDocumentRule?: SigningDocumentRuleModel; // @required False
    title?: string; // @required False @length 100
}
export interface SigningDocumentRuleModel {
    description?: string; // @required False
    docCategory?: DocCategoryModel; // @required False
    file?: FileModel; // @required False
    masterReport?: MasterReportModel; // @required False
    metaData?: MetaDataOrderModel;
    newDocCategory?: DocCategoryModel; // @required False
    quickSearch?: string; // @required False @length 4000
    reportParameters?: string; // @required False
    searchFlags?: number; // @enum SearchFlags? @required False
    signatureRequired?: boolean; // @required True
    signedAsNewFile?: boolean; // @required False
    signingDocumentRuleId?: number; // @primaryKey @required True
    signingRule?: SigningRuleModel; // @required True
    sortBy?: string; // @required False @length 128
    takeFirst?: boolean; // @required True
    title?: string; // @required False @length 100
}
export interface SigningDocumentRuleSelectionModel {
    docCategory?: DocCategorySelectionModel;
    file?: FileSelectionModel;
    masterReport?: MasterReportSelectionModel;
    metaData?: MetaDataSelectionModel;
    newDocCategory?: DocCategorySelectionModel;
    signingRule?: SigningRuleSelectionModel;
}
export interface SigningDocumentSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    newDocCategory?: DocCategorySelectionModel;
    signing?: SigningSelectionModel;
    signingDocumentRule?: SigningDocumentRuleSelectionModel;
}
export interface SigningModel {
    approved?: DateString; // @required False
    approvedBy?: MetaDataUserModel; // @required False
    businessUnit?: BusinessUnitModel; // @required False
    code?: string; // @required False @length 50
    combinedDocCategory?: DocCategoryModel; // @required False
    combinedDocument?: FileModel; // @required False
    contract?: ContractModel; // @required False
    expiry?: DateString; // @required False
    getCombinedDocument?: boolean; // @required False
    masterContract?: MasterContractModel; // @required False
    message?: string; // @required False
    metaData?: MetaDataBaseModel;
    name?: string; // @required False @length 100
    reminderDelay?: number; // @required False
    reminderFrequency?: number; // @required False
    resource?: ResourceModel; // @required False
    signingDocuments?: CollectionModel<SigningDocumentModel>; // @required True
    signingId?: number; // @primaryKey @required True
    signingRecipients?: CollectionModel<SigningRecipientModel>; // @required True
    signingRule?: SigningRuleModel; // @required False
    status?: string; // @enum SigningStatus @required True
    statusChange?: DateString; // @required False
    subject?: string; // @required True @length 100
    task?: TaskModel; // @required False
    tender?: TenderModel; // @required False
    tenderVariation?: TenderVariationModel; // @required False
}
export interface SigningRecipientCriteriaModel {
    contact?: ContactCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    resource?: ResourceCriteriaModel;
    signing?: SigningCriteriaModel;
    statuses?: string[];
}
export interface SigningRecipientModel {
    contact?: ContactModel; // @required False
    messageOverride?: string; // @required False
    metaData?: MetaDataOrderModel;
    note?: string; // @required False
    recipientType?: string; // @enum SigningRecipientType @required True
    resource?: ResourceModel; // @required False
    routingOrder?: number; // @required False
    signing?: SigningModel; // @required True
    signingRecipientId?: number; // @primaryKey @required True
    signingRecipientRule?: SigningRecipientRuleModel; // @required False
    status?: string; // @enum SigningRecipientStatus @required True
    statusChange?: DateString; // @required False
    subjectOverride?: string; // @required False @length 100
    user?: MetaDataUserModel; // @required False
}
export interface SigningRecipientRoleDetailModel {
    contact?: ContactModel;
    resource?: ResourceModel;
    role?: string;
    roleName?: string;
    user?: MetaDataUserModel;
}
export interface SigningRecipientRuleModel {
    messageOverride?: string; // @required False
    metaData?: MetaDataOrderModel;
    note?: string; // @required False
    recipientType?: string; // @enum SigningRecipientType @required True
    role?: string; // @enum SigningRecipientRole? @required False
    routingOrder?: number; // @required False
    signingRecipientRuleId?: number; // @primaryKey @required True
    signingRule?: SigningRuleModel; // @required True
    subjectOverride?: string; // @required False @length 100
}
export interface SigningRecipientRuleSelectionModel {
    metaData?: MetaDataSelectionModel;
    signingRule?: SigningRuleSelectionModel;
}
export interface SigningRecipientSelectionModel {
    contact?: ContactSelectionModel;
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    signing?: SigningSelectionModel;
    signingRecipientRule?: SigningRecipientRuleSelectionModel;
    user?: UserSelectionModel;
}
export interface SigningRuleCriteriaModel {
    businessUnit?: BusinessUnitCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    ruleCode?: string;
}
export interface SigningRuleModel {
    autoApprove?: boolean; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    codeTemplate?: string; // @required False @length 100
    combinedDocCategory?: DocCategoryModel; // @required False
    combinedDocument?: boolean; // @required False
    expiry?: string; // @required False @length 100
    expiryDetails?: ExpiryDetailsModel;
    message?: string; // @required True
    metaData?: MetaDataModel;
    name?: string; // @required False @length 100
    nameTemplate?: string; // @required False @length 200
    reminderDelay?: number; // @required False
    reminderFrequency?: number; // @required False
    ruleCode?: string; // @required False @length 10
    signingDocumentRules?: CollectionModel<SigningDocumentRuleModel>; // @required True
    signingRecipientRules?: CollectionModel<SigningRecipientRuleModel>; // @required True
    signingRuleId?: number; // @primaryKey @required True
    subject?: string; // @required True @length 100
}
export interface SigningRuleSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    combinedDocCategory?: DocCategorySelectionModel;
    metaData?: MetaDataSelectionModel;
    signingDocumentRules?: CollectionSelectionModel<SigningDocumentRuleSelectionModel>;
    signingRecipientRules?: CollectionSelectionModel<SigningRecipientRuleSelectionModel>;
}
export interface SigningSelectionModel {
    approvedBy?: UserSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    combinedDocCategory?: DocCategorySelectionModel;
    combinedDocument?: FileSelectionModel;
    contract?: ContractSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    resource?: ResourceSelectionModel;
    signingDocuments?: CollectionSelectionModel<SigningDocumentSelectionModel>;
    signingRecipients?: CollectionSelectionModel<SigningRecipientSelectionModel>;
    signingRule?: SigningRuleSelectionModel;
    task?: TaskSelectionModel;
    tender?: TenderSelectionModel;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface SigningUrlRequestModel {
    returnUrl?: string;
    signingId?: number;
    signingRecipientId?: number;
}
export interface SigningUrlResponseModel {
    url?: string;
}
export interface SimpleRequestModel {

}
export interface SOHeaderCriteriaModel {
    contract?: ContractCriteriaModel;
    includeInactive?: boolean;
    pOHeader?: POHeaderCriteriaModel;
    releasedLine?: SOReleasedLineCriteriaModel;
}
export interface SOHeaderModel {
    issuerResource?: ResourceModel; // @required True
    jobFileId?: number; // @required False
    lines?: CollectionModel<SOLineModel>; // @required True
    metaData?: MetaDataModel;
    pOHeader?: POHeaderModel; // @required True
    releasedLines?: CollectionModel<SOReleasedLineModel>; // @required True
    remainingLines?: CollectionModel<SORemainingLineModel>; // @required True
    sODate?: DateString; // @required True
    sOHeaderId?: number; // @primaryKey @required True
    sOReference?: string; // @required True @length 50
    tasks?: CollectionModel<TaskModel>;
}
export interface SOHeaderSelectionModel {
    issuerResource?: ResourceSelectionModel;
    lines?: CollectionSelectionModel<SOLineSelectionModel>;
    metaData?: MetaDataSelectionModel;
    pOHeader?: POHeaderSelectionModel;
    releasedLines?: CollectionSelectionModel<SOReleasedLineSelectionModel>;
    remainingLines?: CollectionSelectionModel<SORemainingLineSelectionModel>;
    tasks?: CollectionSelectionModel<TaskSelectionModel>;
}
export interface SOLineModel {
    deliveryIncrement?: number; // @required True
    extendedPrice?: number; // @required False
    extendedTax?: number; // @required False
    itemCode?: string; // @required False @length 50
    itemDescription?: string; // @required False @length 400
    jobFileId?: number; // @required False
    lineQuantity?: number; // @required True
    metaData?: MetaDataModel;
    releasedLines?: CollectionModel<SOReleasedLineModel>; // @required True
    remainingLines?: CollectionModel<SORemainingLineModel>; // @required True
    sOHeader?: SOHeaderModel; // @required False
    sOLineId?: number; // @primaryKey @required True
    sOLineReference?: string; // @required False @length 50
    sequence?: number; // @required True
    uOM?: string; // @required False @length 10
    unitPrice?: number; // @required False
}
export interface SOLineSelectionModel {
    metaData?: MetaDataSelectionModel;
    releasedLines?: CollectionSelectionModel<SOReleasedLineSelectionModel>;
    remainingLines?: CollectionSelectionModel<SORemainingLineSelectionModel>;
    sOHeader?: SOHeaderSelectionModel;
}
export interface SOReleasedLineCriteriaModel {
    includeInactive?: boolean;
    taskIds?: number[];
}
export interface SOReleasedLineModel {
    jobFileId?: number; // @required False
    lineQuantity?: number; // @required True
    metaData?: MetaDataModel;
    releasedDate?: DateString; // @required True
    sOHeader?: SOHeaderModel; // @required True
    sOLine?: SOLineModel; // @required True
    sOReleasedLineId?: number; // @primaryKey @required True
    task?: TaskModel; // @required True
}
export interface SOReleasedLineSelectionModel {
    metaData?: MetaDataSelectionModel;
    sOHeader?: SOHeaderSelectionModel;
    sOLine?: SOLineSelectionModel;
    task?: TaskSelectionModel;
}
export interface SORemainingLineModel {
    jobFileId?: number; // @required False
    lineQuantity?: number; // @required True
    metaData?: MetaDataModel;
    remainingDate?: DateString; // @required True
    sOHeader?: SOHeaderModel; // @required True
    sOLine?: SOLineModel; // @required True
    sORemainingLineId?: number; // @primaryKey @required True
}
export interface SORemainingLineSelectionModel {
    metaData?: MetaDataSelectionModel;
    sOHeader?: SOHeaderSelectionModel;
    sOLine?: SOLineSelectionModel;
}
export interface SortModel {
    descending?: boolean;
    sortBy?: string;
}
export interface SOTaskLinkModel {
    metaData?: MetaDataModel;
    sOHeader?: SOHeaderModel; // @required True
    sOTaskLinkId?: number; // @primaryKey @required True
    task?: TaskModel; // @required True
}
export interface SOTaskLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    sOHeader?: SOHeaderSelectionModel;
    task?: TaskSelectionModel;
}
export interface SpecSaleCriteriaModel {
    bathroomCount?: number[];
    bedCount?: number[];
    brand?: BrandCriteriaModel;
    carPortCount?: number[];
    commitments?: SalesCommitmentCriteriaModel;
    contract?: ContractCriteriaModel;
    hasAlfresco?: boolean;
    hasEnSuite?: boolean;
    hasListing?: boolean;
    hasMediaRoom?: boolean;
    hasStudy?: boolean;
    houseListing?: HouseListingCriteriaModel;
    houseSize?: ValueRangeModel;
    houseType?: HouseTypeCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    interests?: SalesInterestCriteriaModel;
    land?: LandCriteriaModel;
    landShapes?: number[];
    landSize?: ValueRangeModel;
    locations?: DevelopmentLocationCriteriaModel;
    masterContract?: MasterContractCriteriaModel;
    onlyAcceptedTenders?: boolean;
    price?: ValueRangeModel;
    salesStatuses?: string[];
    specSaleType?: number[];
    stories?: number[];
    suburbs?: SuburbCriteriaModel;
    tender?: TenderCriteriaModel;
}
export interface SpecSaleModel {
    brand?: BrandModel; // @required False
    contract?: ContractModel; // @required True
    council?: DevelopmentLocationModel; // @required False
    estate?: DevelopmentLocationModel; // @required False
    facade?: TenderPackageModel; // @required False
    houseListing?: HouseListingModel; // @required False
    houseType?: HouseTypeModel; // @required False
    land?: LandModel; // @required False
    masterContract?: MasterContractModel; // @required False
    report?: ReportModel;
    salesStatus?: string; // @enum SalesStatus? @required False
    security?: SpecSaleSecurityModel;
    specSaleType?: number; // @enum SpecSaleType @required True
    tender?: TenderModel; // @required False
}
export interface SpecSaleSecurityModel {
    canAddPortalListing?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
    myHomeEdit?: boolean;
    myHomeView?: boolean;
}
export interface SpecSaleSelectionModel {
    brand?: BrandSelectionModel;
    contract?: ContractSelectionModel;
    council?: DevelopmentLocationSelectionModel;
    estate?: DevelopmentLocationSelectionModel;
    facade?: TenderPackageSelectionModel;
    houseListing?: HouseListingSelectionModel;
    houseType?: HouseTypeSelectionModel;
    land?: LandSelectionModel;
    masterContract?: MasterContractSelectionModel;
    report?: boolean;
    security?: SecuritySelectionModel;
    tender?: TenderSelectionModel;
}
export interface SsoLoginModel {
    deviceId?: string;
    deviceType?: number;
    rememberMe?: boolean;
    token?: string;
}
export interface StageModel {
    metaData?: MetaDataModel;
    officeOnly?: boolean; // @required True
    stageId?: number; // @primaryKey @required True
    stageName?: string; // @required True @length 50
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>; // @required True
}
export interface StageSelectionModel {
    metaData?: MetaDataSelectionModel;
    templateItemHistories?: CollectionSelectionModel<TemplateItemHistorySelectionModel>;
}
export interface StandardBinModel {
    endCalc?: string; // @required True @length 1
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    standardBinId?: number; // @primaryKey @required True
    standardBinName?: string; // @required False @length 500
    startCalc?: string; // @required True @length 1
}
export interface StandardBinSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface StandardProcessModel {
    businessUnit?: BusinessUnitModel; // @required True
    contractStatusFilter?: string; // @required False @length 8
    jobTypeFilter?: string; // @required False @length 5
    metaData?: MetaDataModel;
    operationCode?: number; // @enum OperationCode @required True
    plusSubscription?: boolean; // @required False
    preventEvent?: boolean; // @required True
    runEvents?: string; // @required False
    standardProcessId?: number; // @primaryKey @required True
    webhook?: WebhookModel; // @required False
}
export interface StandardProcessSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    webhook?: WebhookSelectionModel;
}
export interface StandardSummaryLinkModel {
    metaData?: MetaDataOrderModel;
    standardSummary?: StandardSummaryModel; // @required True
    standardSummaryLinkId?: number; // @primaryKey @required True
    summary?: SummaryModel; // @required True
}
export interface StandardSummaryLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    standardSummary?: StandardSummarySelectionModel;
    summary?: SummarySelectionModel;
}
export interface StandardSummaryModel {
    metaData?: MetaDataModel;
    standardSummary?: string; // @required False @length 200
    standardSummaryId?: number; // @primaryKey @required True
    standardSummaryLinks?: CollectionModel<StandardSummaryLinkModel>; // @required True
}
export interface StandardSummarySelectionModel {
    metaData?: MetaDataSelectionModel;
    standardSummaryLinks?: CollectionSelectionModel<StandardSummaryLinkSelectionModel>;
}
export interface StatusReportModel {
    comments?: string; // @required False
    contract?: ContractModel; // @required True
    metaData?: MetaDataBaseModel;
    ratingActivity?: number; // @required True
    ratingForecast?: number; // @required True
    ratingQuality?: number; // @required True
    ratingResourcing?: number; // @required True
    ratingWeather?: number; // @required True
    statusReportId?: number; // @primaryKey @required True
}
export interface StatusReportSelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface StdMessageModel {
    display?: string; // @required True @length 400
    metaData?: MetaDataModel;
    resourceCode?: ResourceCodeModel; // @required True
    stdMessageId?: number; // @primaryKey @required True
}
export interface StorageSettingCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    host?: string;
    ids?: number[];
    includeInactive?: boolean;
    storageType?: number;
}
export interface StorageSettingModel {
    businessUnit?: BusinessUnitModel; // @required True
    clientId?: string; // @required False @length 400
    clientSecret?: string; // @required False @length 400
    domain?: string; // @required False @length 400
    location?: string; // @required False @length 400
    metaData?: MetaDataOrderModel;
    security?: SecurityModel;
    storageSettingId?: number; // @primaryKey @required True
    storageType?: number; // @enum DocumentStorageType @required True
    url?: string; // @required False @length 400
}
export interface StorageSettingSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface SubscriptionCriteriaModel {
    contract?: ContractCriteriaModel;
    includeInactive?: boolean;
    user?: UserCriteriaModel;
}
export interface SubscriptionModel {
    contract?: ContractModel; // @required True
    metaData?: MetaDataModel;
    subscriptionId?: number; // @primaryKey @required True
    subscriptionType?: string; // @enum SubscriptionTypes @required True
    user?: MetaDataUserModel; // @required True
}
export interface SubscriptionSelectionModel {
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface SuburbCriteriaModel {
    developmentLocation?: DevelopmentLocationCriteriaModel;
    includeInactive?: boolean;
    name?: string;
    postcodes?: string[];
    suburbIds?: number[];
    suburbs?: string[];
}
export interface SuburbModel {
    developmentLocation?: DevelopmentLocationModel; // @required False
    metaData?: MetaDataModel;
    postcode?: string; // @required False @length 10
    suburbId?: number; // @primaryKey @required True
    suburbName?: string; // @required False @length 255
    tenderContractRules?: CollectionModel<TenderContractRuleModel>; // @required True
    tenderPriceLevelRules?: CollectionModel<TenderPriceLevelRuleModel>; // @required True
    tenderSurcharges?: CollectionModel<TenderSurchargeModel>; // @required True
}
export interface SuburbSelectionModel {
    developmentLocation?: DevelopmentLocationSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderContractRules?: CollectionSelectionModel<TenderContractRuleSelectionModel>;
    tenderPriceLevelRules?: CollectionSelectionModel<TenderPriceLevelRuleSelectionModel>;
    tenderSurcharges?: CollectionSelectionModel<TenderSurchargeSelectionModel>;
}
export interface SummaryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    name?: string;
    standardSummary?: BaseCriteriaModel;
    template?: TemplateCriteriaModel;
}
export interface SummaryGroupModel {
    binSummaryGroupLinks?: CollectionModel<BinSummaryGroupLinkModel>; // @required True
    metaData?: MetaDataModel;
    summaryGroupId?: number; // @primaryKey @required True
    summaryGroupName?: string; // @required True @length 50
    summaryGroupTemplateLinks?: CollectionModel<SummaryGroupTemplateLinkModel>; // @required True
    summaryLinks?: CollectionModel<SummaryLinkModel>; // @required True
}
export interface SummaryGroupSelectionModel {
    binSummaryGroupLinks?: CollectionSelectionModel<BinSummaryGroupLinkSelectionModel>;
    metaData?: MetaDataSelectionModel;
    summaryGroupTemplateLinks?: CollectionSelectionModel<SummaryGroupTemplateLinkSelectionModel>;
    summaryLinks?: CollectionSelectionModel<SummaryLinkSelectionModel>;
}
export interface SummaryGroupTemplateLinkModel {
    colour?: number; // @required True
    displayDateActEstCompleted?: boolean; // @required True
    displayDateBaselineCompleted?: boolean; // @required True
    displayDateBaselineStart?: boolean; // @required True
    displayDateCalled?: boolean; // @required True
    displayDateCompleted?: boolean; // @required True
    displayDatePlanned?: boolean; // @required True
    displayDateStart?: boolean; // @required True
    displayPcntComplete?: boolean; // @required True
    metaData?: MetaDataModel;
    summaryGroup?: SummaryGroupModel; // @required True
    summaryGroupLinkId?: number; // @primaryKey @required True
    summaryGroupLinkName?: string; // @required True @length 100
    template?: TemplateModel; // @required True
}
export interface SummaryGroupTemplateLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    summaryGroup?: SummaryGroupSelectionModel;
    template?: TemplateSelectionModel;
}
export interface SummaryLinkModel {
    budgetFigureCode?: string; // @required False @length 10
    groupOrder?: number; // @required True
    metaData?: MetaDataModel;
    summary?: SummaryModel; // @required True
    summaryGroup?: SummaryGroupModel; // @required True
    summaryLinkId?: number; // @primaryKey @required True
}
export interface SummaryLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    summary?: SummarySelectionModel;
    summaryGroup?: SummaryGroupSelectionModel;
}
export interface SummaryModel {
    budgetFigures?: CollectionModel<BudgetFigureModel>; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    colour?: number; // @required True
    column?: number; // @required True
    contractHistories?: CollectionModel<ContractHistoryModel>; // @required True
    contractMilestones?: CollectionModel<ContractMilestoneModel>; // @required True
    contracts?: CollectionModel<ContractModel>; // @required True
    file?: FileModel; // @required False
    metaData?: MetaDataModel;
    myHomePcntComplete?: number; // @required False
    myHomeSummary?: string; // @required False @length 200
    myHomeTemplateSets?: CollectionModel<MyHomeTemplateSetModel>; // @required True
    myHomeTemplates?: CollectionModel<MyHomeTemplateModel>; // @required True
    rptHeader?: string; // @required True @length 4
    runEvents?: string; // @required False
    security?: SecurityModel;
    standardSummaryLinks?: CollectionModel<StandardSummaryLinkModel>; // @required True
    summary?: string; // @required True @length 50
    summaryId?: number; // @primaryKey @required True
    summaryLinks?: CollectionModel<SummaryLinkModel>; // @required True
}
export interface SummarySelectionModel {
    budgetFigures?: CollectionSelectionModel<BudgetFigureSelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    contractHistories?: CollectionSelectionModel<ContractHistorySelectionModel>;
    contractMilestones?: CollectionSelectionModel<ContractMilestoneSelectionModel>;
    contracts?: CollectionSelectionModel<ContractSelectionModel>;
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    myHomeTemplateSets?: CollectionSelectionModel<MyHomeTemplateSetSelectionModel>;
    myHomeTemplates?: CollectionSelectionModel<MyHomeTemplateSelectionModel>;
    standardSummaryLinks?: CollectionSelectionModel<StandardSummaryLinkSelectionModel>;
    summaryLinks?: CollectionSelectionModel<SummaryLinkSelectionModel>;
}
export interface SystemLogModel {
    action?: string; // @required False @length 100
    details?: string; // @required False @length 100
    logDateTime?: DateString; // @required True
    operationCode?: number; // @enum OperationCode? @required False
    systemLogId?: number; // @primaryKey @required True
    taskGuid?: string; // @required False
}
export interface SystemUsageModel {
    configured?: number; // @required True
    featureUsageId?: number; // @primaryKey @required True
    maxScore?: number; // @required True
    specificModule?: number; // @required True
    title?: string; // @required True @length 9
    usage?: number; // @required True
}
export interface SystemUsageSelectionModel {

}
export interface TagCriteriaModel {
    includeInactive?: boolean;
    privateFor?: number;
    tagId?: number;
    tagName?: string;
    tagType?: number;
}
export interface TagModel {
    businessUnit?: BusinessUnitModel; // @required True
    expiryDate?: DateString; // @required False
    metaData?: MetaDataModel;
    privateFor?: MetaDataUserModel; // @required False
    tagId?: number; // @primaryKey @required True
    tagName?: string; // @required True @length 50
    tagType?: number; // @enum TagTypes @required True
}
export interface TagRequestModel {
    duration?: number;
    isPrivate?: boolean;
    tagId?: number;
    tagName?: string;
}
export interface TagSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    privateFor?: UserSelectionModel;
}
export interface TaskActionModel {
    actionName?: string; // @required True @length 100
    businessUnit?: BusinessUnitModel; // @required True
    codeValue1?: string; // @required False @length 10
    codeValue2?: string; // @required False @length 10
    dateValue1DaysAhead?: number; // @required False
    dateValue2DaysAhead?: number; // @required False
    dateValue3DaysAhead?: number; // @required False
    dateValue4DaysAhead?: number; // @required False
    decimalValue1?: number; // @required False
    decimalValue2?: number; // @required False
    iDValue1?: number; // @required False
    iDValue2?: number; // @required False
    immediate?: boolean; // @required True
    metaData?: MetaDataModel;
    notes?: string; // @required False
    onAvailable?: boolean; // @required True
    onBookedIn?: boolean; // @required True
    onCancelled?: boolean; // @required True
    onCompleted?: boolean; // @required True
    onStarted?: boolean; // @required True
    onTentative?: boolean; // @required True
    operationCode?: number; // @enum OperationCode @required True
    taskActionId?: number; // @primaryKey @required True
    templateItem?: TemplateItemModel; // @required True
    textValue1?: string; // @required False @length 400
    textValue2?: string; // @required False @length 400
}
export interface TaskActionSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    templateItem?: TemplateItemSelectionModel;
}
export interface TaskActivityModel {

}
export interface TaskAppointmentModel {

}
export interface TaskBaselineModel {
    calcBaseline?: DateString; // @required False
    manualBaseline?: DateString; // @required False
    task?: TaskModel; // @required True
    taskId?: number; // @primaryKey @required True
}
export interface TaskBaselineSelectionModel {
    task?: TaskSelectionModel;
}
export interface TaskCompleteRequestModel {
    completedDate?: DateString;
}
export interface TaskConfirmRequestModel {
    action?: string;
    alternativeDate?: DateString;
    reason?: string;
}
export interface TaskCopyRequestModel {
    action?: number;
    deliveryInstructions?: string;
    name?: string;
    resourceCode?: string;
    supplierId?: number;
    supplierLocked?: boolean;
}
export interface TaskCriteriaModel {
    activeTasksOnly?: boolean;
    assignedTo?: number[];
    baselineEnd?: AgeRangeModel;
    baselineStart?: AgeRangeModel;
    contract?: ContractCriteriaModel;
    excludeAdmin?: boolean;
    filter?: number;
    filters2?: number[];
    filters?: number[];
    forecastEnd?: AgeRangeModel;
    forecastStart?: AgeRangeModel;
    includeInactive?: boolean;
    myTasksDaysInAdvance?: AgeRangeModel;
    optional?: boolean;
    reference?: string;
    resource?: ResourceCriteriaModel;
    resourceCode?: ResourceCodeCriteriaModel;
    resourceStatuses?: string[];
    stageIds?: number[];
    summaryGroupIds?: number[];
    summaryIds?: number[];
    target?: AgeRangeModel;
    taskIds?: number[];
    taskName?: string;
    taskNotes?: string;
    taskStatuses?: string[];
    templateItem?: TemplateItemCriteriaModel;
    templateItemIds?: number[];
    userAssignedTo?: UserCriteriaModel;
}
export interface TaskDelegateRequestModel {
    resource?: ResourceModel;
}
export interface TaskErrorResponseModel {
    message?: string;
    taskId?: number;
}
export interface TaskFlexFieldModel {

}
export interface TaskHistoryModel {
    alternativePcntCompleted?: number; // @required False
    baseLineComplete?: DateString; // @required False
    baseLineStart?: DateString; // @required False
    changed?: DateString; // @required True
    contract?: ContractModel; // @required True
    dateAccepted?: DateString; // @required False
    dateAlternativeComplete?: DateString; // @required False
    dateAlternativePlanned?: DateString; // @required False
    dateAlternativeStart?: DateString; // @required False
    dateAvailable?: DateString; // @required False
    dateCalled?: DateString; // @required False
    dateCompleted?: DateString; // @required False
    dateDue?: DateString; // @required False
    dateEstimatedComplete?: DateString; // @required False
    dateEstimatedStart?: DateString; // @required False
    dateLastAssigned?: DateString; // @required False
    datePlanned?: DateString; // @required False
    dateStart?: DateString; // @required False
    durnScaled?: number; // @required False
    itemName?: string; // @required True @length 100
    msgStatus?: string; // @enum MessageStatus @required True
    order?: number; // @required True
    pcntComplete?: number; // @required False
    resourceCode?: ResourceCodeModel; // @required False
    resourceLocked?: string; // @enum SupplierLockValues @required True
    resourceStatus?: string; // @enum SupplierStatuses @required True
    stage?: StageModel; // @required True
    taskHistoryId?: number; // @primaryKey @required True
    taskStatus?: string; // @enum TaskStatus @required True
    taskVersion?: number; // @required True
    tasksLogs?: CollectionModel<TasksLogModel>; // @required True
    templateItem?: TemplateItemModel; // @required False
}
export interface TaskHistorySelectionModel {
    contract?: ContractSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    stage?: StageSelectionModel;
    tasksLogs?: CollectionSelectionModel<TasksLogSelectionModel>;
    templateItem?: TemplateItemSelectionModel;
}
export interface TaskIssueLinkModel {
    issue?: IssueModel; // @required True
    stdCreatedOn?: DateString; // @required True
    task?: TaskModel; // @required True
    taskIssueLinkId?: number; // @primaryKey @required True
}
export interface TaskIssueLinkSelectionModel {
    issue?: IssueSelectionModel;
    task?: TaskSelectionModel;
}
export interface TaskKeyDateModel {
    dateType?: number; // @enum KeyDateType @required True
    keyDate?: DateString; // @required True
}
export interface TaskKeyDateSelectionModel {

}
export interface TaskMeetingModel {
    meetingReference?: string; // @required False @length 400
    task?: TaskModel; // @required True
    taskId?: number; // @primaryKey @required True
}
export interface TaskMeetingSelectionModel {
    task?: TaskSelectionModel;
}
export interface TaskModel {
    acceptedDate?: DateString; // @required False
    activities?: CollectionModel<ActivityModel>;
    additionalResource?: ResourceModel; // @required False
    alternativeCompleteDate?: DateString; // @required False
    alternativePercentCompleted?: number; // @required False
    alternativePlannedDate?: DateString; // @required False
    alternativeStartDate?: DateString; // @required False
    appointments?: CollectionModel<MeetingModel>; // @required True
    approvedToPay?: number; // @enum ApprovalToPay @required True
    availableDate?: DateString; // @required False
    baseLineCompleteDate?: DateString; // @required False
    baseLineStartDate?: DateString; // @required False
    calcFrom?: TaskModel; // @required False
    calledDate?: DateString; // @required False
    callups?: CollectionModel<CallupModel>; // @required True
    canAssignTo?: CollectionModel<ResourceModel>;
    completedDate?: DateString; // @required False
    contract?: ContractModel; // @required True
    contractClaims?: CollectionModel<ContractClaimModel>; // @required True
    customMessage?: string; // @required False
    deliveryOption?: string; // @enum WorkItemDeliveryOptions @required True
    deliveryText?: string; // @required False
    dependents?: CollectionModel<TaskPrecedentModel>; // @required True
    documents?: CollectionModel<DocumentModel>;
    dueDate?: DateString; // @required False
    durationScaled?: number; // @required True
    estimatedCompleteDate?: DateString; // @required False
    estimatedStartDate?: DateString; // @required False
    expectedCompletionDate?: DateString; // @required False
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    files?: CollectionModel<FileModel>;
    filterStatus?: number;
    flexFields?: FlexFieldModel[];
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    hasStickyNote?: boolean; // @required True
    hidden?: boolean; // @required True
    history?: CollectionModel<TaskHistoryModel>; // @required True
    inspections?: CollectionModel<InspRequiredModel>; // @required True
    issues?: CollectionModel<IssueModel>;
    jobFileTaskId?: number; // @required False
    jobFileURL?: string; // @required False @length 150
    jobNotReadies?: CollectionModel<JobNotReadyModel>; // @required True
    keyDates?: CollectionModel<TaskKeyDateModel>;
    lastAssignedDate?: DateString; // @required False
    linked?: boolean; // @required True
    linkedTasks?: CollectionModel<TaskModel>; // @required True
    logs?: CollectionModel<TasksLogModel>; // @required True
    managingResource?: ResourceModel; // @required False
    manualPrecedents?: CollectionModel<ManualPrecedentModel>; // @required True
    messageStatus?: string; // @enum MessageStatus @required True
    messages?: CollectionModel<MessageModel>; // @required True
    metaData?: MetaDataModel;
    myHomeStories?: CollectionModel<MyHomeStoryModel>;
    notes?: CollectionModel<NoteModel>; // @required True
    optional?: boolean; // @required True
    pOReceipts?: CollectionModel<POReceiptModel>; // @required True
    percentComplete?: number; // @required False
    plannedDate?: DateString; // @required False
    precedents?: CollectionModel<TaskPrecedentModel>; // @required True
    purchaseOrders?: CollectionModel<POHeaderModel>;
    relatedStories?: CollectionModel<MyHomeStoryModel>; // @required True
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>; // @required True
    requisitions?: CollectionModel<RequisitionModel>; // @required True
    resource?: ResourceModel; // @required False
    resourceCode?: ResourceCodeModel; // @required True
    resourceLocked?: string; // @enum SupplierLockValues @required True
    resourceStatus?: string; // @enum SupplierStatuses @required True
    resourceTaskActivities?: CollectionModel<ResourceTaskActivityModel>; // @required True
    sOReleasedLines?: CollectionModel<SOReleasedLineModel>; // @required True
    salesOrders?: CollectionModel<SOHeaderModel>;
    security?: TaskSecurityModel;
    signings?: CollectionModel<SigningModel>; // @required True
    stage?: StageModel; // @required True
    startDate?: DateString; // @required False
    tags?: CollectionModel<TagModel>;
    taskBaseline?: TaskBaselineModel; // @required False
    taskId?: number; // @primaryKey @required True
    taskMeeting?: TaskMeetingModel; // @required False
    taskName?: string; // @required True @length 100
    taskNotes?: string; // @required False
    taskOrder?: number; // @required True
    taskStatus?: string; // @enum TaskStatus @required True
    taskTarget?: TaskTargetModel; // @required False
    taskVersion?: number; // @required True
    templateItem?: TemplateItemModel; // @required False
    virtualResource?: ResourceModel; // @required False
    wBSCode?: string; // @required False @length 10
    warnings?: string[];
    workTimers?: CollectionModel<WorkTimerModel>; // @required True
}
export interface TaskNoteModel {

}
export interface TaskNotificationModel {
    acceptedDate?: DateString;
    activities?: CollectionModel<ActivityModel>;
    additionalResource?: ResourceModel;
    alternativeCompleteDate?: DateString;
    alternativePercentCompleted?: number;
    alternativePlannedDate?: DateString;
    alternativeStartDate?: DateString;
    appointments?: CollectionModel<MeetingModel>;
    approvedToPay?: number;
    availableDate?: DateString;
    baseLineCompleteDate?: DateString;
    baseLineStartDate?: DateString;
    calcFrom?: TaskModel;
    calledDate?: DateString;
    callups?: CollectionModel<CallupModel>;
    canAssignTo?: CollectionModel<ResourceModel>;
    completedDate?: DateString;
    contract?: ContractModel;
    contractClaims?: CollectionModel<ContractClaimModel>;
    customMessage?: string;
    deliveryOption?: string;
    deliveryText?: string;
    dependents?: CollectionModel<TaskPrecedentModel>;
    documents?: CollectionModel<DocumentModel>;
    dueDate?: DateString;
    durationScaled?: number;
    estimatedCompleteDate?: DateString;
    estimatedStartDate?: DateString;
    expectedCompletionDate?: DateString;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    files?: CollectionModel<FileModel>;
    filterStatus?: number;
    flexFields?: FlexFieldModel[];
    geoTrackings?: CollectionModel<GeoTrackingModel>;
    hasStickyNote?: boolean;
    hidden?: boolean;
    history?: CollectionModel<TaskHistoryModel>;
    inspections?: CollectionModel<InspRequiredModel>;
    issues?: CollectionModel<IssueModel>;
    jobFileTaskId?: number;
    jobFileURL?: string;
    jobNotReadies?: CollectionModel<JobNotReadyModel>;
    jobNotReady?: JobNotReadyModel;
    keyDates?: CollectionModel<TaskKeyDateModel>;
    lastAssignedDate?: DateString;
    linked?: boolean;
    linkedTasks?: CollectionModel<TaskModel>;
    logs?: CollectionModel<TasksLogModel>;
    managingResource?: ResourceModel;
    manualPrecedents?: CollectionModel<ManualPrecedentModel>;
    messageStatus?: string;
    messages?: CollectionModel<MessageModel>;
    metaData?: MetaDataModel;
    myHomeStories?: CollectionModel<MyHomeStoryModel>;
    notes?: CollectionModel<NoteModel>;
    optional?: boolean;
    pOReceipts?: CollectionModel<POReceiptModel>;
    percentComplete?: number;
    plannedDate?: DateString;
    precedents?: CollectionModel<TaskPrecedentModel>;
    purchaseOrders?: CollectionModel<POHeaderModel>;
    relatedStories?: CollectionModel<MyHomeStoryModel>;
    requisitionHistories?: CollectionModel<RequisitionHistoryModel>;
    requisitions?: CollectionModel<RequisitionModel>;
    resource?: ResourceModel;
    resourceCode?: ResourceCodeModel;
    resourceLocked?: string;
    resourceStatus?: string;
    resourceTaskActivities?: CollectionModel<ResourceTaskActivityModel>;
    sOReleasedLines?: CollectionModel<SOReleasedLineModel>;
    salesOrders?: CollectionModel<SOHeaderModel>;
    security?: TaskSecurityModel;
    signings?: CollectionModel<SigningModel>;
    stage?: StageModel;
    startDate?: DateString;
    tags?: CollectionModel<TagModel>;
    taskBaseline?: TaskBaselineModel;
    taskId?: number;
    taskMeeting?: TaskMeetingModel;
    taskName?: string;
    taskNotes?: string;
    taskOrder?: number;
    taskStatus?: string;
    taskTarget?: TaskTargetModel;
    taskVersion?: number;
    templateItem?: TemplateItemModel;
    virtualResource?: ResourceModel;
    wBSCode?: string;
    warnings?: string[];
    workTimers?: CollectionModel<WorkTimerModel>;
}
export interface TaskPrecedentModel {
    deltaDays?: number; // @required True
    manuallyAdded?: boolean; // @required False
    message?: string; // @required False @length 100
    precedentId?: number; // @primaryKey @required True
    resourceStatus?: string; // @enum SupplierStatuses @required True
    restriction?: number; // @enum PrecedentRuleRestrictions @required True
    rules?: PrecedentRuleModel[];
    task?: TaskModel; // @required True
    taskPrecedent?: TaskModel; // @required True
    taskStatus?: string; // @enum TaskStatus @required True
    type?: number; // @enum PrecedentTypes @required True
}
export interface TaskPrecedentSelectionModel {
    task?: TaskSelectionModel;
    taskPrecedent?: TaskSelectionModel;
}
export interface TaskRequestModel {
    task?: TaskModel;
}
export interface TaskScheduleRequestModel {
    contactMethod?: string;
    delivery?: string;
    deliveryText?: string;
    dueDate?: DateString;
    expectedCompletion?: DateString;
    flexFields?: FlexFieldModel[];
    linkDocuments?: number[];
    linkedTasks?: LinkedTaskScheduleRequestModel[];
    messageAction?: number;
    plannedDate?: DateString;
    rescheduleReason?: string;
    resource?: ResourceModel;
    sOReleasedLines?: SOReleasedLineModel[];
    taskNotes?: string;
}
export interface TaskSecurityModel {
    canAccept?: boolean;
    canAddDocs?: boolean;
    canAddInspection?: boolean;
    canAddIssues?: boolean;
    canAddNotes?: boolean;
    canBookAppointment?: boolean;
    canCancel?: boolean;
    canChangeDueDate?: boolean;
    canChangeProposeAlternateDate?: boolean;
    canComplete?: boolean;
    canDelegate?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canEditFlexFields?: boolean;
    canInitiateSigning?: boolean;
    canProgress?: boolean;
    canReactivate?: boolean;
    canReject?: boolean;
    canReset?: boolean;
    canScheduleTask?: boolean;
    canSplitAdvanceNotice?: boolean;
    canSplitCallback?: boolean;
    canSplitInstructions?: boolean;
    canSplitMultipleCallup?: boolean;
    canView?: boolean;
    documentSecurity?: DocumentSecurityModel;
}
export interface TaskSelectionModel {
    activities?: CollectionSelectionModel<ActivitySelectionModel>;
    additionalResource?: ResourceSelectionModel;
    appointments?: CollectionSelectionModel<MeetingSelectionModel>;
    calcFrom?: TaskSelectionModel;
    callups?: CollectionSelectionModel<CallupSelectionModel>;
    canAssignTo?: CollectionSelectionModel<ResourceSelectionModel>;
    contract?: ContractSelectionModel;
    contractClaims?: CollectionSelectionModel<ContractClaimSelectionModel>;
    dependents?: CollectionSelectionModel<TaskPrecedentSelectionModel>;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    fast?: boolean;
    files?: CollectionSelectionModel<FileSelectionModel>;
    flexFields?: CollectionSelectionModel<FlexFieldSelectionModel>;
    geoTrackings?: CollectionSelectionModel<GeoTrackingSelectionModel>;
    history?: CollectionSelectionModel<TaskHistorySelectionModel>;
    inspections?: CollectionSelectionModel<InspRequiredSelectionModel>;
    issues?: CollectionSelectionModel<IssueSelectionModel>;
    jobNotReadies?: CollectionSelectionModel<JobNotReadySelectionModel>;
    keyDates?: CollectionSelectionModel<TaskKeyDateSelectionModel>;
    linkedTasks?: CollectionSelectionModel<TaskSelectionModel>;
    logs?: CollectionSelectionModel<TasksLogSelectionModel>;
    managingResource?: ResourceSelectionModel;
    manualPrecedents?: CollectionSelectionModel<ManualPrecedentSelectionModel>;
    messages?: CollectionSelectionModel<MessageSelectionModel>;
    metaData?: MetaDataSelectionModel;
    myHomeStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    notes?: CollectionSelectionModel<NoteSelectionModel>;
    pOReceipts?: CollectionSelectionModel<POReceiptSelectionModel>;
    precedents?: CollectionSelectionModel<TaskPrecedentSelectionModel>;
    purchaseOrders?: CollectionSelectionModel<POHeaderSelectionModel>;
    relatedStories?: CollectionSelectionModel<MyHomeStorySelectionModel>;
    requisitionHistories?: CollectionSelectionModel<RequisitionHistorySelectionModel>;
    requisitions?: CollectionSelectionModel<RequisitionSelectionModel>;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    resourceTaskActivities?: CollectionSelectionModel<ResourceTaskActivitySelectionModel>;
    sOReleasedLines?: CollectionSelectionModel<SOReleasedLineSelectionModel>;
    salesOrders?: CollectionSelectionModel<SOHeaderSelectionModel>;
    security?: SecuritySelectionModel;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
    stage?: StageSelectionModel;
    tags?: CollectionSelectionModel<TagSelectionModel>;
    taskBaseline?: TaskBaselineSelectionModel;
    taskMeeting?: TaskMeetingSelectionModel;
    taskTarget?: TaskTargetSelectionModel;
    templateItem?: TemplateItemSelectionModel;
    virtualResource?: ResourceSelectionModel;
    workTimers?: CollectionSelectionModel<WorkTimerSelectionModel>;
}
export interface TaskSimpleScheduleRequestModel {
    delivery?: string;
    deliveryText?: string;
    dueDate?: DateString;
    expectedCompletion?: DateString;
    messageAction?: number;
    plannedDate?: DateString;
    resource?: ResourceModel;
}
export interface TasksLogModel {
    callup?: CallupModel; // @required False
    description?: string; // @required False @length 150
    logDate?: DateString; // @required True
    operationCode?: number; // @enum OperationCode @required True
    reason?: string; // @required False @length 10
    resource?: ResourceModel; // @required False
    taskHistory?: TaskHistoryModel; // @required False
    tasksLogId?: number; // @primaryKey @required True
    user?: MetaDataUserModel; // @required True
}
export interface TasksLogSelectionModel {
    callup?: CallupSelectionModel;
    resource?: ResourceSelectionModel;
    taskHistory?: TaskHistorySelectionModel;
    user?: UserSelectionModel;
}
export interface TasksTagModel {
    metaData?: MetaDataModel;
    tag?: TagModel; // @required True
    task?: TaskModel; // @required True
    tasksTagId?: number; // @primaryKey @required True
}
export interface TasksTagSelectionModel {
    metaData?: MetaDataSelectionModel;
    tag?: TagSelectionModel;
    task?: TaskSelectionModel;
}
export interface TaskStartRequestModel {
    startDate?: DateString;
}
export interface TaskTargetModel {
    calcTarget?: DateString; // @required False
    daysAhead?: number;
    manualTarget?: DateString; // @required False
    target?: DateString; // @required False
    targetDate?: DateString;
    targetEndDate?: DateString;
    task?: TaskModel; // @required True
    taskId?: number; // @primaryKey @required True
}
export interface TaskTargetSelectionModel {
    task?: TaskSelectionModel;
}
export interface TemplateCriteriaModel {
    available?: boolean;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    expired?: boolean;
    ids?: number[];
    includeInactive?: boolean;
    jobTypes?: string[];
    quickSearch?: string;
    templateIds?: number[];
}
export interface TemplateFlexFieldLinkModel {

}
export interface TemplateFlexFieldLinkSelectionModel {

}
export interface TemplateItemCriteriaModel {
    administration?: boolean;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    quickSearch?: string;
    reference?: string;
    resource?: ResourceCriteriaModel;
    template?: TemplateCriteriaModel;
    templateItemIds?: number[];
}
export interface TemplateItemHistoryModel {
    administration?: boolean; // @required True
    allowSlippage?: number; // @required True
    autoComplete?: boolean; // @required True
    autoSchedule?: boolean; // @required True
    baselineEvent?: number; // @enum BaselineEvents? @required False
    calcFrom?: TemplateItemModel; // @required False
    dateCalc?: string; // @enum DateCalcType @required True
    delivery?: boolean; // @required True
    deliveryOption?: string; // @enum TemplateDeliveryOptions @required True
    deltaDays?: number; // @required True
    duration?: number; // @required True
    extras?: boolean; // @required True
    hidden?: boolean; // @required True
    itemName?: string; // @required True @length 100
    leadTime?: number; // @required True
    messageText?: string; // @required False
    metaData?: MetaDataModel;
    myHomeTemplate?: MyHomeTemplateModel; // @required False
    optional?: boolean; // @required True
    order?: number; // @required True
    partialPoints?: boolean; // @required True
    paymentEvent?: number; // @enum PaymentEvents? @required False
    points?: number; // @required True
    processEvent?: ProcessEventModel; // @required False
    progressMilestone?: SummaryModel; // @required False
    reminderDays?: number; // @required True
    resource?: ResourceModel; // @required False
    resourceCode?: ResourceCodeModel; // @required True
    roleRestriction?: number; // @enum RoleCompletionRestrictions @required True
    runEvents?: string; // @required False
    scaleFactor?: number; // @required True
    stage?: StageModel; // @required True
    summary?: SummaryModel; // @required False
    taskPriority?: number; // @required True
    taskType?: number; // @enum TaskType @required True
    template?: TemplateModel; // @required True
    templateItem?: TemplateItemModel; // @required True
    templateItemHistoryId?: number; // @primaryKey @required True
    tradeReceiver?: TemplateItemModel; // @required False
    wBSCode?: string; // @required False @length 10
    weatherScale?: number; // @required True
}
export interface TemplateItemHistorySelectionModel {
    calcFrom?: TemplateItemSelectionModel;
    metaData?: MetaDataSelectionModel;
    myHomeTemplate?: MyHomeTemplateSelectionModel;
    processEvent?: ProcessEventSelectionModel;
    progressMilestone?: SummarySelectionModel;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    stage?: StageSelectionModel;
    summary?: SummarySelectionModel;
    template?: TemplateSelectionModel;
    templateItem?: TemplateItemSelectionModel;
    tradeReceiver?: TemplateItemSelectionModel;
}
export interface TemplateItemModel {
    activityReports?: CollectionModel<ActivityReportModel>; // @required True
    administration?: boolean; // @required True
    allowSlippage?: number; // @required True
    autoComplete?: boolean; // @required True
    autoSchedule?: boolean; // @required True
    baselineEvent?: number; // @enum BaselineEvents? @required False
    calcFrom?: TemplateItemModel; // @required False
    completeRestrictions?: number[];
    completionRestriction?: number; // @enum CompletionRestrictions @required True
    dateCalc?: string; // @enum DateCalcType @required True
    delivery?: boolean; // @required True
    deliveryOption?: string; // @enum TemplateDeliveryOptions @required True
    deltaDays?: number; // @required True
    diagramData?: string; // @required False
    docTemplateMatches?: CollectionModel<DocTemplateMatchModel>; // @required True
    duration?: number; // @required True
    extras?: boolean; // @required True
    flexFieldLinks?: CollectionModel<FlexFieldLinkModel>; // @required True
    flexFields?: CollectionModel<FlexFieldDefinitionModel>;
    forecastData?: TaskTargetModel;
    hidden?: boolean; // @required True
    inspTemplates?: CollectionModel<InspTemplateModel>;
    itemName?: string; // @required True @length 100
    leadTime?: number; // @required True
    linkedTemplateItems?: CollectionModel<TemplateItemModel>; // @required True
    messageText?: string; // @required False
    metaData?: MetaDataModel;
    myHomeTemplate?: MyHomeTemplateModel; // @required False
    optional?: boolean; // @required True
    order?: number; // @required True
    pOTemplateMatches?: CollectionModel<POTemplateMatchModel>; // @required True
    partialPoints?: boolean; // @required True
    paymentEvent?: number; // @enum PaymentEvents? @required False
    points?: number; // @required True
    precedents?: CollectionModel<PrecedentModel>; // @required True
    processEvent?: ProcessEventModel; // @required False
    progressMilestone?: SummaryModel; // @required False
    reminderDays?: number; // @required True
    resource?: ResourceModel; // @required False
    resourceCode?: ResourceCodeModel; // @required True
    rfqTriggers?: CollectionModel<RfqTriggerModel>; // @required True
    roleRestriction?: number; // @enum RoleCompletionRestrictions @required True
    runEvents?: string; // @required False
    scaleFactor?: number; // @required True
    security?: SecurityModel;
    stage?: StageModel; // @required True
    summary?: SummaryModel; // @required False
    taskActions?: CollectionModel<TaskActionModel>; // @required True
    taskPriority?: number; // @required True
    taskType?: number; // @enum TaskType @required True
    template?: TemplateModel; // @required True
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>; // @required True
    templateItemId?: number; // @primaryKey @required True
    templateSubProcessSteps?: CollectionModel<TemplateSubProcessStepModel>; // @required True
    templateSubProcessTriggers?: CollectionModel<TemplateSubProcessTriggerModel>; // @required True
    tenderTriggers?: CollectionModel<TenderTriggerModel>; // @required True
    tradeReceiver?: TemplateItemModel; // @required False
    wBSCode?: string; // @required False @length 10
    weatherScale?: number; // @required True
}
export interface TemplateItemSelectionModel {
    activityReports?: CollectionSelectionModel<ActivityReportSelectionModel>;
    calcFrom?: TemplateItemSelectionModel;
    docTemplateMatches?: CollectionSelectionModel<DocTemplateMatchSelectionModel>;
    flexFieldLinks?: CollectionSelectionModel<FlexFieldLinkSelectionModel>;
    flexFields?: CollectionSelectionModel<FlexFieldDefinitionSelectionModel>;
    forecastData?: TaskTargetSelectionModel;
    inspTemplates?: CollectionSelectionModel<InspTemplateSelectionModel>;
    linkedTemplateItems?: CollectionSelectionModel<TemplateItemSelectionModel>;
    metaData?: MetaDataSelectionModel;
    myHomeTemplate?: MyHomeTemplateSelectionModel;
    pOTemplateMatches?: CollectionSelectionModel<POTemplateMatchSelectionModel>;
    precedents?: CollectionSelectionModel<PrecedentSelectionModel>;
    processEvent?: ProcessEventSelectionModel;
    progressMilestone?: SummarySelectionModel;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    rfqTriggers?: CollectionSelectionModel<RfqTriggerSelectionModel>;
    stage?: StageSelectionModel;
    summary?: SummarySelectionModel;
    taskActions?: CollectionSelectionModel<TaskActionSelectionModel>;
    template?: TemplateSelectionModel;
    templateItemHistories?: CollectionSelectionModel<TemplateItemHistorySelectionModel>;
    templateSubProcessSteps?: CollectionSelectionModel<TemplateSubProcessStepSelectionModel>;
    templateSubProcessTriggers?: CollectionSelectionModel<TemplateSubProcessTriggerSelectionModel>;
    tenderTriggers?: CollectionSelectionModel<TenderTriggerSelectionModel>;
    tradeReceiver?: TemplateItemSelectionModel;
}
export interface TemplateModel {
    advancePlannerDays?: number; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    defaultContractRoles?: CollectionModel<DefaultContractRoleModel>; // @required True
    diagramData?: string; // @required False
    docTemplateMatches?: CollectionModel<DocTemplateMatchModel>; // @required True
    flexFieldLinks?: CollectionModel<FlexFieldLinkModel>; // @required True
    flexFields?: CollectionModel<FlexFieldDefinitionModel>;
    isProject?: boolean; // @required True
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    normalDuration?: number; // @required True
    normalPriority?: number; // @required True
    security?: SecurityModel;
    selectionRules?: CollectionModel<TemplateSelxnRuleModel>; // @required True
    snapshotConfig?: string; // @required False
    subProcesses?: CollectionModel<TemplateSubProcessModel>; // @required True
    templateAvailable?: DateString; // @required True
    templateExpired?: DateString; // @required True
    templateId?: number; // @primaryKey @required True
    templateItemHistories?: CollectionModel<TemplateItemHistoryModel>; // @required True
    templateItems?: CollectionModel<TemplateItemModel>; // @required True
    templateName?: string; // @required True @length 50
    tenderContractRules?: CollectionModel<TenderContractRuleModel>; // @required True
    tenderPhases?: CollectionModel<TenderPhaseModel>; // @required True
}
export interface TemplateSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    defaultContractRoles?: CollectionSelectionModel<DefaultContractRoleSelectionModel>;
    docTemplateMatches?: CollectionSelectionModel<DocTemplateMatchSelectionModel>;
    flexFieldLinks?: CollectionSelectionModel<FlexFieldLinkSelectionModel>;
    flexFields?: CollectionSelectionModel<FlexFieldDefinitionSelectionModel>;
    metaData?: MetaDataSelectionModel;
    selectionRules?: CollectionSelectionModel<TemplateSelxnRuleSelectionModel>;
    subProcesses?: CollectionSelectionModel<TemplateSubProcessSelectionModel>;
    templateItemHistories?: CollectionSelectionModel<TemplateItemHistorySelectionModel>;
    templateItems?: CollectionSelectionModel<TemplateItemSelectionModel>;
    tenderContractRules?: CollectionSelectionModel<TenderContractRuleSelectionModel>;
    tenderPhases?: CollectionSelectionModel<TenderPhaseSelectionModel>;
}
export interface TemplateSelxnRuleModel {
    available?: DateString; // @required True
    brand?: BrandModel; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    council?: DevelopmentLocationModel; // @required False
    estate?: DevelopmentLocationModel; // @required False
    expired?: DateString; // @required True
    fromExistingProcess?: boolean; // @required True
    houseType?: HouseTypeModel; // @required False
    jobType?: string; // @enum JobTypes @required True
    metaData?: MetaDataModel;
    referralSource?: ReferralSourceModel; // @required False
    region?: RegionModel; // @required True
    storeys?: number; // @required False
    template?: TemplateModel; // @required True
    templateSelectionRuleId?: number; // @primaryKey @required True
}
export interface TemplateSelxnRuleSelectionModel {
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    council?: DevelopmentLocationSelectionModel;
    estate?: DevelopmentLocationSelectionModel;
    houseType?: HouseTypeSelectionModel;
    metaData?: MetaDataSelectionModel;
    referralSource?: ReferralSourceSelectionModel;
    region?: RegionSelectionModel;
    template?: TemplateSelectionModel;
}
export interface TemplateSubProcessModel {
    description?: string; // @required True @length 50
    metaData?: MetaDataModel;
    template?: TemplateModel; // @required True
    templateSubProcessId?: number; // @primaryKey @required True
    templateSubProcessSteps?: CollectionModel<TemplateSubProcessStepModel>; // @required True
    templateSubProcessTriggers?: CollectionModel<TemplateSubProcessTriggerModel>; // @required True
    userOperation?: boolean; // @required True
}
export interface TemplateSubProcessSelectionModel {
    metaData?: MetaDataSelectionModel;
    template?: TemplateSelectionModel;
    templateSubProcessSteps?: CollectionSelectionModel<TemplateSubProcessStepSelectionModel>;
    templateSubProcessTriggers?: CollectionSelectionModel<TemplateSubProcessTriggerSelectionModel>;
}
export interface TemplateSubProcessStepModel {
    action?: number; // @enum WorkFlowActionType @required True
    customAction?: string; // @required False
    templateItem?: TemplateItemModel; // @required True
    templateSubProcessStepId?: number; // @primaryKey @required True
    templateSubProcesss?: TemplateSubProcessModel; // @required True
}
export interface TemplateSubProcessStepSelectionModel {
    templateItem?: TemplateItemSelectionModel;
    templateSubProcesss?: TemplateSubProcessSelectionModel;
}
export interface TemplateSubProcessTriggerModel {
    conditionType?: number; // @enum WorkflowConditionType @required True
    fieldName?: string; // @required False @length 20
    flexFieldDefinitions?: FlexFieldDefinitionModel; // @required False
    jobType?: string; // @enum JobTypes? @required False
    metaData?: MetaDataBaseModel;
    operation?: number; // @required True
    setupNotesReason?: string; // @required False @length 100
    templateItem?: TemplateItemModel; // @required False
    templateSubProcessTriggerId?: number; // @primaryKey @required True
    templateSubProcesss?: TemplateSubProcessModel; // @required False
    triggerCCreation?: boolean; // @required True
    triggerCEdit?: boolean; // @required True
    triggerTComplete?: boolean; // @required True
    triggerTSchedule?: boolean; // @required True
    value?: string; // @required False @length 100
}
export interface TemplateSubProcessTriggerSelectionModel {
    flexFieldDefinitions?: FlexFieldDefinitionSelectionModel;
    metaData?: MetaDataSelectionModel;
    templateItem?: TemplateItemSelectionModel;
    templateSubProcesss?: TemplateSubProcessSelectionModel;
}
export interface TenderAccUpdateRequestModel {
    accDate?: DateString;
    optionSelection?: TenderOptionSelxnModel;
}
export interface TenderAreaSelxnCriteriaModel {
    tender?: TenderCriteriaModel;
}
export interface TenderAreaSelxnModel {
    masterArea?: MasterAreaModel; // @required True
    metaData?: MetaDataOrderModel;
    tender?: TenderModel; // @required True
    tenderAreaSelectionId?: number; // @primaryKey @required True
}
export interface TenderAreaSelxnSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    tender?: TenderSelectionModel;
}
export interface TenderAttributeCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    option?: TenderOptionCriteriaModel;
    quickSearch?: string;
}
export interface TenderAttributeModel {
    alternativeName?: string; // @required False @length 50
    attributeName?: string; // @required True @length 50
    attributeType?: number; // @enum TenderAttributeType @required True
    businessUnit?: BusinessUnitModel; // @required True
    elementName?: string; // @required False @length 50
    metaData?: MetaDataModel;
    security?: SecurityModel;
    tenderAttributeId?: number; // @primaryKey @required True
    tenderAttributeValues?: CollectionModel<TenderAttributeValueModel>; // @required True
    tenderOptionAttributeLinks?: CollectionModel<TenderOptionAttributeLinkModel>; // @required True
}
export interface TenderAttributeSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderAttributeValues?: CollectionSelectionModel<TenderAttributeValueSelectionModel>;
    tenderOptionAttributeLinks?: CollectionSelectionModel<TenderOptionAttributeLinkSelectionModel>;
}
export interface TenderAttributeValueCriteriaModel {
    ageRange?: AgeRangeModel;
    attribute?: TenderAttributeCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    quickSearch?: string;
}
export interface TenderAttributeValueModel {
    alternateElementValue?: string; // @required False @length 50
    attributeValueName?: string; // @required True @length 50
    colourCode?: number; // @required False
    effectiveDate?: DateString; // @required True
    expiryDate?: DateString; // @required True
    file?: FileModel; // @required False
    metaData?: MetaDataModel;
    productCode?: string; // @required False @length 50
    security?: SecurityModel;
    tenderAttribute?: TenderAttributeModel; // @required True
    tenderAttributeValueId?: number; // @primaryKey @required True
}
export interface TenderAttributeValueSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderAttribute?: TenderAttributeSelectionModel;
}
export interface TenderAuditModel {
    action?: number; // @enum ChangeAction @required True
    description?: string; // @required False @length 50
    newClientNotes?: string; // @required False
    newCustomAddendum?: string; // @required False
    newCustomDescription?: string; // @required False
    newDescription?: string; // @required False
    newInternalNotes?: string; // @required False
    newLockedPriceSell?: number; // @required True
    newOptionPrice?: TenderOptionPriceModel; // @required False
    newOverridePriceSell?: number; // @required True
    newPackagePrice?: TenderPackagePriceModel; // @required False
    newPriceDisplay?: number; // @required False
    newPriceStatus?: number; // @enum TenderItemsPricingStatus @required True
    newQuantity?: number; // @required True
    oldClientNotes?: string; // @required False
    oldCustomAddendum?: string; // @required False
    oldCustomDescription?: string; // @required False
    oldDescription?: string; // @required False
    oldInternalNotes?: string; // @required False
    oldLockedPriceSell?: number; // @required True
    oldOptionPrice?: TenderOptionPriceModel; // @required False
    oldOverridePriceSell?: number; // @required True
    oldPackagePrice?: TenderPackagePriceModel; // @required False
    oldPriceDisplay?: number; // @required False
    oldPriceStatus?: number; // @enum TenderItemsPricingStatus @required True
    oldQuantity?: number; // @required True
    originalTender?: TenderModel; // @required False
    sourceTender?: TenderModel; // @required False
    stdModifiedOn?: DateString; // @required True
    tenderAuditId?: number; // @primaryKey @required True
    tenderOption?: TenderOptionModel; // @required False
    tenderOptionSelection?: TenderOptionSelxnModel; // @required False
    tenderPackage?: TenderPackageModel; // @required False
    tenderPackageSelection?: TenderPackageSelxnModel; // @required False
    tenderVariation?: TenderVariationModel; // @required False
}
export interface TenderAuditSelectionModel {
    newOptionPrice?: TenderOptionPriceSelectionModel;
    newPackagePrice?: TenderPackagePriceSelectionModel;
    oldOptionPrice?: TenderOptionPriceSelectionModel;
    oldPackagePrice?: TenderPackagePriceSelectionModel;
    originalTender?: TenderSelectionModel;
    sourceTender?: TenderSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
    tenderOptionSelection?: TenderOptionSelxnSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPackageSelection?: TenderPackageSelxnSelectionModel;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface TenderBtrPreviewModel {
    chargePerInterval?: number;
    currentAccDeadline?: DateString;
    currentNetTldBpecDays?: number;
    currentPriceExpiryDate?: DateString;
    daysRequested?: number;
    error?: ErrorModel;
    intervalChargeAtFurtherPrice?: number;
    intervalChargeAtInitialPrice?: number;
    intervalsAtFurtherPrice?: number;
    intervalsAtInitialPrice?: number;
    intervalsRequested?: number;
    intervalsRounded?: number;
    newAccDeadline?: DateString;
    newExtendedHousePrice?: number;
    newHousePriceEffectiveDate?: DateString;
    newHouseSellPrice?: number;
    newNetTldBpecDays?: number;
    newPriceExpiryDate?: DateString;
    newTenderTotalSell?: number;
    request?: TenderBtrRequestModel;
    tenderContractRule?: TenderContractRuleModel;
    totalCharge?: number;
}
export interface TenderBtrRequestModel {
    accDeadlineDate?: DateString;
    manualHousePrice?: number;
    newHousePrice?: TenderHousePriceModel;
    option?: TenderOptionModel;
    quantity?: number;
    reason?: string;
    retainBasePriceExtention?: boolean;
    retainLandTitledDiscount?: boolean;
}
export interface TenderBtrResponseModel {
    contractSale?: ContractSaleModel;
    errorMessage?: ErrorModel;
    tenderDetail?: TenderModel;
}
export interface TenderChangeLogModel {
    changeType?: number; // @enum TenderChangeType @required True
    metaData?: MetaDataOrderModel;
    reason?: string; // @required False @length 400
    tender?: TenderModel; // @required True
    tenderChangeLogId?: number; // @primaryKey @required True
    tenderOptionSelection?: TenderOptionSelxnModel; // @required False
    tenderOptionSelections?: CollectionModel<TenderOptionSelxnModel>; // @required True
    tenderPackageSelection?: TenderPackageSelxnModel; // @required False
    tenderPackageSelections?: CollectionModel<TenderPackageSelxnModel>; // @required True
    tenderVariation?: TenderVariationModel; // @required False
}
export interface TenderChangeLogSelectionModel {
    metaData?: MetaDataSelectionModel;
    tender?: TenderSelectionModel;
    tenderOptionSelection?: TenderOptionSelxnSelectionModel;
    tenderOptionSelections?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    tenderPackageSelection?: TenderPackageSelxnSelectionModel;
    tenderPackageSelections?: CollectionSelectionModel<TenderPackageSelxnSelectionModel>;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface TenderContractDatePreviewModel {
    chargePerInterval?: number;
    currentAccDeadline?: DateString;
    currentNetTldBpecDays?: number;
    currentPriceExpiryDate?: DateString;
    error?: ErrorModel;
    intervalChargeAtFurtherPrice?: number;
    intervalChargeAtInitialPrice?: number;
    intervalsAtFurtherPrice?: number;
    intervalsAtInitialPrice?: number;
    newAccDeadline?: DateString;
    newCharge?: number;
    newDays?: number;
    newExtendedHousePrice?: number;
    newIntervals?: number;
    newIntervalsRounded?: number;
    newNetTldBpecDays?: number;
    newPriceExpiryDate?: DateString;
    newTenderTotalSell?: number;
    request?: TenderContractDateRequestModel;
    tenderContractRule?: TenderContractRuleModel;
    totalCharge?: number;
    totalDays?: number;
    totalIntervals?: number;
    totalIntervalsRounded?: number;
}
export interface TenderContractDateRequestModel {
    accDeadlineDate?: DateString;
    newHousePrice?: TenderHousePriceModel;
    option?: TenderOptionModel;
    override?: boolean;
    quantity?: number;
    reason?: string;
}
export interface TenderContractDateResponseModel {
    contractSale?: ContractSaleModel;
    errorMessage?: ErrorModel;
    selection?: TenderOptionSelxnModel;
    tenderDetail?: TenderModel;
}
export interface TenderContractRuleCriteriaModel {
    accCalculationTypes?: number[];
    available?: AgeRangeModel;
    brand?: BrandCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    council?: DevelopmentLocationCriteriaModel;
    daysToAcc?: ValueRangeModel;
    depositAmount2?: ValueRangeModel;
    depositAmount?: ValueRangeModel;
    estate?: DevelopmentLocationCriteriaModel;
    expired?: AgeRangeModel;
    ids?: number[];
    includeInactive?: boolean;
    priceLevel?: TenderPriceLevelCriteriaModel;
    suburb?: SuburbCriteriaModel;
    template?: TemplateCriteriaModel;
}
export interface TenderContractRuleModel {
    accCalculationType?: number; // @enum ACCCalculationType @required True
    available?: DateString; // @required True
    bpeFurtherPercentage?: number; // @required False
    bpeInitialPercentage?: number; // @required True
    bpeInitialPercentageDuration?: number; // @required False
    bpeOption?: TenderOptionModel; // @required False
    bpeRoundingMethod?: number; // @enum RoundingMethod @required True
    brand?: BrandModel; // @required True
    btrAdhocTemplate?: TemplateModel; // @required False
    btrCalcFrequency?: number; // @required True
    btrFurtherPercentage?: number; // @required False
    btrInitialPercentage?: number; // @required True
    btrInitialPercentageDuration?: number; // @required False
    btrRoundingMethod?: number; // @enum RoundingMethod @required True
    budgetedCosts1?: number; // @required False
    budgetedCosts2?: number; // @required False
    budgetedDiscount1?: number; // @required False
    budgetedDiscount2?: number; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    contractSales?: CollectionModel<ContractSaleModel>; // @required True
    council?: DevelopmentLocationModel; // @required False
    daysToACC?: number; // @required False
    depositAmount2?: number; // @required False
    depositAmount?: number; // @required False
    depositPercent2?: number; // @required False
    depositPercent?: number; // @required False
    estate?: DevelopmentLocationModel; // @required False
    expired?: DateString; // @required True
    maxACCDays?: number; // @required False
    metaData?: MetaDataOrderModel;
    region?: RegionModel; // @required True
    secondDepositRequired?: boolean; // @required True
    suburb?: SuburbModel; // @required False
    tenderBpeAllowed?: number; // @enum BpeBtrRestrictionMask @required True
    tenderBtrAllowed?: number; // @enum BpeBtrRestrictionMask @required True
    tenderContractRuleId?: number; // @primaryKey @required True
    tenderPriceLevel?: TenderPriceLevelModel; // @required False
    tenderTldAllowed?: number; // @enum BpeBtrRestrictionMask @required True
    variationBpeAllowed?: number; // @enum BpeBtrRestrictionMask @required True
    variationTldAllowed?: number; // @enum BpeBtrRestrictionMask @required True
}
export interface TenderContractRuleSelectionModel {
    bpeOption?: TenderOptionSelectionModel;
    brand?: BrandSelectionModel;
    btrAdhocTemplate?: TemplateSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    contractSales?: CollectionSelectionModel<ContractSaleSelectionModel>;
    council?: DevelopmentLocationSelectionModel;
    estate?: DevelopmentLocationSelectionModel;
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
    suburb?: SuburbSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
}
export interface TenderCriteriaModel {
    ageRange?: AgeRangeModel;
    assignedTo?: UserCriteriaModel;
    clientReviewStatus?: number[];
    createdBy?: UserCriteriaModel;
    deadlineACC?: AgeRangeModel;
    displayType?: number[];
    estimator?: UserCriteriaModel;
    estimatorReviewStatus?: number[];
    houseType?: HouseTypeCriteriaModel;
    includeInactive?: boolean;
    includeSuperseded?: boolean;
    isConsolidatedView?: boolean;
    masterContract?: MasterContractCriteriaModel;
    package?: TenderPackageCriteriaModel;
    phase?: TenderPhaseCriteriaModel;
    preparedBy?: UserCriteriaModel;
    price?: ValueRangeModel;
    statuses?: number[];
    suburb?: SuburbCriteriaModel;
    tenderIds?: number[];
    tenderType?: number[];
}
export interface TenderDimensionModel {
    formula?: string; // @required False @length 400
    lastCalcUpdate?: DateString; // @required True
    masterArea?: MasterAreaModel; // @required True
    masterDimension?: MasterDimensionModel; // @required True
    metaData?: MetaDataBaseModel;
    quantity?: number; // @required True
    tender?: TenderModel; // @required True
    tenderDimensionId?: number; // @primaryKey @required True
}
export interface TenderDimensionSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    masterDimension?: MasterDimensionSelectionModel;
    metaData?: MetaDataSelectionModel;
    tender?: TenderSelectionModel;
}
export interface TenderDisplayModel {
    actualACCDate?: DateString; // @required False
    assignedTo?: MetaDataUserModel; // @required False
    baseDeadlineACC?: DateString; // @required False
    basePriceExpiry?: DateString; // @required False
    changeLevel?: number; // @required True
    client?: ClientModel; // @required False
    clientApprovalStatus?: number; // @required True
    clientApprover?: MetaDataUserModel; // @required False
    clientNotes?: string; // @required False
    contractDateAdjustments?: CollectionModel<ContractDateAdjustmentModel>;
    coverImage?: FileModel; // @required False
    customOptionsPriceSell?: number;
    customVariationType?: string; // @required False @length 50
    deadlineACC?: DateString; // @required False
    estimator?: MetaDataUserModel; // @required False
    estimatorStatus?: number; // @enum TenderEstimatorStatus @required True
    externalReferenceGroup?: ExternalReferenceGroupModel;
    facadePackage?: TenderPackageModel; // @required False
    facadePackageName?: string; // @required False @length 255
    facadePriceSell?: number;
    houseType?: HouseTypeModel; // @required True
    land?: LandModel; // @required False
    landPriceCost?: number; // @required False
    lockedHousePriceCost?: number; // @required False
    lockedHousePriceSell?: number; // @required False
    lockedOnMDD?: DateString;
    mainImage?: FileModel; // @required False
    margin?: TenderMarginDisplayOverviewModel;
    marginCost?: number;
    marginPercentage?: number;
    marketingFee?: number; // @required True
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    originalTender?: TenderModel; // @required False
    overrideHousePriceCost?: number; // @required False
    overrideHousePriceSell?: number; // @required False
    overrideLandPriceCost?: number; // @required False
    overrideLandPriceSell?: number; // @required False
    overrideTenderContractRule?: TenderContractRuleModel;
    packagesPriceSell?: number;
    preparedBy?: MetaDataUserModel; // @required False
    priceStatus?: number; // @required True
    salesCommitments?: CollectionModel<SalesCommitmentModel>;
    salesInterests?: CollectionModel<SalesInterestModel>;
    security?: TenderSecurityModel;
    signings?: CollectionModel<SigningModel>;
    sourceTender?: TenderModel; // @required False
    standardOptionsPriceSell?: number;
    suburb?: SuburbModel; // @required False
    suburbName?: string; // @required False @length 255
    suspensionStatus?: number; // @enum TenderSuspensionStatus @required True
    taxOption?: number; // @required True
    tenderAccepted?: DateString; // @required False
    tenderApproved?: DateString; // @required False
    tenderApprover?: MetaDataUserModel; // @required False
    tenderAreaSelections?: CollectionModel<TenderAreaSelxnModel>;
    tenderAudits?: CollectionModel<TenderAuditModel>;
    tenderAvailable?: DateString; // @required False
    tenderChangeLogs?: CollectionModel<TenderChangeLogModel>;
    tenderContractRule?: TenderContractRuleModel;
    tenderDimensions?: CollectionModel<TenderDimensionModel>;
    tenderDisplayType?: number; // @enum TenderDisplayType @required True
    tenderDocuments?: CollectionModel<TenderDocumentModel>;
    tenderExpire?: DateString; // @required False
    tenderHistory?: CollectionModel<TenderDisplayModel>;
    tenderHousePrice?: TenderHousePriceModel; // @required False
    tenderId?: number; // @primaryKey @required True
    tenderNotes?: string; // @required False
    tenderOptionSelections?: CollectionModel<TenderOptionSelxnModel>;
    tenderOptionSelectionsPriceChanges?: CollectionModel<TenderOptionSelxnsPriceChanxModel>;
    tenderPackageSelections?: CollectionModel<TenderPackageSelxnModel>;
    tenderPackageSelectionsPriceChanges?: CollectionModel<TenderPackageSelxnsPriceChanxModel>;
    tenderPhase?: TenderPhaseModel; // @required False
    tenderPriceLevel?: TenderPriceLevelModel; // @required True
    tenderPriced?: DateString; // @required False
    tenderRelease?: DateString; // @required False
    tenderReleaseEstimated?: DateString; // @required False
    tenderSelectionAllocations?: CollectionModel<TenderSelxnAllocationModel>;
    tenderStandardTotalPriceCost?: number; // @required False
    tenderStandardTotalPriceSell?: number; // @required False
    tenderStatus?: number; // @enum TenderStatus @required True
    tenderTitle?: string; // @required False @length 255
    tenderTotalPriceCost?: number; // @required False
    tenderTotalPriceSell?: number; // @required False
    tenderType?: number; // @required True
    token?: string;
    totalExtRoundedSellPrice?: number; // @required False
    totalHousePriceCost?: number;
    totalHousePriceOverride?: number;
    upgradePriceSell?: number;
    variation?: TenderVariationModel; // @required True
    variationType?: number; // @enum VariationType? @required False
    variations?: CollectionModel<TenderVariationModel>;
}
export interface TenderDisplayUpdateModel {
    assignedTo?: MetaDataUserModel;
    changeLevel?: number;
    clientNotes?: string;
    clientStatus?: number;
    coverImage?: FileModel;
    estimatorStatus?: number;
    externalReferenceGroup?: ExternalReferenceGroupModel;
    housePrice?: TenderHousePriceModel;
    land?: LandModel;
    landSellPrice?: number;
    lockedOnMDD?: DateString;
    mainImage?: FileModel;
    suspensionStatus?: number;
    tenderExpire?: DateString;
    tenderNotes?: string;
    tenderPhase?: TenderPhaseModel;
    tenderPriceLevel?: TenderPriceLevelModel;
    tenderStatus?: number;
    tenderTitle?: string;
}
export interface TenderDocumentCriteriaModel {
    ageRange?: AgeRangeModel;
    createdBy?: UserCriteriaModel;
    includeInactive?: boolean;
    tender?: TenderCriteriaModel;
}
export interface TenderDocumentModel {
    document?: DocumentModel; // @required True
    file?: FileModel; // @required True
    metaData?: MetaDataOrderModel;
    tender?: TenderModel; // @required True
    tenderDocumentId?: number; // @primaryKey @required True
    tenderOptionSelection?: TenderOptionSelxnModel; // @required False
    tenderVariation?: TenderVariationModel; // @required False
}
export interface TenderDocumentSelectionModel {
    document?: DocumentSelectionModel;
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    tender?: TenderSelectionModel;
    tenderOptionSelection?: TenderOptionSelxnSelectionModel;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface TenderHistoryModel {
    changeLevel?: number; // @enum TenderChangeLevel @required True
    changed?: DateString; // @required True
    clientApprovalStatus?: number; // @enum TenderClientReviewStatus @required True
    clientApprover?: MetaDataUserModel; // @required False
    description?: string; // @required False @length 50
    estimatorStatus?: number; // @enum TenderEstimatorStatus @required True
    houseType?: HouseTypeModel; // @required True
    landPriceCost?: number; // @required False
    lockedHousePriceCost?: number; // @required False
    lockedHousePriceSell?: number; // @required False
    marketingFee?: number; // @required True
    overrideHousePriceCost?: number; // @required False
    overrideHousePriceSell?: number; // @required False
    overrideLandPriceCost?: number; // @required False
    overrideLandPriceSell?: number; // @required False
    preparedBy?: MetaDataUserModel; // @required False
    priceStatus?: number; // @enum TenderPriceStatus @required True
    stdCustomOrder?: number; // @required True
    taxOption?: number; // @required True
    tenderAccepted?: DateString; // @required False
    tenderApproved?: DateString; // @required False
    tenderApprover?: MetaDataUserModel; // @required False
    tenderAvailable?: DateString; // @required False
    tenderExpire?: DateString; // @required False
    tenderHistoryId?: number; // @primaryKey @required True
    tenderHousePrice?: TenderHousePriceModel; // @required False
    tenderNotes?: string; // @required False
    tenderPriceLevel?: TenderPriceLevelModel; // @required True
    tenderPriced?: DateString; // @required False
    tenderRelease?: DateString; // @required False
    tenderReleaseEstimated?: DateString; // @required False
    tenderStandardTotalPriceCost?: number; // @required False
    tenderStandardTotalPriceSell?: number; // @required False
    tenderStatus?: number; // @enum TenderStatus @required True
    tenderTitle?: string; // @required False @length 255
    tenderTotalPriceCost?: number; // @required False
    tenderTotalPriceSell?: number; // @required False
    tenderType?: number; // @enum TenderType @required True
    totalExtRoundedSellPrice?: number; // @required False
}
export interface TenderHistorySelectionModel {
    clientApprover?: UserSelectionModel;
    houseType?: HouseTypeSelectionModel;
    preparedBy?: UserSelectionModel;
    tenderApprover?: UserSelectionModel;
    tenderHousePrice?: TenderHousePriceSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
}
export interface TenderHousePriceCriteriaModel {
    ageRange?: AgeRangeModel;
    expiryDate?: AgeRangeModel;
    houseType?: HouseTypeCriteriaModel;
    price?: DecimalValueRangeModel;
    priceLevel?: TenderPriceLevelCriteriaModel;
}
export interface TenderHousePriceModel {
    allowanceCost?: number; // @required False
    bOQAdjustment?: number; // @required False
    bOQBase?: number; // @required False
    bOQCost?: number; // @required False
    bOQOverride?: number; // @required False
    batchNumber?: number; // @required False
    effectiveDate?: DateString; // @required True
    expiryDate?: DateString; // @required True
    houseCost?: number; // @required True
    houseCostTax?: number; // @required False
    houseCurrentCost?: number; // @required False
    houseSelling?: number; // @required True
    houseType?: HouseTypeModel; // @required True
    metaData?: MetaDataOrderModel;
    overrideSellTotal?: number; // @required False
    targetMargin?: number; // @required False
    tenderHousePriceId?: number; // @primaryKey @required True
    tenderPriceLevel?: TenderPriceLevelModel; // @required True
}
export interface TenderHousePriceSelectionModel {
    houseType?: HouseTypeSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
}
export interface TenderHouseTypeDocModel {
    file?: FileModel; // @required True
    metaData?: MetaDataOrderModel;
    productLibraryLinkId?: number; // @required False
    tenderHouseTypeDocId?: number; // @primaryKey @required True
}
export interface TenderHouseTypeDocSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface TenderMarginDisplayModel {
    approved?: boolean;
    changeProfit?: number;
    changeProfitPercentage?: number;
    currentCost?: number;
    currentMargin?: number;
    currentProfit?: number;
    currentSell?: number;
    originalCost?: number;
    originalMargin?: number;
    originalProfit?: number;
    variationName?: string;
    variationStatus?: number;
}
export interface TenderMarginDisplayOverviewModel {
    customOptions?: TenderMarginDisplayModel;
    facade?: TenderMarginDisplayModel;
    finalTotal?: TenderMarginDisplayModel;
    floorPlanOptions?: TenderMarginDisplayModel;
    house?: TenderMarginDisplayModel;
    inclusions?: TenderMarginDisplayModel;
    land?: TenderMarginDisplayModel;
    originalTotal?: TenderMarginDisplayModel;
    packages?: TenderMarginDisplayModel;
    standardOptions?: TenderMarginDisplayModel;
    variations?: CollectionModel<TenderMarginDisplayModel>;
}
export interface TenderMarginSelectionModel {

}
export interface TenderModel {
    actualACCDate?: DateString; // @required False
    assignedTo?: MetaDataUserModel; // @required False
    baseDeadlineACC?: DateString; // @required False
    basePriceExpiry?: DateString; // @required False
    changeLevel?: number; // @enum TenderChangeLevel @required True
    client?: ClientModel; // @required False
    clientApprovalStatus?: number; // @enum TenderClientReviewStatus @required True
    clientApprover?: MetaDataUserModel; // @required False
    clientNotes?: string; // @required False
    contractDateAdjustments?: CollectionModel<ContractDateAdjustmentModel>; // @required True
    contractSales?: CollectionModel<ContractSaleModel>; // @required True
    coverImage?: FileModel; // @required False
    customOptionsPriceSell?: number;
    deadlineACC?: DateString; // @required False
    estimator?: MetaDataUserModel; // @required False
    estimatorStatus?: number; // @enum TenderEstimatorStatus @required True
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    facade?: TenderPackageModel; // @required False
    facadePriceSell?: number;
    houseType?: HouseTypeModel; // @required True
    land?: LandModel; // @required False
    landPriceCost?: number; // @required False
    lockedHousePriceCost?: number; // @required False
    lockedHousePriceSell?: number; // @required False
    lockedOnMDD?: DateString; // @required False
    mainImage?: FileModel; // @required False
    margin?: TenderMarginDisplayOverviewModel;
    marginCost?: number;
    marginPercentage?: number;
    marketingFee?: number; // @required True
    masterContract?: MasterContractModel; // @required False
    metaData?: MetaDataModel;
    originalTender?: TenderModel; // @required False
    overrideHousePriceCost?: number; // @required False
    overrideHousePriceSell?: number; // @required False
    overrideLandPriceCost?: number; // @required False
    overrideLandPriceSell?: number; // @required False
    overrideMakeMyHomeVisible?: boolean; // @required True
    overrideTenderContractRule?: TenderContractRuleModel; // @required False
    packagesPriceSell?: number;
    preparedBy?: MetaDataUserModel; // @required False
    priceStatus?: number; // @enum TenderPriceStatus @required True
    reportDataGenerated?: DateString; // @required False
    salesCommitments?: CollectionModel<SalesCommitmentModel>; // @required True
    salesInterests?: CollectionModel<SalesInterestModel>; // @required True
    security?: TenderSecurityModel;
    selectionsEdited?: DateString; // @required True
    signings?: CollectionModel<SigningModel>; // @required True
    sourceTender?: TenderModel; // @required False
    standardOptionsPriceSell?: number;
    suburb?: SuburbModel; // @required False
    suspensionStatus?: number; // @enum TenderSuspensionStatus @required True
    tax?: number;
    taxOption?: number; // @enum TenderTaxOption @required True
    tenderAccepted?: DateString; // @required False
    tenderApproved?: DateString; // @required False
    tenderApprover?: MetaDataUserModel; // @required False
    tenderAreaSelections?: CollectionModel<TenderAreaSelxnModel>; // @required True
    tenderAudits?: CollectionModel<TenderAuditModel>; // @required True
    tenderAvailable?: DateString; // @required False
    tenderChangeLogs?: CollectionModel<TenderChangeLogModel>; // @required True
    tenderContractRule?: TenderContractRuleModel; // @required False
    tenderDimensions?: CollectionModel<TenderDimensionModel>; // @required True
    tenderDocuments?: CollectionModel<TenderDocumentModel>; // @required True
    tenderExpire?: DateString; // @required False
    tenderHistory?: CollectionModel<TenderModel>; // @required True
    tenderHouseCurrentCost?: number; // @required False
    tenderHouseLatestCurrentCost?: number; // @required False
    tenderHousePrice?: TenderHousePriceModel; // @required False
    tenderId?: number; // @primaryKey @required True
    tenderNotes?: string; // @required False
    tenderOptionSelections?: CollectionModel<TenderOptionSelxnModel>; // @required True
    tenderOptionSelectionsPriceChanges?: CollectionModel<TenderOptionSelxnsPriceChanxModel>; // @required True
    tenderPackageSelections?: CollectionModel<TenderPackageSelxnModel>; // @required True
    tenderPackageSelectionsPriceChanges?: CollectionModel<TenderPackageSelxnsPriceChanxModel>; // @required True
    tenderPhase?: TenderPhaseModel; // @required False
    tenderPriceLevel?: TenderPriceLevelModel; // @required True
    tenderPriced?: DateString; // @required False
    tenderRelease?: DateString; // @required False
    tenderReleaseEstimated?: DateString; // @required False
    tenderReportingOptionSelections?: CollectionModel<TenderReportingOptionSelxnModel>; // @required True
    tenderReportingPackageSelections?: CollectionModel<TenderReportingPackageSelxnModel>; // @required True
    tenderSelectionAllocations?: CollectionModel<TenderSelxnAllocationModel>; // @required True
    tenderStandardTotalPriceCost?: number; // @required False
    tenderStandardTotalPriceSell?: number; // @required False
    tenderStatus?: number; // @enum TenderStatus @required True
    tenderTitle?: string; // @required False @length 255
    tenderTotalPriceCost?: number; // @required False
    tenderTotalPriceSell?: number; // @required False
    tenderType?: number; // @enum TenderType @required True
    tenderVersion?: number; // @enum TenderVersion @required True
    token?: string;
    totalExtRoundedSellPrice?: number; // @required False
    totalHousePriceCost?: number;
    totalHousePriceOverride?: number;
    upgradePriceSell?: number;
    variations?: CollectionModel<TenderVariationModel>; // @required True
}
export interface TenderOptionAssemblyModel {
    allowCreditForRemoval?: boolean; // @required True
    assembly?: TenderOptionModel; // @required True
    canBeIncreased?: boolean; // @required True
    canBeRemoved?: boolean; // @required True
    component?: TenderOptionModel; // @required True
    includeQuantity?: number; // @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataOrderModel;
    priceDisplay?: number; // @required False
    tenderOptionAssemblyId?: number; // @primaryKey @required True
    tenderPriceDisplay?: TenderPriceDisplayModel; // @required False
}
export interface TenderOptionAssemblySelectionModel {
    assembly?: TenderOptionSelectionModel;
    component?: TenderOptionSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderPriceDisplay?: TenderPriceDisplaySelectionModel;
}
export interface TenderOptionAttributeLinkModel {
    metaData?: MetaDataBaseModel;
    myHome?: boolean; // @required True
    requiredForContract?: boolean; // @required True
    requiredForPhase?: boolean; // @required True
    tenderAttribute?: TenderAttributeModel; // @required True
    tenderOption?: TenderOptionModel; // @required True
    tenderOptionAttributeLinkId?: number; // @primaryKey @required True
}
export interface TenderOptionAttributeLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    tenderAttribute?: TenderAttributeSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
}
export interface TenderOptionCategoryAreaModel {
    masterArea?: MasterAreaModel; // @required True
    security?: SecurityModel;
    tenderOptionCategory?: TenderOptionCategoryModel; // @required True
    tenderOptionCategoryAreaId?: number; // @primaryKey @required True
}
export interface TenderOptionCategoryAreaSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
}
export interface TenderOptionCategoryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    categoryIds?: number[];
    hierarchicalSearch?: boolean;
    includeInactive?: boolean;
    name?: string;
    options?: TenderOptionCriteriaModel;
    phase?: TenderPhaseCriteriaModel;
    primaryCategory?: TenderPrimaryCategoryCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    selected?: TenderCriteriaModel;
    specialCategories?: number[];
    visibleEstimating?: boolean;
    visibleMyHome?: boolean;
    visibleSales?: boolean;
    visibleSelections?: boolean;
    visibleVariations?: boolean;
}
export interface TenderOptionCategoryModel {
    allowChangeDescription?: boolean; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    categoryDescription?: string; // @required False
    custom1?: string; // @required False @length 50
    custom2?: string; // @required False @length 50
    custom3?: string; // @required False @length 50
    custom4?: string; // @required False @length 50
    customSearchList1?: TenderOptionCustomCategoryModel;
    customValues1?: string[];
    customValues2?: string[];
    customValues3?: string[];
    customValues4?: string[];
    hierarchicalSearch?: boolean; // @required True
    ignoreCMA?: boolean; // @required True
    ignoreCostSurcharge?: boolean; // @required True
    metaData?: MetaDataModel;
    myHomeCategoryExplanation?: string; // @required False @length 1000
    myHomeCategoryName?: string; // @required False @length 200
    optionCategory?: string; // @required False @length 255
    priceTiers?: PricingTierModel;
    pricingTiers?: string; // @required False @length 50
    primaryImage?: FileModel; // @required False
    resourceCode?: ResourceCodeModel; // @required True
    rfqTemplatesOptionCatLinks?: CollectionModel<RfqTemplatesOptionCatLinkModel>; // @required True
    security?: SecurityModel;
    specialCategory?: number; // @enum TenderPackageCategories? @required False
    tenderCostFunction?: TenderPriceFunctionModel; // @required False
    tenderOptionCategoryAreas?: CollectionModel<TenderOptionCategoryAreaModel>; // @required True
    tenderOptionCategoryId?: number; // @primaryKey @required True
    tenderOptionCategoryPhases?: CollectionModel<TenderOptionCategoryPhaseModel>; // @required True
    tenderOptionCategoryPriceLevelSurcharges?: CollectionModel<TenderOptionCategoryPriceLevelSurchargeModel>; // @required True
    tenderOptionPlaceHolderLinks?: CollectionModel<TenderOptionPlaceHolderLinkModel>; // @required True
    tenderOptions?: CollectionModel<TenderOptionModel>; // @required True
    tenderPrimaryCategory?: TenderPrimaryCategoryModel; // @required True
    tenderReportHeader?: TenderReportHeaderModel; // @required False
    tenderReportHeaderOptionAreaDefaults?: CollectionModel<TenderReportHeaderOptionAreaDefaultModel>; // @required True
    tenderSellFunction?: TenderPriceFunctionModel; // @required False
    upgradePriceTiers?: PricingTierModel;
    upgradePricingTiers?: string; // @required False @length 50
}
export interface TenderOptionCategoryPhaseModel {
    allowedEstimating?: boolean; // @required True
    allowedMyHome?: boolean; // @required True
    allowedSales?: boolean; // @required True
    allowedSelections?: boolean; // @required True
    allowedVariations?: boolean; // @required True
    security?: SecurityModel;
    tenderOptionCategory?: TenderOptionCategoryModel; // @required True
    tenderOptionCategoryPhaseId?: number; // @primaryKey @required True
    tenderPhase?: TenderPhaseModel; // @required True
}
export interface TenderOptionCategoryPhaseSelectionModel {
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
    tenderPhase?: TenderPhaseSelectionModel;
}
export interface TenderOptionCategoryPriceLevelSurchargeCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    costFunction?: TenderPriceFunctionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    optionCategory?: TenderOptionCategoryCriteriaModel;
    priceLevel?: TenderPriceLevelCriteriaModel;
    sellFunction?: TenderPriceFunctionCriteriaModel;
}
export interface TenderOptionCategoryPriceLevelSurchargeModel {
    costFunction?: TenderPriceFunctionModel; // @required False
    metaData?: MetaDataModel;
    sellFunction?: TenderPriceFunctionModel; // @required False
    tenderOptionCategory?: TenderOptionCategoryModel; // @required True
    tenderOptionCategoryPriceLevelSurchargeId?: number; // @primaryKey @required True
    tenderPriceLevel?: TenderPriceLevelModel; // @required True
}
export interface TenderOptionCategoryPriceLevelSurchargeSelectionModel {
    costFunction?: TenderPriceFunctionSelectionModel;
    metaData?: MetaDataSelectionModel;
    sellFunction?: TenderPriceFunctionSelectionModel;
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
}
export interface TenderOptionCategorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    primaryImage?: FileSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    rfqTemplatesOptionCatLinks?: CollectionSelectionModel<RfqTemplatesOptionCatLinkSelectionModel>;
    tenderCostFunction?: TenderPriceFunctionSelectionModel;
    tenderOptionCategoryAreas?: CollectionSelectionModel<TenderOptionCategoryAreaSelectionModel>;
    tenderOptionCategoryPhases?: CollectionSelectionModel<TenderOptionCategoryPhaseSelectionModel>;
    tenderOptionCategoryPriceLevelSurcharges?: CollectionSelectionModel<TenderOptionCategoryPriceLevelSurchargeSelectionModel>;
    tenderOptionCustomCategories?: CollectionSelectionModel<TenderOptionCustomCategorySelectionModel>;
    tenderOptionPlaceHolderLinks?: CollectionSelectionModel<TenderOptionPlaceHolderLinkSelectionModel>;
    tenderOptions?: CollectionSelectionModel<TenderOptionSelectionModel>;
    tenderPrimaryCategory?: TenderPrimaryCategorySelectionModel;
    tenderReportHeader?: TenderReportHeaderSelectionModel;
    tenderReportHeaderOptionAreaDefaults?: CollectionSelectionModel<TenderReportHeaderOptionAreaDefaultSelectionModel>;
    tenderSellFunction?: TenderPriceFunctionSelectionModel;
}
export interface TenderOptionCriteriaModel {
    and?: TenderOptionCriteriaModel;
    area?: MasterAreaCriteriaModel;
    available?: boolean;
    brand?: string;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    category?: TenderOptionCategoryCriteriaModel;
    customValue1?: string;
    customValue2?: string;
    customValue3?: string;
    customValue4?: string;
    description?: string;
    expandSubstitutes?: boolean;
    expired?: boolean;
    externalReference?: string;
    externalReferences?: ExternalReferenceCriteriaModel;
    inShoppingList?: TenderPackageCriteriaModel;
    includeInactive?: boolean;
    isColourRequired?: boolean;
    name?: string;
    not?: TenderOptionCriteriaModel;
    optionIds?: number[];
    or?: TenderOptionCriteriaModel;
    overrunOptionId?: number;
    productLibraryIds?: number[];
    purpose?: TenderPurposeCriteriaModel;
    search?: string;
    selected?: TenderCriteriaModel;
    showExpiredOptions?: AgeRangeModel;
    substituteFor?: TenderOptionCriteriaModel;
    tenderOptionPrices?: TenderOptionPriceCriteriaModel[];
    validity?: ProductValidityCriteriaModel;
    vendorModel?: string;
    visibleMyHome?: boolean;
    visibleSales?: boolean;
    visibleSelections?: boolean;
}
export interface TenderOptionCurrentPriceModel {
    effectiveDate?: DateString; // @required True
    metaData?: MetaDataModel;
    optionCalcSelling?: number; // @required False
    optionCost?: number; // @required False
    optionCostTax?: number; // @required False
    optionOverrideCost?: number; // @required False
    optionOverrideSelling?: number; // @required False
    optionpriceId?: number; // @primaryKey @required True
}
export interface TenderOptionCurrentPriceSelectionModel {
    metaData?: MetaDataSelectionModel;
}
export interface TenderOptionCustomCategoryModel {
    categoryName?: string;
    customValues?: TenderOptionCustomCategoryProceedingModel[];
}
export interface TenderOptionCustomCategoryProceedingModel {
    nextCategory?: TenderOptionCustomCategoryModel;
    value?: string;
}
export interface TenderOptionCustomCategorySelectionModel {

}
export interface TenderOptionDocCriteriaModel {
    attributeValues?: TenderAttributeValueCriteriaModel;
    files?: FileCriteriaModel;
    ids?: number[];
    options?: TenderOptionCriteriaModel;
}
export interface TenderOptionDocModel {
    attributeFlags?: string; // @required False @length 100
    file?: FileModel; // @required True
    metaData?: MetaDataOrderModel;
    productLibraryLinkId?: number; // @required False
    tenderrOptionDocId?: number; // @primaryKey @required True
}
export interface TenderOptionDocSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface TenderOptionDraftCheckListModel {
    change?: DateString; // @required True
    draftCheckStatus?: number; // @enum TenderDraftCheckStatus @required True
    optionDraftCheckListId?: number; // @primaryKey @required True
    tenderOptionSelection?: TenderOptionSelxnModel; // @required True
    user?: MetaDataUserModel; // @required False
}
export interface TenderOptionDraftCheckListSelectionModel {
    tenderOptionSelection?: TenderOptionSelxnSelectionModel;
    user?: UserSelectionModel;
}
export interface TenderOptionHouseLinkCriteriaModel {
    availableAt?: DateString;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    houseType?: HouseTypeCriteriaModel;
    includeInactive?: boolean;
    option?: TenderOptionCriteriaModel;
}
export interface TenderOptionHouseLinkModel {
    houseType?: HouseTypeModel; // @required True
    metaData?: MetaDataModel;
    oHLAvailable?: DateString; // @required True
    oHLExpired?: DateString; // @required True
    option?: TenderOptionModel; // @required True
    optionHouseLinkId?: number; // @primaryKey @required True
}
export interface TenderOptionHouseLinkSelectionModel {
    houseType?: HouseTypeSelectionModel;
    metaData?: MetaDataSelectionModel;
    option?: TenderOptionSelectionModel;
}
export interface TenderOptionModel {
    addendum?: string; // @required False
    allHouseTypes?: boolean; // @required True
    assembly?: boolean; // @required True
    assemblyOptions?: CollectionModel<TenderOptionAssemblyModel>; // @required True
    brand?: string; // @required False @length 50
    businessUnit?: BusinessUnitModel; // @required True
    canEditColour?: boolean; // @required True
    clientDescription?: string; // @required False
    colourList?: string; // @required False @length 50
    colourName?: string; // @required False @length 255
    colourRequired?: boolean; // @required True
    componentOptions?: CollectionModel<TenderOptionAssemblyModel>; // @required True
    customVal1?: string; // @required False @length 50
    customVal2?: string; // @required False @length 50
    customVal3?: string; // @required False @length 50
    customVal4?: string; // @required False @length 50
    defaultImage?: FileModel; // @required False
    defaultQuantity?: number; // @required False
    defaultSubstitute?: TenderOptionModel; // @required False
    documents?: CollectionModel<DocumentModel>;
    estimatingRequired?: boolean; // @required True
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    files?: CollectionModel<FileModel>;
    fullSearch?: string; // @required False
    hiddenOption?: boolean; // @required True
    houseTypes?: CollectionModel<HouseTypeModel>;
    interfaceTenderOptionCosts?: CollectionModel<InterfaceTenderOptionCostModel>; // @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    optionAvailable?: DateString; // @required True
    optionExpired?: DateString; // @required True
    optionName?: string; // @required True @length 255
    optionOverrideable?: boolean; // @required True
    placeholderLinks?: CollectionModel<TenderOptionPlaceHolderLinkModel>; // @required True
    priceDisplay?: number; // @required False
    priceReviewed?: DateString; // @required False
    priceReviewedBy?: MetaDataUserModel; // @required False
    priceTier?: number;
    productDescription?: string; // @required False
    productLibrary?: number; // @required False
    productSpecs?: string; // @required False
    productUrl?: string; // @required False @length 255
    quantityRequired?: boolean; // @required True
    recentDefaultPrice?: TenderOptionPriceModel;
    relatedValue?: number; // @required False
    resource?: ResourceModel; // @required False
    resourceCode?: ResourceCodeModel; // @required True
    security?: SecurityModel;
    selection?: TenderOptionSelxnModel;
    selectionPlaceHolder?: number; // @enum TenderPlaceHolderOption @required True
    substituteOptions?: CollectionModel<TenderOptionModel>;
    tax?: number;
    tenderOptionAttributeLinks?: CollectionModel<TenderOptionAttributeLinkModel>; // @required True
    tenderOptionCategory?: TenderOptionCategoryModel; // @required True
    tenderOptionDocs?: CollectionModel<TenderOptionDocModel>; // @required True
    tenderOptionHouseLinks?: CollectionModel<TenderOptionHouseLinkModel>; // @required True
    tenderOptionId?: number; // @primaryKey @required True
    tenderOptionPrices?: CollectionModel<TenderOptionPriceModel>; // @required True
    tenderPackageSetups?: CollectionModel<TenderPackageSetupModel>;
    tenderPriceDisplay?: TenderPriceDisplayModel; // @required False
    tenderPriceFunctionOverride?: TenderPriceFunctionModel; // @required False
    tenderPriceReviews?: CollectionModel<TenderPriceReviewModel>; // @required True
    tenderSurcharges?: CollectionModel<TenderSurchargeModel>; // @required True
    uOM?: string; // @required False @length 10
    useHeroImage?: boolean; // @required True
    vendorModel?: string; // @required False @length 255
    visibleByMyHome?: boolean; // @required True
    visibleBySales?: boolean; // @required True
    visibleBySelections?: boolean; // @required True
}
export interface TenderOptionPlaceHolderLinkCriteriaModel {
    available?: boolean;
    category?: TenderOptionCategoryCriteriaModel;
    includeInactive?: boolean;
    optionIds?: number[];
}
export interface TenderOptionPlaceHolderLinkModel {
    metaData?: MetaDataModel;
    optionChoiceSearch?: string; // @required False @length 255
    priceRange?: number; // @required False
    tenderOptionCategory?: TenderOptionCategoryModel; // @required False
    tenderOptionChoice?: TenderOptionModel; // @required False
    tenderOptionPlaceHolder?: TenderOptionModel; // @required True
    tenderOptionPlaceHolderLinkId?: number; // @primaryKey @required True
    upgradePrice?: number; // @required False
}
export interface TenderOptionPlaceHolderLinkSelectionModel {
    metaData?: MetaDataSelectionModel;
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
    tenderOptionChoice?: TenderOptionSelectionModel;
    tenderOptionPlaceHolder?: TenderOptionSelectionModel;
}
export interface TenderOptionPriceCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    currentAt?: DateString;
    effectiveDate?: AgeRangeModel;
    includeInactive?: boolean;
    option?: TenderOptionCriteriaModel;
    priceLevel?: TenderPriceLevelCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    validity?: ProductValidityCriteriaModel;
}
export interface TenderOptionPriceModel {
    batchNumber?: number; // @required False
    compareCost?: number; // @required False
    effectiveDate?: DateString; // @required True
    groupCode?: string; // @required False @length 50
    metaData?: MetaDataModel;
    option?: TenderOptionModel; // @required True
    optionCalcSelling?: number; // @required False
    optionCost?: number; // @required False
    optionCostTax?: number; // @required False
    optionOverrideCost?: number; // @required False
    optionOverrideSelling?: number; // @required False
    optionpriceId?: number; // @primaryKey @required True
    priceLevel?: TenderPriceLevelModel; // @required True
}
export interface TenderOptionPriceReviewRequestModel {
    autoReview?: boolean;
    batchId?: string;
    compareCost?: number;
    cost?: number;
    option?: TenderOptionModel;
    overrideCost?: number;
}
export interface TenderOptionPriceSelectionModel {
    metaData?: MetaDataSelectionModel;
    option?: TenderOptionSelectionModel;
    priceLevel?: TenderPriceLevelSelectionModel;
}
export interface TenderOptionSelectionModel {
    assemblyOptions?: CollectionSelectionModel<TenderOptionAssemblySelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    componentOptions?: CollectionSelectionModel<TenderOptionAssemblySelectionModel>;
    defaultImage?: FileSelectionModel;
    defaultSubstitute?: TenderOptionSelectionModel;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    fast?: boolean;
    files?: CollectionSelectionModel<FileSelectionModel>;
    houseTypes?: CollectionSelectionModel<HouseTypeSelectionModel>;
    interfaceTenderOptionCosts?: CollectionSelectionModel<InterfaceTenderOptionCostSelectionModel>;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    placeholderLinks?: CollectionSelectionModel<TenderOptionPlaceHolderLinkSelectionModel>;
    priceReviewedBy?: UserSelectionModel;
    recentDefaultPrice?: TenderOptionPriceSelectionModel;
    resource?: ResourceSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    substituteOptions?: CollectionSelectionModel<TenderOptionSelectionModel>;
    tenderOptionAttributeLinks?: CollectionSelectionModel<TenderOptionAttributeLinkSelectionModel>;
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
    tenderOptionDocs?: CollectionSelectionModel<TenderOptionDocSelectionModel>;
    tenderOptionHouseLinks?: CollectionSelectionModel<TenderOptionHouseLinkSelectionModel>;
    tenderOptionPrices?: CollectionSelectionModel<TenderOptionPriceSelectionModel>;
    tenderPackageSetups?: CollectionSelectionModel<TenderPackageSetupSelectionModel>;
    tenderPriceDisplay?: TenderPriceDisplaySelectionModel;
    tenderPriceFunctionOverride?: TenderPriceFunctionSelectionModel;
    tenderPriceReviews?: CollectionSelectionModel<TenderPriceReviewSelectionModel>;
    tenderSurcharges?: CollectionSelectionModel<TenderSurchargeSelectionModel>;
}
export interface TenderOptionSelxnAttributeValueModel {
    metaData?: MetaDataBaseModel;
    tenderAttributeValue?: TenderAttributeValueModel; // @required True
    tenderOptionSelection?: TenderOptionSelxnModel; // @required True
    tenderOptionSelectionAttributeValueId?: number; // @primaryKey @required True
}
export interface TenderOptionSelxnAttributeValueSelectionModel {
    metaData?: MetaDataSelectionModel;
    tenderAttributeValue?: TenderAttributeValueSelectionModel;
    tenderOptionSelection?: TenderOptionSelxnSelectionModel;
}
export interface TenderOptionSelxnCriteriaModel {
    includeInactive?: boolean;
    isBuildUp?: boolean;
    isCustomOption?: boolean;
    isRevision?: boolean;
    isSharedLibrary?: boolean;
    isSubstitute?: boolean;
    noVariation?: boolean;
    optionCategory?: TenderOptionCategoryCriteriaModel;
    optionIds?: number[];
    optionMasterArea?: MasterAreaCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    revision?: TenderOptionSelxnCriteriaModel;
    specialPurpose?: number[];
    tender?: TenderCriteriaModel;
    tenderOptionSelectionIds?: number[];
    variation?: TenderVariationCriteriaModel;
}
export interface TenderOptionSelxnModel {
    activeRevision?: TenderOptionSelxnModel;
    addedAsSubstituteForOption?: TenderOptionSelxnModel; // @required False
    addedByOptionAssembly?: TenderOptionModel; // @required False
    addedByPackageSelection?: TenderPackageSelxnModel; // @required False
    attributeExplanation?: string; // @required False @length 400
    attributeValues?: CollectionModel<TenderAttributeValueModel>;
    availabilityStatus?: number; // @enum TenderAvailabilityStatus @required True
    buildUpOptions?: TenderOptionSelxnModel;
    buildUpParent?: CollectionModel<TenderOptionSelxnModel>; // @required False
    buildUps?: CollectionModel<TenderOptionSelxnModel>; // @required True
    builtUpOption?: TenderOptionSelxnModel; // @required False
    calcQuantity?: number; // @required True
    clientNotes?: string; // @required False
    currentCost?: number; // @required False
    customAddendum?: string; // @required False
    customProductDescription?: string; // @required False
    customProductSpecs?: string; // @required False
    description?: string; // @required False
    estimatedBy?: MetaDataUserModel; // @required False
    extActualSellPrice?: number; // @required False
    extRoundedSellPrice?: number; // @required False
    formula?: string; // @required False @length 400
    hasActiveRevision?: boolean;
    heroImage?: FileModel; // @required False
    internalNotes?: string; // @required False
    isCustomBuildUp?: boolean; // @required True
    isOwnerSupplied?: boolean; // @required True
    isPalette?: boolean; // @required True
    isRepHeaderEdited?: boolean; // @required True
    latestCurrentCost?: number; // @required False
    lockedPriceCost?: number; // @required False
    lockedPriceSell?: number; // @required False
    margin?: number;
    markup?: number;
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    optionPrice?: TenderOptionPriceModel; // @required False
    overridePriceCost?: number; // @required False
    overridePriceSell?: number; // @required False
    overrideQuantity?: number; // @required True
    parentCustomOption?: TenderOptionSelxnModel; // @required False
    priceDisplay?: number; // @required False
    priceStatus?: number; // @enum TenderItemsPricingStatus @required True
    quantity?: number; // @required True
    reportDisplayOrder?: number; // @required True
    reportHeader?: TenderReportHeaderModel; // @required False
    resourceCode?: ResourceCodeModel; // @required True
    revisedSelection?: TenderOptionSelxnModel; // @required False
    revisionType?: number; // @enum TenderSelectionRevisionTypeMask @required True
    revisions?: CollectionModel<TenderOptionSelxnModel>; // @required True
    security?: TenderSelxnSecurityModel;
    selectionAction?: number; // @enum TenderSelectionAction @required True
    selectionType?: number; // @enum TenderSelectionType @required True
    sharedStatus?: number; // @enum TenderLibraryType @required True
    shoppingListType?: number; // @enum TenderShoppingListType @required True
    specialPurpose?: number; // @enum SelectionSpecialPurpose @required True
    substituteSelections?: CollectionModel<TenderOptionSelxnModel>; // @required True
    tenderAudits?: CollectionModel<TenderAuditModel>; // @required True
    tenderChangeLog?: TenderChangeLogModel; // @required False
    tenderDocuments?: CollectionModel<TenderDocumentModel>; // @required True
    tenderOption?: TenderOptionModel; // @required False
    tenderOptionCategory?: TenderOptionCategoryModel; // @required False
    tenderOptionDraftCheckLists?: CollectionModel<TenderOptionDraftCheckListModel>; // @required True
    tenderOptionSelectionId?: number; // @primaryKey @required True
    tenderOptionSelectionsPriceChanges?: CollectionModel<TenderOptionSelxnsPriceChanxModel>; // @required True
    tenderPriceDisplay?: TenderPriceDisplayModel; // @required False
    tenderSelectionAllocations?: CollectionModel<TenderSelxnAllocationModel>; // @required True
    tenderVariation?: TenderVariationModel; // @required False
}
export interface TenderOptionSelxnSelectionModel {
    activeRevision?: TenderOptionSelxnSelectionModel;
    addedAsSubstituteForOption?: TenderOptionSelxnSelectionModel;
    addedByOptionAssembly?: TenderOptionSelectionModel;
    addedByPackageSelection?: TenderPackageSelxnSelectionModel;
    attributeValues?: CollectionSelectionModel<TenderAttributeValueSelectionModel>;
    buildUpOptions?: TenderOptionSelxnSelectionModel;
    buildUpParent?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    buildUps?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    builtUpOption?: TenderOptionSelxnSelectionModel;
    estimatedBy?: UserSelectionModel;
    heroImage?: FileSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    optionPrice?: TenderOptionPriceSelectionModel;
    parentCustomOption?: TenderOptionSelxnSelectionModel;
    reportHeader?: TenderReportHeaderSelectionModel;
    resourceCode?: ResourceCodeSelectionModel;
    revisedSelection?: TenderOptionSelxnSelectionModel;
    revisions?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    substituteSelections?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    tenderAudits?: CollectionSelectionModel<TenderAuditSelectionModel>;
    tenderChangeLog?: TenderChangeLogSelectionModel;
    tenderDocuments?: CollectionSelectionModel<TenderDocumentSelectionModel>;
    tenderOption?: TenderOptionSelectionModel;
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
    tenderOptionDraftCheckLists?: CollectionSelectionModel<TenderOptionDraftCheckListSelectionModel>;
    tenderOptionSelectionsPriceChanges?: CollectionSelectionModel<TenderOptionSelxnsPriceChanxSelectionModel>;
    tenderPriceDisplay?: TenderPriceDisplaySelectionModel;
    tenderSelectionAllocations?: CollectionSelectionModel<TenderSelxnAllocationSelectionModel>;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface TenderOptionSelxnsPriceChanxModel {
    afterLockedPriceCost?: number; // @required False
    afterLockedPriceSell?: number; // @required False
    afterOverridePriceCost?: number; // @required False
    afterOverridePriceSell?: number; // @required False
    beforeLockedPriceCost?: number; // @required False
    beforeLockedPriceSell?: number; // @required False
    beforeOverridePriceCost?: number; // @required False
    beforeOverridePriceSell?: number; // @required False
    change?: DateString; // @required True
    optionSelectionsPriceChangeId?: number; // @primaryKey @required True
    tenderOption?: TenderOptionModel; // @required False
    tenderOptionSelection?: TenderOptionSelxnModel; // @required True
    user?: MetaDataUserModel; // @required False
}
export interface TenderOptionSelxnsPriceChanxSelectionModel {
    tenderOption?: TenderOptionSelectionModel;
    tenderOptionSelection?: TenderOptionSelxnSelectionModel;
    user?: UserSelectionModel;
}
export interface TenderPackageCategoryAreaModel {
    masterArea?: MasterAreaModel; // @required True
    tenderPackageCategory?: TenderPackageCategoryModel; // @required True
    tenderPackageCategoryAreaId?: number; // @primaryKey @required True
}
export interface TenderPackageCategoryAreaSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    tenderPackageCategory?: TenderPackageCategorySelectionModel;
}
export interface TenderPackageCategoryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    categoryIds?: number[];
    includeInactive?: boolean;
    name?: string;
    palette?: boolean;
    phase?: TenderPhaseCriteriaModel;
    primaryCategory?: TenderPrimaryCategoryCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    selected?: TenderCriteriaModel;
    specialCategories?: number[];
    visibleEstimating?: boolean;
    visibleMyHome?: boolean;
    visibleSales?: boolean;
    visibleSelections?: boolean;
    visibleVariations?: boolean;
}
export interface TenderPackageCategoryModel {
    allowQuantity?: boolean; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    description?: string; // @required True @length 50
    ignoreCMA?: boolean; // @required True
    ignoreCostSurcharge?: boolean; // @required True
    maxCount?: number; // @required False
    maxValue?: number; // @required False
    metaData?: MetaDataModel;
    myHomeCategoryExplanation?: string; // @required False @length 1000
    myHomeCategoryName?: string; // @required False @length 200
    palette?: boolean; // @required True
    priceTiers?: PricingTierModel;
    pricingTiers?: string; // @required False @length 50
    security?: SecurityModel;
    specialCategory?: number; // @enum TenderPackageCategories? @required False
    tenderCostFunction?: TenderPriceFunctionModel; // @required False
    tenderPackageCategoryAreas?: CollectionModel<TenderPackageCategoryAreaModel>; // @required True
    tenderPackageCategoryId?: number; // @primaryKey @required True
    tenderPackageCategoryPhases?: CollectionModel<TenderPackageCategoryPhaseModel>; // @required True
    tenderPackages?: CollectionModel<TenderPackageModel>; // @required True
    tenderPrimaryCategory?: TenderPrimaryCategoryModel; // @required True
    tenderReportHeader?: TenderReportHeaderModel; // @required False
    tenderSellFunction?: TenderPriceFunctionModel; // @required False
    viewType?: number; // @enum TenderPackageViewType @required True
}
export interface TenderPackageCategoryPhaseModel {
    allowedEstimating?: boolean; // @required True
    allowedMyHome?: boolean; // @required True
    allowedSales?: boolean; // @required True
    allowedSelections?: boolean; // @required True
    allowedVariations?: boolean; // @required True
    tenderPackageCategory?: TenderPackageCategoryModel; // @required True
    tenderPackageCategoryPhaseId?: number; // @primaryKey @required True
    tenderPhase?: TenderPhaseModel; // @required True
    visibleWhenSelected?: boolean; // @required True
}
export interface TenderPackageCategoryPhaseSelectionModel {
    tenderPackageCategory?: TenderPackageCategorySelectionModel;
    tenderPhase?: TenderPhaseSelectionModel;
}
export interface TenderPackageCategorySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderCostFunction?: TenderPriceFunctionSelectionModel;
    tenderPackageCategoryAreas?: CollectionSelectionModel<TenderPackageCategoryAreaSelectionModel>;
    tenderPackageCategoryPhases?: CollectionSelectionModel<TenderPackageCategoryPhaseSelectionModel>;
    tenderPackages?: CollectionSelectionModel<TenderPackageSelectionModel>;
    tenderPrimaryCategory?: TenderPrimaryCategorySelectionModel;
    tenderReportHeader?: TenderReportHeaderSelectionModel;
    tenderSellFunction?: TenderPriceFunctionSelectionModel;
}
export interface TenderPackageCombinationModel {
    combination?: number; // @enum PackageCombinations @required True
    combinationId?: number; // @primaryKey @required True
    hasPackage?: TenderPackageModel; // @required True
    metaData?: MetaDataModel;
    otherPackage?: TenderPackageModel; // @required True
}
export interface TenderPackageCombinationSelectionModel {
    hasPackage?: TenderPackageSelectionModel;
    metaData?: MetaDataSelectionModel;
    otherPackage?: TenderPackageSelectionModel;
}
export interface TenderPackageCriteriaModel {
    allHouseTypes?: boolean;
    and?: TenderPackageCriteriaModel;
    area?: MasterAreaCriteriaModel;
    available?: boolean;
    brand?: string;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    category?: TenderPackageCategoryCriteriaModel;
    description?: string;
    expired?: boolean;
    externalReference?: string;
    externalReferences?: ExternalReferenceCriteriaModel;
    inShoppingList?: TenderPackageCriteriaModel;
    includeInactive?: boolean;
    name?: string;
    not?: TenderPackageCriteriaModel;
    or?: TenderPackageCriteriaModel;
    packageIds?: number[];
    palettePlaceHolders?: TenderOptionCriteriaModel;
    paletteSubstitutes?: TenderOptionCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    selected?: TenderCriteriaModel;
    showExpiredPackages?: AgeRangeModel;
    tenderOptions?: TenderOptionCriteriaModel;
    tenderPackagePrices?: TenderPackagePriceCriteriaModel[];
    validity?: ProductValidityCriteriaModel;
    visibleMyHome?: boolean;
    visibleSales?: boolean;
    visibleSelections?: boolean;
}
export interface TenderPackageDevLinkModel {
    benefits?: string; // @required False
    combination?: number; // @enum PackageCombinations @required True
    developmentLocation?: DevelopmentLocationModel; // @required True
    metaData?: MetaDataModel;
    pDLAvailable?: DateString; // @required True
    pDLExpired?: DateString; // @required True
    productLibrary?: number; // @required False
    tenderPackage?: TenderPackageModel; // @required True
    tenderPackageDevLinkId?: number; // @primaryKey @required True
    tenderPriceDisplay?: TenderPriceDisplayModel; // @required False
}
export interface TenderPackageDevLinkSelectionModel {
    developmentLocation?: DevelopmentLocationSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPriceDisplay?: TenderPriceDisplaySelectionModel;
}
export interface TenderPackageDocModel {
    file?: FileModel; // @required True
    metaData?: MetaDataOrderModel;
    productLibraryLinkId?: number; // @required False
    tenderrPackageDocId?: number; // @primaryKey @required True
}
export interface TenderPackageDocSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface TenderPackageDraftCheckListModel {
    change?: DateString; // @required True
    draftCheckStatus?: number; // @enum TenderDraftCheckStatus @required True
    packageDraftCheckListId?: number; // @primaryKey @required True
    tenderPackageSelection?: TenderPackageSelxnModel; // @required True
    user?: MetaDataUserModel; // @required False
}
export interface TenderPackageDraftCheckListSelectionModel {
    tenderPackageSelection?: TenderPackageSelxnSelectionModel;
    user?: UserSelectionModel;
}
export interface TenderPackageHouseDocModel {
    file?: FileModel; // @required True
    metaData?: MetaDataOrderModel;
    productLibraryLinkId?: number; // @required False
    tenderPackageHouseLink?: TenderPackageHouseLinkModel; // @required True
    tenderrPackageHouseDocId?: number; // @primaryKey @required True
}
export interface TenderPackageHouseDocSelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderPackageHouseLink?: TenderPackageHouseLinkSelectionModel;
}
export interface TenderPackageHouseLinkCriteriaModel {
    availableAt?: DateString;
    houseType?: HouseTypeCriteriaModel;
    package?: TenderPackageCriteriaModel;
}
export interface TenderPackageHouseLinkModel {
    bOQStatus?: number; // @enum TenderBOQStatus @required True
    benefits?: string; // @required False
    files?: CollectionModel<FileModel>;
    houseType?: HouseTypeModel; // @required True
    includeDocs?: number; // @enum PackageDocsIncluded @required True
    interfaceTenderPackageCosts?: CollectionModel<InterfaceTenderPackageCostModel>; // @required True
    metaData?: MetaDataModel;
    pHLAvailable?: DateString; // @required True
    pHLExpired?: DateString; // @required True
    priceReviewed?: DateString; // @required False
    pricingMode?: number; // @enum TenderPackageHouseLinksPricingMode @required True
    productLibrary?: number; // @required False
    tenderPackage?: TenderPackageModel; // @required True
    tenderPackageHouseDocs?: CollectionModel<TenderPackageHouseDocModel>; // @required True
    tenderPackageHouseLinkId?: number; // @primaryKey @required True
    tenderPackagePrices?: CollectionModel<TenderPackagePriceModel>; // @required True
}
export interface TenderPackageHouseLinkSelectionModel {
    files?: CollectionSelectionModel<FileSelectionModel>;
    houseType?: HouseTypeSelectionModel;
    interfaceTenderPackageCosts?: CollectionSelectionModel<InterfaceTenderPackageCostSelectionModel>;
    metaData?: MetaDataSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPackageHouseDocs?: CollectionSelectionModel<TenderPackageHouseDocSelectionModel>;
    tenderPackagePrices?: CollectionSelectionModel<TenderPackagePriceSelectionModel>;
}
export interface TenderPackageModel {
    addendum?: string; // @required False
    allHouseTypes?: boolean; // @required True
    allowAdditions?: boolean; // @required True
    allowCustomisation?: boolean; // @required True
    allowOtherPackages?: boolean; // @required True
    availableDate?: DateString; // @required True
    bOQStatus?: number; // @enum TenderBOQStatus @required True
    brand?: string; // @required False @length 50
    businessUnit?: BusinessUnitModel; // @required True
    cADPackageCode?: string; // @required False @length 50
    clientDescription?: string; // @required False
    defaultImage?: FileModel; // @required False
    description?: string; // @required False
    documents?: CollectionModel<DocumentModel>;
    expiredDate?: DateString; // @required True
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    files?: CollectionModel<FileModel>;
    fullSearch?: string; // @required False
    houseType?: HouseTypeModel; // @required False
    houseTypes?: CollectionModel<HouseTypeModel>;
    includedInPackages?: CollectionModel<TenderPackageSelxnModel>; // @required True
    includedParents?: CollectionModel<TenderPackageSetupModel>; // @required True
    interfaceTenderPackageCosts?: CollectionModel<InterfaceTenderPackageCostModel>; // @required True
    isDefaultHousePackageLocked?: boolean;
    isHousePackage?: boolean;
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    needsReview?: DateString; // @required False
    overrunOption?: TenderOptionModel; // @required False
    packageCombinations?: CollectionModel<TenderPackageCombinationModel>; // @required True
    packageName?: string; // @required False @length 255
    packageOverrideable?: boolean; // @required True
    parentPackages?: CollectionModel<TenderPackagePackageSetupModel>; // @required True
    priceReviewed?: DateString; // @required False
    priceTier?: number;
    productLibrary?: number; // @required False
    productUrl?: string; // @required False @length 255
    security?: SecurityModel;
    selection?: TenderPackageSelxnModel;
    shoppingListBudget?: number; // @required False
    specifications?: string; // @required False
    tenderAudits?: CollectionModel<TenderAuditModel>; // @required True
    tenderPackageCategory?: TenderPackageCategoryModel; // @required True
    tenderPackageDevLinks?: CollectionModel<TenderPackageDevLinkModel>; // @required True
    tenderPackageHouseLinks?: CollectionModel<TenderPackageHouseLinkModel>; // @required True
    tenderPackageId?: number; // @primaryKey @required True
    tenderPackagePackageSetups?: CollectionModel<TenderPackagePackageSetupModel>; // @required True
    tenderPackagePrices?: CollectionModel<TenderPackagePriceModel>; // @required True
    tenderPackageSetups?: CollectionModel<TenderPackageSetupModel>; // @required True
    tenderPackageTargetAllocations?: CollectionModel<TenderPackageTargetAllocationModel>; // @required True
    tenderPaletteSetups?: CollectionModel<TenderPaletteSetupModel>; // @required True
    tenderPriceFunctionOverride?: TenderPriceFunctionModel; // @required False
    tenderPriceReviews?: CollectionModel<TenderPriceReviewModel>; // @required True
    tenderReportHeader?: TenderReportHeaderModel; // @required False
    tenders?: CollectionModel<TenderModel>; // @required True
    visibleByMyHome?: boolean; // @required True
    visibleBySelections?: boolean; // @required True
    visibleOnPromoWeb?: boolean; // @required True
    visibleToSales?: boolean; // @required True
    visibleWhenSelected?: boolean; // @required True
    webPromoDescription?: string; // @required False
}
export interface TenderPackagePackageSetupModel {
    allowCreditForRemoval?: boolean; // @required True
    canBeIncreased?: boolean; // @required True
    canBeRemoved?: boolean; // @required True
    creditPcnt?: number; // @required True
    creditValue?: number; // @required False
    effectiveDate?: DateString; // @required True
    expiryDate?: DateString; // @required True
    includeQuantity?: number; // @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataOrderModel;
    package?: TenderPackageModel; // @required True
    packageLinkType?: number; // @enum TenderPackageLinkType @required True
    priceDisplay?: number; // @required False
    restriction?: number; // @enum TenderPackageSetupRestriction @required True
    tenderPackagePackageSetupId?: number; // @primaryKey @required True
    tenderPriceDisplay?: TenderPriceDisplayModel; // @required False
}
export interface TenderPackagePackageSetupSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    package?: TenderPackageSelectionModel;
    tenderPriceDisplay?: TenderPriceDisplaySelectionModel;
}
export interface TenderPackagePriceCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    currentAt?: DateString;
    effectiveDate?: AgeRangeModel;
    includeInactive?: boolean;
    package?: TenderPackageCriteriaModel;
    priceLevel?: TenderPriceLevelCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    tenderPackageHouseLink?: TenderPackageHouseLinkCriteriaModel;
    validity?: ProductValidityCriteriaModel;
}
export interface TenderPackagePriceModel {
    batchNumber?: number; // @required False
    effectiveDate?: DateString; // @required True
    groupCode?: string; // @required False @length 50
    metaData?: MetaDataOrderModel;
    packageCalcCost?: number; // @required False
    packageCalcSelling?: number; // @required False
    packageCompareCost?: number; // @required False
    packageCostTax?: number; // @required False
    packageOverrideCost?: number; // @required False
    packageOverrideSelling?: number; // @required False
    priceLevel?: TenderPriceLevelModel; // @required True
    tenderPackage?: TenderPackageModel; // @required True
    tenderPackageHouseLink?: TenderPackageHouseLinkModel; // @required False
    tenderPackagePriceId?: number; // @primaryKey @required True
}
export interface TenderPackagePriceReviewRequestModel {
    autoReview?: boolean;
    batchId?: string;
    compareCost?: number;
    cost?: number;
    houseType?: HouseTypeModel;
    overrideCost?: number;
    package?: TenderPackageModel;
}
export interface TenderPackagePriceSelectionModel {
    metaData?: MetaDataSelectionModel;
    priceLevel?: TenderPriceLevelSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPackageHouseLink?: TenderPackageHouseLinkSelectionModel;
}
export interface TenderPackageSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    defaultImage?: FileSelectionModel;
    documents?: CollectionSelectionModel<DocumentSelectionModel>;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    fast?: boolean;
    files?: CollectionSelectionModel<FileSelectionModel>;
    houseType?: HouseTypeSelectionModel;
    houseTypes?: CollectionSelectionModel<HouseTypeSelectionModel>;
    includedInPackages?: CollectionSelectionModel<TenderPackageSelxnSelectionModel>;
    includedParents?: CollectionSelectionModel<TenderPackageSetupSelectionModel>;
    interfaceTenderPackageCosts?: CollectionSelectionModel<InterfaceTenderPackageCostSelectionModel>;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    overrunOption?: TenderOptionSelectionModel;
    packageCombinations?: CollectionSelectionModel<TenderPackageCombinationSelectionModel>;
    parentPackages?: CollectionSelectionModel<TenderPackagePackageSetupSelectionModel>;
    tenderAudits?: CollectionSelectionModel<TenderAuditSelectionModel>;
    tenderPackageCategory?: TenderPackageCategorySelectionModel;
    tenderPackageDevLinks?: CollectionSelectionModel<TenderPackageDevLinkSelectionModel>;
    tenderPackageHouseLinks?: CollectionSelectionModel<TenderPackageHouseLinkSelectionModel>;
    tenderPackagePackageSetups?: CollectionSelectionModel<TenderPackagePackageSetupSelectionModel>;
    tenderPackagePrices?: CollectionSelectionModel<TenderPackagePriceSelectionModel>;
    tenderPackageSetups?: CollectionSelectionModel<TenderPackageSetupSelectionModel>;
    tenderPackageTargetAllocations?: CollectionSelectionModel<TenderPackageTargetAllocationSelectionModel>;
    tenderPaletteSetups?: CollectionSelectionModel<TenderPaletteSetupSelectionModel>;
    tenderPriceFunctionOverride?: TenderPriceFunctionSelectionModel;
    tenderPriceReviews?: CollectionSelectionModel<TenderPriceReviewSelectionModel>;
    tenderReportHeader?: TenderReportHeaderSelectionModel;
    tenders?: CollectionSelectionModel<TenderSelectionModel>;
}
export interface TenderPackageSelxnCriteriaModel {
    includeInactive?: boolean;
    packageCategory?: TenderPackageCategoryCriteriaModel;
    packageIds?: number[];
    packageMasterArea?: MasterAreaCriteriaModel;
    purpose?: TenderPurposeCriteriaModel;
    revision?: TenderPackageSelxnCriteriaModel;
    tender?: TenderCriteriaModel;
    tenderPackageSelectionIds?: number[];
    variation?: TenderVariationCriteriaModel;
}
export interface TenderPackageSelxnModel {
    addedByPackage?: TenderPackageModel; // @required False
    addedByPackageSelection?: TenderPackageSelxnModel; // @required False
    addedPackageSelections?: CollectionModel<TenderPackageSelxnModel>; // @required True
    availabilityStatus?: number; // @enum TenderAvailabilityStatus @required True
    clientNotes?: string; // @required False
    currentCost?: number; // @required False
    customAddendum?: string; // @required False
    customPackageDescription?: string; // @required False
    customPackageSpecs?: string; // @required False
    estimatedBy?: MetaDataUserModel; // @required False
    extActualSellPrice?: number; // @required False
    extRoundedSellPrice?: number; // @required False
    hasActiveRevision?: boolean;
    internalNotes?: string; // @required False
    latestCurrentCost?: number; // @required False
    lockedOnCreation?: boolean; // @required True
    lockedPriceCost?: number; // @required True
    lockedPriceSell?: number; // @required True
    margin?: number;
    markup?: number;
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    overridePriceCost?: number; // @required False
    overridePriceSell?: number; // @required False
    package?: TenderPackageModel; // @required True
    packagePrice?: TenderPackagePriceModel; // @required False
    priceStatus?: number; // @enum TenderItemsPricingStatus @required True
    quantity?: number; // @required True
    repHeaderEdited?: boolean; // @required True
    reportDisplayOrder?: number; // @required True
    reportHeader?: TenderReportHeaderModel; // @required False
    revisedSelection?: TenderPackageSelxnModel; // @required False
    revisionType?: number; // @enum TenderSelectionRevisionTypeMask @required True
    revisions?: CollectionModel<TenderPackageSelxnModel>; // @required True
    security?: TenderSelxnSecurityModel;
    selectionAction?: number; // @enum TenderSelectionAction @required True
    selectionType?: number; // @enum TenderSelectionType @required True
    shoppingListType?: number; // @enum TenderShoppingListType @required True
    tender?: TenderModel; // @required True
    tenderAudits?: CollectionModel<TenderAuditModel>; // @required True
    tenderChangeLog?: TenderChangeLogModel; // @required False
    tenderOptionSelections?: CollectionModel<TenderOptionSelxnModel>; // @required True
    tenderPackageDraftCheckLists?: CollectionModel<TenderPackageDraftCheckListModel>; // @required True
    tenderPackageSelectionId?: number; // @primaryKey @required True
    tenderPackageSelectionsPriceChanges?: CollectionModel<TenderPackageSelxnsPriceChanxModel>; // @required True
    variation?: TenderVariationModel; // @required False
}
export interface TenderPackageSelxnSelectionModel {
    addedByPackage?: TenderPackageSelectionModel;
    addedByPackageSelection?: TenderPackageSelxnSelectionModel;
    addedPackageSelections?: CollectionSelectionModel<TenderPackageSelxnSelectionModel>;
    estimatedBy?: UserSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    package?: TenderPackageSelectionModel;
    packagePrice?: TenderPackagePriceSelectionModel;
    reportHeader?: TenderReportHeaderSelectionModel;
    revisedSelection?: TenderPackageSelxnSelectionModel;
    revisions?: CollectionSelectionModel<TenderPackageSelxnSelectionModel>;
    tender?: TenderSelectionModel;
    tenderAudits?: CollectionSelectionModel<TenderAuditSelectionModel>;
    tenderChangeLog?: TenderChangeLogSelectionModel;
    tenderOptionSelections?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    tenderPackageDraftCheckLists?: CollectionSelectionModel<TenderPackageDraftCheckListSelectionModel>;
    tenderPackageSelectionsPriceChanges?: CollectionSelectionModel<TenderPackageSelxnsPriceChanxSelectionModel>;
    variation?: TenderVariationSelectionModel;
}
export interface TenderPackageSelxnsPriceChanxModel {
    afterLockedPriceCost?: number; // @required False
    afterLockedPriceSell?: number; // @required False
    afterOverridePriceCost?: number; // @required False
    afterOverridePriceSell?: number; // @required False
    beforeLockedPriceCost?: number; // @required False
    beforeLockedPriceSell?: number; // @required False
    beforeOverridePriceCost?: number; // @required False
    beforeOverridePriceSell?: number; // @required False
    change?: DateString; // @required True
    package?: TenderPackageModel; // @required True
    packageSelection?: TenderPackageSelxnModel; // @required True
    packageSelectionsPriceChangeId?: number; // @primaryKey @required True
    user?: MetaDataUserModel; // @required False
}
export interface TenderPackageSelxnsPriceChanxSelectionModel {
    package?: TenderPackageSelectionModel;
    packageSelection?: TenderPackageSelxnSelectionModel;
    user?: UserSelectionModel;
}
export interface TenderPackageSetupAttributeValueModel {
    metaData?: MetaDataModel;
    tenderAttributeValue?: TenderAttributeValueModel; // @required True
    tenderPackageSetup?: TenderPackageSetupModel; // @required True
    tenderPackageSetupAttributeValueId?: number; // @primaryKey @required True
}
export interface TenderPackageSetupAttributeValueSelectionModel {
    metaData?: MetaDataSelectionModel;
    tenderAttributeValue?: TenderAttributeValueSelectionModel;
    tenderPackageSetup?: TenderPackageSetupSelectionModel;
}
export interface TenderPackageSetupModel {
    allowCreditForRemoval?: boolean; // @required True
    calcQuantity?: number; // @required True
    canBeIncreased?: boolean; // @required True
    canBeRemoved?: boolean; // @required True
    creditPcnt?: number; // @required True
    creditValue?: number; // @required False
    effectiveDate?: DateString; // @required True
    expiryDate?: DateString; // @required True
    formula?: string; // @required False @length 400
    houseTypeRestriction?: number; // @enum TenderPackageSetupRestriction @required True
    includeQuantity?: number; // @required True
    includedBy?: TenderPackageModel; // @required False
    masterArea?: MasterAreaModel; // @required False
    masterDimension?: MasterDimensionModel; // @required False
    metaData?: MetaDataOrderModel;
    optionColour?: string; // @required False @length 50
    overrideQuantity?: number; // @required True
    priceDisplay?: number; // @required False
    priceLevelRestriction?: number; // @enum TenderPackageSetupRestriction @required True
    tenderOption?: TenderOptionModel; // @required True
    tenderPackage?: TenderPackageModel; // @required True
    tenderPackageSetupAttributeValues?: CollectionModel<TenderPackageSetupAttributeValueModel>; // @required True
    tenderPackageSetupId?: number; // @primaryKey @required True
    tenderPriceDisplay?: TenderPriceDisplayModel; // @required False
}
export interface TenderPackageSetupSelectionModel {
    includedBy?: TenderPackageSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    masterDimension?: MasterDimensionSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPackageSetupAttributeValues?: CollectionSelectionModel<TenderPackageSetupAttributeValueSelectionModel>;
    tenderPriceDisplay?: TenderPriceDisplaySelectionModel;
}
export interface TenderPackageTargetAllocationModel {
    masterArea?: MasterAreaModel; // @required True
    metaData?: MetaDataOrderModel;
    minimumQuantity?: number; // @required True
    quantity?: number; // @required True
    tenderOption?: TenderOptionModel; // @required True
    tenderPackageTargetAllocId?: number; // @primaryKey @required True
}
export interface TenderPackageTargetAllocationSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
}
export interface TenderPaletteSetupAttributeValueModel {
    metaData?: MetaDataModel;
    tenderAttributeValue?: TenderAttributeValueModel; // @required True
    tenderPaletteSetup?: TenderPaletteSetupModel; // @required True
    tenderPaletteSetupAttributeValueId?: number; // @primaryKey @required True
}
export interface TenderPaletteSetupAttributeValueSelectionModel {
    metaData?: MetaDataSelectionModel;
    tenderAttributeValue?: TenderAttributeValueSelectionModel;
    tenderPaletteSetup?: TenderPaletteSetupSelectionModel;
}
export interface TenderPaletteSetupModel {
    default?: boolean; // @required True
    effectiveDate?: DateString; // @required True
    exactQuantity?: boolean; // @required True
    expiryDate?: DateString; // @required True
    locked?: boolean; // @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataBaseModel;
    optionColour?: string; // @required False @length 50
    placeHolder?: TenderOptionModel; // @required False
    quantity?: number; // @required False
    substitute?: TenderOptionModel; // @required False
    switchExtraOptions?: boolean; // @required True
    tenderPackage?: TenderPackageModel; // @required True
    tenderPaletteSetupAttributeValues?: CollectionModel<TenderPaletteSetupAttributeValueModel>; // @required True
    tenderPaletteSetupId?: number; // @primaryKey @required True
}
export interface TenderPaletteSetupSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    placeHolder?: TenderOptionSelectionModel;
    substitute?: TenderOptionSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPaletteSetupAttributeValues?: CollectionSelectionModel<TenderPaletteSetupAttributeValueSelectionModel>;
}
export interface TenderPhaseCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    phaseIds?: number[];
    tender?: TenderCriteriaModel;
    visibleOnMobileLeads?: boolean;
    visibleOnMyHome?: boolean;
}
export interface TenderPhaseModel {
    adHocOnStatus?: number; // @enum TenderStatus? @required False
    adHocTemplate?: TemplateModel; // @required False
    allowIncompleteTenderAttributes?: boolean; // @required True
    allowMoveNextPhaseWithOpenVariations?: boolean; // @required True
    allowedNewTender?: boolean; // @required True
    approvalRule?: number; // @enum TenderApprovalRule @required True
    automaticVariationSelections?: boolean; // @required True
    canAddCustomOptions?: boolean; // @required True
    canConvertBuildUp?: boolean; // @required True
    canEditExpiryDate?: boolean; // @required True
    canRemoveVariationFee?: boolean; // @required True
    canRepriceTender?: boolean; // @required True
    canRepriceVariation?: boolean; // @required True
    consolidatePreviousVariations?: boolean; // @required True
    contractValueUpdate?: number; // @enum TenderContractValueUpdate @required True
    defaultStatus?: number; // @enum TenderStatus? @required False
    expiryDays?: number; // @required True
    isContractPhase?: boolean; // @required True
    isTraceRequired?: boolean; // @required True
    lockPreviousPhases?: boolean; // @required True
    maxTenders?: number; // @required True
    maxVariationsPerTender?: number; // @required True
    metaData?: MetaDataModel;
    moveNextOnStatus?: number; // @enum TenderStatus? @required False
    nextPhase?: TenderPhaseModel; // @required False
    phaseName?: string; // @required True @length 100
    phaseSkip?: number; // @enum TenderPhaseSkip @required True
    runEvents?: string; // @required False
    setExpiryRule?: number; // @enum TenderExpiryRule @required True
    statusAfterAdHoc?: number; // @enum TenderStatus? @required False
    statusAllowed?: number; // @enum TenderStatusMask @required True
    statusOpenSubstitutionsAllowed?: number; // @enum TenderStatusMask @required True
    statusTendersMyHomeEdit?: number; // @enum TenderStatusMask @required True
    statusTendersMyHomeVisible?: number; // @enum TenderStatusMask @required True
    statusVariationsAllowed?: number; // @enum TenderStatusMask @required True
    statusVariationsMyHomeEdit?: number; // @enum TenderStatusMask @required True
    statusVariationsMyHomeVisible?: number; // @enum TenderStatusMask @required True
    tenderNamingRule?: string; // @required False @length 200
    tenderOptionCategoryPhases?: CollectionModel<TenderOptionCategoryPhaseModel>; // @required True
    tenderPackageCategoryPhases?: CollectionModel<TenderPackageCategoryPhaseModel>; // @required True
    tenderPhaseId?: number; // @primaryKey @required True
    tenderPhaseSet?: TenderPhaseSetModel; // @required True
    tenderReport?: MasterReportModel; // @required False
    tenderStatusOrder?: number; // @enum TenderStatusOrder @required True
    triggerLevel?: number; // @required True
    variationFee?: TenderOptionModel; // @required False
    variationNamingRule?: string; // @required False @length 200
    variationReport?: MasterReportModel; // @required False
    visibleOnMobileLeads?: boolean; // @required True
    visibleOnMyHome?: boolean; // @required True
}
export interface TenderPhaseSelectionModel {
    adHocTemplate?: TemplateSelectionModel;
    metaData?: MetaDataSelectionModel;
    nextPhase?: TenderPhaseSelectionModel;
    tenderOptionCategoryPhases?: CollectionSelectionModel<TenderOptionCategoryPhaseSelectionModel>;
    tenderPackageCategoryPhases?: CollectionSelectionModel<TenderPackageCategoryPhaseSelectionModel>;
    tenderPhaseSet?: TenderPhaseSetSelectionModel;
    tenderReport?: MasterReportSelectionModel;
    variationFee?: TenderOptionSelectionModel;
    variationReport?: MasterReportSelectionModel;
}
export interface TenderPhaseSetCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    name?: string;
}
export interface TenderPhaseSetModel {
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataModel;
    phaseSetName?: string; // @required True @length 100
    security?: SecurityModel;
    tenderPhaseSetId?: number; // @primaryKey @required True
    tenderPhases?: CollectionModel<TenderPhaseModel>; // @required True
    tenderType?: number; // @enum TenderType @required True
}
export interface TenderPhaseSetSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderPhases?: CollectionSelectionModel<TenderPhaseSelectionModel>;
}
export interface TenderPlaceHolderSubstituteOptionModel {
    substituteType?: number; // @primaryKey @required True
}
export interface TenderPlaceHolderSubstituteOptionSelectionModel {

}
export interface TenderPriceDisplayCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    display?: string;
    ids?: number[];
    includeInactive?: boolean;
    tenderPackageCategory?: TenderPackageCategoryCriteriaModel;
}
export interface TenderPriceDisplayModel {
    businessUnit?: BusinessUnitModel; // @required True
    calcRule?: number; // @required True
    displayName?: string; // @required True @length 50
    metaData?: MetaDataOrderModel;
    priceDisplay?: number; // @required True
    security?: SecurityModel;
    tenderOptionAssemblies?: CollectionModel<TenderOptionAssemblyModel>; // @required True
    tenderOptionSelections?: CollectionModel<TenderOptionSelxnModel>; // @required True
    tenderOptions?: CollectionModel<TenderOptionModel>; // @required True
    tenderPackageDevLinks?: CollectionModel<TenderPackageDevLinkModel>; // @required True
    tenderPackagePackageSetups?: CollectionModel<TenderPackagePackageSetupModel>; // @required True
    tenderPackageSetups?: CollectionModel<TenderPackageSetupModel>; // @required True
    tenderPriceDisplayId?: number; // @primaryKey @required True
    tenderSurcharges?: CollectionModel<TenderSurchargeModel>; // @required True
    textInTender?: string; // @required False @length 100
}
export interface TenderPriceDisplaySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOptionAssemblies?: CollectionSelectionModel<TenderOptionAssemblySelectionModel>;
    tenderOptionSelections?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    tenderOptions?: CollectionSelectionModel<TenderOptionSelectionModel>;
    tenderPackageDevLinks?: CollectionSelectionModel<TenderPackageDevLinkSelectionModel>;
    tenderPackagePackageSetups?: CollectionSelectionModel<TenderPackagePackageSetupSelectionModel>;
    tenderPackageSetups?: CollectionSelectionModel<TenderPackageSetupSelectionModel>;
    tenderSurcharges?: CollectionSelectionModel<TenderSurchargeSelectionModel>;
}
export interface TenderPriceExpiryModel {
    btrCalcPercent?: number;
    currentLandDiscounts?: CollectionModel<TenderOptionSelxnModel>;
    currentPriceExtensionCharges?: CollectionModel<TenderOptionSelxnModel>;
    daysToACC?: number;
    tender?: TenderModel;
    tenderContractRule?: TenderContractRuleModel;
}
export interface TenderPriceFunctionCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    functionName?: string;
    ids?: number[];
    includeInactive?: boolean;
}
export interface TenderPriceFunctionModel {
    businessUnit?: BusinessUnitModel; // @required True
    functionName?: string; // @required True @length 50
    marginFactor?: number; // @required True
    marginPadding?: number; // @required True
    metaData?: MetaDataOrderModel;
    rounding?: number; // @required True
    security?: SecurityModel;
    tenderOptionCategories?: CollectionModel<TenderOptionCategoryModel>; // @required True
    tenderPackageCategories?: CollectionModel<TenderPackageCategoryModel>; // @required True
    tenderPriceFunctionId?: number; // @primaryKey @required True
    tenderPriceLevels?: CollectionModel<TenderPriceLevelModel>; // @required True
    variableMargins?: string; // @required False @length 100
}
export interface TenderPriceFunctionSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOptionCategories?: CollectionSelectionModel<TenderOptionCategorySelectionModel>;
    tenderPackageCategories?: CollectionSelectionModel<TenderPackageCategorySelectionModel>;
    tenderPriceLevels?: CollectionSelectionModel<TenderPriceLevelSelectionModel>;
}
export interface TenderPriceLevelCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    tender?: TenderCriteriaModel;
    tenderPriceLevelIds?: number[];
}
export interface TenderPriceLevelModel {
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataModel;
    priceLevelName?: string; // @required False @length 50
    security?: SecurityModel;
    tenderCostFunction?: TenderPriceFunctionModel; // @required False
    tenderPriceLevelId?: number; // @primaryKey @required True
    tenderSellFunction?: TenderPriceFunctionModel; // @required False
}
export interface TenderPriceLevelRuleCriteriaModel {
    brand?: BrandCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    council?: DevelopmentLocationCriteriaModel;
    estate?: DevelopmentLocationCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    region?: RegionCriteriaModel;
    suburb?: SuburbCriteriaModel;
    tenderPriceLevel?: TenderPriceLevelCriteriaModel;
}
export interface TenderPriceLevelRuleModel {
    available?: DateString; // @required True
    brand?: BrandModel; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    council?: DevelopmentLocationModel; // @required False
    estate?: DevelopmentLocationModel; // @required False
    expired?: DateString; // @required True
    metaData?: MetaDataOrderModel;
    region?: RegionModel; // @required True
    security?: SecurityModel;
    suburb?: SuburbModel; // @required False
    tenderPriceLevel?: TenderPriceLevelModel; // @required True
    tenderPriceLevelRuleId?: number; // @primaryKey @required True
}
export interface TenderPriceLevelRuleSelectionModel {
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    council?: DevelopmentLocationSelectionModel;
    estate?: DevelopmentLocationSelectionModel;
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
    suburb?: SuburbSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
}
export interface TenderPriceLevelSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderCostFunction?: TenderPriceFunctionSelectionModel;
    tenderSellFunction?: TenderPriceFunctionSelectionModel;
}
export interface TenderPriceRequestModel {
    houseTypeId?: number;
    masterContractId?: number;
    priceLevelId?: number;
    suburbId?: number;
    tenderTemplateId?: number;
}
export interface TenderPriceResponseModel {
    houseBasePrice?: number;
    houseType?: HouseTypeModel;
    priceLevel?: TenderPriceLevelModel;
    surcharge?: TenderSurchargeModel;
    surchargeAmount?: number;
    surchargeCost?: number;
    totalPrice?: number;
}
export interface TenderPriceReviewCriteriaModel {
    batchIds?: string[];
    batchNumbers?: number[];
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    groupCodes?: string[];
    hasOverrideCost?: boolean;
    hasOverrideSellPrice?: boolean;
    houseType?: HouseTypeCriteriaModel;
    isDirty?: boolean;
    lastReview?: AgeRangeModel;
    lastReviewedByUser?: UserCriteriaModel;
    margin?: DecimalValueRangeModel;
    ready?: boolean;
    sellPrice?: DecimalValueRangeModel;
    sellPriceChange?: DecimalValueRangeModel;
    tenderOption?: TenderOptionCriteriaModel;
    tenderPackage?: TenderPackageCriteriaModel;
    tenderPriceLevel?: TenderPriceLevelCriteriaModel;
    tenderPriceReviewIds?: number[];
}
export interface TenderPriceReviewModel {
    batchId?: string; // @required False @length 50
    batchNumber?: number; // @required False
    calcCost?: number; // @required False
    calcSelling?: number; // @required False
    comments?: string; // @required False @length 400
    compareCost?: number; // @required False
    cost?: number; // @required False
    costTax?: number; // @required False
    currentCalcSelling?: number; // @required False
    currentCompareCost?: number; // @required False
    currentCost?: number; // @required False
    currentCostTax?: number; // @required False
    currentEffectiveDate?: DateString; // @required False
    currentMarginFactor?: number; // @required False
    currentOverrideCost?: number; // @required False
    currentOverrideSelling?: number; // @required False
    dirty?: boolean; // @required True
    effectiveDate?: DateString; // @required False
    groupCode?: string; // @required False @length 50
    houseType?: HouseTypeModel; // @required False
    lastError?: string; // @required False @length 200
    lastReviewDate?: DateString; // @required False
    lookupHouse?: string; // @required False @length 50
    lookupOption?: string; // @required False @length 50
    lookupPackage?: string; // @required False @length 50
    lookupPriceLevel?: string; // @required False @length 50
    margin?: number; // @required False
    marginFactorOverride?: number; // @required False
    metaData?: MetaDataBaseModel;
    overrideCost?: number; // @required False
    overrideSelling?: number; // @required False
    priceReviewType?: number; // @required True
    result?: string; // @required False @length 10
    sellPrice?: number; // @required False
    sellPriceChange?: number; // @required False
    tenderOption?: TenderOptionModel; // @required False
    tenderPackage?: TenderPackageModel; // @required False
    tenderPriceLevel?: TenderPriceLevelModel; // @required False
    tenderPriceReviewId?: number; // @primaryKey @required True
    user?: MetaDataUserModel; // @required False
}
export interface TenderPriceReviewRequestModel {
    autoReview?: boolean;
    batchId?: string;
    compareCost?: number;
    cost?: number;
    overrideCost?: number;
}
export interface TenderPriceReviewResponseModel {
    batchId?: string;
    failureCount?: number;
    successCount?: number;
    totalCount?: number;
}
export interface TenderPriceReviewSelectionModel {
    houseType?: HouseTypeSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
    user?: UserSelectionModel;
}
export interface TenderPriceSummarySelectionModel {

}
export interface TenderPricingUpdateModel {
    approved?: DateString;
    extrasPriceCost?: number;
    extrasPriceSell?: number;
    facadePriceCost?: number;
    facadePriceSell?: number;
    housePriceCost?: number;
    housePriceSell?: number;
    landPriceCost?: number;
    landPriceSell?: number;
    marketingFee?: number;
    name?: string;
    notes?: string;
    overrideBasePriceExpiryDate?: DateString;
    prepared?: DateString;
}
export interface TenderPrimaryCategoryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    name?: string;
    primaryCategoryIds?: number[];
    purpose?: TenderPurposeCriteriaModel;
    validity?: ProductValidityCriteriaModel;
}
export interface TenderPrimaryCategoryModel {
    file?: FileModel; // @required False
    metaData?: MetaDataModel;
    myHomeCategoryCode?: string; // @required False @length 10
    myHomeCategoryExplanation?: string; // @required False @length 1000
    myHomeCategoryName?: string; // @required False @length 200
    primaryCategory?: string; // @required False @length 50
    tenderOptionCategories?: CollectionModel<TenderOptionCategoryModel>; // @required True
    tenderPackageCategories?: CollectionModel<TenderPackageCategoryModel>; // @required True
    tenderPrimaryCategoryId?: number; // @primaryKey @required True
    tenderReportHeader?: TenderReportHeaderModel; // @required False
}
export interface TenderPrimaryCategorySelectionModel {
    file?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOptionCategories?: CollectionSelectionModel<TenderOptionCategorySelectionModel>;
    tenderPackageCategories?: CollectionSelectionModel<TenderPackageCategorySelectionModel>;
    tenderReportHeader?: TenderReportHeaderSelectionModel;
}
export interface TenderPurposeCriteriaModel {
    allAcceptedVariations?: number;
    forSubstitution?: boolean;
    includeSelectionPrices?: boolean;
    mustHavePriceLevel?: boolean;
    onlySelected?: boolean;
    tenderId?: number;
    variationId?: number;
    visibleEstimating?: boolean;
    visibleMyHome?: boolean;
    visibleSales?: boolean;
    visibleSelections?: boolean;
}
export interface TenderReportHeaderCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    includeInactive?: boolean;
    reportHeaderIds?: number[];
}
export interface TenderReportHeaderModel {
    caption?: string; // @required True @length 200
    metaData?: MetaDataModel;
    parent?: TenderReportHeaderModel; // @required False
    subHeaders?: CollectionModel<TenderReportHeaderModel>; // @required True
    tenderReportHeaderId?: number; // @primaryKey @required True
    tenderReportHeaderOptionAreaDefaults?: CollectionModel<TenderReportHeaderOptionAreaDefaultModel>; // @required True
    uISelection?: string; // @required True @length 400
}
export interface TenderReportHeaderOptionAreaDefaultModel {
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    security?: SecurityModel;
    tenderOptionCategory?: TenderOptionCategoryModel; // @required False
    tenderReportHeader?: TenderReportHeaderModel; // @required False
    tenderReportHeaderOptionAreaDefaultId?: number; // @primaryKey @required True
}
export interface TenderReportHeaderOptionAreaDefaultSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
    tenderReportHeader?: TenderReportHeaderSelectionModel;
}
export interface TenderReportHeaderSelectionModel {
    metaData?: MetaDataSelectionModel;
    parent?: TenderReportHeaderSelectionModel;
    subHeaders?: CollectionSelectionModel<TenderReportHeaderSelectionModel>;
    tenderReportHeaderOptionAreaDefaults?: CollectionSelectionModel<TenderReportHeaderOptionAreaDefaultSelectionModel>;
}
export interface TenderReportingOptionSelxnCriteriaModel {
    ids?: number[];
    tender?: TenderCriteriaModel;
}
export interface TenderReportingOptionSelxnModel {
    addedByPackage?: TenderPackageModel; // @required False
    addedByPackageSelection?: TenderPackageSelxnModel; // @required False
    allocComment?: string; // @required False @length 200
    attributeExplanation?: string; // @required False @length 400
    clientNotes?: string; // @required False
    cost?: number; // @required False
    customAddendum?: string; // @required False
    customProductDescription?: string; // @required False
    customProductSpecs?: string; // @required False
    description?: string; // @required False
    internalNotes?: string; // @required False
    latest?: boolean; // @required True
    latestApproved?: boolean; // @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    optionSelection?: TenderOptionSelxnModel; // @required True
    originalAddedByPackageSelection?: TenderPackageSelxnModel; // @required False
    originalPlaceholderSelection?: TenderOptionSelxnModel; // @required False
    originalSelection?: TenderOptionSelxnModel; // @required False
    placeholderSelection?: TenderOptionSelxnModel; // @required False
    previousAllocComment?: string; // @required False @length 200
    previousAttributeExplanation?: string; // @required False @length 400
    previousClientNotes?: string; // @required False
    previousCost?: number; // @required False
    previousCustomAddendum?: string; // @required False
    previousCustomProductDescription?: string; // @required False
    previousCustomProductSpecs?: string; // @required False
    previousInternalNotes?: string; // @required False
    previousPaletteSelection?: TenderOptionSelxnModel; // @required False
    previousQuantity?: number; // @required True
    previousSelection?: TenderOptionSelxnModel; // @required False
    previousSell?: number; // @required False
    previousTenderReportHeader?: TenderReportHeaderModel; // @required False
    quantity?: number; // @required True
    reportHeader?: TenderReportHeaderModel; // @required False
    reportingFile?: FileModel; // @required False
    reportingFileType?: number; // @enum TenderReportingFileType @required True
    revisionType?: number; // @enum TenderSelectionRevisionTypeMask @required True
    sell?: number; // @required False
    sequence?: number; // @required True
    tender?: TenderModel; // @required True
    tenderOption?: TenderOptionModel; // @required False
    tenderReportingOptionSelectionId?: number; // @primaryKey @required True
    tenderVariation?: TenderVariationModel; // @required False
    totalQuantity?: number; // @required True
}
export interface TenderReportingOptionSelxnSelectionModel {
    addedByPackage?: TenderPackageSelectionModel;
    addedByPackageSelection?: TenderPackageSelxnSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    optionSelection?: TenderOptionSelxnSelectionModel;
    originalAddedByPackageSelection?: TenderPackageSelxnSelectionModel;
    originalPlaceholderSelection?: TenderOptionSelxnSelectionModel;
    originalSelection?: TenderOptionSelxnSelectionModel;
    placeholderSelection?: TenderOptionSelxnSelectionModel;
    previousPaletteSelection?: TenderOptionSelxnSelectionModel;
    previousSelection?: TenderOptionSelxnSelectionModel;
    previousTenderReportHeader?: TenderReportHeaderSelectionModel;
    reportHeader?: TenderReportHeaderSelectionModel;
    reportingFile?: FileSelectionModel;
    tender?: TenderSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface TenderReportingPackageSelxnCriteriaModel {
    ids?: number[];
    tender?: TenderCriteriaModel;
}
export interface TenderReportingPackageSelxnModel {
    addedByPackage?: TenderPackageModel; // @required False
    addedByPackageSelection?: TenderPackageSelxnModel; // @required False
    clientNotes?: string; // @required False
    cost?: number; // @required False
    customAddendum?: string; // @required False
    customPackageDescription?: string; // @required False
    customPackageSpecs?: string; // @required False
    description?: string; // @required False
    internalNotes?: string; // @required False
    latest?: boolean; // @required True
    latestApproved?: boolean; // @required True
    masterArea?: MasterAreaModel; // @required False
    metaData?: MetaDataModel;
    originalAddedByPackageSelection?: TenderPackageSelxnModel; // @required False
    originalSelection?: TenderPackageSelxnModel; // @required False
    package?: TenderPackageModel; // @required False
    packageSelection?: TenderPackageSelxnModel; // @required True
    previousClientNotes?: string; // @required False
    previousCost?: number; // @required False
    previousCustomAddendum?: string; // @required False
    previousCustomPackageDescription?: string; // @required False
    previousCustomPackageSpecs?: string; // @required False
    previousInternalNotes?: string; // @required False
    previousQuantity?: number; // @required True
    previousSelection?: TenderPackageSelxnModel; // @required False
    previousSell?: number; // @required False
    previousTenderReportHeader?: TenderReportHeaderModel; // @required False
    quantity?: number; // @required True
    reportHeader?: TenderReportHeaderModel; // @required False
    sell?: number; // @required False
    sequence?: number; // @required True
    tender?: TenderModel; // @required True
    tenderReportingPackageSelectionId?: number; // @primaryKey @required True
    tenderVariation?: TenderVariationModel; // @required False
    totalQuantity?: number; // @required True
}
export interface TenderReportingPackageSelxnSelectionModel {
    addedByPackage?: TenderPackageSelectionModel;
    addedByPackageSelection?: TenderPackageSelxnSelectionModel;
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    originalAddedByPackageSelection?: TenderPackageSelxnSelectionModel;
    originalSelection?: TenderPackageSelxnSelectionModel;
    package?: TenderPackageSelectionModel;
    packageSelection?: TenderPackageSelxnSelectionModel;
    previousSelection?: TenderPackageSelxnSelectionModel;
    previousTenderReportHeader?: TenderReportHeaderSelectionModel;
    reportHeader?: TenderReportHeaderSelectionModel;
    tender?: TenderSelectionModel;
    tenderVariation?: TenderVariationSelectionModel;
}
export interface TenderRuleCriteriaModel {
    brand?: BrandCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    council?: DevelopmentLocationCriteriaModel;
    estate?: DevelopmentLocationCriteriaModel;
    houseType?: HouseTypeCriteriaModel;
    includeInactive?: boolean;
    masterContract?: MasterContractCriteriaModel;
    priceLevelIds?: number[];
    region?: RegionCriteriaModel;
    storeys?: number;
    suburb?: SuburbCriteriaModel;
}
export interface TenderSecurityModel {
    allContractsLocked?: boolean;
    canAddCustomBuildUpOption?: boolean;
    canAddCustomOption?: boolean;
    canAddNewTender?: boolean;
    canAddNewVariation?: boolean;
    canAddTemplate?: boolean;
    canAllowOpenSubstitutes?: boolean;
    canBpe?: boolean;
    canBtr?: boolean;
    canChangeLevel?: boolean;
    canChangePhase?: boolean;
    canChangeSelectionPrice?: boolean;
    canChangeSimplePricing?: boolean;
    canChangeStatus?: boolean;
    canCopy?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canEditDraftCheckList?: boolean;
    canEditIncludedQty?: boolean;
    canEditOverview?: boolean;
    canEditReportHeaders?: boolean;
    canEditSelection?: boolean;
    canEditShoppingList?: boolean;
    canEditTenderTitle?: boolean;
    canEmailQuote?: boolean;
    canEstimate?: boolean;
    canExpire?: boolean;
    canInitiateSigning?: boolean;
    canManageTenderPrice?: boolean;
    canOverrideAcc?: boolean;
    canOverridePlaceholderPrice?: boolean;
    canOverrideSelectionPriceOnVariation?: boolean;
    canOverrideTenderOptionPackagePrice?: boolean;
    canPrint?: boolean;
    canRefreshPackage?: boolean;
    canReject?: boolean;
    canReprice?: boolean;
    canSelectUnrestrictedBPE?: boolean;
    canSetMarginDeclareDate?: boolean;
    canSkipPhase?: boolean;
    canSuperUserOverrideTenderOptionPackagePrice?: boolean;
    canSuspendTender?: boolean;
    canTld?: boolean;
    canUpdateExpiry?: boolean;
    canUpdateSelectionDescription?: boolean;
    canView?: boolean;
    canViewEstimatorDetails?: boolean;
    canViewHiddenSelections?: boolean;
    canViewSellPrices?: boolean;
    isExpired?: boolean;
    isLocked?: boolean;
    isRejected?: boolean;
    showMargins?: boolean;
}
export interface TenderSelectionModel {
    assignedTo?: UserSelectionModel;
    client?: ClientSelectionModel;
    clientApprover?: UserSelectionModel;
    contractDateAdjustments?: CollectionSelectionModel<ContractDateAdjustmentSelectionModel>;
    contractSales?: CollectionSelectionModel<ContractSaleSelectionModel>;
    coverImage?: FileSelectionModel;
    estimator?: UserSelectionModel;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    facade?: TenderPackageSelectionModel;
    fastTenderPriceSummary?: FastTenderPriceSummarySelectionModel;
    houseType?: HouseTypeSelectionModel;
    land?: LandSelectionModel;
    mainImage?: FileSelectionModel;
    margin?: TenderMarginSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    originalTender?: TenderSelectionModel;
    overrideTenderContractRule?: TenderContractRuleSelectionModel;
    preparedBy?: UserSelectionModel;
    priceSummary?: TenderPriceSummarySelectionModel;
    salesCommitments?: CollectionSelectionModel<SalesCommitmentSelectionModel>;
    salesInterests?: CollectionSelectionModel<SalesInterestSelectionModel>;
    security?: SecuritySelectionModel;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
    sourceTender?: TenderSelectionModel;
    suburb?: SuburbSelectionModel;
    tenderApprover?: UserSelectionModel;
    tenderAreaSelections?: CollectionSelectionModel<TenderAreaSelxnSelectionModel>;
    tenderAudits?: CollectionSelectionModel<TenderAuditSelectionModel>;
    tenderChangeLogs?: CollectionSelectionModel<TenderChangeLogSelectionModel>;
    tenderContractRule?: TenderContractRuleSelectionModel;
    tenderDimensions?: CollectionSelectionModel<TenderDimensionSelectionModel>;
    tenderDocuments?: CollectionSelectionModel<TenderDocumentSelectionModel>;
    tenderHistory?: CollectionSelectionModel<TenderSelectionModel>;
    tenderHousePrice?: TenderHousePriceSelectionModel;
    tenderOptionSelections?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    tenderOptionSelectionsPriceChanges?: CollectionSelectionModel<TenderOptionSelxnsPriceChanxSelectionModel>;
    tenderPackageSelections?: CollectionSelectionModel<TenderPackageSelxnSelectionModel>;
    tenderPackageSelectionsPriceChanges?: CollectionSelectionModel<TenderPackageSelxnsPriceChanxSelectionModel>;
    tenderPhase?: TenderPhaseSelectionModel;
    tenderPriceLevel?: TenderPriceLevelSelectionModel;
    tenderReportingOptionSelections?: CollectionSelectionModel<TenderReportingOptionSelxnSelectionModel>;
    tenderReportingPackageSelections?: CollectionSelectionModel<TenderReportingPackageSelxnSelectionModel>;
    tenderSelectionAllocations?: CollectionSelectionModel<TenderSelxnAllocationSelectionModel>;
    variations?: CollectionSelectionModel<TenderVariationSelectionModel>;
}
export interface TenderSelxnAllocationModel {
    allocComment?: string; // @required False @length 200
    masterArea?: MasterAreaModel; // @required True
    metaData?: MetaDataOrderModel;
    option?: TenderOptionModel; // @required False
    optionSelection?: TenderOptionSelxnModel; // @required False
    quantity?: number; // @required True
    repHeaderEdited?: boolean; // @required True
    reportDisplayOrder?: number; // @required True
    reportHeader?: TenderReportHeaderModel; // @required False
    tenderSelectionAllocId?: number; // @primaryKey @required True
}
export interface TenderSelxnAllocationSelectionModel {
    masterArea?: MasterAreaSelectionModel;
    metaData?: MetaDataSelectionModel;
    option?: TenderOptionSelectionModel;
    optionSelection?: TenderOptionSelxnSelectionModel;
    reportHeader?: TenderReportHeaderSelectionModel;
}
export interface TenderSelxnsApprovalModel {
    availabilityStatus?: number;
    optionSelxnIds?: number[];
    packageSelxnIds?: number[];
    pricingStatus?: number;
}
export interface TenderSelxnSecurityModel {
    canDecreaseQty?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canIncreaseQty?: boolean;
    canOverridePrice?: boolean;
    canUpdateDescription?: boolean;
    canView?: boolean;
}
export interface TenderSelxnsModel {
    optionSelxnIds?: number[];
    packageSelxnIds?: number[];
}
export interface TenderSurchargeCriteriaModel {
    available?: AgeRangeModel;
    brand?: BrandCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    council?: DevelopmentLocationCriteriaModel;
    estate?: DevelopmentLocationCriteriaModel;
    expired?: AgeRangeModel;
    houseType?: HouseTypeCriteriaModel;
    ids?: number[];
    name?: string;
    storeys?: ValueRangeModel;
    suburb?: SuburbCriteriaModel;
    tenderOption?: TenderOptionCriteriaModel;
    tenderPriceDisplay?: TenderPriceDisplayCriteriaModel;
    textField?: string;
}
export interface TenderSurchargeModel {
    available?: DateString; // @required True
    brand?: BrandModel; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    cost?: number; // @required False
    council?: DevelopmentLocationModel; // @required False
    estate?: DevelopmentLocationModel; // @required False
    expired?: DateString; // @required True
    houseType?: HouseTypeModel; // @required False
    metaData?: MetaDataOrderModel;
    percentage?: number; // @required False
    region?: RegionModel; // @required True
    security?: SecurityModel;
    selling?: number; // @required False
    storeys?: number; // @required False
    suburb?: SuburbModel; // @required False
    surchargeName?: string; // @required True @length 100
    tenderOption?: TenderOptionModel; // @required True
    tenderPriceDisplay?: TenderPriceDisplayModel; // @required False
    tenderSurchargeId?: number; // @primaryKey @required True
    textField?: string; // @required False @length 200
}
export interface TenderSurchargeSelectionModel {
    brand?: BrandSelectionModel;
    businessUnit?: BusinessUnitSelectionModel;
    council?: DevelopmentLocationSelectionModel;
    estate?: DevelopmentLocationSelectionModel;
    houseType?: HouseTypeSelectionModel;
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
    suburb?: SuburbSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
    tenderPriceDisplay?: TenderPriceDisplaySelectionModel;
}
export interface TenderTriggerModel {
    templateItem?: TemplateItemModel; // @required True
    tenderStatusRequired?: number; // @enum TenderStatus? @required False
    tenderTriggerId?: number; // @primaryKey @required True
    triggerLevel?: number; // @required True
}
export interface TenderTriggerSelectionModel {
    templateItem?: TemplateItemSelectionModel;
}
export interface TenderVariationCriteriaModel {
    ageRange?: AgeRangeModel;
    approver?: UserCriteriaModel;
    assignedTo?: UserCriteriaModel;
    displayType?: number[];
    estimator?: UserCriteriaModel;
    houseType?: HouseTypeCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    includeSuperseded?: boolean;
    phase?: TenderPhaseCriteriaModel;
    preparedBy?: UserCriteriaModel;
    price?: ValueRangeModel;
    statuses?: number[];
    tender?: TenderCriteriaModel;
}
export interface TenderVariationModel {
    adHocWorkflow?: ContractModel; // @required False
    approvedBy?: MetaDataUserModel; // @required False
    assignedTo?: MetaDataUserModel; // @required False
    contractDateAdjustments?: CollectionModel<ContractDateAdjustmentModel>; // @required True
    contractDays?: CollectionModel<ContractDayModel>; // @required True
    coverImage?: FileModel; // @required False
    customVariationType?: ValidationEntryModel; // @required False
    documents?: CollectionModel<TenderDocumentModel>; // @required True
    estimator?: MetaDataUserModel; // @required False
    estimatorStatus?: number; // @enum TenderEstimatorStatus @required True
    externalReferenceGroup?: ExternalReferenceGroupModel; // @required False
    mainImage?: FileModel; // @required False
    metaData?: MetaDataModel;
    overrideMakeMyHomeVisible?: boolean; // @required True
    preparedBy?: MetaDataUserModel; // @required False
    security?: TenderSecurityModel;
    selectionAllocations?: CollectionModel<TenderSelxnAllocationModel>; // @required True
    selectionsEdited?: DateString; // @required True
    signings?: CollectionModel<SigningModel>; // @required True
    tender?: TenderModel; // @required True
    tenderAudits?: CollectionModel<TenderAuditModel>; // @required True
    tenderChangeLogs?: CollectionModel<TenderChangeLogModel>; // @required True
    tenderContractRule?: TenderContractRuleModel; // @required False
    tenderHousePrice?: TenderHousePriceModel; // @required False
    tenderOptionSelections?: CollectionModel<TenderOptionSelxnModel>; // @required True
    tenderPackageSelections?: CollectionModel<TenderPackageSelxnModel>; // @required True
    tenderVariationId?: number; // @primaryKey @required True
    totalExtRoundedSellPrice?: number; // @required False
    variationAccepted?: DateString; // @required False
    variationApproved?: DateString; // @required False
    variationCostPrice?: number; // @required False
    variationName?: string; // @required False @length 255
    variationNotes?: string; // @required False
    variationPrepared?: DateString; // @required False
    variationSellPrice?: number; // @required False
    variationStatus?: number; // @enum TenderStatus @required True
    variationType?: number; // @enum VariationType? @required False
}
export interface TenderVariationSelectionModel {
    adHocWorkflow?: ContractSelectionModel;
    approvedBy?: UserSelectionModel;
    assignedTo?: UserSelectionModel;
    contractDateAdjustments?: CollectionSelectionModel<ContractDateAdjustmentSelectionModel>;
    contractDays?: CollectionSelectionModel<ContractDaySelectionModel>;
    coverImage?: FileSelectionModel;
    customVariationType?: ValidationEntrySelectionModel;
    documents?: CollectionSelectionModel<TenderDocumentSelectionModel>;
    estimator?: UserSelectionModel;
    externalReferenceGroup?: ExternalReferenceGroupSelectionModel;
    mainImage?: FileSelectionModel;
    metaData?: MetaDataSelectionModel;
    preparedBy?: UserSelectionModel;
    selectionAllocations?: CollectionSelectionModel<TenderSelxnAllocationSelectionModel>;
    signings?: CollectionSelectionModel<SigningSelectionModel>;
    tender?: TenderSelectionModel;
    tenderAudits?: CollectionSelectionModel<TenderAuditSelectionModel>;
    tenderChangeLogs?: CollectionSelectionModel<TenderChangeLogSelectionModel>;
    tenderContractRule?: TenderContractRuleSelectionModel;
    tenderHousePrice?: TenderHousePriceSelectionModel;
    tenderOptionSelections?: CollectionSelectionModel<TenderOptionSelxnSelectionModel>;
    tenderPackageSelections?: CollectionSelectionModel<TenderPackageSelxnSelectionModel>;
}
export interface TimeLineModel {
    actionDetail?: string; // @required False @length 50
    altDescription?: string; // @required False @length 100
    contract?: ContractModel; // @required False
    dateTime?: DateString; // @required False
    description?: string; // @required False @length 269
    masterContract?: MasterContractModel; // @required False
    myHome?: boolean; // @required False
    timeType?: string; // @enum TimelineType @required True
    user?: MetaDataUserModel; // @required False
}
export interface TimeLineSelectionModel {
    contract?: ContractSelectionModel;
    masterContract?: MasterContractSelectionModel;
    user?: UserSelectionModel;
}
export interface TinyTaskModel {
    bLComplete?: DateString;
    bLStart?: DateString;
    completedDate?: DateString;
    contractId?: number;
    dueDate?: DateString;
    durn?: number;
    estComplete?: DateString;
    estStart?: DateString;
    pcnt?: number;
    plannedDate?: DateString;
    points?: number;
    resourceId?: number;
    resourceStatus?: string;
    stageId?: number;
    startDate?: DateString;
    summaryId?: number;
    taskBaseline?: TaskBaselineModel;
    taskId?: number;
    taskName?: string;
    taskOrder?: number;
    taskStatus?: string;
    taskTarget?: TaskTargetModel;
    taskVersion?: number;
    templateItemId?: number;
    virtualResourceId?: number;
    warnings?: string[];
}
export interface TokenResponseModel {
    token?: string;
}
export interface UpdatePasswordModel {
    currentPassword?: string;
    newPassword?: string;
}
export interface UserAppointmentModel {

}
export interface UserAppointmentSelectionModel {

}
export interface UserBrandModel {
    brand?: BrandModel; // @required True
    metaData?: MetaDataModel;
    user?: MetaDataUserModel; // @required True
    userBrandId?: number; // @primaryKey @required True
}
export interface UserBrandSelectionModel {
    brand?: BrandSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface UserBusinessUnitModel {
    businessUnit?: BusinessUnitModel; // @required True
    metaData?: MetaDataOrderModel;
    user?: MetaDataUserModel; // @required True
    userBusinessUnitId?: number; // @primaryKey @required True
}
export interface UserBusinessUnitSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface UserCallupMessagesModel {
    callupMessage?: number;
    messageReturn?: string;
    nominatedEmail?: string;
}
export interface UserCriteriaModel {
    actor?: ActorCriteriaModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    canBeConstructionLiaison?: BusinessUnitRegionCriteriaModel;
    canBeContractAdmin?: BusinessUnitRegionCriteriaModel;
    canBeMaintenanceSupervisor?: BusinessUnitRegionCriteriaModel;
    canBeSalesPerson?: BusinessUnitRegionCriteriaModel;
    canBeSupervisor1?: BusinessUnitRegionCriteriaModel;
    canBeSupervisor2?: BusinessUnitRegionCriteriaModel;
    canBeSupervisor?: BusinessUnitRegionCriteriaModel;
    canBeSupervisorQC?: BusinessUnitRegionCriteriaModel;
    canDoTask?: TaskCriteriaModel;
    contact?: ContactCriteriaModel;
    directManager?: UserCriteriaModel;
    emailAddress?: string;
    includeInactive?: boolean;
    internal?: boolean;
    jobTitle?: string;
    me?: boolean;
    myTeam?: boolean;
    operationCodes?: number[];
    quickSearch?: string;
    reference?: string;
    regionAffinity?: number;
    resource?: ResourceCriteriaModel;
    resourceCodes?: ResourceCodeCriteriaModel[];
    resourceIds?: number[];
    roleIds?: number[];
    securityRolePermissions?: SecurityRolePermissionCriteriaModel;
    userIds?: number[];
}
export interface UserDeviceCriteriaModel {
    deviceId?: string;
    includeInactive?: boolean;
    user?: UserCriteriaModel;
}
export interface UserDeviceModel {
    application?: number; // @enum DeviceApplication @required True
    deviceId?: string; // @required False @length 100
    deviceType?: number; // @enum FieldDeviceType @required True
    failureCount?: number; // @required True
    lastUpdated?: DateString; // @required False
    user?: MetaDataUserModel; // @required True
    userDeviceId?: number; // @primaryKey @required True
}
export interface UserDeviceSelectionModel {
    user?: UserSelectionModel;
}
export interface UserModel {
    activeDirectoryPath?: string; // @required False @length 400
    actor?: ActorModel; // @required False
    address?: AddressModel; // @required False @length 400
    apiKey?: string; // @required False @length 64
    brands?: CollectionModel<UserBrandModel>; // @required True
    businessUnit?: BusinessUnitModel; // @required True
    callupMessages?: UserCallupMessagesModel;
    contact?: ContactModel; // @required False
    contactDetails?: ContactDetailsModel;
    devices?: CollectionModel<UserDeviceModel>; // @required True
    firstName?: string; // @required True @length 50
    fullName?: string; // @required True @length 100
    geoTrackings?: CollectionModel<GeoTrackingModel>; // @required True
    isInternal?: boolean; // @required True
    jobTitle?: string; // @required False @length 50
    lastName?: string; // @required True @length 50
    manager?: MetaDataUserModel; // @required False
    metaData?: MetaDataModel;
    myHome?: boolean; // @required True
    notificationPreferences?: CollectionModel<NotificationPreferenceModel>; // @required True
    otherNames?: string; // @required False @length 50
    prefix?: string; // @required False @length 50
    profile?: string; // @required False
    profilePhoto?: FileModel; // @required False
    regions?: CollectionModel<UserRegionModel>; // @required True
    resource?: ResourceModel; // @required False
    roles?: CollectionModel<UserRoleModel>; // @required True
    salut?: string; // @required False @length 50
    savedSearches?: CollectionModel<SavedSearchModel>;
    security?: UserSecurityModel;
    signingRecipients?: CollectionModel<SigningRecipientModel>; // @required True
    suffix?: string; // @required False @length 50
    team?: CollectionModel<UserModel>; // @required True
    teamMembers?: CollectionModel<ManagersSubordinateModel>; // @required True
    timeZone?: string; // @required False @length 100
    userBusinessUnits?: CollectionModel<UserBusinessUnitModel>; // @required True
    userId?: number; // @primaryKey @required True
    userName?: string; // @required True @length 50
    userPreference?: UserPreferenceModel; // @required False
    userReports?: CollectionModel<UserReportModel>; // @required True
    userSettings?: CollectionModel<UserSettingModel>; // @required True
    workTimers?: CollectionModel<WorkTimerModel>; // @required True
}
export interface UserPreferenceModel {
    preferenceId?: number; // @primaryKey @required True
    preferences?: string; // @required False
    user?: MetaDataUserModel; // @required True
}
export interface UserPreferenceSelectionModel {
    user?: UserSelectionModel;
}
export interface UserRegionModel {
    metaData?: MetaDataModel;
    region?: RegionModel; // @required True
    userRegionId?: number; // @primaryKey @required True
}
export interface UserRegionSelectionModel {
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
}
export interface UserReportCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    ids?: number[];
    includeInactive?: boolean;
    masterReport?: MasterReportCriteriaModel;
    securityRole?: SecurityRoleCriteriaModel;
    user?: UserCriteriaModel;
}
export interface UserReportModel {
    autoSendRules?: string; // @required False @length 255
    masterReport?: MasterReportModel; // @required True
    metaData?: MetaDataModel;
    nextCheckTime?: DateString; // @required False
    optionalName?: string; // @required False @length 255
    otherEmails?: string; // @required False
    parameters?: string; // @required False
    reportInstructionsOverride?: string; // @required False
    securityRole?: SecurityRoleModel; // @required False
    user?: MetaDataUserModel; // @required True
    userReportId?: number; // @primaryKey @required True
}
export interface UserReportSelectionModel {
    masterReport?: MasterReportSelectionModel;
    metaData?: MetaDataSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    user?: UserSelectionModel;
}
export interface UserRoleModel {
    metaData?: MetaDataModel;
    securityRole?: SecurityRoleModel; // @required True
    user?: MetaDataUserModel; // @required True
    userRoleId?: number; // @primaryKey @required True
}
export interface UserRoleSelectionModel {
    metaData?: MetaDataSelectionModel;
    securityRole?: SecurityRoleSelectionModel;
    user?: UserSelectionModel;
}
export interface UserSecurityModel {
    canBeManager?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canImpersonate?: boolean;
    canView?: boolean;
    clickHomePlusAdmin?: boolean;
    clickHomePlusMasterProductLibrary?: boolean;
    clickHomePlusNotifications?: boolean;
    clickHomePlusWebTraffic?: boolean;
}
export interface UserSelectionModel {
    actor?: ActorSelectionModel;
    brands?: CollectionSelectionModel<UserBrandSelectionModel>;
    businessUnit?: BusinessUnitSelectionModel;
    contact?: ContactSelectionModel;
    devices?: CollectionSelectionModel<UserDeviceSelectionModel>;
    fullUser?: UserSelectionModel;
    geoTrackings?: CollectionSelectionModel<GeoTrackingSelectionModel>;
    manager?: UserSelectionModel;
    metaData?: MetaDataSelectionModel;
    notificationPreferences?: CollectionSelectionModel<NotificationPreferenceSelectionModel>;
    profilePhoto?: FileSelectionModel;
    regions?: CollectionSelectionModel<UserRegionSelectionModel>;
    resource?: ResourceSelectionModel;
    roles?: CollectionSelectionModel<UserRoleSelectionModel>;
    savedSearches?: CollectionSelectionModel<SavedSearchSelectionModel>;
    signingRecipients?: CollectionSelectionModel<SigningRecipientSelectionModel>;
    team?: CollectionSelectionModel<UserSelectionModel>;
    teamMembers?: CollectionSelectionModel<ManagersSubordinateSelectionModel>;
    userBusinessUnits?: CollectionSelectionModel<UserBusinessUnitSelectionModel>;
    userPreference?: UserPreferenceSelectionModel;
    userReports?: CollectionSelectionModel<UserReportSelectionModel>;
    userSettings?: CollectionSelectionModel<UserSettingSelectionModel>;
    workTimers?: CollectionSelectionModel<WorkTimerSelectionModel>;
}
export interface UserSettingModel {
    codeValue1?: string; // @required False @length 10
    metaData?: MetaDataModel;
    numberValue1?: number; // @required False
    setting?: string; // @required True @length 10
    stringValue1?: string; // @required False @length 100
    user?: MetaDataUserModel; // @required True
    userSettingId?: number; // @primaryKey @required True
}
export interface UserSettingSelectionModel {
    metaData?: MetaDataSelectionModel;
    user?: UserSelectionModel;
}
export interface ValidationEntryCriteriaModel {
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    closestParent?: BusinessUnitRegionCriteriaModel;
    code?: string;
    display?: string;
    ids?: number[];
    includeInactive?: boolean;
    quickSearch?: string;
}
export interface ValidationEntryModel {
    businessUnit?: BusinessUnitModel; // @required True
    display?: string; // @required True @length 50
    largeText?: string; // @required False
    metaData?: MetaDataModel;
    numeric1?: number; // @required False
    numeric2?: number; // @required False
    order?: number; // @required False
    otherId?: number; // @required False
    security?: SecurityModel;
    text1?: string; // @required False @length 400
    text2?: string; // @required False @length 400
    validCode?: string; // @required True @length 10
    validationEntryId?: number; // @primaryKey @required True
    value1?: number; // @required False
    value2?: number; // @required False
    value3?: number; // @required False
    value4?: number; // @required False
    value?: string; // @required False @length 10
}
export interface ValidationEntrySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface ValueRangeModel {
    from?: number;
    to?: number;
}
export interface WeatherEventModel {
    dateWeather?: DateString; // @required True
    duration?: number; // @required True
    metaData?: MetaDataModel;
    region?: RegionModel; // @required True
    scale?: number; // @required True
    weatherEventId?: number; // @primaryKey @required True
}
export interface WeatherEventSelectionModel {
    metaData?: MetaDataSelectionModel;
    region?: RegionSelectionModel;
}
export interface WebhookModel {
    businessUnit?: BusinessUnitModel; // @required True
    contractStatusFilter?: string; // @required False @length 8
    jobTypeFilter?: string; // @required False @length 5
    metaData?: MetaDataBaseModel;
    standardProcesses?: CollectionModel<StandardProcessModel>; // @required True
    url?: string; // @required True
    webhookId?: number; // @primaryKey @required True
    webhookType?: number; // @enum WebhookTypes @required True
}
export interface WebhookSelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    metaData?: MetaDataSelectionModel;
    standardProcesses?: CollectionSelectionModel<StandardProcessSelectionModel>;
}
export interface WebInquiryCriteriaModel {
    actioned?: boolean;
    age?: AgeRangeModel;
    businessUnitRegions?: BusinessUnitRegionCriteriaModel;
    clientReference?: string;
    ids?: number[];
    includeInactive?: boolean;
    includeSpam?: boolean;
    interfaceTypes?: string[];
    masterContracts?: MasterContractCriteriaModel;
    queueTypes?: string[];
}
export interface WebInquiryModel {
    actioned?: boolean; // @required False
    businessUnit?: BusinessUnitModel; // @required True
    clientReference?: string; // @required False @length 50
    contract?: ContractModel; // @required False
    data?: string; // @required False
    inquiryId?: number; // @primaryKey @required True
    interfaceType?: string; // @required False @length 10
    metaData?: MetaDataModel;
    queueTime?: DateString; // @required False
    queueType?: string; // @required False
    spam?: boolean; // @required False
    submittedData?: WebLeadsInquiryModel;
}
export interface WebInquirySelectionModel {
    businessUnit?: BusinessUnitSelectionModel;
    contract?: ContractSelectionModel;
    metaData?: MetaDataSelectionModel;
}
export interface WebLeadsEmailRequestModel {
    emailAddress?: string;
    inquiry?: WebInquiryModel;
}
export interface WebLeadsInquiryModel {
    action?: string;
    body?: string;
    buildAddress1?: string;
    buildAddress2?: string;
    buildCouncilId?: number;
    buildCouncilLocation?: string;
    buildLot?: string;
    buildPostCode?: string;
    buildState?: string;
    buildStreet1?: string;
    buildStreet2?: string;
    buildStreetNo?: string;
    buildSuburb?: string;
    businessUnit?: string;
    businessUnitId?: number;
    clientReference?: string;
    clientRefernce?: string;
    contact1Email?: string;
    contact1FirstName?: string;
    contact1FullName?: string;
    contact1HomePhone?: string;
    contact1LastName?: string;
    contact1MobilePhone?: string;
    contact1Title?: string;
    contact1WorkPhone?: string;
    contact2Email?: string;
    contact2FirstName?: string;
    contact2FullName?: string;
    contact2HomePhone?: string;
    contact2LastName?: string;
    contact2MobilePhone?: string;
    contact2Title?: string;
    contact2WorkPhone?: string;
    contactMethod?: string;
    contactRule?: string;
    email?: string;
    enquiryAction?: string;
    enquiryBody?: string;
    enquiryDate?: DateString;
    enquirySubject?: string;
    enquiryType?: string;
    flexFields?: string[];
    homeAddress1?: string;
    homeAddress2?: string;
    homeAddressCountry?: string;
    homeAddressPostCode?: string;
    homeAddressState?: string;
    homeAddressStreet1?: string;
    homeAddressStreet2?: string;
    homeAddressSuburb?: string;
    homeFullAddress?: string;
    inquiryId?: number;
    marketingSource?: string;
    marketingSourceId?: number;
    newsLetterPermission?: string;
    phone1?: string;
    phone2?: string;
    phone3?: string;
    referralData?: string;
    referralSource?: string;
    referralSourceId?: number;
    region?: string;
    regionId?: number;
    sourceURL?: string;
    subject?: string;
    template?: string;
    templateId?: number;
    type?: string;
}
export interface WebLeadsResponseModel {
    masterContract?: MasterContractModel;
    response?: string;
    result?: number;
}
export interface WebLeadsUpdateRequestModel {
    clientId?: number;
    contact1?: string;
    contact2?: string;
    contractId?: number;
    contractNo?: string;
    homeAddress?: string;
    homePhone1?: string;
    homePhone2?: string;
    isUpdateContact1?: boolean;
    isUpdateContact2?: boolean;
    isUpdateHomeAddress?: boolean;
    isUpdateLead?: boolean;
    isUpdateRefId?: boolean;
    lotAddress?: string;
}
export interface WishListAttributeValueModel {
    metaData?: MetaDataBaseModel;
    tenderAttributeValue?: TenderAttributeValueModel; // @required True
    wishList?: WishListModel; // @required True
    wishListAttributeValueId?: number; // @primaryKey @required True
}
export interface WishListAttributeValueSelectionModel {
    metaData?: MetaDataSelectionModel;
    tenderAttributeValue?: TenderAttributeValueSelectionModel;
    wishList?: WishListSelectionModel;
}
export interface WishListModel {
    attributeExplanation?: string; // @required False @length 400
    attributeValues?: CollectionModel<TenderAttributeValueModel>;
    clientNotes?: string; // @required False
    description?: string; // @required False
    internalNotes?: string; // @required False
    masterArea?: MasterAreaModel; // @required False
    masterContract?: MasterContractModel; // @required True
    metaData?: MetaDataModel;
    quantity?: number; // @required False
    relatedURL?: string; // @required False @length 1000
    tenderOption?: TenderOptionModel; // @required False
    tenderOptionCategory?: TenderOptionCategoryModel; // @required False
    tenderPackage?: TenderPackageModel; // @required False
    tenderPrimaryCategory?: TenderPrimaryCategoryModel; // @required False
    wishListId?: number; // @primaryKey @required True
    wishType?: number; // @enum WishListType @required True
}
export interface WishListSelectionModel {
    attributeValues?: CollectionSelectionModel<TenderAttributeValueSelectionModel>;
    masterArea?: MasterAreaSelectionModel;
    masterContract?: MasterContractSelectionModel;
    metaData?: MetaDataSelectionModel;
    tenderOption?: TenderOptionSelectionModel;
    tenderOptionCategory?: TenderOptionCategorySelectionModel;
    tenderPackage?: TenderPackageSelectionModel;
    tenderPrimaryCategory?: TenderPrimaryCategorySelectionModel;
}
export interface WorkflowCriteriaModel {
    activeTasksOnly?: boolean;
    assignedTo?: number[];
    baselineEnd?: AgeRangeModel;
    baselineStart?: AgeRangeModel;
    completed?: boolean;
    contract?: ContractCriteriaModel;
    excludeAdmin?: boolean;
    filter?: number;
    filters2?: number[];
    filters?: number[];
    forecastEnd?: AgeRangeModel;
    forecastStart?: AgeRangeModel;
    includeInactive?: boolean;
    myTasksDaysInAdvance?: AgeRangeModel;
    optional?: boolean;
    reference?: string;
    resource?: ResourceCriteriaModel;
    resourceCode?: ResourceCodeCriteriaModel;
    resourceStatuses?: string[];
    stageIds?: number[];
    summaryGroupIds?: number[];
    summaryIds?: number[];
    target?: AgeRangeModel;
    taskIds?: number[];
    taskName?: string;
    taskNotes?: string;
    taskStatuses?: string[];
    templateItem?: TemplateItemCriteriaModel;
    templateItemIds?: number[];
    userAssignedTo?: UserCriteriaModel;
}
export interface WorkTimerCriteriaModel {
    ageRange?: AgeRangeModel;
    open?: boolean;
    task?: TaskCriteriaModel;
    user?: UserCriteriaModel;
}
export interface WorkTimerModel {
    description?: string; // @required False @length 150
    duration?: number; // @required False
    end?: DateString; // @required False
    security?: SecurityModel;
    start?: DateString; // @required True
    task?: TaskModel; // @required False
    user?: MetaDataUserModel; // @required True
    workTimerId?: number; // @primaryKey @required True
}
export interface WorkTimerSelectionModel {
    security?: SecuritySelectionModel;
    task?: TaskSelectionModel;
    user?: UserSelectionModel;
}

// Enums