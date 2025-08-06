enum SystemMode {
    AUTO = "AUTO",
    MANUAL = "MANUAL",
};

type Direction = "Left" | "Right" | "Forward" | "Backward";

const logMovement = (direction: Direction): void => {
    console.log(`Moving: ${direction}`);
}

const setMode = (mode: SystemMode): void => {
    console.log(`System set to ${mode} mode`);
}

const processInput = (input: any): void => {
    console.log(`Received input (any): ${input}`);
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
setMode(SystemMode.AUTO);
setMode(SystemMode.MANUAL);
processInput("Hello robot!");
processInput(12345);
validateInput("âa");
validateInput(78);
crash("Overheat detected!");
// crash("Không hoạt động");