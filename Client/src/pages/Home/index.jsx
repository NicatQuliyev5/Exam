import React, { useContext, useEffect, useState } from 'react'
import { getAll } from '../../services'
import Grid from '@mui/material/Grid';
import styles from './index.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FavContext } from '../../context/FavContext';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Helmet } from "react-helmet";
import { TextField } from '@mui/material';


function Home() {
    const [wines, setWines] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [filtered, setFiltered] = useState([])
    const { fav, setFav, localFav, setLocalFav } = useContext(FavContext)
    useEffect(() => {
        getAll().then((res) => {
            setWines(res.data.data)
        })
    }, [])



    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container">
                <section className={styles.hero} style={{ marginBottom: "50px" }}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <img src="https://preview.colorlib.com/theme/wines/images/hero_2.jpg.webp" alt="" />
                            <div className={styles.slideTitle}>
                                <span>WELCOME</span>
                                <h1>WINES FOR EVERYONE</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg.webp" alt="" />
                            <div className={styles.slideTitle}>
                                <span>WELCOME</span>
                                <h1>WINES FOR EVERYONE</h1>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section id='wines'>

                    <div className="filtered">
                        <select>
                            <option defaultValue>Select sort method</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                            <option value="19">Ascending</option>
                            <option value="91">Descending</option>
                        </select>
                        <TextField
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name" />
                    </div>

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
                                                        const updated = wines.filter((u) => u._id != wine._id)
                                                        setFav(updated)
                                                        setLocalFav(updated)
                                                    } else {
                                                        setFav([...wines,updated])
                                                        setLocalFav([...wines,updated])
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
            <section className={styles.about}>
                <div className={styles.slideTitle}>
                    <span>WELCOME</span>
                    <h2>WINES FOR EVERYONE</h2>
                </div>
            </section>
            <div className="container">
                <section className={styles.worker}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
                                </div>
                                <div className={styles.cardBody}>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                                    <p>— Allie Smith</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
                                </div>
                                <div className={styles.cardBody}>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                                    <p>— Allie Smith</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
                                </div>
                                <div className={styles.cardBody}>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                                    <p>— Allie Smith</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img src="https://preview.colorlib.com/theme/wines/images/person_2.jpg" alt="" />
                                </div>
                                <div className={styles.cardBody}>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?”</p>
                                    <p className={styles.workerName}>— Allie Smith</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className={styles.blog}>
                    <div className={styles.blogHead}>
                        <h2>Wine's Blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</p>
                        <a href="">View All Products ---</a>
                    </div>
                    <div className={styles.cards}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <div className={styles.card}>
                                    <div className={styles.cardImg}>
                                        <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg" alt="" />
                                    </div>
                                    <div className={styles.cardBody}>
                                        <a href="" className={styles.firstAhref}>What You Need To Know About Premium Rosecco</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <a href="" className={styles.secondAhref}>Dave Rogers in News</a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={styles.card}>
                                    <div className={styles.cardImg}>
                                        <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg" alt="" />
                                    </div>
                                    <div className={styles.cardBody}>
                                        <a href="" className={styles.firstAhref}>What You Need To Know About Premium Rosecco</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <a href="" className={styles.secondAhref}>Dave Rogers in News</a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={styles.card}>
                                    <div className={styles.cardImg}>
                                        <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg" alt="" />
                                    </div>
                                    <div className={styles.cardBody}>
                                        <a href="" className={styles.firstAhref}>What You Need To Know About Premium Rosecco</a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <a href="" className={styles.secondAhref}>Dave Rogers in News</a>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home