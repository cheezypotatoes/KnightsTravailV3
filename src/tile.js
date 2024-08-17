class Tile {
  constructor(
    start,
    leftUpOne,
    leftUpTwo,
    rightUpOne,
    rightUpTwo,
    rightDownOne,
    rightDownTwo,
    leftDownOne,
    leftDownTwo,
  ) {
    this.start = start;
    this.leftUpOne = leftUpOne;
    this.leftUpTwo = leftUpTwo;
    this.rightUpOne = rightUpOne;
    this.rightUpTwo = rightUpTwo;
    this.rightDownOne = rightDownOne;
    this.rightDownTwo = rightDownTwo;
    this.leftDownOne = leftDownOne;
    this.leftDownTwo = leftDownTwo;
  }
}

export default Tile;
