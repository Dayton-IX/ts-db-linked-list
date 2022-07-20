class Node {
  value: any;
  prev!: Node | null;
  next!: Node | null;
  constructor(value: any = undefined) {
    this.value = value
  }
}

export class LinkedList<TElement> {
  head: Node | null
  tail: Node | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  print(): void {
    let current = this.head;
    while (current) {
      console.log(
        `${current.prev?.value} ${current.value} ${current.next?.value}`
      );
      current = current.next;
    }
  }
  
  public push(element: unknown): void {
    let newNode = new Node(element)
    
    if (this.head) {
      this.head.next = newNode
      newNode.prev = this.head
      this.head = newNode
    } else {
      this.head = this.tail = newNode
    }

    this.length++
  }

  public pop(): unknown {
    if (this.head) {
      const poppedVal = this.head.value

      this.head = this.head.prev
      if (this.head) {
        this.head.next = null
      }

      this.length--
      return poppedVal
    }
    return null
  }

  public shift(): unknown {
    if (this.tail) {
      const shiftedVal = this.tail.value

      this.tail = this.tail.next
      if (this.tail) {
        this.tail.prev = null
      }
      this.length --
      return shiftedVal
    }
    return null
  }

  public unshift(element: unknown): void {
    let newNode = new Node(element)

    if (this.tail) {
      this.tail.prev = newNode
      newNode.next = this.tail
      this.tail = newNode
    } else {
      this.head = this.tail = newNode
    }

    this.length++
  }

  public delete(element: unknown): void {
    throw new Error('Remove this statement and implement this function')
  }

  public count(): number {
    return this.length
  }
}
