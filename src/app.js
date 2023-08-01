const app = { 

    /** 
     * Initialize the app
     */
    init: function() {
        // Retrieve the button element, attach the event
        const generateButton = document.querySelector('#generator');
        generateButton.addEventListener('click', app.handleGenerator);
    },

    /**
     * Generate a random male name (first and last) 
     * @returns string
     */
    generateMaleName: function() {
        let firstName = Math.floor(Math.random() * maleNames.length);
        let surname = Math.floor(Math.random() * surnames.length);
        if (maleNames.length > 0 && surnames.length > 0) {
            return maleNames[firstName] + ' ' + surnames[surname];
        }
    },

    /**
     * Generate a random female name (first and last) 
     * @returns string
     */
    generateFemaleName: function() {
        let firstName = Math.floor(Math.random() * femaleNames.length);
        let surname = Math.floor(Math.random() * surnames.length);
        if (femaleNames.length > 0 && surnames.length > 0) {
            return femaleNames[firstName] + ' ' + surnames[surname];
        }
    },

    /**
     * Generate a random non-binary name (first and last) 
     * @returns string
     */
    generateName: function() {
        let names = femaleNames.concat(maleNames);
        let firstName = Math.floor(Math.random() * names.length);
        let surname = Math.floor(Math.random() * surnames.length);
        if (names.length > 0 && surnames.length > 0) {
            return names[firstName] + ' ' + surnames[surname];
        }
    },

    /** 
     * Handles the click on the button
     * @param {*} event 
     */
    handleGenerator: function(event) {
        event.preventDefault();
        
        const fantasyRadio = document.querySelector('#fantasy');
        const scifiRadio = document.querySelector('#scifi');
        const contemporaryRadio = document.querySelector('#contemporary');
        const historicalRadio = document.querySelector('#historical');

        // Execute the generating function depending on whether the setting is fantasy, scifi, contemporary or historical
        if (fantasyRadio.checked) {
            /* A faire */            
        } else if (scifiRadio.checked) {
            /* A faire */
        } else if (contemporaryRadio.checked) {
            /* A faire */
        } else if (historicalRadio.checked) {
            /* A faire */
        } else {
            /* Gestion meilleure de l'erreur à faire */
            /* error.textContent += 'You need to select a setting.' */
        }

        const maleRadio = document.querySelector('#male');
        const femaleRadio = document.querySelector('#female');
        const nonBinaryRadio = document.querySelector('#nonbinary');
        const randomName = document.querySelector('#name');
        const error = document.querySelector('#error');

        // Execute the generating function depending on whether the name is male, female or non-binary
        if (maleRadio.checked) {
            randomName.textContent = app.generateMaleName();
        } else if (femaleRadio.checked) {
            randomName.textContent = app.generateFemaleName();
        } else if (nonBinaryRadio.checked) {
            randomName.textContent = app.generateName();
        } else {
            /* Gestion meilleure de l'erreur à faire */
            /* error.textContent += 'You need to select a gender. \r\n' */
        }
        
    }
}

document.addEventListener('DOMContentLoaded', app.init);