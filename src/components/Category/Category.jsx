import React, { useEffect } from 'react'
import { useState } from 'react'
import style from './category.module.css'

export default function Category() {



    const category = [
        {
            key: 'all',
            name: 'Все'
        },
        {
            key: 'chairs',
            name: 'Стулья'
        },
        {
            key: 'tables',
            name: 'Столы'
        },
        {
            key: 'sofa',
            name: 'Диван'
        },
        {
            key: 'light',
            name: 'Свет',
        }
    ]



    return (
        <div className={style.category_row}>
            {category.map(item => (
                <div key={item.key}> {item.name} </div>
            ))}
        </div>
    )
}
