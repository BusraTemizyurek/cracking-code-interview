export interface BTNode<TValue> {
  val: TValue;
  left?: BTNode<TValue>;
  right?: BTNode<TValue>;
}

export interface ListNode<T> {
  val: T;
  next?: ListNode<T>;
}
