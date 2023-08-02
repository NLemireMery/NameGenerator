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
     * Generate a random name (first and last) according to a specified setting and gender
     * @returns string
     */
    generateName: function(setting) {
        const maleRadio = document.querySelector('#male');
        const femaleRadio = document.querySelector('#female');
        const nonBinaryRadio = document.querySelector('#nonbinary');
        const randomName = document.querySelector('#name');

        if (maleRadio.checked) {
            let firstName = Math.floor(Math.random() * setting["maleNames"].length);
            let surname = Math.floor(Math.random() * setting["surnames"].length);
            if (setting["maleNames"].length > 0 && setting["surnames"].length > 0) {
                return setting["maleNames"][firstName] + ' ' + setting["surnames"][surname];
            }
        } else if (femaleRadio.checked) {
            let firstName = Math.floor(Math.random() * setting["femaleNames"].length);
            let surname = Math.floor(Math.random() * setting["surnames"].length);
            if (setting["femaleNames"].length > 0 && setting["surnames"].length > 0) {
                return setting["femaleNames"][firstName] + ' ' + setting["surnames"][surname];
            }
        } else if (nonBinaryRadio.checked) {
            let names = setting["femaleNames"].concat(setting["maleNames"]);
            let firstName = Math.floor(Math.random() * names.length);
            let surname = Math.floor(Math.random() * setting["surnames"].length);
            if (names.length > 0 && setting["surnames"].length > 0) {
                return names[firstName] + ' ' + setting["surnames"][surname];
            }
        } else {
            /* Error management */
            return randomName.textContent = 'You need to select a gender.';
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
        const randomName = document.querySelector('#name');

        // Execute the generating name functions depending on whether the setting is fantasy, scifi, contemporary or historical
        if (fantasyRadio.checked) {
            randomName.textContent = app.generateName(fantasy);
        } else if (scifiRadio.checked) {
            randomName.textContent = app.generateName(scifi);
        } else if (contemporaryRadio.checked) {
            randomName.textContent = app.generateName(contemporary);
        } else if (historicalRadio.checked) {
            randomName.textContent = app.generateName(historical);
        } else {
            randomName.textContent = "Pick a setting."
        }
        
    }
}

document.addEventListener('DOMContentLoaded', app.init);