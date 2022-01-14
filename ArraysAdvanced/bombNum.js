function bombNum(numsArray, bomb){
    let bombNumber = bomb[0];
    let bombPower = bomb[1];
    let sum = 0;
    for(let i = 0; i < numsArray.length; i++){
       let num = Number(numsArray[i]);
        if(num === bombNumber){
            let bombIndex = numsArray.indexOf(num);
            let startIndex = Math.max(bombIndex - bombPower,0);
            numsArray.splice(bombIndex, bombPower + 1);
            numsArray.splice(startIndex, bombPower);
            i = startIndex - 1;
        }
    }
    for(let num of numsArray){
        sum += num;
    }
    console.log(sum);
}

bombNum([1, 1, 2, 1, 3, 1, 2, 1, 3, 1],
    [2, 1]);