import { postComment } from "./api.js";
import { getCommentsInfo } from "./getCommentsInfo.js";
import { postCommentInfo } from "./postCommentInfo.js";
import { renderComments } from "./render.js";

"use strict";
const nameInputElement = document.getElementById('name-input');
const commentInputElement = document.getElementById('comment-input');
const commentsElement = document.getElementById('comments');
const addFormElement = document.querySelector('.add-form');
const buttonElement = document.getElementById('write-button');


//users list
export let comments = [];

commentsElement.textContent = 'Подождите пожалуйста, комментарии загружаются...'
getCommentsInfo(comments);
postCommentInfo();