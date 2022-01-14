function studentInfo(name,age,grade){
    let roundedGrade = grade.toFixed(2);
    console.log('Name: ' + name + ', Age: ' + age + ', Grade: ' + roundedGrade);

}

studentInfo('John', 15, 5.54678);