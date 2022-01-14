function firstAndLastK(array){
/*let numCount = array.shift();

    let first = [];
    for(let i=0; i<numCount; i++){
        first.push(array[i]);
    }

    let last = [];
    for(let i=array.length - numCount; i < array.length; i++){
        last.push(array[i]);
    }

    console.log(`${first.join(' ')}\n${last.join(' ')}`);*/
    let numCount = array.shift();
    let first = array.slice(0,numCount);
    let last = array.slice(array.length - numCount)

    console.log(first.join(' '));
    console.log(last.join(' '));

}

firstAndLastK([2, 7, 8, 9]);