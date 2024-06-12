import { getCommentsInfo } from "./getCommentsInfo.js";
import { comments } from "./main.js";
import { renderForm } from "./renderForm.js";

export function renderMainPage(container) {
container.innerHTML = `<ul class="comments" id="comments"> </ul>
<div class="form"> </div>`;
getCommentsInfo(comments).then(()=> {
    renderForm(document.querySelector(".form"))
})
}