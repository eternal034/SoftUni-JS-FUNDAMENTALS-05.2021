function trainTask(array){
    let vagons = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    
    for(let command of array){
        let tokens = command.split(' ');

        if(tokens[0] === "Add"){
            let newPassangers = Number(tokens[1]);
            vagons.push(newPassangers);
        } else {
            let newPassangers = Number(tokens[0]);
            for(let i = 0; i < vagons.length; i++){
                if(vagons[i] + newPassangers <= maxCapacity){
                    vagons[i] += newPassangers;
                    break;
                }
            }
        }
    }
    console.log(vagons.join(" "));
}


trainTask(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);