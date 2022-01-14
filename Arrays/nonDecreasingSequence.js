function nonDecreasingSeq(array) {
    let newArray = [];
    let firstElement = array[0];
    newArray.push(firstElement)
    for(let i=1; i<array.length; i++){
        let currentNum = Number(array[i]);
        if(currentNum >= firstElement){
            newArray.push(currentNum);
            firstElement = currentNum;
        }
    }
    console.log(newArray.join(' '));
}

nonDecreasingSeq([1, 3, 8, 4, 10, 12, 3, 2, 24])