"use strict";

function saveEntry(entry){
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
}

function fetchEntries(){
    return fetch("http://localhost:8088/entries?_order=desc&_sort=id")
    .then(result => result.json())
}

function removeEntries(entryId){
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "Delete"
    }).then(result => result.json())
}

function replaceEntry(entry, entryId){
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
}

module.exports = {saveEntry, fetchEntries, removeEntries, replaceEntry};