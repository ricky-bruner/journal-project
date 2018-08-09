
let getDate = require("./getDate");
let $ = require("jquery");

const editManager = Object.create(null, {
    saveEditedEntry: {
        value: () => {
            let editedEntry = {
                title: $("#editedTitle").val(),
                content: $("#editedContent").val(),
                date: `edited on: ${getDate()}`
            }
            return editedEntry;
        }
    },
    transformEntry: {
        value: (event) => {
            let entryCard = event.target.parentElement.parentElement;
            console.log(entryCard);
            let titleText = $(`#title--${event.target.id.split("--")[1]}`).text();
            let contentText = $(`#content--${event.target.id.split("--")[1]}`).text();
            $(entryCard).empty().html(
                `<input type="text" value="${titleText}" id="editedTitle">
                <textarea id="editedContent">${contentText}</textarea>
                <div class="button-container">
                    <button class="save-btn" id="save--${event.target.id.split("--")[1]}">Save Your Changes!</button>
                    <button class="delete-btn" id="delete--${event.target.id.split("--")[1]}">Remove This Entry</button>
                </div>`);
        }
    }
});

module.exports = editManager;