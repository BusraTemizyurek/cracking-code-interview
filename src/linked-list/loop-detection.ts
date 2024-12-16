// page 107(95) Q-2.8

import { ListNode } from "../types";

export function getLoopStartingNode(
  list: ListNode<number>
): ListNode<number> | undefined {
  let temp: ListNode<number> | undefined = list;
  const set = new Set<ListNode<number>>();

  while (temp) {
    if (set.has(temp)) {
      return temp;
    }
    set.add(temp);
    temp = temp.next;
  }

  return undefined;
}
