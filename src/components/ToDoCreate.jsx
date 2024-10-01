import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import styles from '../css/todoCreate.module.css'

const ToDoCreate = ({ onCreateNewTodo }) => {
    const [todo, setTodo] = useState("");


    const createNewTodo = () => {

        if (todo.length > 0) {
            const newToDo = {
                id: Math.floor((Math.random() * 25648) / Math.random()),
                content: todo
            }
            onCreateNewTodo(newToDo);
            setTodo('');
        } else {
            return;
        }
    }

    return (
        <div style={{ backgroundColor: '#A6192E', height: '200px' }}>
            <div className={`container d-flex justify-content-center `} >
                <div className={`d-flex flex-column gap-3 pt-5 ${styles.todoCreate}`}>
                    <div>
                        <Input value={todo} onChange={(e) => { setTodo(e.target.value) }} />
                    </div>
                    <div>
                        <Button
                            color='dark'
                            outline
                            style={{ width: "100%" }}
                            onClick={createNewTodo}
                        >
                            Add
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ToDoCreate