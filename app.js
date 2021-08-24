const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const submitBtn = document.querySelector('.btn');
const filterInputs = document.querySelector('#filter');
const taskLists = document.querySelector('.collection');
const clearTask = document.querySelector('.clear-tasks');

listenForTasks();

function listenForTasks() {
  form.addEventListener('submit', getInputText);
}

function getInputText(e) {
  if (taskInput.value === '') {
    alert('Please wright a task...');
  }
  // Create new list items
  const inputText = document.createElement('li');
  inputText.className = 'collection-item';
  inputText.appendChild(
    document.createTextNode(taskInput.value)
  );
  // Create the link
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  inputText.appendChild(link);

  taskLists.appendChild(inputText);

  taskInput.value = '';

  e.preventDefault();
}
