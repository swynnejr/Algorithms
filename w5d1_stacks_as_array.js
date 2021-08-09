class ArrayStack {
  constructor() {
    this.contents = [];
  }

  // push(value) - adds the given value to the stack
  push(value) {
    this.contents.push(value);
  }

  // pop() - removes the top value from stack and returns it
  pop() {
    if (this.contents.length === 0) {
      console.log("You totally don't have anything in this list brah.");
    } else {
      return this.contents.pop();
    }
  }

  // top() - returns the top value without removing it
  top() {
    if (this.contents.length === 0) {
      console.log("This is an empty list.");
    } else {
      return this.contents[this.contents.length - 1];
    }
  }

  // contains(target) - returns true if the target value is in the stack,
  // false if not
  contains(target) {
    if (this.contents.length === 0) {
      console.log("I wish this list had something in it, but it doesn't.");
    } else {
      return this.contents.includes(target);
    }
  }

  // isEmpty() - returns true if the stack is empty, false otherwise
  isEmpty() {
    if (this.contents.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // size() - returns the size of the stack
  size() {
    return this.contents.length;
  }
}