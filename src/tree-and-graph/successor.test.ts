import { TreeNode, getNextNode } from "./successor";

describe("getNextNode", () => {
  // Creating nodes
  const node25 = new TreeNode(25);
  const node50 = new TreeNode(50);
  const node60 = new TreeNode(60);
  const node100 = new TreeNode(100);
  const node125 = new TreeNode(125);
  const node150 = new TreeNode(150);
  const node175 = new TreeNode(175);

  // Setting left and right relationships
  node100.left = node50;
  node100.right = node150;

  node50.left = node25;
  node50.right = node60;
  node50.parent = node100;

  node150.left = node125;
  node150.right = node175;
  node150.parent = node100;

  node25.parent = node50;
  node60.parent = node50;

  node125.parent = node150;
  node175.parent = node150;

  // The tree root is node100

  it("getNextNode returns the next of the given node when it is parent", () => {
    expect(getNextNode(node60)).toBe(100);
  });

  it("getNextNode returns the next of the given node when it is on the inorder traversal", () => {
    expect(getNextNode(node100)).toBe(125);
  });

  it("getNextNode returns the next of the given node when given node doesn't have right node", () => {
    expect(getNextNode(node125)).toBe(150);
  });

  it("getNextNode returns the next of the given node when next is undefined", () => {
    expect(getNextNode(node175)).toBe(undefined);
  });

  it("getNextNode returns the next of the given node when next node is the right node of the given node", () => {
    expect(getNextNode(node150)).toBe(175);
  });

  it("getNextNode returns undefined for a single-node tree", () => {
    const single = new TreeNode(25);
    expect(getNextNode(single)).toBe(undefined);
  });
});
