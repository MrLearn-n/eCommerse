import React from 'react'
import { FaTrash } from 'react-icons/fa';
import style from './cart.module.css';

export default function Cart({info, onDel}) {
    return (
        <div className={style.cartProduct}>
            <img src={'./img/' + info.img} className={style.img} alt = {info.title}/>
            <h2 className={style.title}>{info.title}</h2>
            <p className={style.price}>{info.price}$</p>
            <FaTrash className={style.btn_delete} onClick = {() => onDel(info.id)}/>
        </div>
    )
}
