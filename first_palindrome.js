function isPalindrome(str) {
    const cleanedStr = str.replace(/\W|_/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join(''); 
    return cleanedStr === reversedStr;
}
function findFirstPalindrome(array) {
    for (let i = 0; i < array.length; i++) {
        if (isPalindrome(array[i])) {
            return array[i]; 
        }
    }
    return "No palindrome found";
}
const stringsArray = ["hello", "madam", "racecar", "world"];
const firstPalindrome = findFirstPalindrome(stringsArray);
console.log(firstPalindrome); // Output 

