export default class Distort {

  constructor () {
    this.body = document.getElementsByTagName('body')[0]
  }

  epilepsy (element) {
    let interval = 500
    let middle = parseInt(window.getComputedStyle(this.body).height, 10) / 2
    
    this.body.addEventListener('mousemove', event => {
      let position = event.clientY
      interval = position < middle ? middle - position : position - middle
    })

    let change = () => {
      clearInterval(runColor)
      element.style.color =
        `rgb(${this.random(255)}, ${this.random(255)}, ${this.random(255)})`
      runColor = setInterval(change, interval)
    }
    let runColor = setInterval(change, interval)
  }

  glitch (initialInterval, glitch) {
      let interval = initialInterval
      let change = () => {
        clearInterval(runGlitch)
        interval = this.random(initialInterval)
        glitch()
        runGlitch = setInterval(change, interval)
      }
      let runGlitch = setInterval(change, interval)
  }

  random (ceiling) {
    return Math.floor(Math.random() * ceiling) + 1
  }

}