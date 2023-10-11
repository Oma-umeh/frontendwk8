const hr = document.getElementById('Hour')
const mn = document.getElementById('Mins')
const sc = document.getElementById('Secs')
const mil = document.getElementById('mil')
const st = document.getElementById('Status')

function digitClock(){
    const h = new Date().getHours()
    const m = new Date().getMinutes()
    const s = new Date().getSeconds()
    const mm = new Date().getMilliseconds()

    hr.textContent = h > 12 ? h - 12 : h
    mn.textContent = m >= 10 ? m : '0' + m
    sc.textContent = s >= 10 ? s : '0' + s
    mil.textContent = mm
    st.textContent = h >= 12 ? 'pm' : 'am'

    console.log(Secs);
    setTimeout(()=>digitClock(), 100)
}

digitClock()