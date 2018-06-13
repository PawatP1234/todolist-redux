function removeListItem (index) {
  document.getElementById(index).style.display = 'none';
}

function completeListItem (index) {
  document.getElementById(index).style.textDecoration = 'line-through';
  document.getElementById(index).style.color = 'green';
}

function editListItem (todoList) {
  console.log(todoList);
}

export const removeList = (index) => {
  removeListItem(index);
}

export const completeList = (index) => {
  completeListItem(index);
}

export const editList = (todoList) => {
  editListItem(todoList);
}