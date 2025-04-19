function addTask() {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();
  if (value) {
    const ul = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
    input.value = '';
  }
}
module.exports = {
  addTaskToList: function(task, taskList) {
    if (task.trim()) {
      taskList.push(task);
      return true;
    }
    return false;
  }
};