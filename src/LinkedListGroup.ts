import { ISortable } from "./ISortable";


class Node {
  next: Node | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedListGroup implements ISortable {
  head: Node | null = null;

  // Create Node out of data and attach to end of list
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // Should return number of Nodes in List
  get length(): number {
    // implement this part yourself
    let searchNode = this.head;
    let count: number = 1;
    while(searchNode.next) {
        searchNode = searchNode.next
        count++
    }
    return count;
  }

 // Convenience method that returns a Node at a given index
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Error: Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Error: Index out of bounds");
  }

  compare(leftPos: number, rightPos: number): boolean {
    // Implement this part yourself
    let nodeL = this.at(leftPos);
    if (nodeL != null){
      let nodeR = nodeL.next;
      let nodeRTemp = nodeR.data;
      if (nodeL.data > nodeRTemp) {
        return true;
      } else {
        return false;
      }
    }
  }

  swap(leftPos: number, rightPos: number): void {
    // Implement this part yourself
    let leftNode = this.at(leftPos).data;
    this.at(leftPos).data = this.at(rightPos).data;
    this.at(rightPos).data = leftNode

  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}