import React, { useState } from 'react'
import { GrEdit } from "react-icons/gr";
import { AiOutlineFileDone } from "react-icons/ai";
import styles from '../css/todo.module.css'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ToDo = ({ todo, index, onDoneTodo, onEditTodo }) => {

    const [editValue, setEditValue] = useState(todo.content);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [editModal, setEditModal] = useState(false);
    const changeEditModalVisibility = () => setEditModal(!editModal);

    const doneTodo = () => {
        onDoneTodo(todo.id);
    }

    const editTodo = () => {
        onEditTodo(todo.id, editValue);
    }
    return (
        <div className={styles.todo}>
            <div style={{ fontWeight: "bold" }}>
                <span className={styles.index}>{index + 1}.</span>
                {todo.content}
            </div>
            <div className={styles.iconsGroup}>
                <div >
                    <AiOutlineFileDone className={styles.icons} onClick={toggle} />
                    <Modal isOpen={modal} toggle={toggle} centered={true}>
                        <ModalHeader toggle={toggle}>{todo.content}</ModalHeader>
                        <ModalBody>
                            Are you sure you have finished?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={
                                () => {
                                    doneTodo()
                                    toggle()
                                }
                            }>
                                Done
                            </Button>
                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <GrEdit className={styles.icons} onClick={changeEditModalVisibility} />
                    <Modal isOpen={editModal} toggle={changeEditModalVisibility} centered={true}>
                        <ModalHeader toggle={changeEditModalVisibility}>Edit data</ModalHeader>
                        <ModalBody>
                            <Input
                                value={editValue}
                                type="textarea"
                                rows={5}
                                onChange={(e) => { setEditValue(e.target.value) }}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => {
                                changeEditModalVisibility();
                                editTodo();
                            }}>
                                Edit
                            </Button>
                            <Button color="secondary" onClick={changeEditModalVisibility}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ToDo