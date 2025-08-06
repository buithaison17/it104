const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultDiv = document.getElementById("result");
const buttons = document.querySelectorAll("button[data-op]");
const factorial = (a) => {
    if (a <= 1)
        return 1;
    return a * factorial(a - 1);
};
const calculate = (op, a, b) => {
    switch (op) {
        case "+":
            return (a + b).toString();
        case "-":
            return (a - b).toString();
        case "*":
            return (a * b).toString();
        case "/":
            return b === 0 ? "Không thể chia cho 0" : (a / b).toString();
        case "^":
            return Math.pow(a, b).toString();
        case "√":
            return b === 0 ? "Không thể căn bậc 0" :
                a < 0 && b % 2 == 0 ? "Không thể căn bậc chẵn của số âm" : Math.pow(a, 1 / b).toString();
        case "!":
            return factorial(a).toString();
    }
    return "";
};
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const op = button.getAttribute("data-op");
        if (!op)
            return;
        const a = Number(number1Input.value || "0");
        const b = Number(number2Input.value || "0");
        const result = calculate(op, a, b);
        resultDiv.textContent = `Kết quả: ${result}`;
    });
});
export {};
//# sourceMappingURL=script.js.map