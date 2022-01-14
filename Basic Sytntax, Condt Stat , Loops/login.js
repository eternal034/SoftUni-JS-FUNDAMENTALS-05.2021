function login(list){
    let userName = list[0];
    let passwordAsList = userName.split('');
    let reversedPassword = passwordAsList.reverse();
    let correctPassword = reversedPassword.join('');

    let index = 1
    let command = list[index];
    index++;

    counter = 1;

    while(command !== correctPassword){
        console.log(`Incorrect password. Try again.`);
        counter++;

        if(counter === 4){
            console.log(`User ${userName} blocked!`);
            break;
        }

        command = list[index];
        index++;

    }
    if(counter < 4 && command === correctPassword){
        console.log(`User ${userName} logged in.`);
    }
}


login(['momo','omom']);