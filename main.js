'use strict'


import data from "./js/data.js";
import renderMarkup from "./js/render.js";

const extensions = document.querySelector('.extensions');

extensions.innerHTML = renderMarkup(data);