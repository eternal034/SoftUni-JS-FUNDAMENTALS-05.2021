function objects() {
    let person = new Map();

    //add new key/value;
    person.set('name', 'Georgi')
    person.set('age', 20);
    //get something
        //get 
    let personName = person.get('name');
        //has
    if (person.has('car')) {
    } else {
        person.set('car', 'Audi A3 8L');
    }


}

objects()