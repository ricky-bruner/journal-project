"use strict";

let formManager = require("./formManager");
let dataManager = require("./dataManager");
let entryManager = require("./entryManager");
let editManager = require("./editManager");
let getDate = require("./getDate");
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
            dataManager.getEntries().then((result) => {
                entryManager.makeList(result);
            });
        });
    }
});

dataManager.getEntries().then((result) => {
    entryManager.makeList(result);
});


$(".entry-list").click((e) => {
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
        dataManager.replaceEntry(entryId, entry)
        .then(() => {
            dataManager.getEntries().then((result) => {
                entryManager.makeList(result);
            });
        });
    }
});
