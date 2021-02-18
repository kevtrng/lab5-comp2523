import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
    constructor(data: string) {
        this.data = data;
      }

      data: string; 

      get length(): number {
        return this.data.length
      }
    
      compare(leftPos: number, rightPos: number): boolean {
        if(this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase()){
            return true; 
        } else {
            return false;
        }
      }
    
      swap(leftPos: number, rightPos: number): void {
        let temp = this.data[leftPos];
        let stringArray = this.data.split("");
        stringArray[leftPos] = stringArray[rightPos];
        stringArray[rightPos] = temp; 
        this.data = stringArray.join("")
      }
  }