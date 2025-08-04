const displayUserInfo = (user) => {
    const {name, age, location = {}, job = {} , contact= {}} = user;
    const city = location.city || "unknow";
    const country = location.country || "unknow";
    const jobTitle = job.title || "unknow";
    const company = job.company || "unknow";
    const email = contact.email || "unknow";
    const phone = contact.phone || "unknow";
    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as ${jobTitle} at ${company}, and can be contacted via ${email} or ${phone}.`);
}

displayUserInfo({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam"}});
displayUserInfo({ name: "John", age: 25, location: { city: "Hanoi", country: "Vietnam" }, contact: { email: "john@example.com", phone: "0123456789" }, job: { title: "Developer", company: "Tech Corp" } });