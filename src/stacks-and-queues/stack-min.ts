// page 109(98) Q-3.2

import { ListNode } from "../types";

/**
 * StackMin class maintains a stack with the ability to return the minimum element in O(1) time.
 * 
 * Time Complexity:
 * - push(value: number): O(1)
 *   - Insertion of a new node is done in constant time. The value is added to the linked list and the minimum stack is updated (if necessary) in constant time.
 * - pop(): O(1)
 *   - Popping an element involves removing the top node from the linked list and updating the minimum stack in constant time.
 * - min(): O(1)
 *   - Returning the minimum value is done in constant time by simply accessing the last element of the `minStack` array.

 * Space Complexity:
 * - O(n)
 *   - The space complexity is proportional to the number of elements in the stack, as both the linked list and the `minStack` array are used to store the elements.
 *   - The `minStack` array stores a copy of the minimum values, and the linked list stores the elements of the stack.
 *   - Overall, the space used is proportional to `n`, where `n` is the number of elements in the stack.
 */

export class StackMin {
  private dummy: ListNode<number> = {
    val: -1,
  };

  private minStack: number[] = [];

  push(value: number) {
    const newItem: ListNode<number> = {
      val: value,
    };

    if (!this.dummy.next) {
      this.dummy.next = newItem;
      this.minStack.push(newItem.val);
      return;
    }

    if (newItem.val < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(newItem.val);
    }

    newItem.next = this.dummy.next;
    this.dummy.next = newItem;
  }

  pop(): number | undefined {
    if (!this.dummy.next) {
      return undefined;
    }

    const popped = this.dummy.next;
    this.dummy.next = this.dummy.next?.next;

    if (popped.val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped.val;
  }

  min(): number | undefined {
    if (!this.dummy.next) {
      return undefined;
    }

    return this.minStack[this.minStack.length - 1];
  }
}
