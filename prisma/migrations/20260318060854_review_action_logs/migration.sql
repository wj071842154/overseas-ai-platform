-- CreateTable
CREATE TABLE "ReviewActionLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reviewTaskId" TEXT NOT NULL,
    "actionType" TEXT NOT NULL,
    "operator" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ReviewActionLog_reviewTaskId_fkey" FOREIGN KEY ("reviewTaskId") REFERENCES "ReviewTask" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "ReviewActionLog_reviewTaskId_idx" ON "ReviewActionLog"("reviewTaskId");

-- CreateIndex
CREATE INDEX "ReviewActionLog_actionType_idx" ON "ReviewActionLog"("actionType");

-- CreateIndex
CREATE INDEX "ReviewActionLog_createdAt_idx" ON "ReviewActionLog"("createdAt");
