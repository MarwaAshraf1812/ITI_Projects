let LnkdLstObj = {
  data: [],

  enqueue: function (value) {
    if (this.data.length > 0) {
      let lastItem = this.data[this.data.length - 1];

      if (lastItem.val >= value) {
        throw new Error(
          "Exception: Value implies wrong sequence (must be larger than last item)"
        );
      }
    }
    this.data.push({ val: value });
    console.log("Item Enqueued: ", value);
  },

  customPush: function (value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].val == value) {
        throw new Error(
          "Exception: Data already exists (No Duplication allowed)"
        );
      }
    }
    this.data.push({ val: value });
    console.log("The value pushed to linkedlist:", value);
  },

  customInsert: function (index, value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].val == value) {
        throw new Error(
          "Exception: Data already exists (No Duplication allowed)"
        );
      }
    }

    if (index < 0 || this.data.length < index) {
      throw new Error("Exception: Index out of bounds");
    }

    let prevValue =
      index === 0 ? Number.NEGATIVE_INFINITY : this.data[index - 1].val;
    let nextValue =
      index === this.data.length
        ? Number.POSITIVE_INFINITY
        : this.data[index].val;
    if (prevValue < value && nextValue > value) {
      this.data.splice(index, 0, { val: value });
      console.log("The value inserted")
    } else {
      throw new Error("Exception: its not an appropirate place for this value");
    }
  },

  customPop: function() {
    if(this.data.length === 0) {
      throw new Error("The linkedList is empty");
    }
    let lastItem = this.data[this.data.length - 1].val;
    this.data.splice(this.data.length - 1, 1);
    console.log("The last element deleted ", lastItem)
  },

  customRemove: function (index, value) {
    if(index < 0 || index >= this.data.length) {
      throw new Error("Exception: Index out of bounds");
    }
    if(this.data[index].val === value) {
      this.data.splice(index, 1);
      console.log("Item removed successfully");
    } else {
        throw new Error("Exception: Data not found (Value at this index does not match)");
    }
  },

  customDequeue: function() {
    if(this.data.length === 0) {
      throw new Error("The linkedList is empty");
    }
    this.data.splice(0, 1)
    //this.data.shift()
  },

  print: function() {
    for(let i = 0; i < this.data.length; i ++) {
      console.log(this.data[i]);
    }
  }
};

try {
  LnkdLstObj.enqueue(30);
  LnkdLstObj.print()


  LnkdLstObj.enqueue(5);
} catch (e) {
  console.log(e.message);
}

// try {
//   LnkdLstObj.customPush(10);
//   LnkdLstObj.customPush(20);
//   LnkdLstObj.customPush(30);
//   LnkdLstObj.customPush(40);
//   LnkdLstObj.customPush(50);

//   LnkdLstObj.print()


//   LnkdLstObj.customInsert(0, 5);
//   LnkdLstObj.print()

//   LnkdLstObj.customRemove(2, 20);
//   LnkdLstObj.print()

//   LnkdLstObj.customInsert(2, 15);

//   LnkdLstObj.customDequeue()
//   LnkdLstObj.print()

//   LnkdLstObj.customPop()
//   LnkdLstObj.print()
// } catch (e) {
//   console.log(e.message);
// }
