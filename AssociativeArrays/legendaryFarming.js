function legendaryFarming(str){
    let array = str.toLowerCase().split(' ');
    let farmObj = {
        fragments: 0,
        shards: 0,
        motes: 0
    };

    let junkObj = {};

    while(array.length > 0){
        let quantity = Number(array.shift());
        let farmType = array.shift();
        
        if(farmType == 'fragments'){
            farmObj[farmType] += quantity;
            if(farmObj[farmType] >= 250){
                console.log(`Valanyr obtained!`);
                farmObj[farmType] -= 250;
                break;
            }
        } else if(farmType == 'shards'){
            farmObj[farmType] += quantity;
            if(farmObj[farmType] >= 250){
                console.log(`Shadowmourne obtained!`);
                farmObj[farmType] -= 250;
                break;
            }
        } else if(farmType == 'motes'){
            farmObj[farmType] += quantity;
            if(farmObj[farmType] >= 250){
                console.log(`Dragonwrath obtained!`);
                farmObj[farmType] -= 250;
                break;
            }
        } else {
            if(!Object.keys(junkObj).includes(farmType)){
                junkObj[farmType] = 0;
            }
            junkObj[farmType] += quantity;
        }
    }

    let farmItemsSortedList = Object.entries(farmObj).sort((a,b) => b[1] - a[1] ||
    a[0].localeCompare(b[0]));

    let junkItemsSortedList = Object.entries(junkObj).sort((a,b) => a[0].localeCompare(b[0]));

    for(let el of farmItemsSortedList){
        console.log(`${el[0]}: ${el[1]}`);
    }

    for(let el of junkItemsSortedList){
        console.log(`${el[0]}: ${el[1]}`);
    }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')