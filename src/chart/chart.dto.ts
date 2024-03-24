export interface CreateDto {
  readonly goal: string;
  readonly chartData: string;
  readonly chartType: string;
}

export interface EditDto {
  readonly id: number;
  readonly goal: string;
  readonly chartData: string;
  readonly chartType: string;
}
