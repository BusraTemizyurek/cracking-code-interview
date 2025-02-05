import { ListNode } from "../types";

export const isPalindrome2 = (list: ListNode<string>) => {
  let temp: ListNode<string> | undefined = list;
  let arr: string[] = [];

  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }

  let f = 0;
  let l = arr.length - 1;
  while (f !== l) {
    if (arr[f] !== arr[l]) {
      return false;
    }
    f++;
    l--;
  }
  return true;
};
