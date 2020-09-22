export class particle {
  constructor(listStates, widthField, heightField, speed, maxTime) {
    this.baseValues = [listStates, widthField, heightField, speed]
    this.maxTime = maxTime
    this.reset()
    this.time = particle.random(this.maxTime)
  }

  reset() {
    this.state = this.baseValues[0][0]
    this.x = particle.random(this.baseValues[1])
    this.y = particle.random(this.baseValues[2])
    this.direction = particle.normalize({ x: particle.random(10) - 5, y: particle.random(10) - 5 })
    this.direction.x *= this.baseValues[3]
    this.direction.y *= this.baseValues[3]
  }

  update(time) {
    this.x += this.direction.x * time
    this.y += this.direction.y * time
    this.time += time
    if (this.time >= this.maxTime) {
      this.reset()
      this.time %= this.maxTime
    }
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