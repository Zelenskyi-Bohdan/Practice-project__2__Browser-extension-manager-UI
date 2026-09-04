'use strict'

export default function renderMarkup(data) {
    return data
        .map(({ logo, name, description, isActive }) => `
            <li class="extensions-card" data-name="${name}">
                <div class="description-container">
                <svg width="60" height="60">
                    <use href="${logo}"></use>
                </svg>
                <div class="text-container">
                <h2 class="card-header">${name}</h2>
                <p class="card-text">${description}</p>
                </div>
                </div>
                <div class="interaction-container">
                <button class="remove-btn" type="button">Remove</button>
                <label class="switch">
                    <input type="checkbox" ${isActive ? 'checked' : ''} aria-label="Activate ${name}">
                    <span class="slider"></span>
                </label>
                </div>
            </li>
        `)
        .join('');
}