import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { deleteOne, getAll, post } from '../../services';
import { Button } from '@mui/material';
import styles from "./index.module.scss"
import { Table } from 'antd';
import { WineAddSchema } from '../../validations/AddValidation';
import { Helmet } from 'react-helmet';
function Add() {
    const [wines, setWines] = useState([])
    useEffect(() => {
        getAll().then((res) => {
            setWines(res.data.data)
        })
    }, [])

    const formik = useFormik({
        initialValues: {
            title: '',
            imgSrc: '',
            price: 0,
        },
        onSubmit: async (values, { resetForm }) => {
            await post(values)
            resetForm()
        },
        validationSchema: WineAddSchema
    });

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
                        deleteOne(record._id)
                        const filtered = [...wines].filter((w) => w._id !== record._id)
                        setWines(filtered)
                    }}>Delete</Button>
                )
            }
        },

    ];
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title} />
                    {formik.errors.title && formik.touched.title && <span style={{ color: "red" }}>{formik.errors.title}</span>}
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        name="price"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.price} />
                    {formik.errors.price && formik.touched.price && <span style={{ color: "red" }}>{formik.errors.price}</span>}
                    <TextField
                        id="outlined-basic"
                        label="Image Source"
                        variant="outlined"
                        name="imgSrc"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.imgSrc} />
                    {formik.errors.imgSrc && formik.touched.imgSrc && <span style={{ color: "red" }}>{formik.errors.imgSrc}</span>}
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
                <Table
                    columns={columns}
                    dataSource={wines}
                />
            </div>
        </>
    )
}

export default Add