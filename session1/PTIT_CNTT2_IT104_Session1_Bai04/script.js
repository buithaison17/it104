const checkParity = (number) => {
    if(number % 2 === 0) return 1;
    else if(number % 2 !== 0) return 2;
    else return 3;
};

let number = +prompt("Nhập số nguyên cần kiểm tra: ");
if(checkParity(number) === 1) alert("Số chẵn");
else if(checkParity(number) === 2) alert("Số lẻ");
else alert("Không phải số");