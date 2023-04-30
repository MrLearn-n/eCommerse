import React from 'react'
import Product from './Product/Product'
import style from './main.module.css'

export default function Main({data , onAdd}) {    
    return (
        <main className={style.main}>
            {data.map(item => (
                <Product info = {item} key = {item.id} onAdd = {onAdd}/>
            ))}
        </main>
    )
}
