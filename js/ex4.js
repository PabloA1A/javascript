
export function reverseWords(str) {
    const words = str.trim().split(/\s+/);
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

console.log(reverseWords("Hello   world")); 
console.log(reverseWords("JavaScript is fun")); 