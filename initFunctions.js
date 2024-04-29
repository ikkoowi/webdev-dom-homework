 import { renderCommentsFunc } from "./render";
 
 //add like function
 export function initLikeCommentListenersFunc({comments}) {
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
        renderCommentsFunc({comments});
      });
    }
  };

  //reply function

 export function initReplyToCommentFunc({comments}) {
    const commentElements = document.querySelectorAll('.comment');
    commentElements.forEach((comment, index) => {
      comment.addEventListener("click", () => {
        commentInputElement.value = `${comments[index].name}: \n ${comments[index].text}`
      });
    });
  };

  //обновляю список комментариев(+новые) 
  buttonElement.addEventListener("click", () => {
    const oldCommentsHtml = commentsElement.innerHTML;
    
    postCommentInfo();
    renderCommentsFunc({comments});

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
