const urlify = (str) => {
    let stringArray = str.trim().split("")
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] === " "){
            stringArray[i] = "%20"
        }
    }
    // console.log(stringArray)
    return stringArray.join("")
}
  
console.log(urlify('Mr John Smith    '));
  