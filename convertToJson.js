function convertingObject(name, lastName, hairColor){
    let result = {
        name,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(result));

}


convertingObject('George',
'Jones',
'Brown')