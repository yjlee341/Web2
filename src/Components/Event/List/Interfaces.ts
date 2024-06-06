export interface Event {
  id: number;
  name: string;
  mainImageUrl: string;
  openDate: string;
  closeDate: string;
  recruitStartDate: string;
  recruitEndDate: string;
}

export interface EventResponse {
  hasNext: boolean;
  sliceNumber: number;
  numberOfElements: number;
  content: Event[];
}
