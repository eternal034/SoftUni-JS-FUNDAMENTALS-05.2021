function houseParty(array){
    let partyList = [];
    for(let element of array){
        let command = element.split(' ');
        let name = command.shift();
        let operation = command.join(' ');

        if(operation === 'is going!'){
            if(partyList.includes(name)){
                console.log(`${name} is already in the list!`);
            } else {
                partyList.push(name);
            }
        } else if(operation === 'is not going!'){
            if(partyList.includes(name)){
                let index = partyList.indexOf(name);
                partyList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } 
    }

    console.log(`${partyList.join('\n')}`);
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])