const addTask = document.querySelector('#addTask');
const newTask = document.querySelector('#voice-text');
const taskList = document.querySelector('#taskList');

addTask.addEventListener('click', function () {
  if (newTask.value === '') {
    return;
  }
  const li = document.createElement('li');
  li.innerHTML = `${newTask} <button>Eliminar</button>`;
  taskList.appendChild(li);
  newTask.value = '';
//
  const removeTask = li.querySelector('button');
  removeTask.addEventListener('click', function () {
    li.remove();
  });
});