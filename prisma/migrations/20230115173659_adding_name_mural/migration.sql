/*
  Warnings:

  - You are about to drop the `Mural` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_muralId_fkey";

-- DropTable
DROP TABLE "Mural";

-- CreateTable
CREATE TABLE "mural" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,

    CONSTRAINT "mural_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_muralId_fkey" FOREIGN KEY ("muralId") REFERENCES "mural"("id") ON DELETE SET NULL ON UPDATE CASCADE;
