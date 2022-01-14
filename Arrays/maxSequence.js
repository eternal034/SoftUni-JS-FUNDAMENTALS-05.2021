function maxSequence(array){
    let counter = 1;
    let finalCounter = 0;
    let number = 0;
    let finalNum = 0;
    let arrayL = array.length;
    let endArrayL = false;
    let finalArray = [];

    //get a first number
    for(let i = 0; i < array.length; i++){
        //get other numbers
        for(let j = i+1; j < array.length; j++){
            //check are they equal
            if(array[i] === array[j]){
                counter ++;
                number = array[i];
                //do we have more chars for check?
                if(counter == arrayL){
                    endArrayL = true;
                    break;
                }
            } else {
                //which value to use for finalCount? null to num and count if we have an end of sequences
                if(finalCounter < counter){
                    finalCounter = counter;
                    finalNum = number;
                    number = 0;
                    counter = 1;
                    break;
                } else {
                    number = 0
                    counter = 1;
                    break;
                }
            }
        } 
        if(endArrayL){
            finalNum = number;
            finalCounter = counter;
            break;
        }
    }
        for(let k = 0; k <finalCounter;k++){
            finalArray.push(finalNum);
        }
        console.log(finalArray.join(' '));
}


maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
        
        