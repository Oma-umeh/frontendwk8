const btn = document.querySelector('button')

const input = document.querySelectorAll('input')

const sect = document.querySelectorAll('.bmi')[1]

const head1 = document.createElement('h2')
const head2 = document.createElement('h2')
const para = document.createElement('para')

function bmi(){
    const height = Number(input[0].value)
    const weight = Number(input[1].value)

    const result = (weight/Math.pow(height,2)).toFixed(2)

    sect.append(head1)
    sect.append(head2)
    sect.append(para)

    head1.innerHTML = `BMI result is ${result}kgm<sup>-2</sup>`

    if(result >= 30){
        head2.innerText = `Status: Obesity`
        para.textContent = `You need surgery at the moment`
    }
    else if(result >= 25){
        head2.innerText = `Status: Overweight`
    }
    else if(result >= 18){
        head2.innerText = `Status: Normal`
    }
    else{
        head2.innerText = `Status: Underweight`
    }

}

btn.addEventListener('click', bmi)