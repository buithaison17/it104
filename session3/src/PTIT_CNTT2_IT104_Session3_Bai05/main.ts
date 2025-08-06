let firstName = "sơn";
let lastName = "bùi";

const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

firstName = capitalize(firstName);
lastName = capitalize(lastName);
const fullName = `${firstName} ${lastName}`
console.log(fullName);

