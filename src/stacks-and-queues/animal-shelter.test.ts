import { AnimalShelter } from "./animal-shelter";
import type { ListNode } from "./animal-shelter";

describe("AnimalShelter", () => {
  it("enqueue cat in cat and general lists", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("cat");
    shelter.enqueue("cat");
    shelter.enqueue("cat");

    const a: ListNode = {
      animal: "cat",
      arrival: 0,
    };

    const b: ListNode = {
      animal: "cat",
      arrival: 1,
    };

    const c: ListNode = {
      animal: "cat",
      arrival: 2,
    };

    c.next = b;
    b.next = a;
    const result = JSON.stringify(c, null, 2);

    expect(JSON.stringify(shelter.showCat(), null, 2)).toEqual(result);
    expect(JSON.stringify(shelter.showGen(), null, 2)).toEqual(result);
    expect(shelter.showDog()).toBeUndefined;
  });

  it("enqueue dog in dog and general lists", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("dog");
    shelter.enqueue("dog");

    const a: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    const b: ListNode = {
      animal: "dog",
      arrival: 1,
    };

    b.next = a;
    const result = JSON.stringify(b, null, 2);

    expect(JSON.stringify(shelter.showDog(), null, 2)).toEqual(result);
    expect(JSON.stringify(shelter.showGen(), null, 2)).toEqual(result);
    expect(shelter.showCat()).toBeUndefined;
  });

  it("enqueueCat and dequeueCat cat in cat and general lists", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("cat"); //a added
    shelter.enqueue("cat"); //b added
    shelter.enqueue("cat"); //c added
    const removed = shelter.dequeueCat(); //a is removed
    shelter.enqueue("cat"); //d added

    const a: ListNode = {
      animal: "cat",
      arrival: 0,
    };

    expect(JSON.stringify(removed, null, 2)).toEqual(
      JSON.stringify(a, null, 2)
    );

    const b: ListNode = {
      animal: "cat",
      arrival: 1,
    };

    const c: ListNode = {
      animal: "cat",
      arrival: 2,
    };

    const d: ListNode = {
      animal: "cat",
      arrival: 3,
    };

    d.next = c;
    c.next = b;
    const result = JSON.stringify(d, null, 2);

    expect(JSON.stringify(shelter.showCat(), null, 2)).toEqual(result);
    expect(JSON.stringify(shelter.showGen(), null, 2)).toEqual(result);
    expect(shelter.showDog()).toBeUndefined;
  });

  it("enqueue and dequeue dog in dog and general lists", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("dog"); //a
    shelter.enqueue("dog"); //b
    shelter.enqueue("dog"); //c
    const removed = shelter.dequeueDog(); // a removed

    const a: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    expect(JSON.stringify(removed, null, 2)).toEqual(
      JSON.stringify(a, null, 2)
    );

    const b: ListNode = {
      animal: "dog",
      arrival: 1,
    };

    const c: ListNode = {
      animal: "dog",
      arrival: 2,
    };

    c.next = b;
    const result = JSON.stringify(c, null, 2);

    expect(JSON.stringify(shelter.showDog(), null, 2)).toEqual(result);
    expect(JSON.stringify(shelter.showGen(), null, 2)).toEqual(result);
    expect(shelter.showCat()).toBeUndefined;
  });

  it("enqueue mixed", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("dog"); //a 0
    shelter.enqueue("cat"); //b 1
    shelter.enqueue("dog"); //c 2
    shelter.enqueue("cat"); //d 3

    const a: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    const a2: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    const b: ListNode = {
      animal: "cat",
      arrival: 1,
    };

    const b2: ListNode = {
      animal: "cat",
      arrival: 1,
    };

    const c: ListNode = {
      animal: "dog",
      arrival: 2,
    };

    const c2: ListNode = {
      animal: "dog",
      arrival: 2,
    };

    const d: ListNode = {
      animal: "cat",
      arrival: 3,
    };

    const d2: ListNode = {
      animal: "cat",
      arrival: 3,
    };

    d.next = c;
    c.next = b;
    b.next = a;
    const result = JSON.stringify(d, null, 2);

    c2.next = a2;
    const dResult = JSON.stringify(c2, null, 2);

    d2.next = b2;
    const cResult = JSON.stringify(d2, null, 2);

    expect(JSON.stringify(shelter.showDog(), null, 2)).toEqual(dResult);
    expect(JSON.stringify(shelter.showGen(), null, 2)).toEqual(result);
    expect(JSON.stringify(shelter.showCat(), null, 2)).toEqual(cResult);
  });

  it("enqueue mixed and dequeue mixed", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("dog"); //a 0
    shelter.enqueue("dog"); //b 1
    shelter.enqueue("cat"); //c 2
    shelter.enqueue("cat"); //d 3
    shelter.dequeueDog(); // a and a2 removed
    shelter.dequeueCat(); // c and c2 removed

    const a: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    const a2: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    const b: ListNode = {
      animal: "dog",
      arrival: 1,
    };

    const b2: ListNode = {
      animal: "dog",
      arrival: 1,
    };

    const c: ListNode = {
      animal: "cat",
      arrival: 2,
    };

    const c2: ListNode = {
      animal: "cat",
      arrival: 2,
    };

    const d: ListNode = {
      animal: "cat",
      arrival: 3,
    };

    const d2: ListNode = {
      animal: "cat",
      arrival: 3,
    };

    d.next = b;
    const result = JSON.stringify(d, null, 2);

    expect(JSON.stringify(shelter.showDog(), null, 2)).toEqual(
      JSON.stringify(b2, null, 2)
    );
    expect(JSON.stringify(shelter.showGen(), null, 2)).toEqual(result);
    expect(JSON.stringify(shelter.showCat(), null, 2)).toEqual(
      JSON.stringify(d2, null, 2)
    );
  });

  it("enqueue mixed and dequeueAny", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("dog"); //a 0
    shelter.enqueue("dog"); //b 1
    shelter.enqueue("cat"); //c 2
    shelter.enqueue("cat"); //d 3
    const removed = shelter.dequeueAny(); // a and a2 removed

    const a: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    expect(JSON.stringify(removed, null, 2)).toEqual(
      JSON.stringify(a, null, 2)
    );

    const a2: ListNode = {
      animal: "dog",
      arrival: 0,
    };

    const b: ListNode = {
      animal: "dog",
      arrival: 1,
    };

    const b2: ListNode = {
      animal: "dog",
      arrival: 1,
    };

    const c: ListNode = {
      animal: "cat",
      arrival: 2,
    };

    const c2: ListNode = {
      animal: "cat",
      arrival: 2,
    };

    const d: ListNode = {
      animal: "cat",
      arrival: 3,
    };

    const d2: ListNode = {
      animal: "cat",
      arrival: 3,
    };

    d.next = c;
    c.next = b;
    const result = JSON.stringify(d, null, 2);

    d2.next = c2;
    const cResult = JSON.stringify(d2, null, 2);

    expect(JSON.stringify(shelter.showDog(), null, 2)).toEqual(
      JSON.stringify(b2, null, 2)
    );

    expect(JSON.stringify(shelter.showGen(), null, 2)).toEqual(result);

    expect(JSON.stringify(shelter.showCat(), null, 2)).toEqual(cResult);
  });
});
