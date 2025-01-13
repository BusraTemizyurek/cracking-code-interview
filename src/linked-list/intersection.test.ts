import { getIntersection, createLinkedList, linkLists } from "./intersection";

describe("getIntersection", () => {
  it("should return the intersection node when lists intersect", () => {
    const list1 = createLinkedList([1, 2, 3]);
    const list2 = createLinkedList([4, 5, 6]);

    linkLists(list1, list2);
    //console.log("list1", JSON.stringify(list1, null, 2));
    expect(getIntersection(list1, list2)).toBe(list2);
  });

  it("should return undefined when lists do not intersect", () => {
    const list1 = createLinkedList([1, 2, 3]);
    const list2 = createLinkedList([4, 5, 6]);

    const result = getIntersection(list1, list2);
    expect(result).toBeUndefined();
  });

  it("should handle lists that are the same", () => {
    const list1 = createLinkedList([1, 2, 3, 4]);
    const list2 = list1;

    const result = getIntersection(list1, list2);
    expect(result).toBe(list1);
  });

  it("should handle lists with an intersection at the head", () => {
    const common = createLinkedList([1, 2, 3]);
    const list1 = common;
    const list2 = common;

    const result = getIntersection(list1, list2);
    expect(result).toBe(common);
  });
});
