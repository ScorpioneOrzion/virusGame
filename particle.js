export class particle {
  constructor(state, x, y, dx, dy, maxTime, parent) {
    this.state = state
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.time = 0
    this.maxTime = maxTime
    this.parent = parent
  }

  update(time) {
    this.x += this.dx * time
    this.y += this.dy * time
    this.time += time
  }
}