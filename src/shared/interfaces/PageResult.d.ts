export interface IPageResult<T> {
  page: number;
  size: number;
  next: number;
  total_count: number;
  items: T[];
}
