function spiceMustFlow(yeild){
    let consumeByWorkers = 26;
    let daysWorking = 0;
    let totalLeavedSpice = 0;

    while(yeild >= 100){
        let leavedSpice = yeild - consumeByWorkers;
        totalLeavedSpice += leavedSpice;
        daysWorking++;
        yeild -= 10;
        if(yeild < 100){
            totalLeavedSpice -= consumeByWorkers;
            break;
        }
    }

    console.log(`${daysWorking}\n` + `${totalLeavedSpice}`)
}

spiceMustFlow(111);