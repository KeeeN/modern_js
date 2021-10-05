const blogs = [
    { title: "pourquoi les chats pots thé ?", likes: 30 },
    { title: "pourquoi les chats mat l'eau ?", likes: 15 }
]

console.log(blogs)

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.fr',
    location: 'Berlin',
    blogs: [
        { title: "pourquoi les chats pots thé ?", likes: 30 },
        { title: "pourquoi les chats mat l'eau ?", likes: 15 }
    ],
    login: function () {
        console.log('the user logged in');
    },
    logout: function () {
        console.log('the user logged out');
    },
    logBlogs() {
        console.log(this.blogs);
    }
};
console.log(user);
user.age = 31;
console.log(user.age);
console.log(user["age"]);
console.log(typeof user);
user.login();
user.logout();
user.logBlogs();

console.log(Math);
console.log(Math.PI);
console.log(Math.round(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.trunc(Math.PI));

console.log(Math.round(Math.random() * 100));

let a = [1, 2, 3]
let b = [...a]
console.log(a, b)
a.pop()
console.log(a, b)