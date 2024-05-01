import { renderComments } from "./render.js";
import { postCommentInfo } from "./main.js";

const buttonElement = document.getElementById('write-button');
let comments = [];
const nameInputElement = document.getElementById('name-input');
const commentInputElement = document.getElementById('comment-input');
const commentsElement = document.getElementById('comments');

//обновляю список комментариев(+новые) 
buttonElement.addEvent("click", () => {
    const oldCommentsHtml = commentsElement.innerHTML;

    postCommentInfo();
    renderComments({ comments });

});

//Делаю кнопку недоступной, если поля пустые
buttonElement.disabled = true;

nameInputElement.addEventListener("input", () => {
    if (nameInputElement.value.trim().length != 0) {
        return (buttonElement.disabled = false);
    } else {
        return (buttonElement.disabled = true);
    }
});

commentInputElement.addEventListener("input", () => {
    if (commentInputElement.value.trim().length != 0) {
        return (buttonElement.disabled = false);
    } else {
        return (buttonElement.disabled = true);
    }
});