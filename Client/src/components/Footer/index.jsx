import React from 'react'
import styles from "./index.module.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  console.log("salam")
  return (
    <>
      <footer>
        <div className="container">
          <div className={styles.socialMedias}>
            <ul>
              <li><FacebookIcon /></li>
              <li><TwitterIcon /></li>
              <li><YouTubeIcon /></li>
              <li><InstagramIcon /></li>
            </ul>
          </div>
          <div className={styles.colorLib}>
            <p>Copyright ©2024 All rights reserved | This template is made with <FavoriteIcon />  by Colorlib</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer