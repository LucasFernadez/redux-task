import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './redux/todosSlice';

function App() {
  const [task, setTask] = useState('');
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Tareas con Redux</h1>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => handleDelete(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
