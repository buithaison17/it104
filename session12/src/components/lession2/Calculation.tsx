export default function Calculation() {
    const sum = (a: number, b: number): number => {
        return a + b;
    }
    const differece = (a: number, b: number): number => {
        return a - b;
    }
    const multiply = (a: number, b: number): number => {
        return a * b;
    }
    const division = (a: number, b: number): number | string => {
        if(b === 0){
            return "Không thể chia cho 0";
        }
        return a / b;
    }
    const a = 10, b = 20;
    return (
        <>
            <ul style={{textAlign: "left"}}>
                <li>{a} + {b} = {sum(a, b)}</li>
                <li>{a} - {b} = {differece(a, b)}</li>
                <li>{a} * {b} = {multiply(a, b)}</li>
                <li>{a} / {b} = {division(a, b)}</li>
            </ul>
        </>
    )
}
