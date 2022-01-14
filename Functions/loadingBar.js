function loadingBar(number) {
    let percents = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${percents}]`);
    } else {
        console.log(`${number}% [${percents}${dots}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(80);