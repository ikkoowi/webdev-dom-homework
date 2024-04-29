function initLikeCommentListeners() {
  const likeCommentButtonsElements = document.querySelectorAll(".like-button");

  for (const likeCommentButtonElement of likeCommentButtonsElements) {

    let likesCounts = likeCommentButtonElement.dataset.likeCounts;
    const index = likeCommentButtonElement.dataset.index;

    likeCommentButtonElement.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!comments[index].isLiked) {
        likesCounts++;
        comments[index].likes = likesCounts;
        comments[index].isLiked = true;
      }
      else {
        likesCounts--;
        comments[index].likes = likesCounts;
        comments[index].isLiked = false;
      }
      renderCommentsFunc({ comments });
    });
  }
};

function initReplyToComment() {
  const commentElements = document.querySelectorAll('.comment');
  commentElements.forEach((comment, index) => {
    comment.addEventListener("click", () => {
      commentInputElement.value = `${comments[index].name}: \n ${comments[index].text}`
    });
  });
};

export function renderCommentsFunc({ comments }) {
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