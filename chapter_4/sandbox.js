

greet();
greet();
greet();

// declaration
function greet() {
    console.log('hello there');
}

// function expression
const speak = function (name) {
    console.log(`coucou ${name}`);
};

speak('petite perruche');

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };
const calcArea = radius => 3.14 * radius ** 2;

console.log(calcArea(123));
console.log(calcArea(122));

const bill = (products, tax) => products.reduce((prev, curr) => curr + curr * tax + prev, 0);

console.log(bill([10, 15, 30], 0.2));

const func = (callBack) => callBack(50);
const callBack = value => value * 2;
console.log(func(callBack));

let nimps = ["coucou", "mickey", "minnie", "mouse"]
nimps.forEach(nimp => console.log(nimp.toUpperCase()));
console.log(nimps);

const ul = document.querySelector('.people');

let html = nimps.reduce((prev, curr) => prev + `<li style="color: purple">${curr}</li>`, ``);

console.log(html);

ul.innerHTML = html