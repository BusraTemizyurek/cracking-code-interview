export interface BSTNode<TValue> {
  val: TValue;
  left?: BSTNode<TValue>;
  right?: BSTNode<TValue>;
}

export interface ListNode<T> {
  val: T;
  next?: ListNode<T>;
}
