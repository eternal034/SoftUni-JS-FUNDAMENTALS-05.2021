function gladiator (lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let helmetRepairCount = 0;
    let swordRepairCount = 0;
    let shieldRapairCount = 0;
    let armorRapairCount = 0;
    for(let currentFightLoss = 1; currentFightLoss <= lostFightsCount; currentFightLoss++){
        if(currentFightLoss % 2 === 0){
            helmetRepairCount++;
        } 
        if(currentFightLoss % 3 === 0){
            swordRepairCount++;
        }
        if(currentFightLoss % 2 === 0 && currentFightLoss % 3 === 0){
            shieldRapairCount++;
            if(shieldRapairCount > 0 && shieldRapairCount % 2 === 0){
                armorRapairCount++;
            }
        }
    }
    let expenses = (helmetRepairCount * helmetPrice) + (swordRepairCount * swordPrice) + (shieldRapairCount * shieldPrice) + (armorRapairCount * armorPrice);
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator (23,12.50,21.50,40,200)