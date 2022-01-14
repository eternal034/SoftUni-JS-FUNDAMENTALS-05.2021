function gladiator(array) {
    let newArray = [];
    newArray.push(array.shift());
    let petersEquipment;
    for (let element of newArray) {
        petersEquipment = element.split(' ');
    }
    for (let element of array) {
        let elements = element.split(' ');
        let command = elements[0];
        let equipment = elements[1];

        if (command === "Buy") {
            if (!petersEquipment.includes(equipment)) {
                petersEquipment.push(equipment);
            }
        } else if (command === "Trash") {
            if (petersEquipment.includes(equipment)) {
                let index = petersEquipment.indexOf(equipment);
                petersEquipment.splice(index, 1);
            }
        } else if (command === "Repair") {
            if (petersEquipment.includes(equipment)) {
                let index = petersEquipment.indexOf(equipment);
                petersEquipment.splice(index, 1)
                petersEquipment.push(equipment);
            }
        } else if (command === "Upgrade") {
            let upgradeList = equipment.split('-');
            let partForUpgrade = upgradeList[0];
            let upgrade = (`${partForUpgrade}:${upgradeList[1]}`);
            if (petersEquipment.includes(partForUpgrade)) {
                let index = petersEquipment.indexOf(partForUpgrade);
                petersEquipment.splice(index + 1, 0, upgrade );
            }
        }
    }
    console.log(petersEquipment.join(' '));
}

gladiator(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);