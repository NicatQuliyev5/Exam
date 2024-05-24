import React, { useEffect, useState } from 'react'
import { getAll } from '../../services'
import Grid from '@mui/material/Grid';
import styles from './index.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import useLocalStorage from '../../hooks/UseLocalStorage';

function Home() {
    const [wines, setWines] = useState([])
    const { fav, setFav, localFav, setLocalFav } = useLocalStorage(wines)
    useEffect(() => {
        getAll().then((res) => {
            setWines(res.data.data)
        })
    }, [])


    return (
        <>
            <div className="container">
                <section id='hero'></section>
                <section id='wines'>
                    <select>
                        <option defaultValue>Select sort method</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                        <option value="19">Ascending</option>
                        <option value="91">Descending</option>
                    </select>

                    <div className={styles.cards}>
                        <Grid container spacing={4}>
                            {wines && wines.map((wine) => {
                                return (
                                    <>
                                        <Grid item xs={4}>
                                            <div className={styles.card}>
                                                <div className={styles.favs} onClick={() => {
                                                    const doubleFav = wines.find((w) => w._id == wine._id)
                                                    if (doubleFav) {
                                                        setFav([...wines])
                                                        setLocalFav([...wines])
                                                    } else {
                                                        const updated = wines.filter((u) => u._id != wine._id)
                                                        setFav([...wines, updated])
                                                        setLocalFav([...wines, updated])
                                                    }
                                                }}>
                                                    <FavoriteBorderIcon />
                                                </div>
                                                <Link to={`detail/${wine._id}`}>
                                                    <div className={styles.cardImg}>
                                                        <img src={wine.imgSrc} alt="" />
                                                    </div>
                                                    <div className={styles.cardBody}>
                                                        <h3>{wine.title}</h3>
                                                        <div className={styles.price}>
                                                            <span>${wine.price}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Grid>
                                    </>
                                )
                            })}
                        </Grid>
                    </div>
                </section>
            </div>
            <section id='about'></section>
            <div className="container">
                <section id='worker'></section>
                <section id='blog'></section>
                <section id='shop'></section>
            </div>
        </>
    )
}

export default Home