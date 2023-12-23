// <button class="btn-point-increments" onclick="plus1()">+1</button>
// <span id="home-el">0<span>
let score = 0
let score1 = 1
let score2 = 2
let score3 = 3

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


function hPlus1() {
    score += score1
    homeEl.textContent = score
}

function hPlus2() {
    score += score2
    homeEl.textContent = score
}

function hPlus3() {
    score += score3
    homeEl.textContent = score
}

function gPlus1() {
    score += score1
    guestEl.textContent = score
}

function gPlus2() {
    score += score2
    guestEl.textContent = score
}

function gPlus3() {
    score += score3
    guestEl.textContent = score
}
