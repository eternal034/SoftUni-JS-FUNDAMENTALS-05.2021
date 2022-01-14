function commonElements(array1 , array2){
    for(let i = 0; i <array1.length; i++){
        let array1Element = array1[i];
        for(let j = 0; j < array2.length; j++){
            let array2Element = array2[j];
            if(array2Element === array1Element){
                console.log(array2Element);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])