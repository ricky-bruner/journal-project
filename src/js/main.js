"use strict";

let formManager = require("./journalForm");
let dataManager = require("./dataManager");
let makeList = require("./entryManager");
let getDate = require("./getDate");
let editManager = require("./editManager");
let $ = require("jquery");

console.log("Hello");

$("#form").html(formManager.makeForm());

$("#add-entry-btn").click(() => {
    const newEntry = {
        title: $("#entryTitle").val(),
        content: $("#entryContent").val(),
        date: getDate()
    };
    let titleText = $("#entryTitle").val();
    let contentText = $("#entryContent").val();
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