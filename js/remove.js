'use strict'

export default function removeCard(evt) {
    const button = evt.target.closest('.remove-btn');

    if (!button) {
        return;
    }

    const card = button.closest('.extensions-card');

    card.remove();
}