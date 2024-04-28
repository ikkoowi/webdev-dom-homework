import { initLikeCommentListeners, initReplyToComment } from "./initFunctions.js";

export function renderComments({ comments }) {
    const commentsElement = document.getElementById('comments');

    const commentsHtml = comments.map((comment, index) => {
        return `<li class="comment">
            <div class="comment-header">
              <div>${comment.name}</div>
              <div>${comment.date}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
               ${comment.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button class="like-button ${comments[index].isLiked ? "-active-like" : ""}" data-index="${index}" data-like-counts="${comment.likes}" ></button>
              </div>
            </div>
          </li> `;
    })
        .join("");

    commentsElement.innerHTML = commentsHtml;
    initLikeCommentListeners();
    initReplyToComment();
};