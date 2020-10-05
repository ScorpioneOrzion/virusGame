export class movingObject {
  constructor(widthField, heightField, speed) {
    this.baseValues = [
      widthField, heightField, speed
    ]
    this.time = 0
    this.reset()
  }

  reset() {
    this.x = movingObject.random(this.baseValues[0])
    this.y = movingObject.random(this.baseValues[1])
    this.direction = movingObject.normalize({ x: movingObject.random(10) - 5, y: movingObject.random(10) - 5 })
    this.direction.x *= this.baseValues[2]
    this.direction.y *= this.baseValues[2]
  }

  update(time) {
    this.x += this.direction.x * time
    this.y += this.direction.y * time
    this.time += time
  }

  static random(x) {
    return Math.floor(Math.random() * x)
  }

  static normalize(vector) {
    let length = (vector.x ** 2 + vector.y ** 2) ** (1 / 2)
    vector.x /= length
    vector.y /= length
    return vector
  }
}