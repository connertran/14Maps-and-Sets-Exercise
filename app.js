// 1 what does the code return
new Set([1, 1, 2, 2, 3, 4]) //{1,2,3,4} 
// 2 what does the code return
[...new Set("referee")].join("") // 'ref'
// 3 What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true); //{[1,2,3] => true}
// [1,2,3] !== [1,2,3] because arrays are the reference type
m.set([1, 2, 3], false); //Map (2) {[1,2,3] => true, [1,2,3] => false}
// 4 Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
function hasDuplicate(arr) {
  const removingDuplicates = [...new Set(arr)];
  return arr.length !== removingDuplicates.length;
}
// 5 Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = str => {
  const vowels = "ueoai";
  return str.split('').reduce((hashMap, letter) => {
    if (vowels.indexOf(letter) !== -1) {
      if (!hashMap.has(letter)) {
        hashMap.set(letter, 1);
      }
      else {
        hashMap.set(letter, hashMap.get(letter) + 1);
      }
    }
    return hashMap;
  }, new Map())
}