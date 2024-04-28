import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty({ description: '目标', example: '分析网站用户' })
  readonly goal: string;

  @ApiProperty({
    description: '上传的文件',
    example:
      'D:/fronted/React_project/huajiao_bi/huajiao_bi_backend/src/chart/file/data.xlsx',
  })
  readonly chartData: string;

  @ApiProperty({ description: '生成的类型', example: '折线图' })
  readonly chartType: string;

  @ApiProperty({ description: '生成的表名', example: '网站用户趋势' })
  readonly name: string;
}

export interface EditDto {
  readonly id: number;
  readonly goal: string;
  readonly chartData: string;
  readonly chartType: string;
}
