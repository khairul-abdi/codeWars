function urut(angka) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }

    return angka


}

console.log(urut([2, 52, 3, 2, 5, 3, 5, 3]))