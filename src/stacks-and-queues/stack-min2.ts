// page 109(98) Q-3.2
// time complexity of functions are O(1)
// space complexity of functions are O(n)
interface ListNode {
  val: number;
  next?: ListNode;
}

/**
 * StackMin class maintains a stack with the ability to return the minimum element in O(1) time.
 *
 * Time Complexity:
 * - push(value: number): O(1)
 *   - Insertion of a new node is done in constant time since it only involves setting the `next` pointer and updating the `minVal` if needed.
 * - pop(): O(1)
 *   - Popping an element involves removing the top node and potentially updating the `minVal`, all of which are constant time operations.
 * - min(): O(1)
 *   - Returning the minimum value is done in constant time since it simply accesses the `minVal` variable.
 *
 * Space Complexity:
 * - O(n)
 *   - The space complexity is proportional to the number of elements in the stack because each element is stored as a node in the linked list.
 *   - The space required for the stack's minimum value is constant, as it only stores a single number.
 */

export class StackMin {
  private dummy: ListNode = {
    val: -1,
  };

  private minVal: number | undefined;

  push(value: number) {
    const newItem: ListNode = {
      val: value,
    };

    if (!this.dummy.next) {
      this.dummy.next = newItem;
      this.minVal = newItem.val;
      return;
    }

    if (this.minVal == undefined) {
      throw new Error("Something went wrong while recording the minimum value");
    }

    if (newItem.val < this.minVal) {
      const newItemVal = newItem.val;
      newItem.val = 2 * newItemVal - this.minVal;
      this.minVal = newItemVal;
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

    let value: number | undefined;
    if (this.minVal != undefined && popped.val <= this.minVal) {
      if (!this.dummy.next) {
        this.minVal = undefined;
      } else {
        value = this.minVal;
        this.minVal = 2 * this.minVal - popped.val;
      }
    }
    return value ?? popped.val;
  }

  min(): number | undefined {
    if (!this.dummy.next) {
      return undefined;
    }

    return this.minVal;
  }
}
