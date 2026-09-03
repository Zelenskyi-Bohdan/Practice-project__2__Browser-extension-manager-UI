'use strict'

export function changeTheme() {
    document.body.classList.toggle('dark-theme');

    const icon = document.querySelector('.theme-icon');
    const isDark = document.body.classList.contains('dark-theme');

    icon.setAttribute('href', isDark ? "./images/sprite.svg#-icon-sun" : "./images/sprite.svg#-icon-moon");

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
} 

export function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');

        const icon = document.querySelector('.theme-icon');

        icon.setAttribute(
            'href',
            './images/sprite.svg#-icon-sun'
        );
    }
}