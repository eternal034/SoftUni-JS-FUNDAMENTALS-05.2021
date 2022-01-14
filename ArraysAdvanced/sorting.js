function sorting(array){
    let newArray = [];
    let arrayL = array.length
    for(let i = 0; i < arrayL; i++){
        let num;
        if(i % 2 === 0) {
            num = Math.max(...array);
        } else {
            num = Math.min(...array);
        }

        newArray.push(num);
        array.splice(array.indexOf(num), 1)
    }
    console.log(newArray.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])