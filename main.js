import { getComments, postComment } from "./api.js";
import { renderCommentsFunc } from "./render.js";

"use strict";
const nameInputElement = document.getElementById('name-input');
const commentInputElement = document.getElementById('comment-input');
const buttonElement = document.getElementById('write-button');
const commentsElement = document.getElementById('comments');
const addFormElement = document.querySelector('.add-form');

//users list
let comments = [];



//add like function
 

//reply function




//подключение комментариев api
function getCommentsInfo() {

  getComments().then((responseData) => {

    const appComments = responseData.comments.map((comment) => {
      const formatDate = (apiDate) => {
        const date = new Date(apiDate);
        const options = {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        };
        return date.toLocaleString("ru", options).replace(",", "");
      };

      const apiDate = comment.date;
      const formattedDate = formatDate(apiDate);

      return {
        name: comment.author.name,
        date: formattedDate,
        text: comment.text,
        likes: comment.likes,
        isLiked: false,
      };
    });

    comments = appComments;
    renderCommentsFunc({ comments });
  })
    .catch((error) => {
      if (error.message === "Failed to fetch") {
        alert("Кажется, у вас сломался интернет, попробуйте позже");
      } else {
        alert(error);
      }
    })
};
const commentsElementNew = commentsElement.textContent = 'Подождите пожалуйста, комментарии загружаются...'
getCommentsInfo();

//добавление новых комментариев api
function postCommentInfo() {
  postComment({ commentInputElement, nameInputElement })
    .then((responseData) => {
      nameInputElement.value = '';
      commentInputElement.value = '';
      return getCommentsInfo();
    })
    .catch((error) => {
      if (error.message === "Failed to fetch") {
        alert("Кажется, у вас сломался интернет, попробуйте позже");
      } else if (error.status === 400) {
        alert('Неправильно введен текст');
      } else if (error.status === 500) {
        alert("Сервер упал");
      }
    });
};

//обновляю список комментариев(+новые) 
buttonElement.addEventListener("click", () => {
  const oldCommentsHtml = commentsElement.innerHTML;

  postCommentInfo();
  renderCommentsFunc({ comments });

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