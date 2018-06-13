function removeListItem (index) {
  document.getElementById(index).style.display = 'none';
}

function completeListItem (index) {
  document.getElementById(index).style.textDecoration = 'line-through';
  document.getElementById(index).style.color = 'green';
}

function editListItem () {
  document.getElementById('formHide').style.display = 'none';
  const temp = document.getElementById('changeTodo').value;
  document.getElementById('changeTodo').value = '';
  return temp;
}

function openEditer (index) {
  document.getElementById('formHide').style.display = 'block';
  return index;
}

export const removeList = (index) => {
  removeListItem(index);
}

export const completeList = (index) => {
  completeListItem(index);
}

export const editList = () => {
  return editListItem();
}

export const openEdit = (index) => {
  return openEditer(index);
}