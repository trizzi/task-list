const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const submitBtn = document.querySelector('.btn');
const filterInputs = document.querySelector('#filter');
const taskLists = document.querySelector('.collection');
const clearTask = document.querySelector('.clear-tasks');

listenForTasks();

function listenForTasks() {
  // Get task list
  form.addEventListener('submit', getInputText);

  // delete task list
  taskLists.addEventListener('click', deleteTasklist);

  // Clear all task list
  clearTask.addEventListener('click', removeAllTasks);

  // filter through tasks
  filterInputs.addEventListener(
    'keypress',
    getFilteredInputs
  );
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

// delete tasklist
function deleteTasklist(e) {
  if (
    e.target.parentElement.classList.contains('delete-item')
  ) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  e.preventDefault();
}

// clear all tasks
function removeAllTasks() {
  taskLists.innerHTML = '';
}

// filtered inputs
function getFilteredInputs(e) {
  const filterValue = e.target.value.toLowerCase();
  console.log('filtervalue is working', filterValue);
  document
    .querySelectorAll('.collection-item')
    .forEach(function (task) {
      const item = task.firstChild.textContent;
      console.log('item is working', item);
      if (item.toLowerCase().indexOf(filterValue) != -1) {
        task.style.display = 'block';
        console.log('task is working', task);
      } else {
        task.style.display = 'none';
      }
    });
}
