function countWords(str) {
    let wordCount = 0;
    let inWord = false;
    str = str.trim();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === ' ' || char === '\t' || char === '\n') {
            inWord = false;
        } else {
            if (!inWord) {
                wordCount++;
                inWord = true;
            }
        }
    }
    
    return wordCount;
}
const sentence = "example program";
const numberOfWords = countWords(sentence);
console.log(numberOfWords); // Output will be 2
