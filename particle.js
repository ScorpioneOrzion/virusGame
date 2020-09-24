import { movingObject } from './movingObject'

export class particle extends movingObject {
  constructor(listStates, widthField, heightField, speed, maxTime) {
    super(widthField, heightField, speed)
    this.baseValues.push(listStates)
    this.maxTime = maxTime
    this.reset()
    this.time = movingObject.random(this.maxTime)
  }

  reset() {
    super.reset()
    this.state = this.baseValues[3][0]
  }

  update(time) {
    super.update(time)
    if (this.time >= this.maxTime) {
      this.reset()
      this.time %= this.maxTime
    }
  }
}