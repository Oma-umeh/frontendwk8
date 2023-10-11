const days = document.getElementById('days')
const hours = document.getElementById('hr')
const minutes = document.getElementById('min')
const seconds = document.getElementById('sec')

function countdown(){
    const currentDate = new Date().getTime()
    const nextBD = new Date('Jan 10 2024').getTime()
    const diff = nextBD - currentDate

    const sec = 1000
    const min = sec * 60
    const hr = min * 60
    const dy = hr * 24

    const day = diff / dy
    const hour = ( diff % dy ) / hr
    const minute = ( diff % hr ) / min
    const second = ( diff % min ) / sec

    days.textContent = parseInt(day)
    hours.textContent = parseInt(hour)
    minutes.textContent = parseInt(minute)
    seconds.textContent = parseInt(second)

    setTimeout(countdown, 1000)
 }

 countdown()