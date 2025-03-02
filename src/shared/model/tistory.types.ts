export interface TistoryResponse<T> {
  status?: number;
  data: T;
  desc?: string;
}
