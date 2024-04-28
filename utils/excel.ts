import path from 'path';
import { Workbook } from 'exceljs';

interface CSVData {
  column1: string;
}

export const excelToCsv = async (file: string) => {
  // 读取数据
  const workbook = new Workbook();
  const { xlsx } = workbook;
  await xlsx.readFile(file);
  const worksheet = workbook.getWorksheet(1);

  // 转成csv
  const csvData = [];

  worksheet.eachRow((row) => {
    const values = row.values as string[];
    csvData.push(values.filter((cell) => Boolean(cell)).join(','));
  });
  return csvData.join('\n');
};
