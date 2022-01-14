function pascalCaseSplit(text) {
  /*let result = [];
    let currentWord = '';
    let textToLowerCase = text.toLowerCase(text);

    for(let i = 0; i < text.length; i++){
        if(text[i] != textToLowerCase[i]){
            if(currentWord.length > 0){
                result.push(currentWord);
            }
            currentWord = text[i];
        } else {
            currentWord += text[i]
        }
    }

    if(currentWord.length > 0){
        result.push(currentWord)
    }
    console.log(result.join(', '));*/

  let result = [];
  let lastIndex = 0;
  let textToLowerCase = text.toLowerCase(text);

  for (let i = 0; i < text.length; i++) {
    if (text[i] != textToLowerCase[i]) {
      let word = text.substring(lastIndex, i);
      lastIndex = i;
      if (word.length > 0) {
        result.push(word);
      }
    }
    let word = text.substring(lastIndex);
    if (word > 0) {
      result.push(word);
    }
  }
  console.log(result.join(", "));
}

pascalCaseSplit("SplitMeIfYouCanHaHaYouCantOrYouCan");
