function passwordValidator(password){

    function isLengthCorrect(string){
        if(string.length >= 6 && string.length <= 10){
            return true;
        } else {
            return false;
        }
    }
    
    function isCharAndNumOnly(string){
        for (let char of string){
            let charCode = char.charCodeAt(0);

            if(!(charCode >= 48 && charCode <= 57)&&
                !(charCode >= 65 && charCode <= 90)&&
                !(charCode >=97 && charCode <= 122)){
                    return false
                }
        }
        return true;
    }

    function isMinTwoDigits(string){
        let counter = 0;
        for(let char of string){
            let charCode = char.charCodeAt(0);

            if(charCode >= 48 && charCode <= 57){
                counter++
            }
        }

        if(counter >=2){
            return true;
        } else {
            false;
        }
    }

    let isLengtValid = isLengthCorrect(password);
    let containsLetterAndNumOnly = isCharAndNumOnly(password);
    let containsMinTwoDigits = isMinTwoDigits(password);

    if(isLengtValid && containsLetterAndNumOnly && containsMinTwoDigits){
        console.log('Password is valid');
    }

    if(!isLengtValid){
        console.log('Password must be between 6 and 10 characters');
    }

    if(!containsLetterAndNumOnly){
        console.log('Password must consist only of letters and digits');
    }

    if(!containsMinTwoDigits){
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('MyPass123');