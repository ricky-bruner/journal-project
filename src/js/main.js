"use strict";

let formManager = require("./journalForm");
let dataManager = require("./dataManager");
let makeEntry = require("./entryCard");
let getDate = require("./getDate");

console.log("Hello");

document.querySelector("#form").innerHTML = formManager.makeForm();

document.querySelector("#add-entry-btn").addEventListener("click", () => {
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: getDate()
    };
    if(document.querySelector("#entryTitle").value === "" || document.querySelector("#entryContent").value === ""){
        console.log("caught!");
    } else {
        dataManager.saveEntry(newEntry).then((result) => {
            formManager.clearForm();
            document.querySelector(".newest-entry").innerHTML += makeEntry(result);
        });
    }
});

dataManager.fetchEntries().then((result) => {
    result.forEach(item => {
        document.querySelector(".entry-list").innerHTML += makeEntry(item);
    })
});

document.querySelector(".all-entry-container").addEventListener("click", (e) => {
    if(e.target.className === "delete-btn"){
        let entryId = e.target.parentElement.id.split("--")[1];
        dataManager.removeEntries(entryId).then(() => {
            e.target.parentElement.remove();
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