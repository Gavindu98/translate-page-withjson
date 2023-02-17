let translations = {
    "US": {
        "1": "Hello",
        "2": "world"
    },
    "ES": {
        "1": "Hola",
        "2": "mundo"
    },
    "FR": {
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

const languageSelector = document.getElementById('country-select');
console.log("languageSelector",languageSelector)
languageSelector.addEventListener('change', (event) => {
    translatePage(event.target.value);
});
$('#country-select').on('change', function() {
    var selectedValue = $(this).val();
    console.log('Selected value: ' + selectedValue);
    translatePage(selectedValue);
  });

