// const { createElement } = require("react");

//32-2 Recap API Concept , Intro to JSON
const person = {
  name: "toukir",
  age: 22,
  address: "Dhaka",
  profession: "student",
  country: "Bangladesh",
  favSubject: ["Math", "English", "Bangla", "ICT"],
  isMarried: false,
  friends: [
    { name: "Avi", age: 23 },
    { name: "1229", age: 24 },
    { name: "Salma", age: 25 },
    { name: "toukir", age: 26 },
  ],
  hasGF: false,
  gfName: "",
  siblings: ["sister", "brother"],
  isSingle: true,
  isRich: false,
  isHappy: true,
  isHealthy: true,
  isActive: true,
  isStudent: true,
  isEmployed: false,
  isEntrepreneur: false,
  isTraveler: true,
  isFoodie: true,
  isGamer: false,
  isReader: true,
  isWriter: false,
  isArtist: false,
  isMusician: false,
  isDancer: false,
  isSinger: false,
  isActor: false,
  isDirector: false,
  isProducer: false,
  isPhotographer: false,
  isBlogger: true,
  isVlogger: false,
  isYoutuber: false,
  isTiktoker: false,
  isInstagrammer: true,
  isFacebooker: true,
  isTwitterer: false,
  isLinkedIn: false,
  isSnapchatter: false,
  isRedditor: false,
  isQuoran: false,
  isPinterestUser: false,
  isTumblrUser: false,
  isMediumUser: false,
  isSubstackUser: false,
  isPatreonUser: false,
};
// json=javascript object notation
// 1. JSON is a data format that is used to store and exchange data.
// 2. JSON is a lightweight data format.
// 3. JSON is easy to read and write.
// 4. JSON is language independent.
// 5. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.

// JSON Data Types
// 1. String
// 2. Number
// 3. Object
// 4. Array
// 5. Boolean
// 6. Null

// Converting Object to JSON and JSON to Object
// 1. JSON.stringify() - Converts Object to JSON
// 2. JSON.parse() - Converts JSON to Object

// Example:

console.log(person, "\n\ntyepeof person:", typeof person);
const personJSON = JSON.stringify(person); //Object converted in to String
console.log(personJSON, "\n\ntypeof personJSON:", typeof personJSON); // string
const personParsed = JSON.parse(personJSON); //String converted in to Object
console.log(personParsed, "\n\ntypeof personParsed:", typeof personParsed); // object

//32-3 Load Json Data using Fetch Function

const loadData = () => {
  const res = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json()) //converting fetched data to json string
    .then((json) => console.log(json)); //printing json string data
};

//32-4 Recap Fetch() & Send and Console Each Data

const postData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayPost(data);
    });
};
const displayPost = (post) => {
  // 1. get the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML=""
  // console.log(post);
  post.forEach((p) => {
    //create new element
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="w-96 h-96 border-1  rounded-lg bg-white shadow-lg">
        <h1 class="text-center text-red-500 font-bold">${p.userId}</h1>
        <h1 class="text-center text-blue-700 font-semibold">${p.id}</h1>
        <h1 class="text-center font-bold text-2xl text-green-800">${p.title}</h1>
        <p class="text-center font-medium text-xl">${p.body}</p>
      </div>
    `;
    //add li to container
    postContainer.append(div);
    // console.log(p);
  });
};

//another example of fetch & display data
const readComment = () => {
  const url_ = "https://jsonplaceholder.typicode.com/comments";
  fetch(url_)
    .then((res) => res.json())
    .then((dat) => {
      //   console.log(dat);
      showComment(dat);
    });
};
const showComment = (comment) => {
  //  get the container
  const commentContainer = document.getElementById("comment-container");
  commentContainer.innerHTML=""
  // console.log(comment);
  comment.forEach((c) => {
    //   create li
    const li=document.createElement('li');
    // edit the inner html
    li.innerHTML=`postId ${c.postId} id: ${c.id} name: ${c.name} body: ${c.body} email: ${c.email}`

    // add li to container
    commentContainer.appendChild(li)
    // console.log(c);
  });
};

// 32-5 Load and Display Post title List in the UI
// for album
const readAlbums = () => {
  const url_al = "https://jsonplaceholder.typicode.com/albums";
  fetch(url_al)
    .then((res) => res.json())
    .then((dat) => {
      // console.log(dat);
      showAlbum(dat);
    });
};

const showAlbum = (album) => {
  // 1 get the container
  const albumContainer = document.getElementById("album-container");
  albumContainer.innerHTML=""
  album.forEach((p) => {
    // console.log(p.id,p.title,p.userId);
    //2 create new element
    const li = document.createElement("li");
    // li.innerText=p.title,p.id;
    li.innerHTML = `user id ${p.userId} and title ${p.title} and uid-${p.id}`;
    // add li to container
    albumContainer.appendChild(li);
  });
};



// todo
const readTodo=(todo)=>{
const url_todo='https://jsonplaceholder.typicode.com/todos'
fetch(url_todo)
.then(res=>res.json())
.then(dat=>{
    console.log(dat)
    displayTodo(dat);
})
}

const displayTodo=(todo)=>{
    // get the container
    const todoContainer=document.getElementById('todo-container');
    todoContainer.innerHTML=''
    todo.forEach((p)=>{
        // console.log(p);
        // crete element

    const div=document.createElement("div");
    div.innerHTML=`<div>
    <p>${p.completed===true?`<i class="fa-solid fa-square-check"></i>`:`<i class="fa-regular fa-square-check"></i>`}</p>
    <p>${p.id}</p>
    <p>${p.title}</p>
    <p>${p.userId}</p>
    
    </div>
    `
    todoContainer.appendChild(div);
    });
    

}