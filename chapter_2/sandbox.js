console.log('coucou coucou');
console.log(12341234);
let age = 25;
let year = 2021;
// log things to console
console.log(age, year);
age = 30;
console.log(age);
const points = 100;
console.log(points);

// old JS variables
var score = 75;
console.log(score);

console.log(typeof (1234.1234));
console.log(typeof (null));
let coucou;
console.log(coucou);

// string
console.log('helloskldjfk qf');
let email = 'mario@cart.fr';
console.log(email);
let firstName = 'ali';
let lastName = 'baba';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName[0]);
console.log(fullName.length);

console.log(email.slice(0, 10));
console.log(email.substr(3, 3));
console.log(email.replace('m', 'w'))

let radius = 10;
const pi = 3.14;
console.log(radius, pi)

console.log(10 / 3);
console.log(typeof (10 / 3));
radius++;
console.log(radius);
radius--;
radius--;
console.log(radius);
radius -= 2;
console.log(radius);
radius /= 3;
console.log(radius);

console.log('coucou ' + email + ' de rayon ' + radius);
console.log(`coucou ${email} de rayon ${radius}`);
let html = `
    <h2>coucou ${email}</h2>
`;
console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken'
ninjas.push('naturo')
ninjas.pop()
console.log(ninjas[1]);
let ages = [20, 25, 30, 35];
console.log(ages);
console.log(ages.length);
console.log(ninjas.join(', '));

console.log(true, false, 'true', 'false');

console.log(email.includes('@'));
console.log(1234 == 2134);
console.log('coucou' == 'Coucou');
console.log('coucou' > 'doucou');
console.log("10" == 10);
console.log("10" === "10");
console.log("10" === 10);
let note = "100";
note = Number(note);
console.log(note + 1);
console.log(String(0b11), typeof(String(03945)), typeof "bla");
console.log(ninjas.map((value) => value.toUpperCase()));
console.log(ninjas);