// page 123 (111) Q-4.11

import { TNode } from "../types";

function _insert(root: TNode<number>, node: TNode<number>) {
  if (root.val > node.val) {
    if (root.left) {
      _insert(root.left, node);
    } else {
      root.left = node;
    }
  } else if (root.val < node.val) {
    if (root.right) {
      _insert(root.right, node);
    } else {
      root.right = node;
    }
  }
}

function getMax(root: TNode<number>): number {
  return root.right ? getMax(root.right) : root.val;
}

function _delete(
  root: TNode<number> | undefined,
  num: number
): TNode<number> | undefined {
  if (!root) {
    return undefined;
  }

  if (root.val > num) {
    root.left = _delete(root.left, num);
  } else if (root.val < num) {
    root.right = _delete(root.right, num);
  } else {
    if (!root.left) {
      return root.right;
    }

    if (!root.right) {
      return root.left;
    }

    const rootVal = getMax(root.left);
    root.val = rootVal;
    root.left = _delete(root.left, rootVal);
  }

  return root;
}

function inOrderTraversalPrint(
  root: TNode<number> | undefined,
  result: TNode<number>[]
) {
  if (!root) {
    return;
  }

  if (root.left) {
    inOrderTraversalPrint(root.left, result);
  }

  result.push(root);

  if (root.right) {
    inOrderTraversalPrint(root.right, result);
  }
}

function inOrderTraversal(root: TNode<number> | undefined): TNode<number>[] {
  const result: TNode<number>[] = [];
  inOrderTraversalPrint(root, result);
  return result;
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function createRandomIndex(
  arr: TNode<number>[],
  set: Set<number>
): number | undefined {
  const index = getRandomInt(arr.length);
  if (!set.has(index)) {
    set.add(index);
    return index;
  }

  if (set.size === arr.length) {
    set.clear();
  }
  return undefined;
}

export class Bst {
  private root: TNode<number> | undefined = undefined;

  insert(num: number) {
    const newItem = {
      val: num,
    };

    if (!this.root) {
      this.root = newItem;
    } else {
      _insert(this.root, newItem);
    }
  }

  find(num: number): boolean {
    let temp = this.root;

    while (temp) {
      if (temp.val < num) {
        temp = temp.right;
      } else if (temp.val > num) {
        temp = temp.left;
      } else {
        return true;
      }
    }
    return false;
  }

  delete(num: number) {
    this.root = _delete(this.root, num);
  }

  private set = new Set<number>();

  getRandomNode = () => {
    const arr = inOrderTraversal(this.root);

    if (arr.length <= 0) {
      throw new Error("No item left in the tree");
    }

    let index = createRandomIndex(arr, this.set);
    while (index === undefined) {
      index = createRandomIndex(arr, this.set);
    }

    return arr[index];
  };

  show() {
    return this.root;
  }
}
