class SkylabArray {
  constructor(...values) {
    let lengthCounter;
    for (let i = 0; i < values.length; i += 1) {
      this[i] = values[i];
      if ((i = values.length - 1)) {
        lengthCounter = i + 1;
      }
    }
    this.length = lengthCounter;
  }
}

module.exports = SkylabArray;
