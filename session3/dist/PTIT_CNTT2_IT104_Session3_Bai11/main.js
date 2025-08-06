"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
;
const logMovement = (direction) => {
    console.log(`Hướng di duyển: ${direction}`);
};
const setMode = (mode) => {
    console.log(`Chế độ: ${mode}`);
};
const processInput = (input) => {
    console.log(`Tham số nhận được: ${input}`);
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
// crash("Không hoạt động");
//# sourceMappingURL=main.js.map