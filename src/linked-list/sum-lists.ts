// page 107(95) Q-2.5

import { ListNode } from "../types";

function sumList(
  n1: ListNode<number> | undefined,
  n2: ListNode<number> | undefined
) {
  if (!n1 && !n2) {
    return undefined;
  }
  if (!n1) {
    return n2;
  }
  if (!n2) {
    return n1;
  }

  if (!n1.next && !n2.next) {
    let temp: ListNode<number> = {
      val: -1,
    };

    let sum = 0;
    sum += n1.val + n2.val;

    if (sum > 9) {
      const node: ListNode<number> = { val: sum % 10 };
      temp.next = node;

      const node2: ListNode<number> = { val: 1 };
      node.next = node2;
      return temp.next;
    }

    return { val: sum };
  }

  let t1: ListNode<number> | undefined = n1;
  let t2: ListNode<number> | undefined = n2;

  let dummy: ListNode<number> = {
    val: -1,
  };
  let t3 = dummy;

  let isDigitGreater = false;

  while (t1 || t2) {
    let sum = 0;
    if (isDigitGreater) {
      sum += 1;
    }
    sum += (t1 ? t1.val : 0) + (t2 ? t2.val : 0);
    if (sum > 9) {
      isDigitGreater = true;
    } else {
      isDigitGreater = false;
    }

    const node: ListNode<number> = {
      val: sum % 10,
    };
    t2 = t2?.next;
    t1 = t1?.next;
    t3.next = node;
    t3 = node;
  }

  return dummy.next;
}

function reversedList(list: ListNode<number> | undefined) {
  if (!list) {
    return undefined;
  }

  let curr: ListNode<number> | undefined = list;
  let prev: ListNode<number> | undefined = undefined;

  while (curr) {
    const next: ListNode<number> | undefined = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

export function sumListGlobal(
  n1: ListNode<number>,
  n2: ListNode<number>,
  isForward: boolean
) {
  if (isForward) {
    const reversedN1 = reversedList(n1);
    const reversedN2 = reversedList(n2);
    const result = sumList(reversedN1, reversedN2);

    return reversedList(result);
  }
  return sumList(n1, n2);
}
