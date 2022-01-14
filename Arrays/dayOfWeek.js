function dayOfWeek(num){
    let days = ['Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday']

    if(num < 1 || num > 7){
        console.log('Invalid day!');
    } else {
        let day = num - 1;
        console.log(days[day]);
    }
}

dayOfWeek(9);