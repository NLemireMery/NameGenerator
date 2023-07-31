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
     * Handles the click on the button
     * @param {*} event 
     */
    handleGenerator: function(event) {
        event.preventDefault();
        
        const maleRadio = document.querySelector('#male');
        const femaleRadio = document.querySelector('#female');
        const randomName = document.querySelector('#name');

        // Execute the generating function depending on whether the name is male or female
        if (maleRadio.checked) {
            randomName.textContent = app.generateMaleName();
        } else if (femaleRadio.checked) {
            randomName.textContent = app.generateFemaleName();
        } else {
            randomName.textContent = 'You need to select a gender.'
        }
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
    }
}

document.addEventListener('DOMContentLoaded', app.init);