import { movingObject } from './movingObject.js'

export class particle extends movingObject {
  constructor(listStates, widthField, heightField, speed, maxTime) {
    super(widthField, heightField, speed)
    /** @type {Array} */
    this.stateList = listStates
    this.maxTime = maxTime
    this.reset()
    this.time = movingObject.random(this.maxTime)
  }

  reset() {
    super.reset()
    this.state = listStates[0]
  }

  update(time) {
    super.update(time)
    if (this.time >= this.maxTime) {
      this.reset()
      this.time %= this.maxTime
    }
  }

  next() {
    let a = this.stateList.indexOf(this.state) + 1
    if (a < this.stateList.length)
      this.state = this.stateList[a]
  }
}