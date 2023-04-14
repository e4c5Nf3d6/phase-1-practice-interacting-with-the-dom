// Definitions
const timer = document.querySelector('#counter')
const pause = document.querySelector('#pause')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const submit = document.querySelector('#submit')
const form = document.querySelector('#comment-form')
const list = document.querySelector('#list')
let interval

// Callbacks
function countUp() {
    timer.innerText = parseInt(timer.innerText) + 1
}

function startTimer() {
    interval = setInterval(countUp, 1000)
    interval
}

function stopTimer() {
    clearInterval(interval)
}

function togglePause() {
    if (pause.innerText === "pause") {
        stopTimer()
        pause.innerText = "resume"
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        submit.disabled = true
    } else if (pause.innerText === "resume") {
        startTimer()
        pause.innerText = "pause"
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        submit.disabled = false
    }
}

function addComment(e) {
    e.preventDefault()
    let p = document.createElement('p')
    p.innerText = form["comment-input"].value
    list.appendChild(p)
    form.reset()
}

function like() {
    let sec = timer.innerText
    if (document.querySelector(`[data-num='${sec}'`)) {
        let li = document.querySelector(`[data-num='${sec}'`)
        let likes = parseInt(li.querySelector('span').innerText) + 1
        li.innerHTML = sec + " has been liked <span>" + likes + "</span> times"
    } else {
        let li = document.createElement('li')
        li.innerHTML = sec + " has been liked <span>" + 1 + "</span> time"
        li.setAttribute('data-num', sec)
        document.querySelector('ul').appendChild(li)
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", startTimer)

pause.addEventListener('click', togglePause)

minus.addEventListener('click', function () {
    timer.innerText = parseInt(timer.innerText) - 1
})

plus.addEventListener('click', function () {
    timer.innerText = parseInt(timer.innerText) + 1
})

heart.addEventListener('click', like)

form.addEventListener('submit', addComment)