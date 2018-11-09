using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MAP_Web.Migrations
{
    public partial class addMAPModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApprovalSetup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ApprovalCount = table.Column<int>(nullable: false),
                    Rank = table.Column<string>(nullable: true),
                    WithRequirements = table.Column<bool>(nullable: false),
                    WithException = table.Column<bool>(nullable: false),
                    RequestType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApprovalSetup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AuditLog",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    TrackingNo = table.Column<string>(nullable: true),
                    Entity = table.Column<string>(nullable: true),
                    OldValues = table.Column<string>(nullable: true),
                    NewValues = table.Column<string>(nullable: true),
                    DateLoged = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuditLog", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LegalName = table.Column<string>(nullable: true),
                    DtiSecDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DocumentList",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentList", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "History",
                columns: table => new
                {
                    HistoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    date = table.Column<DateTime>(nullable: false),
                    remarks = table.Column<string>(nullable: true),
                    action = table.Column<string>(nullable: true),
                    user = table.Column<string>(nullable: true),
                    groupCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_History", x => x.HistoryId);
                });

            migrationBuilder.CreateTable(
                name: "MAEF",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    affiliation = table.Column<int>(nullable: true),
                    tangent = table.Column<string>(nullable: true),
                    requestType = table.Column<int>(nullable: true),
                    simulInstallment = table.Column<bool>(nullable: true),
                    simulDebit = table.Column<bool>(nullable: true),
                    currency = table.Column<string>(nullable: true),
                    creditMidCount = table.Column<int>(nullable: true),
                    debitTidCount = table.Column<int>(nullable: true),
                    pepList = table.Column<string>(nullable: true),
                    pepListRemarks = table.Column<string>(nullable: true),
                    isDeclined = table.Column<bool>(nullable: true),
                    declinedRemarks = table.Column<string>(nullable: true),
                    location = table.Column<int>(nullable: true),
                    appearance = table.Column<string>(nullable: true),
                    withTelephone = table.Column<bool>(nullable: true),
                    isLargeAccount = table.Column<bool>(nullable: true),
                    natureOfBusiness = table.Column<string>(nullable: true),
                    mccCorrect = table.Column<bool>(nullable: true),
                    personalAccountNo = table.Column<string>(nullable: true),
                    isBdoAccountNo = table.Column<string>(nullable: true),
                    psv = table.Column<string>(nullable: true),
                    isSignatureVerified = table.Column<bool>(nullable: true),
                    midCap = table.Column<string>(nullable: true),
                    payDelay = table.Column<string>(nullable: true),
                    holdoutAmt = table.Column<string>(nullable: true),
                    processedBy = table.Column<string>(nullable: true),
                    approvedBy = table.Column<string>(nullable: true),
                    withRequirements = table.Column<bool>(nullable: true),
                    withException = table.Column<bool>(nullable: true),
                    tempoWaiver = table.Column<bool>(nullable: true),
                    permanentWaiver = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MAEF", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MaintenanceMaster",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaintenanceMaster", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MerchantGroupView",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Code = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MerchantGroupView", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OcularInspectionForm",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    waived = table.Column<bool>(nullable: false),
                    outletAddress = table.Column<string>(nullable: true),
                    outletContactPerson = table.Column<string>(nullable: true),
                    outletContactPosition = table.Column<string>(nullable: true),
                    outletTelephoneNo = table.Column<string>(nullable: true),
                    outletMobileNo = table.Column<string>(nullable: true),
                    outletTypeOfBusiness = table.Column<int>(nullable: true),
                    natureOfBusiness = table.Column<string>(nullable: true),
                    noOfYearsOperating = table.Column<string>(nullable: true),
                    businessHours = table.Column<string>(nullable: true),
                    noOfEmployeesFullTime = table.Column<int>(nullable: true),
                    noOfEmployeesContractual = table.Column<int>(nullable: true),
                    premiseStatus = table.Column<int>(nullable: true),
                    lengthOfStay = table.Column<string>(nullable: true),
                    location = table.Column<int>(nullable: true),
                    businessSignage = table.Column<string>(nullable: true),
                    premiseType = table.Column<int>(nullable: true),
                    interiorAppearance = table.Column<string>(nullable: true),
                    exteriorAppearance = table.Column<string>(nullable: true),
                    stocks = table.Column<string>(nullable: true),
                    equipment = table.Column<string>(nullable: true),
                    floorArea = table.Column<string>(nullable: true),
                    withHighTraffic = table.Column<bool>(nullable: true),
                    establishments = table.Column<string>(nullable: true),
                    motoMarketingChannel = table.Column<string>(nullable: true),
                    averageTransactions = table.Column<int>(nullable: true),
                    nameOfEvent = table.Column<string>(nullable: true),
                    venue = table.Column<string>(nullable: true),
                    typeOfEvent = table.Column<int>(nullable: true),
                    expectedNoOfBuyers = table.Column<int>(nullable: true),
                    products = table.Column<string>(nullable: true),
                    priceRange = table.Column<string>(nullable: true),
                    noOfParticipants = table.Column<int>(nullable: true),
                    averageRegistration = table.Column<string>(nullable: true),
                    inclusiveDateOfEvent = table.Column<string>(nullable: true),
                    nameOfLastEvent = table.Column<string>(nullable: true),
                    venueOfLastEvent = table.Column<string>(nullable: true),
                    dateOfLastEvent = table.Column<DateTime>(nullable: true),
                    totalSales = table.Column<string>(nullable: true),
                    nameOfLastAcquirer = table.Column<string>(nullable: true),
                    adverseFindings = table.Column<string>(nullable: true),
                    incompleteReport = table.Column<string>(nullable: true),
                    remarks = table.Column<string>(nullable: true),
                    outskirt = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OcularInspectionForm", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LegalEntity",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomerId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LegalEntity", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LegalEntity_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Request",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RequestType = table.Column<int>(nullable: false),
                    RequestDescription = table.Column<string>(nullable: true),
                    WorkflowInstanceId = table.Column<Guid>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    BookMark = table.Column<string>(nullable: true),
                    TrackingNo = table.Column<string>(nullable: true),
                    Insuff = table.Column<bool>(nullable: false),
                    MQRStatus = table.Column<int>(nullable: false),
                    MAEFId = table.Column<int>(nullable: true),
                    HistoryId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Request", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Request_History_HistoryId",
                        column: x => x.HistoryId,
                        principalTable: "History",
                        principalColumn: "HistoryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Request_MAEF_MAEFId",
                        column: x => x.MAEFId,
                        principalTable: "MAEF",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MaintenanceDetails",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Value = table.Column<string>(nullable: true),
                    isDeleted = table.Column<bool>(nullable: false),
                    Code = table.Column<string>(nullable: true),
                    SubCategoryId = table.Column<int>(nullable: false),
                    MaintenanceMasterId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaintenanceDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MaintenanceDetails_MaintenanceMaster_MaintenanceMasterId",
                        column: x => x.MaintenanceMasterId,
                        principalTable: "MaintenanceMaster",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AdditionalFacility",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false),
                    RequestDesc = table.Column<string>(nullable: true),
                    userScreenFlow = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdditionalFacility", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AdditionalFacility_Request_Id",
                        column: x => x.Id,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BranchAffiliation",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    WithRequirements = table.Column<bool>(nullable: false),
                    WithException = table.Column<bool>(nullable: false),
                    userScreenFlow = table.Column<string>(nullable: true),
                    eMail = table.Column<string>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BranchAffiliation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BranchAffiliation_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_BranchAffiliation_Request_Id",
                        column: x => x.Id,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FileMaintenance",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false),
                    LegalEntityId = table.Column<int>(nullable: true),
                    userScreenFlow = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileMaintenance", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FileMaintenance_Request_Id",
                        column: x => x.Id,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FileMaintenance_LegalEntity_LegalEntityId",
                        column: x => x.LegalEntityId,
                        principalTable: "LegalEntity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MQRRequestApproval",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Approver = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: true),
                    Approved = table.Column<bool>(nullable: false),
                    Rank = table.Column<string>(nullable: true),
                    RequestId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MQRRequestApproval", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MQRRequestApproval_Request_RequestId",
                        column: x => x.RequestId,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MQRRequiredApproval",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Rank = table.Column<string>(nullable: true),
                    RequestId = table.Column<int>(nullable: true),
                    User = table.Column<string>(nullable: true),
                    isApproved = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MQRRequiredApproval", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MQRRequiredApproval_Request_RequestId",
                        column: x => x.RequestId,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "NewAffiliation",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    userScreenFlow = table.Column<string>(nullable: true),
                    eMail = table.Column<string>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewAffiliation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NewAffiliation_Customer_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customer",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NewAffiliation_Request_Id",
                        column: x => x.Id,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "POSRequest",
                columns: table => new
                {
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<string>(nullable: true),
                    UpdatedDate = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    Id = table.Column<int>(nullable: false),
                    RequestDescription = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    WorkflowInstanceId = table.Column<Guid>(nullable: false),
                    userScreenFlow = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_POSRequest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_POSRequest_Request_Id",
                        column: x => x.Id,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RequestApproval",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Approver = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: true),
                    Approved = table.Column<bool>(nullable: false),
                    Rank = table.Column<string>(nullable: true),
                    RequestId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestApproval", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RequestApproval_Request_RequestId",
                        column: x => x.RequestId,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RequiredApproval",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Rank = table.Column<string>(nullable: true),
                    RequestId = table.Column<int>(nullable: true),
                    User = table.Column<string>(nullable: true),
                    isApproved = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequiredApproval", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RequiredApproval_Request_RequestId",
                        column: x => x.RequestId,
                        principalTable: "Request",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Branch",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    dbaAddress1 = table.Column<string>(nullable: true),
                    dbaAddress2 = table.Column<string>(nullable: true),
                    dbaAddress3 = table.Column<string>(nullable: true),
                    City_Id = table.Column<int>(nullable: false),
                    DBAName = table.Column<string>(nullable: true),
                    areaMallCode = table.Column<int>(nullable: true),
                    payDelayDays = table.Column<int>(nullable: true),
                    dateClosed = table.Column<DateTime>(nullable: true),
                    closedreason = table.Column<int>(nullable: true),
                    owningMerchant = table.Column<string>(nullable: true),
                    JCBAcceptorId = table.Column<string>(nullable: true),
                    JCBSchemeClosereason = table.Column<int>(nullable: true),
                    JCBSchemeRevisionReason = table.Column<int>(nullable: true),
                    JCBRevisionRSN = table.Column<int>(nullable: true),
                    schemeAreaCode1 = table.Column<int>(nullable: true),
                    schemeAreaCode2 = table.Column<int>(nullable: true),
                    AMEXCardAcceptorId = table.Column<string>(nullable: true),
                    AMEXActivationReason = table.Column<int>(nullable: true),
                    AMEXCanceledReason = table.Column<int>(nullable: true),
                    AMEXRoleCode = table.Column<int>(nullable: true),
                    AMEXRiskIND = table.Column<string>(nullable: true),
                    AMEXKeyAcctIND = table.Column<string>(nullable: true),
                    CUPCardAcceptorId = table.Column<string>(nullable: true),
                    CUPTaxCode = table.Column<int>(nullable: true),
                    CUPTaxNumber = table.Column<string>(nullable: true),
                    CUPTaxExemptExpiryDate = table.Column<DateTime>(nullable: true),
                    imprinterPlateName = table.Column<string>(nullable: true),
                    imprinterPlateNumbers = table.Column<string>(nullable: true),
                    imprinterAMEX = table.Column<string>(nullable: true),
                    imprinterDC = table.Column<string>(nullable: true),
                    imprinterJCB = table.Column<string>(nullable: true),
                    imprinterOthers = table.Column<string>(nullable: true),
                    principalName1 = table.Column<string>(nullable: true),
                    principalName2 = table.Column<string>(nullable: true),
                    principalName3 = table.Column<string>(nullable: true),
                    principalName4 = table.Column<string>(nullable: true),
                    principalName5 = table.Column<string>(nullable: true),
                    adminContactperson = table.Column<string>(nullable: true),
                    goodsServices = table.Column<string>(nullable: true),
                    phoneNo = table.Column<string>(nullable: true),
                    mobileNo = table.Column<string>(nullable: true),
                    emailAddress = table.Column<string>(nullable: true),
                    mailingAddress1 = table.Column<string>(nullable: true),
                    withECR = table.Column<bool>(nullable: false),
                    merchantGrade = table.Column<int>(nullable: true),
                    serviceProvider = table.Column<string>(nullable: true),
                    website = table.Column<string>(nullable: true),
                    cardHolderData = table.Column<bool>(nullable: false),
                    cardHolderDataTobeStored = table.Column<string>(nullable: true),
                    MCC_Id = table.Column<int>(nullable: false),
                    branchCode = table.Column<string>(nullable: true),
                    imprinterTotal = table.Column<int>(nullable: true),
                    dbaZipCode = table.Column<int>(nullable: false),
                    regionCode = table.Column<int>(nullable: true),
                    checkDeliveryCode = table.Column<int>(nullable: true),
                    paymentMode = table.Column<string>(nullable: true),
                    settlementAcctNo = table.Column<string>(nullable: true),
                    merchantGroupCode = table.Column<string>(nullable: true),
                    TIN = table.Column<string>(nullable: true),
                    withTax = table.Column<bool>(nullable: false),
                    cardPlan = table.Column<int>(nullable: true),
                    isActive = table.Column<bool>(nullable: false),
                    isAffiliated = table.Column<bool>(nullable: false),
                    dbaAddress4 = table.Column<string>(nullable: true),
                    principalFirstName = table.Column<string>(nullable: true),
                    principalLastName = table.Column<string>(nullable: true),
                    principalMiddleName = table.Column<string>(nullable: true),
                    mailingAddress2 = table.Column<string>(nullable: true),
                    mailingAddress3 = table.Column<string>(nullable: true),
                    mailingAddress4 = table.Column<string>(nullable: true),
                    mailingCity = table.Column<int>(nullable: false),
                    mailingAddressZipCode = table.Column<int>(nullable: false),
                    dbaCity = table.Column<int>(nullable: true),
                    taxExemptFrom = table.Column<DateTime>(nullable: true),
                    taxExemptTo = table.Column<DateTime>(nullable: true),
                    taxExemptIssuedBy = table.Column<int>(nullable: false),
                    registeredBusinessNo = table.Column<string>(nullable: true),
                    DTIBusinessRegDate = table.Column<DateTime>(nullable: true),
                    SECRegDate = table.Column<DateTime>(nullable: true),
                    withAcquirer = table.Column<bool>(nullable: false),
                    acquirerInstitutionName = table.Column<string>(nullable: true),
                    ecrForInstallation = table.Column<bool>(nullable: false),
                    isSwipingCardWithoutInstalledECR = table.Column<bool>(nullable: false),
                    isSwipingCardWithInstalledECR = table.Column<bool>(nullable: false),
                    debitSettlementAcctNo = table.Column<string>(nullable: true),
                    payeesName = table.Column<string>(nullable: true),
                    emailAddressForReport = table.Column<string>(nullable: true),
                    SOARecipients = table.Column<string>(nullable: true),
                    SOAEmailAddress = table.Column<string>(nullable: true),
                    reportDistributionperCompany = table.Column<bool>(nullable: false),
                    reportPerBranch = table.Column<bool>(nullable: false),
                    principalFbName = table.Column<string>(nullable: true),
                    principalDateOfBirth = table.Column<DateTime>(nullable: true),
                    principalCivilStatus = table.Column<int>(nullable: false),
                    principalPhoneNo = table.Column<string>(nullable: true),
                    principalPermanentAddress = table.Column<string>(nullable: true),
                    principalCity = table.Column<int>(nullable: false),
                    principalZipCode = table.Column<int>(nullable: false),
                    principalHomeOwnership = table.Column<int>(nullable: false),
                    spouseAddress = table.Column<string>(nullable: true),
                    spouseCity = table.Column<int>(nullable: false),
                    spouseFirstName = table.Column<string>(nullable: true),
                    spouseLastName = table.Column<string>(nullable: true),
                    spouseMiddleName = table.Column<string>(nullable: true),
                    spousePhoneNo = table.Column<string>(nullable: true),
                    spouseZipCode = table.Column<int>(nullable: false),
                    financialInstitution = table.Column<string>(nullable: true),
                    accountFacility = table.Column<string>(nullable: true),
                    acctLoanNo = table.Column<string>(nullable: true),
                    loanTerm = table.Column<string>(nullable: true),
                    noOfPos = table.Column<int>(nullable: false),
                    discountDebitRate = table.Column<decimal>(nullable: false),
                    storeId = table.Column<string>(nullable: true),
                    reportPerCompanysBranch = table.Column<string>(nullable: true),
                    ftpDir = table.Column<string>(nullable: true),
                    genPayment = table.Column<bool>(nullable: false),
                    computeCWT = table.Column<bool>(nullable: false),
                    settlementPerBranch = table.Column<bool>(nullable: false),
                    customerNo = table.Column<string>(nullable: true),
                    amexRating = table.Column<int>(nullable: false),
                    bdoPayRating = table.Column<int>(nullable: false),
                    bdoPaySegment = table.Column<int>(nullable: false),
                    aoCode = table.Column<string>(nullable: true),
                    feeAccount = table.Column<string>(nullable: true),
                    forMoto = table.Column<string>(nullable: true),
                    strategicMerchant = table.Column<int>(nullable: false),
                    tranSource = table.Column<int>(nullable: false),
                    holdOutAcctNo = table.Column<string>(nullable: true),
                    holdOutAmount = table.Column<string>(nullable: true),
                    remarks = table.Column<string>(nullable: true),
                    preparedBy = table.Column<string>(nullable: true),
                    preparedDate = table.Column<DateTime>(nullable: true),
                    notedBy = table.Column<string>(nullable: true),
                    notedDate = table.Column<string>(nullable: true),
                    controlNo = table.Column<string>(nullable: true),
                    smsSending = table.Column<bool>(nullable: false),
                    withDependency = table.Column<bool>(nullable: false),
                    custr = table.Column<bool>(nullable: false),
                    postMaintReview = table.Column<bool>(nullable: false),
                    postMaintReviewDate = table.Column<DateTime>(nullable: true),
                    currentDate = table.Column<DateTime>(nullable: true),
                    midCount = table.Column<string>(nullable: true),
                    midDateTimeCreated = table.Column<DateTime>(nullable: true),
                    tidCount = table.Column<string>(nullable: true),
                    tidDateTimeCreated = table.Column<DateTime>(nullable: true),
                    mdf = table.Column<string>(nullable: true),
                    mdfChecker = table.Column<string>(nullable: true),
                    mdfDateTimeChecked = table.Column<DateTime>(nullable: true),
                    mdfMaker = table.Column<string>(nullable: true),
                    mcId = table.Column<int>(nullable: false),
                    debitMailingAddressCity = table.Column<int>(nullable: false),
                    debitMailingAddressZipCode = table.Column<int>(nullable: false),
                    sendBdo030114 = table.Column<int>(nullable: false),
                    branch = table.Column<string>(nullable: true),
                    tradeCustomerName = table.Column<string>(nullable: true),
                    tradeContactNo = table.Column<string>(nullable: true),
                    debitMerchantNo = table.Column<string>(nullable: true),
                    isSingleProp = table.Column<bool>(nullable: false),
                    isPartnershipCorp = table.Column<bool>(nullable: false),
                    mdfDateTimeCreated = table.Column<DateTime>(nullable: true),
                    legalName = table.Column<string>(nullable: true),
                    POSRequestId = table.Column<int>(nullable: true),
                    OcularInspectionFormId = table.Column<int>(nullable: true),
                    BranchAffiliationId = table.Column<int>(nullable: true),
                    NewAffiliationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Branch", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Branch_BranchAffiliation_BranchAffiliationId",
                        column: x => x.BranchAffiliationId,
                        principalTable: "BranchAffiliation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Branch_NewAffiliation_NewAffiliationId",
                        column: x => x.NewAffiliationId,
                        principalTable: "NewAffiliation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Branch_OcularInspectionForm_OcularInspectionFormId",
                        column: x => x.OcularInspectionFormId,
                        principalTable: "OcularInspectionForm",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Branch_POSRequest_POSRequestId",
                        column: x => x.POSRequestId,
                        principalTable: "POSRequest",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Branch_BranchAffiliationId",
                table: "Branch",
                column: "BranchAffiliationId");

            migrationBuilder.CreateIndex(
                name: "IX_Branch_NewAffiliationId",
                table: "Branch",
                column: "NewAffiliationId");

            migrationBuilder.CreateIndex(
                name: "IX_Branch_OcularInspectionFormId",
                table: "Branch",
                column: "OcularInspectionFormId");

            migrationBuilder.CreateIndex(
                name: "IX_Branch_POSRequestId",
                table: "Branch",
                column: "POSRequestId");

            migrationBuilder.CreateIndex(
                name: "IX_BranchAffiliation_CustomerId",
                table: "BranchAffiliation",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_FileMaintenance_LegalEntityId",
                table: "FileMaintenance",
                column: "LegalEntityId");

            migrationBuilder.CreateIndex(
                name: "IX_LegalEntity_CustomerId",
                table: "LegalEntity",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_MaintenanceDetails_MaintenanceMasterId",
                table: "MaintenanceDetails",
                column: "MaintenanceMasterId");

            migrationBuilder.CreateIndex(
                name: "IX_MQRRequestApproval_RequestId",
                table: "MQRRequestApproval",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_MQRRequiredApproval_RequestId",
                table: "MQRRequiredApproval",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_NewAffiliation_CustomerId",
                table: "NewAffiliation",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Request_HistoryId",
                table: "Request",
                column: "HistoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Request_MAEFId",
                table: "Request",
                column: "MAEFId");

            migrationBuilder.CreateIndex(
                name: "IX_RequestApproval_RequestId",
                table: "RequestApproval",
                column: "RequestId");

            migrationBuilder.CreateIndex(
                name: "IX_RequiredApproval_RequestId",
                table: "RequiredApproval",
                column: "RequestId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdditionalFacility");

            migrationBuilder.DropTable(
                name: "ApprovalSetup");

            migrationBuilder.DropTable(
                name: "AuditLog");

            migrationBuilder.DropTable(
                name: "Branch");

            migrationBuilder.DropTable(
                name: "DocumentList");

            migrationBuilder.DropTable(
                name: "FileMaintenance");

            migrationBuilder.DropTable(
                name: "MaintenanceDetails");

            migrationBuilder.DropTable(
                name: "MerchantGroupView");

            migrationBuilder.DropTable(
                name: "MQRRequestApproval");

            migrationBuilder.DropTable(
                name: "MQRRequiredApproval");

            migrationBuilder.DropTable(
                name: "RequestApproval");

            migrationBuilder.DropTable(
                name: "RequiredApproval");

            migrationBuilder.DropTable(
                name: "BranchAffiliation");

            migrationBuilder.DropTable(
                name: "NewAffiliation");

            migrationBuilder.DropTable(
                name: "OcularInspectionForm");

            migrationBuilder.DropTable(
                name: "POSRequest");

            migrationBuilder.DropTable(
                name: "LegalEntity");

            migrationBuilder.DropTable(
                name: "MaintenanceMaster");

            migrationBuilder.DropTable(
                name: "Request");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "History");

            migrationBuilder.DropTable(
                name: "MAEF");
        }
    }
}
