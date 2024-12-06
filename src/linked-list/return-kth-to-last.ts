// page 106(94) Q-2.2
import { ListNode } from "../types";

// O(n+n)= O(n) time complexity, O(1) space complexity
export function findKthToLast1(
  list: ListNode<number>,
  kth: number
): ListNode<number> | undefined {
  let temp: ListNode<number> | undefined = list;
  let count = 0;
  while (temp) {
    count++;
    if (!temp.next && kth === 1) {
      return temp;
    }
    temp = temp.next;
  }

  if (kth === count) {
    return list;
  }

  if (kth > count) {
    return undefined;
  }

  let k = count - kth + 1;

  let temp2: ListNode<number> | undefined = list;
  while (k > 1 && temp2) {
    temp2 = temp2?.next;
    k--;
  }

  return temp2;
}

// O(n) time O(1) space complexity with reccurssive
export function nextNode(
  node: ListNode<number> | undefined,
  options: { kth: number }
): ListNode<number> | undefined {
  if (!node) {
    return undefined;
  }
  return (
    nextNode(node.next, options) ?? (--options.kth === 0 ? node : undefined)
  );
}

export function findKthToLast2(
  list: ListNode<number>,
  kth: number
): ListNode<number> | undefined {
  return nextNode(list, { kth });
}
