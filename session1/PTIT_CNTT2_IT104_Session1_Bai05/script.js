const respone = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author:{
            name: "Dev",
            email: "dev@gmail.com",
        }
    }
}

const {title, author} = respone.data;
const {name: authorName, email: authorEmail} = author;
console.log(title, author, authorName, authorEmail);

