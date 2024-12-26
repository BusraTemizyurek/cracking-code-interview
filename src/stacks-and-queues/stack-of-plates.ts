//assumed default threshold is 10 if not given

export class SetOfStacks {
  private globalStack: number[][] = [];
  private treshold: number | undefined;

  constructor(threshold: number) {
    this.treshold = threshold;
  }

  push(n: number) {
    if (
      this.globalStack.length === 0 ||
      this.globalStack[this.globalStack.length - 1].length >=
        (this.treshold ?? 10)
    ) {
      this.globalStack.push([n]);
      return;
    }

    this.globalStack[this.globalStack.length - 1].push(n);
  }

  pop() {
    if (this.globalStack.length === 0) {
      return;
    }
    this.globalStack[this.globalStack.length - 1].pop();
    if (this.globalStack[this.globalStack.length - 1].length === 0) {
      this.globalStack.pop();
    }
  }

  popAt(index: number) {
    this.globalStack[index].pop();
  }

  get stack() {
    return this.globalStack;
  }
}
