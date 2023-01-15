-- AlterTable
ALTER TABLE "task" ADD COLUMN     "muralId" INTEGER;

-- CreateTable
CREATE TABLE "Mural" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "Mural_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_muralId_fkey" FOREIGN KEY ("muralId") REFERENCES "Mural"("id") ON DELETE SET NULL ON UPDATE CASCADE;
