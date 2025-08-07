const isPrime = (input: number): boolean => {
    for(let i = 2; i <= Math.sqrt(input); i++){
        if(input % i === 0) return false;
    }
    return true;
}

const isCheckAllNumber = (input: string): boolean => {
    for(const char of input){
        const charConvert = Number(char);
        if(Number.isNaN(charConvert)) return false;
    }
    return true;
}

const filterNumber = (input: string): string => {
    let result: string = "";
    for(const char of input){
        const charConvert = Number(char);
        if(!Number.isNaN(charConvert)) result += charConvert;
    }
    return result;
}

const processInput = (input: string | number | boolean): void => {
    if(typeof input === "string"){
        if(isCheckAllNumber(input)){
            const result: string = Math.pow(Number(input), 2).toString();
            console.log(result);
        }
        else{
            const result: string = filterNumber(input);
            console.log(result);
        }
    }
    else if(typeof input === "number"){
        isPrime(input) ? console.log("Đây là số nguyên tố") : console.log("Đây không phải số nguyên tố");
    }
    else{
        input ? console.log("Giá trị true - đang xử lí") : console.log("Giá trị false - dừng xử lí");
    }
}

processInput(false);