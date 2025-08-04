const phoneBooks = [];
const addContact = (name, phone, email) => phoneBooks.push({name, phone, email});
const displayContact = (phoneBooks) => {
    for (const element of phoneBooks) {
        console.log(`Tên: ${element.name}\nSố điện thoại: ${element.phone}\nEmail: ${element.email}\n`);
    }
}
addContact("Sơn bùi", "113", "hello");
addContact("Sơn bùi1", "112", "hello1");
addContact("Sơn bùi", "114", "hello2");
displayContact(phoneBooks)