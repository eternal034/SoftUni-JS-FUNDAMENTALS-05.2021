function converting(json){

    let person = JSON.parse(json);
    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`);
    }
}

converting('{"name": "George", "age": 40, "town": "Sofia"}');