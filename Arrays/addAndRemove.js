function addAndRemove(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let command = array[i];
        if(command === 'add'){
            newArray.push(i+1);
        } else if(command === 'remove'){
            newArray.pop(newArray.length-1)
        }
    }
    if(newArray.length < 1){
        console.log('Empty');
    }else{
        console.log(newArray.join(' '));
    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])
console.log("------");
addAndRemove(['add', 'add', 'add', 'add'])
console.log("------");
addAndRemove(['remove', 'remove', 'remove'])
console.log("------");