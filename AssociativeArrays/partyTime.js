function partyTime(array){
    let indexOfParty = array.indexOf('PARTY');
    let digitList = [ "1","2","3","4","5","6","7","8","9","0"]
    let vipList = [];
    let regularList = [];

    for(let i = 0; i < indexOfParty; i++){
        let currentGuest = array[i];
        if(digitList.includes(currentGuest[0])){
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }
    }

    for(let i = indexOfParty+1; i < array.length; i++){
        let currentGuest = array[i];
        if(digitList.includes(currentGuest[0])){
            if(vipList.includes(currentGuest)){
                vipList.splice(vipList.indexOf(currentGuest),1);
            }
        } else {
            if(regularList.includes(currentGuest)){
                regularList.splice(regularList.indexOf(currentGuest), 1);
            }
        }
    }

    let totalGuest = vipList.length + regularList.length;
    console.log(totalGuest);

    console.log(vipList.join('\n'));
    console.log(regularList.join('\n'));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);