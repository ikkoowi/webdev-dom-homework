import { postComment } from "./api.js";
import { getCommentsInfo } from "./getCommentsInfo.js";
import { checkEmptyFields } from "./listeners.js";

export function postCommentInfo() {
    const nameInputElement = document.getElementById('name-input');
    const commentInputElement = document.getElementById('comment-input');
    const buttonElement = document.getElementById('write-button');

checkEmptyFields();


    buttonElement.addEventListener("click", () => { 
        
        if (nameInputElement.value.trim() === "" || commentInputElement.value.trim() === "" ) {
            buttonElement.disabled = true;
            return;
        }      
        postComment({ commentInputElement, nameInputElement })
        .then((responseData) => {
          nameInputElement.value = '';
          commentInputElement.value = '';
          return getCommentsInfo();
        })
        .catch((error) => {
          if (error.message === "Failed to fetch") {
            alert("Кажется, у вас сломался интернет, попробуйте позже");
          } else {
            alert(error.message);
          }
        });
      });
    
  };