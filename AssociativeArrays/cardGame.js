function cardGame(array){
    let symbolToPoints = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let players = {};
    let results = {};

    for(let command of array){
        let tokens = command.split(': ');
        let name = tokens[0];
        let cards = tokens[1].split(', ');

        if(!Object.keys(players).includes(name)){
            players[name] = [];
        }

        players[name] = players[name].concat(cards);
    }

    // calculate points
    for(let [name,cards] of Object.entries(players)){
        results[name] = 0;

        for(let i = 0; i < cards.length; i++){
            let card = cards[i];
            if(cards.indexOf(card) === i){
                let cardAsArray = card.split('');
                let type = cardAsArray.pop();
                let power = cardAsArray.join('');
                let cardPoints = 0;
                
                if(Object.keys(symbolToPoints).includes(power)){
                    cardPoints = symbolToPoints[power] * symbolToPoints[type];
                } else {
                    cardPoints = Number(power) * symbolToPoints[type];
                }
    
                results[name] += cardPoints;
            }
        }
    }

    for(let [key, value] of Object.entries(results)){
        console.log(`${key}: ${value}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);