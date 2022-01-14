function towns(array){
    for(let townInfo of array){
        let token = townInfo.split(' | ');

        let town = token[0];
        let latitude = Number(token[1]).toFixed(2);
        let longitude = Number(token[2]).toFixed(2);
        
        let townData = {
            town,
            latitude,
            longitude
        };

        console.log(townData);
    }
}

towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])