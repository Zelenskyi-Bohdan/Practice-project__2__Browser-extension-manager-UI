'use strict'

import data from "./data.js";
import renderMarkup from "./render.js";

const extensions = document.querySelector('.extensions');

export function getActiveButton(evt) {
    const button = evt.target.closest('button');
    const filterButtons = document.querySelectorAll('.extensions-section-btns button');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

export function filterElements(evt) {
    const button = evt.target.closest('button');

    if (!button) {
        return;
    }

    const filter = button.dataset.filter;

    extensions.innerHTML = renderMarkup(filterExtensions(data, filter));
}

function filterExtensions(data, filter) {
     if (filter === 'active') {
        return data.filter(element => element.isActive === true);
    } 
    
    if (filter === 'inactive') {
        return data.filter(element => element.isActive === false);
    }

    return data;
}
