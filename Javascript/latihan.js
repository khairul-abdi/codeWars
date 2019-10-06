let input = '12345asd'
let tempNomor = []
let tempHuruf = []
let output = []

for(let i = 0; i < input.length; i++){
    // console.log(input[i])
    if(Number(input[i])){
        tempNomor.push(Number(input[i]))
    }else{
        tempHuruf.push(input[i])
    }
}
output.push(tempNomor, tempHuruf.join)

console.log(output)