import React from 'react'
import ToDo from './ToDo'
import styles from '../css/todoList.module.css'

const ToDoList = ({ todos, onDoneTodo, onEditTodo }) => {
    return (
        <div className={`container d-flex justify-content-center`} >
            <div className={`d-flex flex-column pb-3 ${styles.todos}`} >
                <div className={styles.heading}>ToDo List</div>
                <div className={styles.todo}>
                    {todos.map((todo, index) => (
                        <ToDo todo={todo} key={todo.id} index={index} onDoneTodo={onDoneTodo} onEditTodo={onEditTodo} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ToDoList