function arrayManipulations(arr) {
    let listOfnumbes = arr
        .shift()
        .split(' ')
        .map(Number);
    for (i = 0; i < arr.length; i++) {
        let [comand, firstNum, secondNum]
         = arr[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        if (comand === 'Add') {
            listOfnumbes.push(firstNum)
        }
        else if (comand === 'Remove') {
            let index = listOfnumbes.indexOf(firstNum)
            let slice = listOfnumbes.splice(index, 1)
 
        }
        else if (comand === 'RemoveAt') {
            let splice = listOfnumbes.splice(firstNum, 1);
        }
        else {
            let splice = listOfnumbes.splice(secondNum, 0, firstNum);
        }
    }
    console.log(listOfnumbes.join(' '))
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])