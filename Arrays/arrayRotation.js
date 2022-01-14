function arrayRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = array[0];

        for (let j = 0; j < array.length - 1; j++) {
            array[j] = array[j + 1];
        }

        let lastIndex = array.length - 1;
        array[lastIndex] = firstElement;
    }
    console.log(array.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);
