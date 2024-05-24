import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./index.module.scss"

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <a href="">
                                <img src="https://preview.colorlib.com/theme/wines/images/logo.png.webp" alt="" />
                            </a>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to={"/"}>HOME</Link> <sup></sup></li>
                                <li><a href="">ABOUT</a> <sup></sup></li>
                                <li><a href="">WINES</a> <sup></sup></li>
                                <li><a href="">SHOP</a> <sup></sup></li>
                                <li><a href="">CONTACT</a> <sup></sup></li>
                                <li><Link to={"/add"}>ADD</Link> <sup></sup></li>
                                <li><Link to={"/fav"}>FAVORITE</Link> <sup></sup></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header