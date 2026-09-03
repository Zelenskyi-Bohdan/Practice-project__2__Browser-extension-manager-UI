'use strict'

import data from "./js/data.js";
import renderMarkup from "./js/render.js";
import {changeTheme, initTheme} from "./js/theme.js"

const themeBtn = document.querySelector('.theme-btn');

initTheme();

themeBtn.addEventListener('click', changeTheme);

// List render

const extensions = document.querySelector('.extensions');

extensions.innerHTML = renderMarkup(data);

// Theme

themeBtn.addEventListener('click', changeTheme);