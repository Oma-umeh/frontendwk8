const btn = document.querySelector('button')

const input = document.querySelectorAll('input')

const section = document.querySelector('.last')

function howdy(){
    let val1 = Number(input[0].value)
    let val2 = Number(input[1].value)
    let avg = (val1 + val2)/2

    let para1 = document.createElement('p')
    let para2 = document.createElement('p')
    let para3 = document.createElement('p')
    section.append(para1)
    section.append(para2)
    section.append(para3)

    para1.textContent = `Total: ${val1 + val2}`
    para2.textContent = `Average: ${avg}`

    if(avg >= 50){
        para3.textContent = 'status: '+'Promoted'
    }
    else{
        para3.textContent ='status: '+'Repeat'
    }
}

btn.addEventListener('click', howdy)