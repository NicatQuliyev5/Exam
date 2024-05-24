import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getOne } from '../../services'
import { Grid } from '@mui/material'
import styles from './index.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

function Detail() {
    const [wine, setWine] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getOne(id).then((res) => {
            setWine(res.data.data)
        })
    }, [])

    return (
        <>
            <div className="container">
                {wine &&
                    <>
                        <Grid item xs={12}>
                            <div className={styles.card}>
                                <div className={styles.favs}>
                                    <FavoriteBorderIcon />
                                </div>
                                <div className={styles.cardImg}>
                                    <img src={wine.imgSrc} alt="" />
                                </div>
                                <div className={styles.cardBody}>
                                    <h3>{wine.title}</h3>
                                    <div className={styles.price}>
                                        <span>${wine.price}</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </>
                }
            </div>
        </>
    )
}

export default Detail