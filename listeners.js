export function checkEmptyFields() {
    const nameInputElement = document.getElementById('name-input');
    const commentInputElement = document.getElementById('comment-input');
    const buttonElement = document.getElementById('write-button');

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
};