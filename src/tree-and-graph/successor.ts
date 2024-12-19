// page 122 (110) Q-4.6

export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
  parent?: TreeNode;

  constructor(
    val: number,
    left?: TreeNode,
    right?: TreeNode,
    parent?: TreeNode
  ) {
    this.val = val;
    this.left = left || undefined;
    this.right = right || undefined;
    this.parent = parent || undefined;
  }
}

function getParent(
  root: TreeNode | undefined,
  node: TreeNode
): number | undefined {
  if (!root) {
    return undefined;
  }

  if (root.val > node.val) {
    return root.val;
  }

  return getParent(root.parent, node);
}

function inOrderTraversal(node: TreeNode): number | undefined {
  //inorder : l - s - r
  let current: TreeNode | undefined = node;

  while (current.left) {
    current = current?.left;
  }

  return current?.val;
}

export function getNextNode(node: TreeNode): number | undefined {
  if (node.right) {
    return inOrderTraversal(node.right);
  }

  return getParent(node.parent, node);
}
