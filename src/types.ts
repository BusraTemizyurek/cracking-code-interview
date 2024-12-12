export interface TNode<TValue> {
  val: TValue;
  left?: TNode<TValue>;
  right?: TNode<TValue>;
}

export interface ListNode<T> {
  val: T;
  next?: ListNode<T>;
}
