import { } from './virus.js'
import { particle } from './particle.js'

const gameCanvas = document.querySelector("body > canvas:nth-child(1)")
const menuCanvas = document.querySelector("body > canvas:nth-child(2)")

const gameCtx = gameCanvas.getContext("2d");
const menuCtx = menuCanvas.getContext("2d");

let lastRenderTime = 0;
let particles = [];
const world = {
  size: {
    width: 1000,
    height: 1000
  },
  totalParticles: 2500,
  maxTimeParticle: 50

}

function random(x) {
  return Math.floor(Math.random() * x)
}

function normalize(vector) {
  let length = (vector.x ** 2 + vector.y ** 2) ** (1 / 2)
  vector.x /= length
  vector.y /= length
  return vector
}

function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  window.requestAnimationFrame(main)
  lastRenderTime = currentTime
  // console.log(secondsSinceLastRender)

  update(secondsSinceLastRender)
  draw(secondsSinceLastRender)
}

window.requestAnimationFrame(main)

function update(time) {

  const speed = 100

  if (particles.length < world.totalParticles) {
    let vector = { x: random(10) - 5, y: random(10) - 5 }
    particles.push(
      new particle("food",
        random(world.size.width), random(world.size.height),
        normalize(vector).x * speed, normalize(vector).y * speed)
    )
  }
  for (let i = 0; i < particles.length; i++) {
    const pointParticle = particles[i];

    pointParticle.update(time)
    if (pointParticle.x < 0) pointParticle.x += world.size.width
    if (pointParticle.y < 0) pointParticle.y += world.size.height
    if (pointParticle.x > world.size.width) pointParticle.x -= world.size.width
    if (pointParticle.y > world.size.height) pointParticle.y -= world.size.height

    if (pointParticle.time >= world.maxTimeParticle) particles[i] = null
  }

  particles = particles.filter(pointparticle => pointparticle !== null)
  window.particles = particles
}

function draw(time) {
  if (gameCanvas.height !== window.innerHeight) gameCanvas.height = window.innerHeight
  if (gameCanvas.width !== Math.floor(window.innerWidth * 0.7)) gameCanvas.width = Math.floor(window.innerWidth * 0.7)
  if (menuCanvas.height !== window.innerHeight) menuCanvas.height = window.innerHeight
  if (menuCanvas.width !== Math.ceil(window.innerWidth * 0.3)) menuCanvas.width = Math.ceil(window.innerWidth * 0.3)

  gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)
  for (const pointParticle of particles) {
    point(pointParticle.x, pointParticle.y, gameCtx)
  }
}

function point(x, y, canvas) {
  canvas.beginPath();
  canvas.arc(x, y, 1, 0, 2 * Math.PI, true);
  canvas.fill();
}