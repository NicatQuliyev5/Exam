import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { deleteOne, getAll, post } from '../../services';
import { Button } from '@mui/material';
import styles from "./index.module.scss"
import { Table } from 'antd';
import { useContext } from 'react';
import { FavContext } from '../../context/FavContext';

function Fav() {
  const { fav, setFav, localFav, setLocalFav } = useContext(FavContext)
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
            
          }}>Delete</Button>
        )
      }
    },
  ];
  return (
    <div className="container">
      <Table
        columns={columns}
        dataSource={fav}
      />
    </div>
  )
}

export default Fav