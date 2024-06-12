import { initAuthLinkListener } from "./listeners.js";
import { user } from "./main.js";
import { postCommentInfo } from "./postCommentInfo.js"

export function renderForm(container) {
container.innerHTML = user ? `<div class="add-form">
<input type="text" class="add-form-name" value="${user.name}" readonly id="name-input" />
<textarea type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"
  id="comment-input"></textarea>
<div class="add-form-row">
  <button class="add-form-button" id="write-button">Написать</button>
</div>
</div>`: `<div> Пожалуйста, <a class="auth-link" href="#">авторизуйтесь</a>, чтобы оставить комментарий.</div>`;
if (user) {postCommentInfo()} else {initAuthLinkListener()};
}