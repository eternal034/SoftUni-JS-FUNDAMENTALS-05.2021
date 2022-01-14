function lastKNumSeq(n, k){
    // create variable to hold result,starting from 1
    let result = [1];
    // repeat 'n' times
    for(let i = 1; i < n; i++){
        let current = 0;

        // calculate next element
        //      slice from result 'k' elements from the end
        //      sum sliced elements
        let elements = result.slice(-k);
        for(let num of elements){
            current += num;
        }
        // store element
        result.push(current);
    }

    // print
    console.log(result.join(' '));
}

lastKNumSeq(6, 3)