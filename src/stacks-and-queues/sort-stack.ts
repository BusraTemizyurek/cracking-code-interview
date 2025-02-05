export class SortStack {
  private s: number[] = [];
  private temp: number[] = [];

  push(n: number) {
    if (this.s.length === 0 || this.s[this.s.length - 1] > n) {
      this.s.push(n);
      return;
    }

    if (this.s[this.s.length - 1] < n) {
      while (this.s[this.s.length - 1] < n || this.s.length != 0) {
        const popped = this.s.pop();
        if (!popped) {
          break;
        }
        this.temp.push(popped);
      }

      this.s.push(n);
      let l = this.temp.length;
      while (l > 0) {
        const popped = this.temp.pop();
        if (!popped) {
          break;
        }
        this.s.push(popped);
        l--;
      }
    }
  }

  pop() {
    return this.s.pop();
  }

  peek() {
    return this.s[this.s.length - 1];
  }

  isEmpty() {
    return this.s.length === 0;
  }

  get stack() {
    return this.s;
  }
}
