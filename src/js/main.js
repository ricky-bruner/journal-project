"use strict";

let formManager = require("./journalForm");
let dataManager = require("./dataManager");
let makeEntry = require("./entryCard");
let getDate = require("./getDate");
let editManager = require("./editEntry");

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
        alert("Fill this shit out you dummie!");
    } else {
        dataManager.saveEntry(newEntry).then((result) => {
            formManager.clearForm();
            document.querySelector(".entry-list").innerHTML = "";
            dataManager.fetchEntries().then((result) => {
                result.forEach(item => {
                    document.querySelector(".entry-list").innerHTML += makeEntry(item);
                });
            });
        });
    }
});

dataManager.fetchEntries().then((result) => {
    result.forEach(item => {
        document.querySelector(".entry-list").innerHTML += makeEntry(item);
        document.querySelector(".entry-list").addEventListener("click", (e) => {
            if(e.target.id.split("--")[0] === "edit"){
                editManager.transformEntry(e);
                document.querySelector(".save-btn").addEventListener("click", (e) => {
                    let entryId = e.target.id.split("--")[1];
                    let entry = editManager.saveEditedEntry();
                    dataManager.replaceEntry(entry, entryId)
                    .then(() => {
                        document.querySelector(".entry-list").innerHTML = "";
                        dataManager.fetchEntries().then((result) => {
                            result.forEach(item => {
                                document.querySelector(".entry-list").innerHTML += makeEntry(item);
                            });
                        });
                    });
                });
            }
        });
    });
});

document.querySelector(".entry-list").addEventListener("click", (e) => {
    if(e.target.className === "delete-btn"){
        let entryId = e.target.id.split("--")[1];
        dataManager.removeEntries(entryId).then(() => {
            e.target.parentElement.parentElement.remove();
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