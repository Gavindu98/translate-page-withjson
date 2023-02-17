let translations = {
    "en": {
        "1": "Hello",
        "2": "world"
    },
    "es": {
        "1": "Hola",
        "2": "mundo"
    },
    "fr": {
        "1": "Bonjour",
        "2": "monde"
    }
}

function translatePage(language) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// loadTranslations();

const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', (event) => {
    translatePage(event.target.value);
});

