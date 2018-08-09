"use strict";

const formManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = "";
            document.querySelector("#entryContent").value = "";
        }
    },
    makeForm: {
        value: () => {
            return `<h2>What's on Your Mind?</h2>
            <input type="text" placeholder="What would you like to call these thoughts?" id="entryTitle" required>
            <textarea placeholder="Have fun with it" id="entryContent" required></textarea>
            <button id="add-entry-btn">Add Your Thoughts</button>`
        }
    }
});

module.exports = formManager;