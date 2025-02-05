import { ListNode } from "../types";

export const isPalindrome = (list: ListNode<string>) => {
  const s: string[] = [];
  const q: string[] = [];

  let temp: ListNode<string> | undefined = list;

  while (temp) {
    s.push(temp.val);
    q.push(temp.val);
    temp = temp.next;
  }

  while (s.length && q.length) {
    if (s.pop() !== q.shift()) {
      return false;
    }
  }

  return true;
};
