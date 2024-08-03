let letrasArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'];

const functionLetras = (num) => {
    let valueArray = []

    for (let index = 0; index < num; index += 1) {
        if (valueArray[index] == undefined) {
            valueArray[index] = letrasArray[index]
        } else {

            valueArray[index] += letrasArray[index];
        }
    }
    return valueArray

};

const functionLetra = (num) => {
    let valueArray = []

    for (let index = 0; index < num; index += 1) {
        if (valueArray[index] == undefined) {
            valueArray[index] = letrasArray[index]
        } else {

            valueArray[index] += letrasArray[index];
        }
    }
    return valueArray

};

console.log(functionLetras(2));
