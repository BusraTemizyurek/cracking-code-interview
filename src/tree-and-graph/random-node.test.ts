import { Bst } from "./random-node";
import { BTNode } from "../types";

describe("BST class", () => {
  it("insert function will insert node to the bst, find function can return the given node in tree, show function will return the root node", () => {
    const tree = new Bst();
    tree.insert(100);
    tree.insert(50);
    tree.insert(150);
    tree.insert(25);
    tree.insert(55);
    tree.insert(125);
    tree.insert(175);
    tree.insert(20);
    tree.insert(10);

    const result: BTNode<number> = {
      val: 100,
      left: {
        val: 50,
        left: {
          val: 25,
          left: {
            val: 20,
            left: {
              val: 10,
            },
          },
        },
        right: {
          val: 55,
        },
      },
      right: {
        val: 150,
        left: {
          val: 125,
        },
        right: {
          val: 175,
        },
      },
    };

    expect(JSON.stringify(tree.show(), null, 2)).toBe(
      JSON.stringify(result, null, 2)
    );

    expect(tree.show()?.val).toBe(100);
    expect(tree.find(50)).toBe(true);
    expect(tree.find(80)).toBe(false);
    expect(tree.find(175)).toBe(true);
  });

  it("getRandomNode function will return a random node from the bst", () => {
    const tree2 = new Bst();
    tree2.insert(100);
    tree2.insert(50);

    const n1 = tree2.getRandomNode();
    const n2 = tree2.getRandomNode();

    const set = new Set<BTNode<number>>();
    set.add(n1);
    set.add(n2);
    expect(set.size).toBe(2);

    set.clear();
    const n3 = tree2.getRandomNode();
    set.add(n3);
    expect(set.size).toBe(1);
  });

  it("delete function will delete the node when node is root", () => {
    const tree = new Bst();
    tree.insert(100);
    tree.insert(50);
    tree.insert(150);
    tree.insert(25);
    tree.insert(55);
    tree.insert(125);
    tree.insert(175);
    tree.insert(20);
    tree.insert(10);

    tree.delete(100);
    const result1: BTNode<number> = {
      val: 55,
      left: {
        val: 50,
        left: {
          val: 25,
          left: {
            val: 20,
            left: {
              val: 10,
            },
          },
        },
      },
      right: {
        val: 150,
        left: {
          val: 125,
        },
        right: {
          val: 175,
        },
      },
    };

    expect(JSON.stringify(tree.show(), null, 2)).toBe(
      JSON.stringify(result1, null, 2)
    );

    expect(tree.show()?.val).toBe(55);
    expect(tree.find(50)).toBe(true);
    expect(tree.find(100)).toBe(false);
    expect(tree.find(175)).toBe(true);
  });

  it("delete function will delete the node when node is somewhere in the middle with left and right children", () => {
    const tree = new Bst();
    tree.insert(100);
    tree.insert(50);
    tree.insert(150);
    tree.insert(25);
    tree.insert(55);
    tree.insert(125);
    tree.insert(175);
    tree.insert(20);
    tree.insert(10);

    tree.delete(100);
    tree.delete(150);
    const result2: BTNode<number> = {
      val: 55,
      left: {
        val: 50,
        left: {
          val: 25,
          left: {
            val: 20,
            left: {
              val: 10,
            },
          },
        },
      },
      right: {
        val: 125,
        right: {
          val: 175,
        },
      },
    };
    expect(JSON.stringify(tree.show(), null, 2)).toBe(
      JSON.stringify(result2, null, 2)
    );
  });

  it("delete function will delete the node when node is somewhere in the middle with left and right children", () => {
    const tree = new Bst();
    tree.insert(100);
    tree.insert(50);
    tree.insert(150);
    tree.insert(25);
    tree.insert(55);
    tree.insert(125);
    tree.insert(175);
    tree.insert(20);
    tree.insert(10);

    tree.delete(100);
    tree.delete(150);
    tree.delete(150);
    const result3: BTNode<number> = {
      val: 55,
      left: {
        val: 50,
        left: {
          val: 25,
          left: {
            val: 20,
            left: {
              val: 10,
            },
          },
        },
      },
      right: {
        val: 125,
        right: {
          val: 175,
        },
      },
    };
    expect(JSON.stringify(tree.show(), null, 2)).toBe(
      JSON.stringify(result3, null, 2)
    );
  });

  it("delete function will delete the node when node has no children", () => {
    const tree = new Bst();
    tree.insert(100);
    tree.insert(50);
    tree.insert(150);
    tree.insert(25);
    tree.insert(55);
    tree.insert(125);
    tree.insert(175);
    tree.insert(20);
    tree.insert(10);

    tree.delete(100);
    tree.delete(150);
    tree.delete(10);
    const result4: BTNode<number> = {
      val: 55,
      left: {
        val: 50,
        left: {
          val: 25,
          left: {
            val: 20,
          },
        },
      },
      right: {
        val: 125,
        right: {
          val: 175,
        },
      },
    };

    expect(JSON.stringify(tree.show(), null, 2)).toBe(
      JSON.stringify(result4, null, 2)
    );
  });

  it("delete function will delete the node when node has left children only", () => {
    const tree = new Bst();
    tree.insert(100);
    tree.insert(50);
    tree.insert(150);
    tree.insert(25);
    tree.insert(55);
    tree.insert(125);
    tree.insert(175);
    tree.insert(20);
    tree.insert(10);

    tree.delete(100);
    tree.delete(150);
    tree.delete(150);
    tree.delete(10);
    tree.delete(25);
    const result5: BTNode<number> = {
      val: 55,
      left: {
        val: 50,
        left: {
          val: 20,
        },
      },
      right: {
        val: 125,
        right: {
          val: 175,
        },
      },
    };

    expect(JSON.stringify(tree.show(), null, 2)).toBe(
      JSON.stringify(result5, null, 2)
    );
  });

  it("delete function will delete the node when node has right children only", () => {
    const tree = new Bst();
    tree.insert(100);
    tree.insert(50);
    tree.insert(150);
    tree.insert(25);
    tree.insert(55);
    tree.insert(125);
    tree.insert(175);
    tree.insert(20);
    tree.insert(10);

    tree.delete(100);
    tree.delete(150);
    tree.delete(150);
    tree.delete(10);
    tree.delete(25);
    tree.delete(125);
    const result6: BTNode<number> = {
      val: 55,
      left: {
        val: 50,
        left: {
          val: 20,
        },
      },
      right: {
        val: 175,
      },
    };

    expect(JSON.stringify(tree.show(), null, 2)).toBe(
      JSON.stringify(result6, null, 2)
    );
  });
});
