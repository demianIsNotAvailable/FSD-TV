let isTheTvOn = false
let currentChannel = 0
const tvScreen = document.querySelector('.tvScreen')
const tvOnButton = document.getElementById('on')
const tvChannelButtons = Array.from(document.getElementsByClassName('channel'))

const turnTvOn = (currentState) => {
    currentState 
    ? tvScreen.classList.add('tvOff')
    : tvScreen.classList.remove('tvOff')
    tvScreen.innerHTML = ''
    isTheTvOn = !currentState
}

const setChannel = (input) => {
    if (isTheTvOn) {
        currentChannel = input
        tvScreen.innerHTML = `<h1>${currentChannel}</h1>`
    }
}

tvOnButton.addEventListener('click', () => turnTvOn(isTheTvOn))

tvChannelButtons.forEach((button) => {
    button.addEventListener('click', () => setChannel(button.innerHTML))
})