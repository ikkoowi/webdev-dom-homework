import { getComments } from "./api.js";
import { renderComments } from "./render.js";


export function getCommentsInfo(comments) {

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
      renderComments({ comments });
    })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          alert("Кажется, у вас сломался интернет, попробуйте позже");
        } else {
          alert(error);
        }
      })
  };
  