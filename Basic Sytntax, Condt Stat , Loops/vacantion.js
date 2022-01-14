function vacantion(count , groupType , day){
    let singlePrice = 0;
    let price = 0;
    if(groupType === 'Students'){
        switch(day){
            case 'Friday':
                price = count * 8.45;
                break;
            case 'Saturday':
                price = count * 9.80;
                break;
            case 'Sunday':
                price = count * 10.46;
                break;    
        }
        if(count >= 30){
            price *= 0.85;
        }
    } else if(groupType === "Business"){
        switch(day){
            case 'Friday':
                singlePrice = 10.90;
                price = count * singlePrice;
                break;
            case 'Saturday':
                singlePrice = 15.60
                price = count * singlePrice;
                break;
            case 'Sunday':
                singlePrice = 16
                price = count * singlePrice;
                break;    
        }
        if(count >= 100){
            price -= singlePrice * 10; 
        }
    } else if(groupType === 'Regular'){
        switch(day){
            case 'Friday':
                price = count * 15;
                break;
            case 'Saturday':
                price = count * 20;
                break;
            case 'Sunday':
                price = count * 22.50;
                break;    
        }
        if(count >=10 && count <= 20){
            price *= 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacantion(30,'Students','Sunday');
vacantion(40,"Regular","Saturday");

