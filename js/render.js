'use strict'

export default function renderMarkup(data) {
    return data
        .map(({ logo, name, description, isActive }) => `
            <li>
                <div class="description-container">
                <svg width="60" height="60">
                    <use href="${logo}"></use>
                </svg>
                <h2 class="card-header">${name}</h2>
                <p class="card-text">${description}</p>
                </div>
                <div class="interaction-container">
                <button class="card-btn" type="button">Remove</button>
                <label class="switch">
                    <input type="checkbox" ${isActive ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
                </div>
            </li>
        `)
        .join('');
}