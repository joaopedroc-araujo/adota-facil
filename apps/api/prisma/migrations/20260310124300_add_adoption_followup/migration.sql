-- CreateEnum
CREATE TYPE "AnimalStatus" AS ENUM ('AVAILABLE', 'ADOPTED', 'UNDER_TREATMENT', 'QUARANTINE');

-- CreateEnum
CREATE TYPE "AdoptionStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "FollowUpStatus" AS ENUM ('PENDING', 'COMPLETED', 'OVERDUE', 'CANCELLED');

-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "age" TEXT,
ADD COLUMN     "breed" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "healthNotes" TEXT,
ADD COLUMN     "species" TEXT,
ADD COLUMN     "status" "AnimalStatus" NOT NULL DEFAULT 'AVAILABLE';

-- CreateTable
CREATE TABLE "Adoption" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "adopterId" TEXT NOT NULL,
    "status" "AdoptionStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "adoptionDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adoption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowUp" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "adoptionId" TEXT NOT NULL,
    "scheduledDate" TIMESTAMP(3) NOT NULL,
    "completedDate" TIMESTAMP(3),
    "status" "FollowUpStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FollowUp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Adoption_tenantId_idx" ON "Adoption"("tenantId");

-- CreateIndex
CREATE INDEX "Adoption_animalId_idx" ON "Adoption"("animalId");

-- CreateIndex
CREATE INDEX "Adoption_adopterId_idx" ON "Adoption"("adopterId");

-- CreateIndex
CREATE INDEX "FollowUp_tenantId_idx" ON "FollowUp"("tenantId");

-- CreateIndex
CREATE INDEX "FollowUp_adoptionId_idx" ON "FollowUp"("adoptionId");

-- CreateIndex
CREATE INDEX "FollowUp_scheduledDate_idx" ON "FollowUp"("scheduledDate");

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUp" ADD CONSTRAINT "FollowUp_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowUp" ADD CONSTRAINT "FollowUp_adoptionId_fkey" FOREIGN KEY ("adoptionId") REFERENCES "Adoption"("id") ON DELETE CASCADE ON UPDATE CASCADE;
