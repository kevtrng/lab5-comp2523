import { ISortable} from './ISortable';

export class NumberGroup implements ISortable{
    constructor (data: number[]){
        this.data = data;
    }

    data: number[];

    get length(): number {
        return this.data.length
    }

    swap(leftPos: number, rightPos: number): void{
        let left = this.data[leftPos];
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = left
    }

    compare(leftPos: number, rightPos: number): boolean {
        if (this.data[leftPos] > this.data[rightPos]) {
            return true;
        } else {
            return false; 
        }
    }
  }
