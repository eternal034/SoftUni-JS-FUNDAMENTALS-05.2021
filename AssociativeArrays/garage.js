function garage(array) {
  let garagesInfo = [];

  for (let el of array) {
    let [garageId, car] = el.split(" - ");
    let garageExist = garagesInfo.find(
      (garage) => garage.garageId === garageId
    );
    if (!garageExist) {
      garagesInfo.push({
        garageId: garageId,
        car: [],
      });
      garageExist = garagesInfo.find((garage) => garage.garageId === garageId);
    }
    garageExist.car.push(car);
  }
  let result = "";
  garagesInfo.forEach((garage) => {
    result += `Garage № ${garage.garageId}\n`;
    for (let currentCar of garage.car) {
      currentCar = currentCar.split(": ").join(" - ");
      result += `--- ${currentCar}`;
      console.log(result);
      result = "";
    }
  });
}

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
