// page 107(95) Q-2.7

import { ListNode } from "../types";

export function getIntersection(
  list1: ListNode<number>,
  list2: ListNode<number>
): ListNode<number> | undefined {
  const set = new Set<ListNode<number>>();

  let temp: ListNode<number> | undefined = list1;

  while (temp) {
    set.add(temp);
    temp = temp.next;
  }

  let temp2: ListNode<number> | undefined = list2;

  while (temp2) {
    if (set.has(temp2)) {
      return temp2;
    }
    temp2 = temp2.next;
  }

  return undefined;
}

export function createLinkedList(values: number[]): ListNode<number> {
  let dummy: ListNode<number> = {
    val: -1,
  };

  let temp = dummy;
  for (const item of values) {
    const newItem: ListNode<number> = {
      val: item,
    };

    temp.next = newItem;
    temp = temp.next;
  }

  return dummy.next!;
}

export function linkLists(list1: ListNode<number>, list2: ListNode<number>) {
  let temp: ListNode<number> | undefined = list1;
  let temp2: ListNode<number> | undefined = list2;

  while (temp && temp.next) {
    temp = temp.next;
  }

  while (temp2) {
    temp.next = temp2;
    temp2 = temp2.next;
    temp = temp.next;
  }
}
