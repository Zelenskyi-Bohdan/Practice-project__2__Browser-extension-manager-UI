'use strict'

import data from "./js/data.js";
import renderMarkup from "./js/render.js";
import { changeTheme, initTheme } from "./js/theme.js";
import { getActiveButton, filterElements } from "./js/filter.js";
import removeCard from "./js/remove.js";

// Theme check

const themeBtn = document.querySelector('.theme-btn');

initTheme();

// Theme change

themeBtn.addEventListener('click', changeTheme);

// List render

const extensions = document.querySelector('.extensions');
extensions.innerHTML = renderMarkup(data);

// Remove element

extensions.addEventListener('click', removeCard);

// Filter elements

const filterButtonsContainer = document.querySelector('.extensions-section-btns');
filterButtonsContainer.addEventListener('click', getActiveButton);
filterButtonsContainer.addEventListener('click', filterElements);