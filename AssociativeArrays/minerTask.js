function minerTask(array){
    let mine = {};
    for(let i = 0; i < array.length; i+= 2){
        let resource = array[i];
        let quantity = Number(array[i+1])

        if(!Object.keys(mine).includes(resource)){
            mine[resource] = quantity;
        } else {
            mine[resource] += quantity;
        }
    }

    let mineAsArray = Object.entries(mine);

    for(let el of mineAsArray){
        let resource = el[0];
        let quantity = el[1];
        console.log(`${resource} -> ${quantity}`);
    }
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])