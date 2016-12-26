import reset from '../styles/reset.sass'
import styles from '../styles/global.sass'
import Distort from './Distort.js'

let distort = new Distort()

let header1 = document.getElementById('header-1')
let header2 = document.getElementById('header-2')
let header3 = document.getElementById('header-3')

distort.epilepsy(header1)
distort.glitch(300, () => {
  header2.style.top = distort.random(50) - 20
  header2.style.left = distort.random(60) - 20
  header2.style.color = `rgb(${distort.random(255)}, ${distort.random(255)},  ${distort.random(255)})`
  header2.style.visibility = header2.style.visibility == 'hidden' ? 'visible' : 'hidden'
})

distort.glitch(2000, () => {
  header1.style.visibility = header2.style.visibility == 'hidden' ? 'visible' : 'hidden'
})
