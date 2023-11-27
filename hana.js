import {
    incrementCustomProperty,
    setCustomProperty,
    getCustomProperty,
  } from "./updateCustomProperty.js"
  
  const hanaElem = document.querySelector(".hana")
  const JUMP_SPEED = 0.13
  const GRAVITY = 0.0003

  
  let isJumping
  let dinoFrame
  let currentFrameTime
  let yVelocity

  export function setupHana() {
    isJumping = false
    yVelocity = 0
    setCustomProperty(hanaElem, "--bottom", 50)
    
    document.addEventListener("keydown", onJump)
  }
  
  export function updateHana(delta, speedScale) {
    handleJump(delta)
  }

  
  export function getHanaRect() {
    return hanaElem.getBoundingClientRect()
  }
  
  export function setHanaLose() {
    hanaElem.src = "imgs/hana-stationary.png"
  }
  
  function handleJump(delta) {
  
    incrementCustomProperty(hanaElem, "--bottom", yVelocity * delta)
  
    yVelocity -= GRAVITY * delta
    
  }
  
  function onJump(e) {
  
    yVelocity = JUMP_SPEED
    isJumping = true
  }