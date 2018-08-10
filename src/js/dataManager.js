"use strict";

const dataManager = Object.create(null, {
    saveEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            .then(result => result.json())
        }
    },
    getEntries: {
        value: () => {
            return fetch("http://localhost:8088/entries?_order=desc&_sort=id")
            .then(result => result.json())
        }
    },
    removeEntry: {
        value: (entryId) => {
            return fetch(`http://localhost:8088/entries/${entryId}`, {
                method: "Delete"
            }).then(result => result.json())
        }
    },
    replaceEntry: {
        value: (entryId, entry) => {
            return fetch(`http://localhost:8088/entries/${entryId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
            .then(result => result.json())
        }
    }
});

module.exports = dataManager;