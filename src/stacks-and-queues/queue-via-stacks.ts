export class MyQ {
  private s1: number[] = [];
  private s2: number[] = [];

  enqueue(num: number) {
    if (this.s1.length === 0 && this.s2.length === 0) {
      this.s1.push(num);
      return;
    }

    if (this.s1.length > 0 && this.s2.length === 0) {
      let l1 = this.s1.length;
      while (l1 > 0) {
        const popped = this.s1.pop();
        if (popped) {
          this.s2.push(popped);
        }
        l1--;
      }
      this.s1.push(num);

      let l2 = this.s2.length;
      while (l2 > 0) {
        const popped = this.s2.pop();
        if (popped) {
          this.s1.push(popped);
        }
        l2--;
      }
    }
  }

  dequeue() {
    return this.s1.length === 0 ? undefined : this.s1.pop();
  }
}
