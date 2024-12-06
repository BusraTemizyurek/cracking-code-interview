import { ListNode } from "../types";
import { removeDups, removeDups2 } from "./remove-dups";

function convertListToArray(list: ListNode<string>): string[] {
  let temp: ListNode<string> | undefined = list;
  const arr: string[] = [];
  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }

  return arr;
}

describe("removeDups", () => {
  const list1: ListNode<string> = {
    val: "F",
    next: {
      val: "L",
      next: {
        val: "L",
        next: {
          val: "O",
          next: {
            val: "W",
          },
        },
      },
    },
  };

  const list2: ListNode<string> = {
    val: "F",
    next: {
      val: "F",
      next: {
        val: "L",
        next: {
          val: "L",
          next: {
            val: "F",
            next: {
              val: "W",
            },
          },
        },
      },
    },
  };

  it("removes the duplicate from the unsorted list when only one duplicate", () => {
    const result: string[] = ["F", "L", "O", "W"];
    const newList = removeDups(list1);
    expect(convertListToArray(newList)).toEqual(result);
  });

  it("removes the duplicate from the unsorted list when multiple duplicates exist", () => {
    const result: string[] = ["F", "L", "W"];
    const newList = removeDups(list2);
    expect(convertListToArray(newList)).toEqual(result);
  });
});

describe("removeDups2", () => {
  const list1: ListNode<string> = {
    val: "F",
    next: {
      val: "L",
      next: {
        val: "L",
        next: {
          val: "O",
          next: {
            val: "W",
          },
        },
      },
    },
  };

  const list2: ListNode<string> = {
    val: "F",
    next: {
      val: "F",
      next: {
        val: "L",
        next: {
          val: "L",
          next: {
            val: "F",
            next: {
              val: "W",
            },
          },
        },
      },
    },
  };

  it("removes the duplicate from the unsorted list when only one duplicate", () => {
    const result: string[] = ["F", "L", "O", "W"];
    const newList = removeDups(list1);
    expect(convertListToArray(newList)).toEqual(result);
  });

  it("removes the duplicate from the unsorted list when multiple duplicates exist", () => {
    const result: string[] = ["F", "L", "W"];
    const newList = removeDups(list2);
    expect(convertListToArray(newList)).toEqual(result);
  });
});
