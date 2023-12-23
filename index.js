let score = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


function hPlus1() {
    score += 1
    homeEl.textContent = score
}

function hPlus2() {
    score += 2
    homeEl.textContent = score
}

function hPlus3() {
    score += 3
    homeEl.textContent = score
}

function gPlus1() {
    score += 1
    guestEl.textContent = score
}

function gPlus2() {
    score += 2
    guestEl.textContent = score
}

function gPlus3() {
    score += 3
    guestEl.textContent = score
}

function clearAll() {
    homeEl.textContent = 0
    guestEl.textContent = 0
    score = 0
}
