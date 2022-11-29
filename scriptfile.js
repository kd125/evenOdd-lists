let usersWord = "";

function updateWord(element){
  usersWord = element.value;
  console.log(usersWord);
}

let oddList = document.getElementById("odd");
let evenList = document.getElementById("even");

function handleSubmit() {
  let newListItem = document.createElement('LI');
  newListItem.innerText = usersWord;

  if(usersWord.length % 2 === 0){
    evenList.appendChild(newListItem);
  }
  else{
    oddList.appendChild(newListItem);
  }

  usersWord = "";
  document.getElementById("even-odd-form").reset();
}