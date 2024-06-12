import { loginUser } from "./api.js";
import { container, setUser } from "./main.js";
import { renderMainPage } from "./renderMainPage.js";

export function renderLogin(container) {
  const loginHtml = `<div class="add-form">
      <input type="text" class="add-form-name" placeholder="Введите ваш логин" id="login-name" />
      <input type="password" class="add-form-name" placeholder="Введите ваш пароль" id="login-password" />
      <div class="add-form-row">
        <button class="add-form-button" id="login-button">Войти</button>
      </div>
    </div>
  </div>`
  container.innerHTML = loginHtml;
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", () => {
    const login = document.getElementById("login-name").value;
    const password = document.getElementById("login-password").value;
    loginUser(login, password)
      .then((user) => {
        setUser(user.user);
        renderMainPage(container);
      })
      .catch((error) => {
        if (error.message = "Failed to fetch") {
          alert("Кажется, у вас сломался интернет, попробуйте позже");
          } else {
            alert(error.message);
          }
      }) 
      //todo дописать кетч
  })
}