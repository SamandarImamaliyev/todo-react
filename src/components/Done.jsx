import React, { useState } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlineRestore } from "react-icons/md";
import styles from '../css/done.module.css'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Done = ({ done, index, onDeleteDone, onRestoreDone }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deleteDone = () => {
        onDeleteDone(done.id);
    }

    const restore = () => {
        onRestoreDone(done.id);
    }
    return (
        <div className={styles.done}>
            <div style={{ fontWeight: "bold" }}>
                <span className={styles.index}>{index + 1}.</span>
                {done.content}
            </div>
            <div className={styles.iconsGroup}>
                <div>
                    <MdOutlineRestore className={styles.icons} onClick={restore} />
                </div>
                <div >
                    <RiDeleteBin5Fill className={styles.icons} onClick={toggle} />
                    <Modal isOpen={modal} toggle={toggle} centered={true}>
                        <ModalHeader toggle={toggle}>{done.content}</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={
                                () => {
                                    deleteDone()
                                    toggle()
                                }
                            }>
                                Confirm
                            </Button>
                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        </div>
    )
}

export default Done