"use strict";

let formManager = require("./formManager");
let dataManager = require("./dataManager");
let entryManager = require("./entryManager");
let editManager = require("./editManager");
let getDate = require("./getDate");


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
            dataManager.getEntries().then((result) => {
                entryManager.makeList(result);
            });
        });
    }
});

dataManager.getEntries().then((result) => {
    entryManager.makeList(result);
});


document.querySelector(".entry-list").addEventListener("click", (e) => {
    if(e.target.className === "delete-btn"){
        let entryId = e.target.id.split("--")[1];
        dataManager.removeEntry(entryId).then(() => {
            e.target.parentElement.parentElement.remove();
        });
    }
    if(e.target.id.split("--")[0] === "edit"){
        editManager.transformEntry(e);
    }
    if(e.target.className === "save-btn"){
        let entryId = e.target.id.split("--")[1];
        let entry = editManager.saveEditedEntry();
        dataManager.replaceEntry(entryId, entry)
        .then(() => {
            dataManager.getEntries().then((result) => {
                entryManager.makeList(result);
            });
        });
    }
});