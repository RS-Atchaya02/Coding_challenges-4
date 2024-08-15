function findLongestWord(str) {
    const words = str.trim().split(/\s+/);
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}
const sentence = "This is Atchaya";
const longestWord = findLongestWord(sentence);
console.log(longestWord); // Output will be "Atchaya"
