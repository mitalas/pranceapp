//////declare variables
const form = document.getElementById('form');
const posts = document.getElementById('posts');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
///build submit eventlistener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
    console.log('button clicked');
    ///prevent default
});
//prevent users from submiting empty form
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = 'Post cannot be blank';
        console.log('failure')
    } else {
        acceptData();
        msg.innerHTML = '';
    }
};
// Store data from input fields
let data = {

};
let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPost();
}
// createPost
let createPost = () => {
    posts.innerHTML += `<div><p>${data.text}</p>
     <span class="options"> 
     <button onClick = "editPost(this)" > Edit </button> 
     <button onClick = "deletetPost(this)" > Trash </button> 
      </span></div>`;
    input.value = "";
};
// delete data
let deletetPost = (e) => {
    e.parentElement.parentElement.remove();
};
// edit post
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

};