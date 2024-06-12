import { postComment } from "./api.js";
import { getCommentsInfo } from "./getCommentsInfo.js";
import { postCommentInfo } from "./postCommentInfo.js";
import { renderComments } from "./render.js";
import { renderMainPage } from "./renderMainPage.js";

"use strict";
const nameInputElement = document.getElementById('name-input');
const commentsElement = document.getElementById('comments');
const addFormElement = document.querySelector('.add-form');
const buttonElement = document.getElementById('write-button');
export const container = document.querySelector(".container");

export let user = null;

export function setUser(value) {
user = value;
}

export let comments = [];

commentsElement.textContent = 'Подождите пожалуйста, комментарии загружаются...';
renderMainPage(container);