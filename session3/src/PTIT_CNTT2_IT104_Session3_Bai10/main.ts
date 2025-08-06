const str = "hello world apple banana orange pumpkin cucumber";

const findWord = (str: string): string => {
    const words = str.split(" ");
    let result: string = "";
    let maxLength: number = 0;
    for(const word of words){
        let seen = new Set<string>();
        let isCheck = true;
        for(const char of word){
            if(seen.has(char)){
                isCheck = false;
                break;
            }
            seen.add(char);
        }
        if(isCheck && word.length > maxLength){
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}

console.log(findWord(str));
