/*
  Warnings:

  - You are about to drop the `message` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `googleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_recipientId_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_senderId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `googleId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `message`;
