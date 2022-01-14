function arenaTier(array){
    let gladiatorsObject = {};
    let list = [];

    for(let command of array){
        if(command == 'Ave Cesar'){
            break;
        }

        let el = command.split(' ');
        
        if(el[1] === '->'){
            let elements = command.split(' -> ');
            let gladiator = elements[0];
            let technique = elements[1];
            let skill = Number(elements[2]);

            if(!Object.keys(gladiatorsObject).includes(gladiator)){
                gladiatorsObject[gladiator] = {};
            }
            if(!Object.keys(gladiatorsObject[gladiator]).includes(technique) ||
            gladiatorsObject[gladiator][technique] < skill){
                gladiatorsObject[gladiator][technique] = skill;
            }
        } else if(el[1] === 'vs'){
            let gladiators = command.split(' vs ');
            let firstGladiator = gladiators[0];
            let secondGladiator = gladiators[1];

            if(Object.keys(gladiatorsObject).includes(firstGladiator) && 
            Object.keys(gladiatorsObject).includes(secondGladiator)){
                let gladiator1Obj = gladiatorsObject[firstGladiator];
                let gladiator2Obj = gladiatorsObject[secondGladiator];
                
                for(let technique in gladiator1Obj){
                    if(Object.keys(gladiator2Obj).includes(technique)){
                        if(gladiator1Obj[technique] > gladiator2Obj[technique]){
                            delete gladiatorsObject[secondGladiator];
                        } else if(gladiator2Obj[technique] > gladiator1Obj[technique]){
                            delete gladiatorsObject[firstGladiator];
                        }
                    }
                }
            }
        }
    }

    let tierList = Object.entries(gladiatorsObject);

    for(let el of tierList){
        let gladiatorsName = el[0];
        let techniques = Object.entries(el[1]);
        let sum = techniques.map(a => a[1]).reduce((a, b) => a + b)
        list.push([gladiatorsName,techniques, sum]);
    }
    
    let sorted = list.sort((a, b) => b[2] - a[2] || 
    a[0].localeCompare(b[0]));

    for(let el of sorted){
        console.log(`${el[0]}: ${el[2]} skill`);
        el[1].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => console.log(`- ${x[0]} <!> ${x[1]}`));
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]);