const createUser = (name, age = 18, role = "User") => {
    return {name, age, role};
}

const newUser = createUser("Son");
console.log(newUser);
