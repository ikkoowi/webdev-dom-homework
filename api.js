export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/karina-ibragimova2/comments", {
        method: "GET"
    }).then((response) => {
        return response.json();
    })
};

export function postComment({commentInputElement, nameInputElement}) {
    return fetch(
        "https://wedev-api.sky.pro/api/v1/karina-ibragimova2/comments",
        {
            method: "POST",
            body: JSON.stringify({
                text: commentInputElement.value
                    .replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
                    .replaceAll('"', "&quot;"),
                name: nameInputElement.value
                    .replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
                    .replaceAll('"', "&quot;"),
                // date: getCurrentDate(),
                // likes: 0,
                // isLiked: false,
            }),
        }).then((response) => {
            if (response.status === 400) {
                throw new Error('Что-то пошло не так');
            }
            else if (response.status === 500) {
                throw new Error('Сервер упал');
            }
            else {
                return response.json();
            }
        })
};

function getCurrentDate() {
    const currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear().toString().slice(2);
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (date <= 9) {
      date = "0" + date;
    }
  
    if (month <= 9) {
      month = "0" + month;
    }
  
    if (hour <= 9) {
      hour = "0" + hour;
    }
  
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }
    return `${date}.${month}.${year} ${hour}:${minutes}`;
  };