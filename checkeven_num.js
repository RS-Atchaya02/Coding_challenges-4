function containsOnlyEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false; 
        }
    }
    return true; 
}
const array1 = [2, 4, 6, 8]; 
const array2 = [2, 4, 5, 8];
console.log(containsOnlyEvenNumbers(array1)); // Output: true
console.log(containsOnlyEvenNumbers(array2)); // Output: false
