/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var s = str1.toLowerCase();
  var t = str2.toLowerCase();
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
      freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
      freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (var i = 0; i < freq.length; i++) {
      if (freq[i] !== 0) {
          return false;
      }
  }

  return true;
}

module.exports = isAnagram;
