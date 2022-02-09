import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessagePropsType = {
    message: string,
}
const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )

};

export default Dialogs;