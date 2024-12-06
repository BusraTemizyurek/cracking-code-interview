//page 106(94) Q-2.1

import { ListNode } from "../types";

// without temporary buffer time complexity O(n^2) space complexity O(1)
export function removeDups(list: ListNode<string>): ListNode<string> {
  let temp: ListNode<string> | undefined = list;
  while (temp) {
    let current: ListNode<string> | undefined = temp;
    while (current && current.next) {
      if (temp.val === current.next.val) {
        current.next = current.next.next;
      }
      current = current.next;
    }
    temp = temp.next;
  }

  return list;
}

// with temporary buffer time complexity O(n) space complexity O(n);
export function removeDups2(list: ListNode<string>): ListNode<string> {
  const set = new Set<string>();

  let temp: ListNode<string> | undefined = {
    val: "dummy",
    next: list,
  };

  while (temp && temp.next) {
    if (!set.has(temp.next.val)) {
      set.add(temp.next.val);
      temp = temp.next;
    } else {
      temp.next = temp.next.next;
    }
  }

  return list;
}
