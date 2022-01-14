function printGrade(grade){
    let description;
    let result = ''
    if(grade < 3){
        description = 'Fail';
        result = `${description} (${Math.floor(grade)})`;
    }else if(grade >= 3 && grade < 3.50){
        description = 'Poor';
        result = `${description} (${(grade).toFixed(2)})`;
    } else if(grade < 4.50){
        description = 'Good';
        result = `${description} (${(grade).toFixed(2)})`;
    } else if(grade < 5.50){
        description = 'Very good';
        result = `${description} (${(grade).toFixed(2)})`;
    } else {
        description = 'Excellent';
        result = `${description} (${(grade).toFixed(2)})`;
    }
    console.log(result)
}

printGrade(2.99)

