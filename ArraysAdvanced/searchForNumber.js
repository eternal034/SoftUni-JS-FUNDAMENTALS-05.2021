function numbSearching(arr1, arr2){
    let newArray = arr1.slice(0,arr2[0]).splice(arr2[1]);
    let count = 0;
    for(let num of newArray){
        if(num === arr2[2]){
            count++;
        }
    }
    
    console.log(`Number ${arr2[2]} occurs ${count} times.`);
}

numbSearching([5, 3, 2, 3, 4, 3 , 3, 4 , 8, 10],[8, 0 , 3]);