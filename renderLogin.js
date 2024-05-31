import { loginUser } from "./api";

export function renderLogin() {
const loginHtml = `<div class="add-form">
      <input type="text" class="add-form-name" placeholder="Введите ваш логин" id="login-name" />
      <input type="password" class="add-form-name" placeholder="Введите ваш пароль" id="login-password" />
      <div class="add-form-row">
        <button class="add-form-button" id="login-button">Войти</button>
      </div>
    </div>
  </div>`
//todo 
//вставить разметку из логин нтмл в див с классом контейнер 
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", () => {
const login = document.getElementById("login-name");
const password = document.getElementById("login-password");
loginUser(login,password)
.then()
.catch()
  })
}