function methodcode(score){
    let result 
    score > 75 ? result = 'A': score > 60 ? result = 'B': score > 50 ? result = 'C': result = 'F'
    return result
}