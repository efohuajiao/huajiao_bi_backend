/*
  Warnings:

  - You are about to alter the column `createTime` on the `chart` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.
  - You are about to alter the column `updateTime` on the `chart` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.
  - You are about to alter the column `createTime` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.
  - You are about to alter the column `updateTime` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.

*/
-- AlterTable
ALTER TABLE `chart` MODIFY `goal` TEXT NULL,
    MODIFY `name` VARCHAR(128) NULL,
    MODIFY `chartData` TEXT NULL,
    MODIFY `chartType` VARCHAR(128) NULL,
    MODIFY `genChart` TEXT NULL,
    MODIFY `genResult` TEXT NULL,
    MODIFY `execMessage` TEXT NULL,
    MODIFY `userId` BIGINT NULL,
    MODIFY `createTime` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updateTime` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `user` MODIFY `userName` VARCHAR(256) NULL,
    MODIFY `userAvatar` VARCHAR(1000) NULL,
    MODIFY `createTime` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updateTime` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
