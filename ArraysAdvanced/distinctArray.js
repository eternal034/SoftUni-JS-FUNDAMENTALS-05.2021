function distinctArray(array){
    let newArray = [];
    for(let num of array){
        if(!newArray.includes(num)){
            newArray.push(num);
        }
    }

    console.log(newArray.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])