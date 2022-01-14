function equalNeigh(args) {
    let counter = 0;

    for(let i = 0; i < args.length; i++){
        let currArr = args[i]
        let nextArr = args[i+1]
        for(let j = 0; j < currArr.length; j++){
            let currElement = currArr[j];
            if(currElement == nextArr[j]){
                counter++;
            }
            if(currElement == currArr[j+1]){
                counter++;
            }
        }
    }

    console.log(counter);
}  
equalNeigh([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])