import { ListNode } from "../types";
import { isPalindrome } from "./palindrome";
import { isPalindrome2 } from "./palindrome2";

describe("isPalindrome", () => {
  it("isPalindrome returns true for palindrome list", () => {
    const list: ListNode<string> = {
      val: "r",
      next: {
        val: "a",
        next: {
          val: "d",
          next: {
            val: "a",
            next: {
              val: "r",
            },
          },
        },
      },
    }; // radar

    expect(isPalindrome(list)).toBe(true);
  });
  it("isPalindrome2 returns true for palindrome list", () => {
    const list: ListNode<string> = {
      val: "r",
      next: {
        val: "a",
        next: {
          val: "d",
          next: {
            val: "a",
            next: {
              val: "r",
            },
          },
        },
      },
    }; // radar

    expect(isPalindrome2(list)).toBe(true);
  });
});
