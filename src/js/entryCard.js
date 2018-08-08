"use strict";

function makeEntry(entryObject){
    return `<div class="entry-card" id="entry-id--${entryObject.id}">
                <h2 id="title--${entryObject.id}">${entryObject.title}</h2>
                <h4>-- ${entryObject.date} --</h4>
                <p id="content--${entryObject.id}">${entryObject.content}</p>
                <div class="button-container">
                    <button class="edit-btn" id="edit--${entryObject.id}">Edit this Entry</button>
                    <button class="delete-btn" id="delete--${entryObject.id}">Remove This Entry</button>
                </div>
            </div>`
}

module.exports = makeEntry;