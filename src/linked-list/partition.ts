// page 106(94) Q-2.4
import { ListNode } from "../types";

export function partition(
  list: ListNode<number>,
  partition: number
): ListNode<number> {
  const greater: ListNode<number>[] = [];
  const smaller: ListNode<number>[] = [];

  let temp: ListNode<number> | undefined = list;

  while (temp) {
    if (temp.val < partition) {
      smaller.push(temp);
    } else {
      greater.push(temp);
    }
    temp = temp.next;
  }

  let dummy: ListNode<number> = {
    val: -1,
  };

  let temp2: ListNode<number> = dummy;

  while (smaller.length > 0) {
    const nodeSmaller = smaller.pop();
    if (nodeSmaller) {
      temp2.next = nodeSmaller;
      temp2 = temp2.next;
    }
  }

  while (greater.length > 0) {
    const nodeGreater = greater.pop();
    if (nodeGreater) {
      temp2.next = nodeGreater;
      temp2 = temp2.next;
    }
  }

  temp2.next = undefined;

  return dummy.next!;
}
