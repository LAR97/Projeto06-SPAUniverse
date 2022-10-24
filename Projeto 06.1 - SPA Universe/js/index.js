import { Router } from './router.js'

const router = new Router ()
router.add("/", "/pages/home.html")
router.add("/universe","/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

let body = document.querySelector('body')
const home = document.querySelector('.home')
const universe = document.querySelector('.universe')
const exploration = document.querySelector('.exploration')

home.addEventListener('click', function() {
    body.classList.add('bg1')
    body.classList.remove('bg2')
    body.classList.remove('bg3')

    home.classList.add('selected')
    universe.classList.remove('selected')
    exploration.classList.remove('selected')
})

universe.addEventListener('click', function() {
    body.classList.add('bg2')
    body.classList.remove('bg1')
    body.classList.remove('bg3')

    home.classList.remove('selected')
    universe.classList.add('selected')
    exploration.classList.remove('selected')
})

exploration.addEventListener('click', function() {
    body.classList.add('bg3')
    body.classList.remove('bg1')
    body.classList.remove('bg2')

    home.classList.remove('selected')
    universe.classList.remove('selected')
    exploration.classList.add('selected')
})
