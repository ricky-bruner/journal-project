"use strict";

let $ = require("jquery");

const entryManager = Object.create(null, {
    makeEntry: {
        value: (object) => {
            return `<div class="entry-card" id="entry-id--${object.id}">
                        <h2 id="title--${object.id}">${object.title}</h2>
                        <h4>-- ${object.date} --</h4>
                        <p id="content--${object.id}">${object.content}</p>
                        <div class="button-container">
                            <button class="edit-btn" id="edit--${object.id}">Edit This Post</button>
                            <button class="delete-btn" id="delete--${object.id}">Remove This Post</button>
                        </div>
                    </div>`
        }
    },
    makeList: {
        value: (data) => {
            $(".entry-list").empty();
            data.forEach(item => {
                $(".entry-list").append(entryManager.makeEntry(item));
            });
        }
    }
})

// function makeEntry(object){
//     return `<div class="entry-card" id="entry-id--${object.id}">
//                 <h2 id="title--${object.id}">${object.title}</h2>
//                 <h4>-- ${object.date} --</h4>
//                 <p id="content--${object.id}">${object.content}</p>
//                 <div class="button-container">
//                     <button class="edit-btn" id="edit--${object.id}">Edit This Post</button>
//                     <button class="delete-btn" id="delete--${object.id}">Remove This Post</button>
//                 </div>
//             </div>`
// }

// function makeList(data){
//     $(".entry-list").empty();
//     data.forEach(item => {
//         $(".entry-list").append(makeEntry(item));
//     });
// }

module.exports = entryManager;