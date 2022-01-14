function reverseArrayString(input){
    let newArray = [];
    for(let i = input.length - 1; i >=0; i--){
        let currentChar = input[i];
        newArray.push(currentChar);
    }

    console.log(newArray.join(' '))
}

reverseArrayString(['a', 'b', 'c', 'd', 'e'])