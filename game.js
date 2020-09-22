import { } from './virus.js'
import { particle } from './particle.js'

const gameCanvas = document.querySelector("body > canvas:nth-child(1)")
const menuCanvas = document.querySelector("body > canvas:nth-child(2)")

const gameCtx = gameCanvas.getContext("2d");
const menuCtx = menuCanvas.getContext("2d");

let lastRenderTime = 0

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

}

function draw(time) {
  if (gameCanvas.height !== window.innerHeight) gameCanvas.height = window.innerHeight
  if (gameCanvas.width !== Math.floor(window.innerWidth * 0.7)) gameCanvas.width = Math.floor(window.innerWidth * 0.7)
  if (menuCanvas.height !== window.innerHeight) menuCanvas.height = window.innerHeight
  if (menuCanvas.width !== Math.ceil(window.innerWidth * 0.3)) menuCanvas.width = Math.ceil(window.innerWidth * 0.3)
}