import { useEffect, useState } from "react"
import ToDoCreate from "./components/ToDoCreate"
import ToDoList from "./components/ToDoList"
import DoneList from "./components/DoneList";
import styles from './css/app.module.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(storedTodos)
    }
  }, []);

  useEffect(() => {
    if (dones.length > 0) {
      localStorage.setItem('dones', JSON.stringify(dones));
    }
  }, [dones]);

  useEffect(() => {
    if (localStorage.getItem('dones')) {
      const storedDones = JSON.parse(localStorage.getItem('dones'));
      setDones(storedDones)
    }
  }, []);

  const createNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const doneTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    createNewDone(id);
    if (newTodos.length == 0) {
      localStorage.removeItem('todos');
    }
    setTodos([...newTodos]);
  }

  const createNewDone = (id) => {
    const newDone = todos.filter((todo) => todo.id == id);
    setDones([...dones, ...newDone]);
  }

  const deleteDone = (id) => {
    const newDones = dones.filter((done) => done.id != id);
    if (newDones.length == 0) {
      localStorage.removeItem('dones');
    }
    setDones([...newDones]);
  }

  const removeFromDoneList = (id) => {
    const newDoneList = dones.filter((done) => done.id != id);
    if (newDoneList.length == 0) {
      localStorage.removeItem('dones');
    }
    restore(id);
    setDones([...newDoneList]);
  }
  const restore = (id) => {
    const restoredTask = dones.filter((done) => done.id == id);
    setTodos([...todos, ...restoredTask]);
  }

  const editTodo = (id, newValue) => {
    const editedTodo = todos.map((todo) => {
      if (todo.id != id) {
        return todo;
      } else {
        return {
          id: todo.id,
          content: newValue
        }
      }
    })
    setTodos([...editedTodo]);

    // const toDo = todos.filter((todo) => todo.id == id);
    // const newTodos = todos.filter((todo) => todo.id != id);
    // const editedTodo = {
    //   id: toDo[0].id,
    //   content: newValue
    // }
    // setTodos([...newTodos, editedTodo]);
  }

  return (
    <div >
      <ToDoCreate onCreateNewTodo={createNewTodo} />
      <div className={styles.todoList}>
        <ToDoList todos={todos} onDoneTodo={doneTodo} onEditTodo={editTodo} />
        <DoneList dones={dones} onDeleteDone={deleteDone} onRestoreDone={removeFromDoneList} />
      </div>
    </div>
  )
}

export default App
