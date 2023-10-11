function grade(score){
    if(isNaN(score))
    if (score >= 70){
        return 'A'
    }
    else if(score >= 60){
        return 'B'
    }
    else if(score >= 50){
        return 'C'
    }
    else {
        return 'F'
    }
    else{
        return 'not a number'
    }
}