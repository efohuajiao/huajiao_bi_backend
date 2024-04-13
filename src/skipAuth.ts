import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
// 创建自定义装饰器，用于跳过授权
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
