"use strict";

let formManager = require("./journalForm");
let dataManager = require("./dataManager");
let makeList = require("./entryManager");
let getDate = require("./getDate");
let editManager = require("./editManager");


console.log("Hello");

document.querySelector("#form").innerHTML = formManager.makeForm();

document.querySelector("#add-entry-btn").addEventListener("click", () => {
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: getDate()
    };
    let titleText = document.querySelector("#entryTitle").value;
    let contentText = document.querySelector("#entryContent").value;
    if(titleText === "" || contentText === ""){
        console.log("caught!");
    } else {
        dataManager.saveEntry(newEntry).then(() => {
            formManager.clearForm();
            dataManager.fetchEntries().then((result) => {
                makeList(result);
            });
        });
    }
});

dataManager.fetchEntries().then((result) => {
    makeList(result);
});


document.querySelector(".entry-list").addEventListener("click", (e) => {
    if(e.target.className === "delete-btn"){
        let entryId = e.target.id.split("--")[1];
        dataManager.removeEntries(entryId).then(() => {
            e.target.parentElement.parentElement.remove();
        });
    }
    if(e.target.id.split("--")[0] === "edit"){
        editManager.transformEntry(e);
    }
    if(e.target.className === "save-btn"){
        let entryId = e.target.id.split("--")[1];
        let entry = editManager.saveEditedEntry();
        dataManager.replaceEntry(entry, entryId)
        .then(() => {
            dataManager.fetchEntries().then((result) => {
                makeList(result);
            });
        });
    }
});

// ask about thicc arrow functions and why they dont work
//
//               /\        /\        /\
//              /  \      /  \      /  \
//               ||        ||        ||
//               ||        ||        ||
//              //\\      /  \      /  \
//             ///\\\    ///\\\    ///\\\