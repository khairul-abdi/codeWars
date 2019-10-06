function dataReverse(data) {
    let arrBig = []
    let count = 0
    for (let i = 0; i < data.length; i++) {
        let arr = []
        for (var j = 0; j < 8; j++) {
            if (count <= data.length) {
                arr.push(data[count])
            }
            count++
        }
        if (count <= data.length) {
            arrBig.push(arr)
        }
    }
    // console.log(arrBig)
    let result = []
    for (let i = arrBig.length - 1; i >= 0; i--) {
        for (let j = 0; j < arrBig[i].length; j++) {
            result.push(arrBig[i][j])
        }
    }
    return result
}

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(dataReverse(data1), data2)
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
console.log(dataReverse(data3), data4)

/*
=====SOAL======
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/
/*
CARA ORANG LAIN
1. ======>

const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

2. ======>
3. ======>
*/