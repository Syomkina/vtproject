// #code by I.T.

// script settings of document
const price1 = document.querySelectorAll('.i_price');
const price2 = document.querySelectorAll('.b_price');
const name1 = document.querySelectorAll('.i_name');
const name2 = document.querySelectorAll('.b_name');
for (i = 0; i < price1.length; i++) {
    name2[i].innerHTML = name1[i].innerHTML;
    name2[i].style.color = 'white';
    price2[i].innerHTML = price1[i].innerHTML;
}

const hearts = document.querySelectorAll('.i_add_tl');
counter = 0
for (const element of hearts) {
    element.id = counter;
    counter ++;
}

// functions
function classes(element, class1, class2) {
    if (element.className == class1) {
        element.className = class2
    }
    else {
        element.className = class1
    }
}

function opacity(el, n, m) {
    if (el.style.opacity == n) {
        el.style.opacity = m;
    }
    else {
        el.style.opacity = n;
    }
}

function display(el, par1, par2) {
    if (el.style.display == par1) {
        el.style.display = par2;
    }
    else {
        el.style.display = par1;
    }
}

// add product to 'basket'
const basket = document.querySelector('.basket_ul');
const uv = document.querySelector('.uvedomleniye');
const cross = document.querySelector('.cross');
const basket_items = document.querySelectorAll('.buli');
for (const heart of hearts) {
    heart.onclick = function () {
        if (heart.className != 'fas fa-heart i_add_tl'){
            uv.style.opacity = '100%';
        }
        else {
            uv.style.opacity = '0%';
        }
        classes(heart, 'far fa-heart i_add_tl', 'fas fa-heart i_add_tl');
        cross.onclick = function () {
                uv.style.opacity = '0%';
        }
        classes(basket_items[heart.id], 'buli', 'buli_plus');
       
    }
}

// dropdown menus
const arrows = document.querySelectorAll('.arrow');
const arrowone = document.getElementById('arrowone');
const arrowtwo = document.getElementById('arrowtwo');
const contacts = document.querySelector('.c_ul');
for (const arrow of arrows) {

    arrow.onclick = function () {
        classes(arrow, 'fas fa-chevron-circle-down arrow fa-flip-vertical', 'fas fa-chevron-circle-down arrow');
        if (arrow == arrowone) {
            display(basket, 'flex', 'none')
        }
        else { display(contacts, 'flex', 'none');}
    }
}

const pluses = document.querySelectorAll('.b_plus');
const minuses = document.querySelectorAll('.b_minus');
const b_p = document.querySelectorAll('.b_kolvo_p');

for (const plus of pluses) {
    plus.onclick = function () {
        b_p[plus.id].innerHTML ++;
        if (b_p[plus.id].innerHTML >= 10) {
            b_p[plus.id].innerHTML = 10;
        }
    }
}

for (const minus of minuses) {
    minus.onclick = function () {
        b_p[minus.id].innerHTML --;
        if (b_p[minus.id].innerHTML <= 0) {
            b_p[minus.id].innerHTML = 1;
        }
    }
}