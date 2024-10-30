export interface MarkerData {
  latitude: number;
  longitude: number;
  image: string;
  cost: string;
  addr: string;
  size: number;
  bedCount: number;
  bathCount: number;
}

export interface ListProps {
  list: Array<any> | null;
}