const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

function superbowlWin(array){
    const win = array.find(array=> array.result ==="W")
    return !! win ? win.year : undefined
}
// function superbowlWin(array){
//     for (let {result: r} of array){
//         if (r = "W"){
//             return record.find(records => records.result === "W").year
//         } else {
//             return undefined
//         }
//     }}

// function superbowlWin(array){
//     if(array === {result : "W"}){
//         return array.find(records => records.result === "W").year
//     } else {
//         return undefined
//     }
// }
// let foundWin = record.find(superbowlWin).year;

// function superbowlWin(win){
//     if(win.result === "W"){
//         return win
//     } else {return 'undefined'}
// }


// function superbowlWin(){
//     return record.find(records => records.result === "W").year
// }

// function foundWin(){
// return record.find(records => records.result === "W").year
// }


// function superbowlWin(array){
//     let win = array.result = "W" ? record.find(records => records.result).year : undefined;
//     return win
// }


// function superbowlWin(array){
//     if (array.result === "W"){
//     return record.find(records => records.result).year 
//     } else {return undefinded}
// }
console.log(superbowlWin(record))
console.log(superbowlWin(sadReality))
console.log(record.result)
console.log(record)
