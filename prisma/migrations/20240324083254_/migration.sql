-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `userAccount` VARCHAR(256) NOT NULL,
    `userPassword` VARCHAR(512) NOT NULL,
    `userName` VARCHAR(256) NOT NULL,
    `userAvatar` VARCHAR(1000) NOT NULL,
    `userRole` VARCHAR(256) NOT NULL DEFAULT 'user',
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isDelete` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chart` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `goal` TEXT NOT NULL,
    `name` VARCHAR(128) NOT NULL,
    `chartData` TEXT NOT NULL,
    `chartType` VARCHAR(128) NOT NULL,
    `genChart` TEXT NOT NULL,
    `genResult` TEXT NOT NULL,
    `status` VARCHAR(128) NOT NULL DEFAULT 'wait',
    `execMessage` TEXT NOT NULL,
    `userId` BIGINT NOT NULL,
    `createTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isDelete` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
