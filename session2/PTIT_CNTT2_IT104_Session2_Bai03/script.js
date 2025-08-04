const typeConsole = (type = "log") => {
    if(type === "warn") console.warn("Đây là type: warn");
    else if(type === "error") console.error("Đây là type: error");
    else console.log("Đây là type: log");
}
    
typeConsole("warn");