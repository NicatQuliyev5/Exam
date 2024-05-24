import React from 'react'
import { Button } from '@mui/material';
import styles from "./index.module.scss"
import { Table } from 'antd';
import { useContext } from 'react';
import { FavContext } from '../../context/FavContext';
import { Helmet } from 'react-helmet';

function Fav() {
  const { fav, setFav, localFav, setLocalFav } = useContext(FavContext)
  console.log(fav)
  const columns = [
    {
      title: 'Image',
      dataIndex: 'imgSrc',
      render: (record) => {
        return <img src={record} alt="" width={100} />
      }
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Action',
      render: (record) => {
        return (
          <Button variant="contained" type="submit" color='error' onClick={() => {
            setFav([])
            setLocalFav([])
          }}>Delete</Button>
        )
      }
    },
  ];
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favorite Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={styles.favTable}>
        <Table
          columns={columns}
          dataSource={fav}
        />
      </div>
    </div>
  )
}

export default Fav