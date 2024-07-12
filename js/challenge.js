const counterElement = document.getElementById("counter");

let counter = 0;
let isPaused = false; 
let intervalId;

const updateCounterDisplay = () => {
counterElement.innerText=counter;
};


const startCounter = () => {
    intervalId = setInterval(() => {
      if (!isPaused) {
        counter++;
        updateCounterDisplay();
      }
    }, 1000);
  };
startCounter();

  const minusBtn = document.getElementById("minus");
  const plusBtn = document.getElementById("plus")

  const incrementCounter = () => {
    counter++;
    updateCounterDisplay();
  };
  const decrementCounter = () => {
    counter--;
    updateCounter
  };
  minusBtn.addEventListener("click",decrementCounter);
  plusBtn.addEventListener("click",incrementCounter);

  const likeBtn = document.getElementById("heart");
  const likesList = document.querySelector('.likes');

 
  const addLike = () => {
    const likeItem = document.createElement('li');
    likeItem.innerText = `Number ${counter} has been liked!`;
    likesList.appendChild(likeItem);
  };
  
  
  likeBtn .addEventListener('click', addLike);
  const pauseBtn = document.getElementById("pause");

const togglePause = () => {
  isPaused = !isPaused;
  pauseBtn.innerText = isPaused ? "Resume" : "Pause"; 
};

pauseBtn.addEventListener("click", togglePause);

  const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');


const addComment = (event) => {
  event.preventDefault();
  const commentText = commentInput.value;
  if (commentText) {
    const commentItem = document.createElement('p');
    commentItem.innerText = commentText;
    commentList.appendChild(commentItem);
    commentInput.value = '';
  }
};
commentForm.addEventListener('submit', addComment);