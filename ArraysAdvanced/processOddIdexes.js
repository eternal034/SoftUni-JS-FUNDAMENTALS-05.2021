function oddIndexes(arr){
    let predicate = (x, i) => i % 2 === 1;
    let filtered = arr.filter(predicate);

    let operation = x => x * 2;
    let map = filtered.map(operation);

    map.reverse();

    console.log(map.join(' '));
}

oddIndexes([10, 15, 20, 25])