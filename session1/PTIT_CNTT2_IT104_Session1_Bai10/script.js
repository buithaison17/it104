const groupAnagrams = (words) => {
    const map = {};
    for(const word of words){
        const sorted = word.split("").sort().join("");
        if(!map[sorted]) map[sorted] = [];
        map[sorted].push(word);
    }
    return Object.values(map);
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(words);
console.log(result);