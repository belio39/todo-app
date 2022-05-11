"use strict";
const form = document.getElementById("myForm");
const createTodo = (e) => {
    console.log("dhdgdg");
    let title = document.getElementById("textInput");
    let description = document.getElementById("textarea");
    let date = document.getElementById("dateInput");
    fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title.value,
            description: description.value,
            date: date.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
        if (data.error) {
            data.error;
            return;
        }
    })
        .catch((error) => {
        console.log(error);
    });
};
document.getElementById("myBtn").addEventListener("click", createTodo);
console.log(document.getElementById("myBtn"));
// When a user clicks the button, open the modal
const button = document.getElementById("myBtn");
if (button != null) {
    button.onclick = function () {
        if (modal != undefined) {
            modal.style.display = "block";
        }
    };
}
// When a user clicks on <span> (x), close the modal
const span = document.getElementsByClassName("close")[0];
if (span != null) {
    span.onclick = function () {
        if (modal != null) {
            modal.style.display = "none";
        }
    };
}
// When a user clicks anywhere outside of the modal, close it
const modal = document.getElementById("todoModal");
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};
