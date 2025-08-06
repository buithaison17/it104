enum SystemMode {
    AUTO = "AUTO",
    MANUAL = "MANUAL",
};

type Direction = "Left" | "Right" | "Forward" | "backward";

const logMovement = (direction: Direction): void => {
    console.log(`Hướng di duyển: ${direction}`);
}

const setMode = (mode: SystemMode): void => {
    console.log(`Chế độ: ${mode}`);
}

const processInput = (input: any): void => {
    console.log(`Tham số nhận được: ${input}`);
}


const validateInput = (input: unknown): void => {
    if(typeof input === "number"){
        console.log(`Valid number input: ${input}`);
    }
    else{
        console.log("Invalid input type");
    }
}

const crash = (message: string): never => {
    throw new Error(`System Error: ${message}`);
}

logMovement("Right");

// crash("Không hoạt động");