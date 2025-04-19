const { addTaskToList } = require('./app.js');

test('adds a valid task to the list', () => {
  const tasks = [];
  const result = addTaskToList('Buy milk', tasks);
  expect(result).toBe(true);
  expect(tasks.length).toBe(1);
  expect(tasks[0]).toBe('Buy milk');
});

test('does not add empty task', () => {
  const tasks = [];
  const result = addTaskToList('    ', tasks);
  expect(result).toBe(false);
  expect(tasks.length).toBe(0);
});