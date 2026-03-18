-- CreateTable
CREATE TABLE "ServiceType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "serviceTypeId" TEXT NOT NULL,
    "summary" TEXT,
    "description" TEXT,
    "officialWebsite" TEXT,
    "logoUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "riskLevel" TEXT NOT NULL DEFAULT 'medium',
    "reviewStatus" TEXT NOT NULL DEFAULT 'draft',
    "lastReviewedAt" DATETIME,
    "lastPublishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Service_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "sourceRecordId" TEXT,
    "name" TEXT NOT NULL,
    "billingType" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "priceUnit" TEXT,
    "originalPrice" DECIMAL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "supportsModelsText" TEXT,
    "paymentMethodsText" TEXT,
    "notes" TEXT,
    "effectiveAt" DATETIME,
    "expiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Plan_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Plan_sourceRecordId_fkey" FOREIGN KEY ("sourceRecordId") REFERENCES "SourceRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RegistrationRequirement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "sourceRecordId" TEXT,
    "requiresEmail" BOOLEAN,
    "requiresPhone" BOOLEAN,
    "requiresForeignPhone" BOOLEAN,
    "requiresPaymentMethod" BOOLEAN,
    "paymentMethodNotes" TEXT,
    "requiresSpecificRegion" BOOLEAN,
    "regionNotes" TEXT,
    "deviceRequirements" TEXT,
    "identityRequirements" TEXT,
    "otherRequirements" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RegistrationRequirement_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RegistrationRequirement_sourceRecordId_fkey" FOREIGN KEY ("sourceRecordId") REFERENCES "SourceRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RegionRequirement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "sourceRecordId" TEXT,
    "regionCode" TEXT NOT NULL,
    "availabilityType" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RegionRequirement_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RegionRequirement_sourceRecordId_fkey" FOREIGN KEY ("sourceRecordId") REFERENCES "SourceRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RiskNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "sourceRecordId" TEXT,
    "riskType" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "evidenceType" TEXT NOT NULL,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RiskNote_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RiskNote_sourceRecordId_fkey" FOREIGN KEY ("sourceRecordId") REFERENCES "SourceRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GuideArticle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "authorId" TEXT,
    "reviewerId" TEXT,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ArticleServiceRelation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "articleId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "relationType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ArticleServiceRelation_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "GuideArticle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ArticleServiceRelation_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SourceRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "sourceType" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "sourceTitle" TEXT,
    "rawExcerpt" TEXT,
    "snapshotText" TEXT,
    "snapshotHash" TEXT,
    "parserName" TEXT,
    "confidenceScore" DECIMAL,
    "capturedAt" DATETIME NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SourceRecord_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CrawlJob" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'queued',
    "startedAt" DATETIME,
    "finishedAt" DATETIME,
    "errorMessage" TEXT,
    "rawResultPath" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CrawlJob_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ReviewTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "taskType" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 50,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "assignedTo" TEXT,
    "reviewNotes" TEXT,
    "submittedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ReviewTask_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChangeLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "sourceRecordId" TEXT,
    "reviewTaskId" TEXT,
    "fieldGroup" TEXT NOT NULL,
    "changeType" TEXT NOT NULL,
    "beforeData" JSONB,
    "afterData" JSONB,
    "detectedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ChangeLog_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChangeLog_sourceRecordId_fkey" FOREIGN KEY ("sourceRecordId") REFERENCES "SourceRecord" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ChangeLog_reviewTaskId_fkey" FOREIGN KEY ("reviewTaskId") REFERENCES "ReviewTask" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ServiceSnapshot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceId" TEXT NOT NULL,
    "versionNo" INTEGER NOT NULL,
    "snapshotData" JSONB NOT NULL,
    "publishedBy" TEXT,
    "publishedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ServiceSnapshot_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceType_code_key" ON "ServiceType"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");

-- CreateIndex
CREATE INDEX "Service_serviceTypeId_idx" ON "Service"("serviceTypeId");

-- CreateIndex
CREATE INDEX "Service_status_idx" ON "Service"("status");

-- CreateIndex
CREATE INDEX "Service_reviewStatus_idx" ON "Service"("reviewStatus");

-- CreateIndex
CREATE INDEX "Service_riskLevel_idx" ON "Service"("riskLevel");

-- CreateIndex
CREATE INDEX "Plan_serviceId_idx" ON "Plan"("serviceId");

-- CreateIndex
CREATE INDEX "Plan_sourceRecordId_idx" ON "Plan"("sourceRecordId");

-- CreateIndex
CREATE INDEX "Plan_billingType_idx" ON "Plan"("billingType");

-- CreateIndex
CREATE INDEX "Plan_isActive_idx" ON "Plan"("isActive");

-- CreateIndex
CREATE INDEX "RegistrationRequirement_serviceId_idx" ON "RegistrationRequirement"("serviceId");

