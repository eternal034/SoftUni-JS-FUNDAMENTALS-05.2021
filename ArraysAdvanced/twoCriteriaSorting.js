function doubleSorting(array){
    array.sort((a, b) =>{
        let fisrtCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);

        return fisrtCriteria || secondCriteria;
    });

    console.log(array.join('\n'));
}

doubleSorting(["alpha", "beta", "gamma"]);