"use strict";

function makeEntry(entryObject){
    return `<div class="entry-card" id="entry-id--${entryObject.id}">
                <h2>${entryObject.title}</h2>
                <h4>-- ${entryObject.date} --</h4>
                <p>${entryObject.content}</p>
                <button class="delete-btn">Remove This Entry</button>
            </div>`
}

module.exports = makeEntry;