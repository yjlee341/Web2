export interface Booth {
  id: number;
  name: string;
  openDate: string;
  closeDate: string;
  mainImageUrl: string;
}

export interface BoothResponse {
  hasNext: boolean;
  sliceNumber: number;
  numberOfElements: number;
  content: Booth[];
}
