///---------------- Way #1 of building the DOM ---------------\\\\
// function queryElements(){
//     let elements = {};
//     elements.body = document.querySelector("body");
//     elements.script = document.querySelector("script");
//     elements.footer = document.createElement("footer");
//     elements.main = document.createElement("main");
//     elements.header = document.createElement("header");
//     elements.formContainer = document.createElement("div");
//     elements.entryContainer = document.createElement("div");
//     elements.formContainer.setAttribute("id", "form");
//     elements.entryContainer.setAttribute("class", "entry-list");
//     return elements

// }
// function buildDom(){
//     let elements = queryElements();
//     elements.body.insertBefore(elements.footer, elements.script);
//     elements.body.insertBefore(elements.main, elements.footer);
//     elements.body.insertBefore(elements.header, elements.main);
//     let main = document.querySelector("main");
//     main.appendChild(elements.entryContainer);
//     main.insertBefore(elements.formContainer, elements.entryContainer);
// }

///------------------- Way #2 of building the DOM ---------------\\\\

function buildDOM(){
    document.querySelector("body").innerHTML = 
        `<header></header>
        <main>
            <div id="form"></div>
            <div class="entry-list"
        </main>
        <footer></footer>`
}
module.exports = buildDOM;