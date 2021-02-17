export interface ISortable {
  length: number;
  compare(leftPos: number, rightPos: number): boolean;
  swap(left: number, right: number)
}

