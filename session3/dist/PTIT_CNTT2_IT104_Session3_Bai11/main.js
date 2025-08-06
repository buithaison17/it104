"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
;
const logMovement = (direction) => {
    console.log(`Moving: ${direction}`);
};
const setMode = (mode) => {
    console.log(`System set to ${mode} mode`);
};
const processInput = (input) => {
    console.log(`Received input (any): ${input}`);
};
const validateInput = (input) => {
    if (typeof input === "number") {
        console.log(`Valid number input: ${input}`);
    }
    else {
        console.log("Invalid input type");
    }
};
const crash = (message) => {
    throw new Error(`System Error: ${message}`);
};
logMovement("Right");
setMode(SystemMode.AUTO);
setMode(SystemMode.MANUAL);
processInput("Hello robot!");
processInput(12345);
validateInput("âa");
validateInput(78);
crash("Overheat detected!");
// crash("Không hoạt động");
//# sourceMappingURL=main.js.map