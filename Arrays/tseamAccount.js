function tseamAccount(array){

    let account = array[0].split(' ');
    
    for(let i=1; i<array.length; i++){
        let command = array[i].split(' ');
        let operation = command[0];
        let game = command[1];

        if(operation == 'Play!'){
            break;
        }else if(operation == 'Install' && account.includes(game) == false){
            account.push(game);
        } else if( operation == 'Uninstall' && account.includes(game)){
            let index = account.indexOf(game);
            account.splice(index, 1);
        } else if(operation == 'Update' && account.includes(game)){
            let index = account.indexOf(game);
            account.splice(index, 1);
            account.push(game);
        } else if(operation == 'Expansion'){
            let expansion = game.split('-');
            let gameForExpansion = expansion[0];

            if(account.includes(gameForExpansion)){
                let expandedGame = expansion.join(':');
                let index = account.indexOf(gameForExpansion);
                account.splice(index + 1, 0 , expandedGame);
            }
        }
    }

    console.log(account.join(' '));
}

tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!'])