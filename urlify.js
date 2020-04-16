//solution 1
// const urlify = (str) => {
//     let stringArray = str.trim().split("")
//     for(let i = 0; i < stringArray.length; i++){
//         if(stringArray[i] === " "){
//             stringArray[i] = "%20"
//         }
//     }
//     // console.log(stringArray)
//     return stringArray.join("")
// }

//simple solution
const urlify = (str) => {
    let stringArray = str.trim()
    console.log(stringArray)
    let result = stringArray.replace(/ /g, "%20");
    return result
}
  
console.log(urlify('Mr John Smith    '));
  