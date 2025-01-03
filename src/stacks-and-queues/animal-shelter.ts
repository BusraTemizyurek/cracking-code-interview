export interface ListNode {
  animal: string;
  arrival: number;
  next?: ListNode;
}

export class AnimalShelter {
  private genDummy: ListNode = {
    animal: "general",
    arrival: Number.MIN_SAFE_INTEGER,
  };

  private dogDummy: ListNode = {
    animal: "dog",
    arrival: Number.MIN_SAFE_INTEGER,
  };

  private catDummy: ListNode = {
    animal: "cat",
    arrival: Number.MIN_SAFE_INTEGER,
  };

  private numOfAnimal = 0;

  enqueue(animal: string) {
    const newAnimal: ListNode = {
      animal,
      arrival: this.numOfAnimal,
    };
    const newAnimalClassified: ListNode = {
      animal,
      arrival: this.numOfAnimal,
    };
    this.numOfAnimal++;

    const dummyAnimal = animal === "dog" ? this.dogDummy : this.catDummy;

    if (!this.genDummy.next) {
      this.genDummy.next = newAnimal;
      dummyAnimal.next = newAnimalClassified;
      return;
    }

    let genTemp = this.genDummy.next;
    this.genDummy.next = newAnimal;
    newAnimal.next = genTemp;

    if (!dummyAnimal.next) {
      dummyAnimal.next = newAnimalClassified;
    } else {
      const temp = dummyAnimal.next;
      dummyAnimal.next = newAnimalClassified;
      newAnimalClassified.next = temp;
    }
  }

  dequeueDog() {
    if (!this.dogDummy.next) {
      return undefined;
    }

    let tempDog = this.dogDummy.next;
    let min = tempDog;
    while (tempDog && tempDog.next) {
      if (tempDog.next.arrival < min.arrival) {
        min = tempDog.next;
      }
      tempDog = tempDog.next;
    }

    let dog = this.dogDummy;
    while (dog && dog.next) {
      if (min.arrival === dog.next.arrival) {
        dog.next = dog.next.next;
        break;
      }
      dog = dog.next;
    }

    let temp = this.genDummy;
    while (temp && temp.next) {
      if (temp.next.arrival === min.arrival) {
        temp.next = temp.next.next;
        break;
      }
      temp = temp.next;
    }

    return min;
  }

  dequeueCat() {
    if (!this.catDummy.next) {
      return undefined;
    }

    let tempCat = this.catDummy.next;
    let min = tempCat;
    while (tempCat && tempCat.next) {
      if (tempCat.next.arrival < min.arrival) {
        min = tempCat.next;
      }
      tempCat = tempCat.next;
    }

    let cat = this.catDummy;
    while (cat && cat.next) {
      if (min.arrival === cat.next.arrival) {
        cat.next = cat.next.next;
        break;
      }
      cat = cat.next;
    }

    let temp = this.genDummy;
    while (temp && temp.next) {
      if (temp.next.arrival === min.arrival) {
        temp.next = temp.next.next;
        break;
      }
      temp = temp.next;
    }

    return min;
  }

  dequeueAny() {
    if (!this.genDummy.next) {
      return undefined;
    }

    let temp = this.genDummy;
    let min = this.genDummy.next;
    while (temp && temp.next) {
      if (temp.next.arrival < min.arrival) {
        min = temp.next;
      }
      temp = temp.next;
    }

    let genTemp = this.genDummy;
    while (genTemp && genTemp.next) {
      if (genTemp.next.arrival === min.arrival) {
        genTemp.next = genTemp.next.next;
        break;
      }
      genTemp = genTemp.next;
    }

    let tempAnimal = min.animal === "cat" ? this.catDummy : this.dogDummy;
    while (tempAnimal && tempAnimal.next) {
      if (min.arrival === tempAnimal.next.arrival) {
        tempAnimal.next = tempAnimal.next.next;
        break;
      }
      tempAnimal = tempAnimal.next;
    }

    return min;
  }

  showCat() {
    return this.catDummy.next;
  }

  showDog() {
    return this.dogDummy.next;
  }

  showGen() {
    return this.genDummy.next;
  }
}
