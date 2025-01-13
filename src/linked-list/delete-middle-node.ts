// page 106(94) Q-2.3
import { ListNode } from "../types";

export function removeMiddleNode(node: ListNode<string>) {
  if (!node.next) {
    return; //node is invalid or it is at the end
  }

  node.val = node.next.val;
  node.next = node.next.next;
}
