// const deg = 6
// const hr = document.getElementById('hour')
// const mn = document.getElementById('min')
// const sc = document.getElementById('sec')

// setInterval(()=>{
//     let day = new Date()
//     let h = day.getHours()
//     let m = day.getMinutes() * deg
//     let s = day.getSeconds() * deg

//     console.log('hr:', h, 'sec:', s, 'min:', m);

//     hr.style.transform = `rotateZ(${(h)+(m/12)}deg)`
//     mn.style.transform = `rotateZ(${m}deg)`
//     sc.style.transform = `rotateZ(${s}deg)`
// })

// const hr = document.getElementById('Hour')
// const mn = document.getElementById('Mins')
// const sc = document.getElementById('Secs')
// const mil = document.getElementById('mil')
// const st = document.getElementById('Status')

// function digitClock(){
//     const h = new Date().getHours()
//     const m = new Date().getMinutes()
//     const s = new Date().getSeconds()
//     const mm = new Date().getMilliseconds()

//     hr.textContent = h > 12 ? h - 12 : h
//     mn.textContent = m >= 10 ? m : '0' + m
//     sc.textContent = s >= 10 ? s : '0' + s
//     mil.textContent = mm
//     st.textContent = h >= 12 ? 'pm' : 'am'

//     console.log(Secs);
//     setTimeout(()=>digitClock(), 100)
// }

// digitClock()

function generateClockNumbers() {
    const clockNumbers = document.getElementById('clockNumbers');
    const clockRadius = 20; // Adjust the radius as needed
    const clockCenterX = clockRadius;
    const clockCenterY = clockRadius;

    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.textContent = i;
        const angle = (i * 30 - 90) * (Math.PI / 180); // 30 degrees per hour
        const x = clockCenterX + clockRadius * Math.cos(angle);
        const y = clockCenterY + clockRadius * Math.sin(angle);
        number.style.position = 'absolute';
        number.style.left = `${x}px`;
        number.style.top = `${y}px`;
        number.style.transform = 'translate(-50%, -50%)';
        clockNumbers.appendChild(number);
    }
}

function rotateClockHands() {
    const hourHand = document.getElementById('hourHand');
    const minHand = document.getElementById('minHand');
    const secHand = document.getElementById('secHand');

    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles for each hand
    const hourRotation = (hours * 30) + (minutes / 2);  // 30 degrees per hour, 0.5 degrees per minute
    const minRotation = (minutes * 6) + (seconds / 10); // 6 degrees per minute, 0.1 degrees per second
    const secRotation = seconds * 6; // 6 degrees per second

    // Apply rotations
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;

    // Update every second
    setTimeout(rotateClockHands, 1000);
}

// Generate clock numbers and start rotating the clock hands
generateClockNumbers();
rotateClockHands();