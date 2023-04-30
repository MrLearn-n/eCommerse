import React from 'react'
import style from './product.module.css'

export default function Product({info, onAdd}) {
    return (
        <div className={style.product}>
            <img src={'./img/' + info.img} className={style.img} alt = {info.title}/>
            <h2 className={style.title}>{info.title}</h2>
            <p className={style.desc}>{info.desc}</p>
            <b className={style.price}>{info.price}$</b>
            <div className={style.add_cart_btn} onClick = {() => onAdd(info)}>+</div>
        </div>
    )
}
