function reverseArray(num , arrayExample){
    let newArray = [];
    for(let i = 0; i < num; i++){
        let currentIndex = arrayExample[i];
        newArray.push(currentIndex);
    }

    newArray.reverse();
    let output = '';
    for(let j = 0; j < newArray.length; j++){
        let currentChar = newArray[j];
        output += ` ${currentChar}`;
    }
    console.log(output);

}

reverseArray(3,[10, 20, 30, 40, 50])