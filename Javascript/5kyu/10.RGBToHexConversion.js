function rgb(r, g, b) {

    const convert = val => {
        if (val < 0) {
            return '00'
        } else if (val > 255) {
            return 'FF'
        }
        return (val > 15 ? val.toString(16) : '0' + val.toString(16)).toUpperCase()
    }
    return convert(r) + convert(g) + convert(b)
}


console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300, 255, 255), 'FFFFFF')
console.log(rgb(173, 255, 47), 'ADFF2F')

/*
=====SOAL======
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
/*
CARA ORANG LAIN
1. ======>

function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

2. ======>

function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

3. ======>

let rgb = (r, g, b) => [r,g,b].map( (item) => item>=255 ? 'FF' : item<=0 ? '00' : item.toString(16).toUpperCase()).join('')

*/