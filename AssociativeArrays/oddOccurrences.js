function oddOccurrences(string){
    let occurrences = {};
    let lisfOfStrings = string.split(' ');
    
    for(let el of lisfOfStrings){
        //set to lowercase
        let stringToLower = el.toLowerCase();
        //check if string exist in occurrences
        if(!Object.keys(occurrences).includes(stringToLower)){
            //if doesnt exist -> create with count 0
            occurrences[stringToLower] = 0;
        }
        //increase count
        occurrences[stringToLower] += 1;
    }

    let resultStr = '';

    for(let [key,value] of Object.entries(occurrences)){
        if(value % 2 !== 0){
            resultStr += `${key} `
        }
    }

    console.log(resultStr);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');