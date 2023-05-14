function LongestWord(sen) {

  let symbols = /[^a-zA-Z\s]/g;
  let filteredString = sen.replace(symbols, '');
  let filteredArray = filteredString.split(' ');

  let longestWord = '';

  filteredArray.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;

}

// keep this function call here
console.log(LongestWord(readline()));