console.log(this);
console.log(document);

// QUERY SELECTOR
const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras)

paras.forEach(node => {console.log(node)});

const errors = document.querySelectorAll('.error');
errors.forEach(node => {console.log(node)});

// get element by id
const title = document.getElementById('page-title');
console.log(title);

// get element by classname
const errors_class = document.getElementsByClassName('error');
console.log(errors_class);
console.log(typeof errors_class);

// get element based on tag name
const all_paras = document.getElementsByTagName('p');
console.log(all_paras);

const para_1 = document.querySelector('p');
para_1.innerText = "Hallo !";

const all_p = document.querySelectorAll('p');
all_p.forEach(para => para.innerText += " -> tout nul");

const peoples = ['mario', 'luigi', 'yoshi'];
const error_div = document.querySelector('div.error');
error_div.innerHTML = "<ul>" + peoples.reduce((prev, curr) => prev + `<li>${curr}</li>`, ``) + "</ul>";

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'http://kenji.yamashita.fr');
link.innerText = "Le CV de Kenji !";

console.log(error_div.className);
error_div.setAttribute('class', 'success');
console.log(error_div.className);

error_div.setAttribute('style', 'color: green;');

// title.setAttribute('style', 'margin: 50px;');
console.log(title);
console.log(title.style);
title.style.margin = '50px';
console.log(title);
title.style.fontSize = '60px';
title.style.margin = '30px';

console.log(para_1.classList);
para_1.classList.add('error')
para_1.classList.add('success')
para_1.classList.remove('error')

paras.forEach(para => {
    para.textContent.includes('error') && para.classList.add('error')
    para.textContent.includes('success') && para.classList.add('success')
})

title.classList.toggle('test')
title.classList.toggle('test')