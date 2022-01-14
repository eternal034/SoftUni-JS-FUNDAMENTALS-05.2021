function printNthElement(array){
    let step = Number(array.pop());
    let newArray = []
    for(let i = 0; i < array.length; i+=step){
        let char = (array[i]);
        newArray.push(char);
    }
    console.log(newArray.join(' '))
}

printNthElement(['1', '2', '3', '4', '5', '3']);