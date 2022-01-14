function dungeonDark(array){
    let newArray = array[0].split('|');
    let health = 100;
    let coins = 0;
    let totalCoins = 0;
    let roomCounter = 0;

    for(let i = 0; i <newArray.length; i++){
        let currentRoom = newArray[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);
        roomCounter++;

        if(command === 'potion'){
            if(num + health > 100){
                num = 100 - health;
                health = 100;
            } else{
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);

        }else if(command === 'chest'){
            coins = num;
            totalCoins += coins;
            console.log(`You found ${coins} coins.`);
        } else {
            health -= num;
            if(health > 0){
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }
        }

        if(roomCounter === newArray.length){
            console.log("You've made it!");
            console.log(`Coins: ${totalCoins}`);
            console.log(`Health: ${health}`);
        }
    }
}

dungeonDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);