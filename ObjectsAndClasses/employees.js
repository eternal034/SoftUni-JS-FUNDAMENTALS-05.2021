function employees(array){
    for(let employee of array){
        let employeeData = {
            name: employee,
            personalNum: employee.length,
        };
        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNum}`);
    }
}

employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);