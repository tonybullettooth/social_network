import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id: '1', name: 'Sonya'},
        {id: '2', name: 'Oleg'},
        {id: '3', name: 'German'},
        {id: '4', name: 'Any'},
        {id: '5', name: 'Vera'},
    ]
    let messagesData = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Meow'},
        {id: '3', message: 'Vzhuh'},
        {id: '4', message: 'Yo'},
        {id: '5', message: 'Yo'},
    ]
    let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )

};

export default Dialogs;