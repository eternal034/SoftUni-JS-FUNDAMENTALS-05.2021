function armies(array) {
  let armiesObj = {};
  let splitted;
  let leader;

  for (let line of array) {
    if (line.includes("arrives")) {
      splitted = line.split(" ");
      splitted.pop();
      leader = splitted.join(" ");
      armiesObj[leader] = {};
    } else if (!line.includes("+") && !line.includes("defeated")) {
      splitted = line.split(": ");
      leader = splitted.shift();
      let [armyName, armyQuantity] = splitted.toString(splitted).split(", ");
      if (Object.keys(armiesObj).includes(leader)) {
        armiesObj[leader][armyName] = Number(armyQuantity);
      }
    } else if (line.split(" ").includes("+")) {
      splitted = line.split(" + ");
      let [armyName, armyQuantity] = splitted;
      for (let [key, value] of Object.entries(armiesObj)) {
        for (let [army, quant] of Object.entries(value)) {
          if (army == armyName) {
            armiesObj[key][army] += Number(armyQuantity);
          }
        }
      }
    } else if (line.includes("defeated")) {
      splitted = line.split(" ");
      splitted.pop();
      leader = splitted.join(" ");
      if (Object.keys(armiesObj).includes(leader)) {
        delete armiesObj[leader];
      }
    }
  }

  for (let [key, value] of Object.entries(armiesObj)) {
    let total = 0;
    for (let token of Object.values(value)) {
      total += token;
    }
    armiesObj[key]["totalQuantity"] = total;
  }

  let sortedLeaders = Object.entries(armiesObj).sort(
    (a, b) => b[1].totalQuantity - a[1].totalQuantity
  );

  for (let [key, value] of sortedLeaders) {
    console.log(`${key}: ${value.totalQuantity}`);
    let sortedArmies = Object.entries(value).sort((a, b) => b[1] - a[1]);
    for (let [army, quant] of sortedArmies) {
      if (army === "totalQuantity") {
        continue;
      } else {
        console.log(`>>> ${army} - ${quant}`);
      }
    }
  }
}

armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
