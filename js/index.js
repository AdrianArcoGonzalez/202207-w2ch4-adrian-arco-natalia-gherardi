class SkylabArray {
  constructor(...values) {
    for (let i = 0; i < values.length; i += 1) {
      this[i] = values[i];
    }
  }
}

module.exports = SkylabArray;
