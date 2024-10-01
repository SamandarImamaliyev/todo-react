import React from 'react'
import styles from '../css/doneList.module.css'
import Done from './Done'

const DoneList = ({ dones, onDeleteDone, onRestoreDone }) => {
    return (
        <div className='container d-flex justify-content-center' >
            <div className={`d-flex flex-column pb-3 ${styles.dones}`}>
                <div className={styles.heading}>Done List</div>
                <div className={styles.done}>
                    {dones.map((done, index) => (
                        <Done done={done} key={done.id} index={index} onDeleteDone={onDeleteDone} onRestoreDone={onRestoreDone} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoneList