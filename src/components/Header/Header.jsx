import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart/Cart';
import style from './header.module.css'

export default function Header({product, onDel}) {

    let [state, setstate] = useState(false);

    const showProduct = (e) => {
        let sum = 0;

        e.forEach(element => {
            sum += Number.parseFloat(element.price);    
        });

        return (
            <>
                {e.map(item => (
                    <Cart key={item.id} info = {item} onDel = {onDel}/>
                ))}
                <p className={style.cart_price_sum}>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
            </>
        )
    }

    const showNothing = () => {
        return (
            <>
                <h2 className={style.empty}>Товаров нет</h2>
            </>
        )
    }

    return (
        <header>
            <div className={style.flex__content}>
                <span className={style.logo}>House Staff</span>
                <div className={style.flex__content}>
                    <FaShoppingCart  className={`${style.cartBtn} ${state && style.cartActiveBtn}`} onClick={() => setstate(state = !state)} />
                    <nav>
                        <ul className={style.ul}>
                            <li className={style.li}>Про нас</li>
                            <li className={style.li}>Контакты</li>
                            <li className={style.li}>Кабинет</li>
                        </ul>
                    </nav>
                </div>
                {state && (
                    <div className={style.menu_cart}>
                        {product.length > 0 ?
                            showProduct(product) : showNothing()}
                    </div>
                )}

               
               
            </div>
            <div className={style.presentation}></div>
        </header>
    )
}