-- CreateIndex
CREATE INDEX "RegistrationRequirement_sourceRecordId_idx" ON "RegistrationRequirement"("sourceRecordId");

-- CreateIndex
CREATE INDEX "RegionRequirement_serviceId_idx" ON "RegionRequirement"("serviceId");

-- CreateIndex
CREATE INDEX "RegionRequirement_sourceRecordId_idx" ON "RegionRequirement"("sourceRecordId");

-- CreateIndex
CREATE INDEX "RegionRequirement_regionCode_idx" ON "RegionRequirement"("regionCode");

-- CreateIndex
CREATE INDEX "RegionRequirement_availabilityType_idx" ON "RegionRequirement"("availabilityType");

-- CreateIndex
CREATE UNIQUE INDEX "RegionRequirement_serviceId_regionCode_key" ON "RegionRequirement"("serviceId", "regionCode");

-- CreateIndex
CREATE INDEX "RiskNote_serviceId_idx" ON "RiskNote"("serviceId");

-- CreateIndex
CREATE INDEX "RiskNote_sourceRecordId_idx" ON "RiskNote"("sourceRecordId");

-- CreateIndex
CREATE INDEX "RiskNote_riskType_idx" ON "RiskNote"("riskType");

-- CreateIndex
CREATE INDEX "RiskNote_severity_idx" ON "RiskNote"("severity");

-- CreateIndex
CREATE INDEX "RiskNote_isVisible_idx" ON "RiskNote"("isVisible");

-- CreateIndex
CREATE UNIQUE INDEX "GuideArticle_slug_key" ON "GuideArticle"("slug");

-- CreateIndex
CREATE INDEX "GuideArticle_status_idx" ON "GuideArticle"("status");

-- CreateIndex
CREATE INDEX "GuideArticle_publishedAt_idx" ON "GuideArticle"("publishedAt");

-- CreateIndex
CREATE INDEX "ArticleServiceRelation_articleId_idx" ON "ArticleServiceRelation"("articleId");

-- CreateIndex
CREATE INDEX "ArticleServiceRelation_serviceId_idx" ON "ArticleServiceRelation"("serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleServiceRelation_articleId_serviceId_relationType_key" ON "ArticleServiceRelation"("articleId", "serviceId", "relationType");

-- CreateIndex
CREATE INDEX "SourceRecord_serviceId_idx" ON "SourceRecord"("serviceId");

-- CreateIndex
CREATE INDEX "SourceRecord_sourceType_idx" ON "SourceRecord"("sourceType");

-- CreateIndex
CREATE INDEX "SourceRecord_capturedAt_idx" ON "SourceRecord"("capturedAt");

-- CreateIndex
CREATE INDEX "SourceRecord_isActive_idx" ON "SourceRecord"("isActive");

-- CreateIndex
CREATE INDEX "CrawlJob_serviceId_idx" ON "CrawlJob"("serviceId");

-- CreateIndex
CREATE INDEX "CrawlJob_status_idx" ON "CrawlJob"("status");

-- CreateIndex
CREATE INDEX "CrawlJob_jobType_idx" ON "CrawlJob"("jobType");

-- CreateIndex
CREATE INDEX "CrawlJob_createdAt_idx" ON "CrawlJob"("createdAt");

-- CreateIndex
CREATE INDEX "ReviewTask_serviceId_idx" ON "ReviewTask"("serviceId");

-- CreateIndex
CREATE INDEX "ReviewTask_status_idx" ON "ReviewTask"("status");

-- CreateIndex
CREATE INDEX "ReviewTask_taskType_idx" ON "ReviewTask"("taskType");

-- CreateIndex
CREATE INDEX "ReviewTask_priority_idx" ON "ReviewTask"("priority");

-- CreateIndex
CREATE INDEX "ChangeLog_serviceId_idx" ON "ChangeLog"("serviceId");

-- CreateIndex
CREATE INDEX "ChangeLog_sourceRecordId_idx" ON "ChangeLog"("sourceRecordId");

-- CreateIndex
CREATE INDEX "ChangeLog_reviewTaskId_idx" ON "ChangeLog"("reviewTaskId");

-- CreateIndex
CREATE INDEX "ChangeLog_fieldGroup_idx" ON "ChangeLog"("fieldGroup");

-- CreateIndex
CREATE INDEX "ChangeLog_status_idx" ON "ChangeLog"("status");

-- CreateIndex
CREATE INDEX "ChangeLog_detectedAt_idx" ON "ChangeLog"("detectedAt");

-- CreateIndex
CREATE INDEX "ServiceSnapshot_serviceId_idx" ON "ServiceSnapshot"("serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSnapshot_serviceId_versionNo_key" ON "ServiceSnapshot"("serviceId", "versionNo");
