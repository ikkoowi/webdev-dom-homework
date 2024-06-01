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

export function loginUser (login, password) {
    return fetch(
        "https://wedev-api.sky.pro/api/user/login",
        {
            method: "POST",
            body: JSON.stringify({
                login,
                password,
            }),
        }).then((response) => {
            if (response.status === 400) {
                throw new Error('Неправильный логин или пароль');
            }
            else if (response.status === 500) {
                throw new Error('Сервер упал');
            }
            else {
                return response.json();
            }
        })
};