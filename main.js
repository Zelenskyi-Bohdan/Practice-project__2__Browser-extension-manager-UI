'use strict'

import data from "./js/data.js";
import renderMarkup from "./js/render.js";
import { changeTheme, initTheme } from "./js/theme.js";

let dataCopy = [...data];

// Theme check

const themeBtn = document.querySelector('.theme-btn');

initTheme();

// Theme change

themeBtn.addEventListener('click', changeTheme);

// List render

const extensions = document.querySelector('.extensions');
extensions.innerHTML = renderMarkup(dataCopy);

// Сhange of state

extensions.addEventListener('change', evt => {
    if (!evt.target.matches('.switch input')) {
        return;
    }

    const card = evt.target.closest('.extensions-card');
    const name = card.dataset.name;

    dataCopy.forEach(obj => {
        if (obj.name === name) {
            obj.isActive = evt.target.checked;
        }
    });
});

// Remove element

function render() {
    extensions.innerHTML = renderMarkup(dataCopy);
}

extensions.addEventListener('click', evt => {
    const button = evt.target.closest('.remove-btn');

    if (!button) {
        return;
    }

    const card = button.closest('.extensions-card');
    const name = card.dataset.name;

    dataCopy = dataCopy.filter(item => item.name !== name);

    render();
});

// Filter elements

const filterButtonsContainer = document.querySelector('.extensions-section-btns');
filterButtonsContainer.addEventListener('click', evt => {
    const button = evt.target.closest('button');
    const filterButtons = document.querySelectorAll('.extensions-section-btns button');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (!button) {
        return;
    }

    const filter = button.dataset.filter;

    extensions.innerHTML = renderMarkup(filterExtensions(dataCopy, filter));
});

function filterExtensions(data, filter) {
     if (filter === 'active') {
        return data.filter(element => element.isActive === true);
    } 
    
    if (filter === 'inactive') {
        return data.filter(element => element.isActive === false);
    }

    return data;
}