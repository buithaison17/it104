const handleUnionType = (input: number | string): void => {
    if(typeof input === 'string') console.log(`ouput: ${input.length} kí tự`);
    else if(input % 2 === 0) console.log('Đây là số chẵn');
    else console.log('Đây là số lẻ');
}

handleUnionType(2);