const sum = (a: number | string, b: number | string): number | string => {
    a = Number(a);
    b = Number(b);
    if(Number.isNaN(a) || Number.isNaN(b)) return "Không hợp lệ";
    return a + b;
}

const subtraction = (a: number | string, b: number | string): number | string => {
    a = Number(a);
    b = Number(b);
    if(Number.isNaN(a) || Number.isNaN(b)) return "Không hợp lệ";
    return a - b;
}

const multiply = (a: number | string, b: number | string): number | string => {
    a = Number(a);
    b = Number(b);
    if(Number.isNaN(a) || Number.isNaN(b)) return "Không hợp lệ";
    return a * b;   
}

const quotient = (a: number | string, b: number | string): number | string => {
    a = Number(a);
    b = Number(b);
    if(b === 0) return "Không hợp lệ";
    if(Number.isNaN(a) || Number.isNaN(b)) return "Không hợp lệ";
    return a / b;   
}