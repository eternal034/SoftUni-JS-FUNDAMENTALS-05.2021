function sumFirstAndLast(numAsStrings){
    let first = Number(numAsStrings.shift());
    let last = Number(numAsStrings.pop());

    return first + last;
}

console.log(sumFirstAndLast(['20', '30', '40']))