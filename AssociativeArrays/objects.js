function objects() {
    let person = {
        name: 'Georgi',
        age: 29,
        city: 'Varna'
    };

    // calling a key from object
    console.log(person.age);

    //adding new key into an object
    person['height'] = 173;
    person['hobby'] = 'GYM'

    //changing a values on keys
    person.age = 30;

    //remove a key from object 
    person.height = null; //or
    delete person.height;

    //check does something is into an object - boolen
    if (person.hasOwnProperty('car')) {
    } else {
        person['car'] = 'Audi A3 8L'
    }

    //freezing an object - dont allow us to modify the object
    Object.freeze(person);
    person.name = 'Ivan';

    //sealing an object - allow us to modify the keys values
    Object.seal(person);
    person.name = 'Bat Joro';

    //.keys - returns a new array with keys of the object
    let keys = Object.keys(person);

    //.values - returns a new array with values of the all kays into the object
    let values = Object.values(person);

    //copy an object
    //shadow copy - if we modify some key or value of the main object - it works , but if we have an nested object - it doesnt
    let obj1 = {
        name: 'John',
        age: 29,
    }
    let obj2 = Object.assign({}, obj1);
    //deep copy
    let obj3 = JSON.parse(JSON.stringify(obj1));

    // Sorting by values 
    let players = {
        ivan123: 134,
        nasko456: 165,
        nadq789: 176
    }

    let points = Object.values(players);
    let sortedPoints = points.sort((a, b) => b - a);


    //.entries - returns a couple - key/value into array with arrays
    let entries = Object.entries(person)
    console.log(entries);


}

objects()