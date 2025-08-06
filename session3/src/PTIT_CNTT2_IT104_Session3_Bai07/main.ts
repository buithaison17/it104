let str: string = "banana";

const filterDupliCateChar = (str: string): string => {
    let chars = str.split("");
    let result: string = "";
    let seen = new Set<string>();
    for(const char of chars){
        if(!seen.has(char)){
            seen.add(char);
            result += char;
        }
    }
    return result;
}

console.log(filterDupliCateChar(str));