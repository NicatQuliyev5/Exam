const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const { Schema } = mongoose

const DB = "mongodb+srv://nijat5:yaxshi2004@final-exam-last.ciudjbq.mongodb.net/?retryWrites=true&w=majority&appName=Final-Exam-last"
const PORT = 2405

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const winesSchema = new Schema(
    {
        title: { type: String, require: true },
        imgSrc: { type: String, require: true },
        price: { type: Number, require: true },
    }, { timestamps: true }
)

const Wines = mongoose.model("Wines", winesSchema)

app.get('/wines', async (req, res) => {
    const wines = await Wines.find({})
    res.send({
        message: "Data get is Successfully",
        data: wines,
        error: null
    })
})

app.get('/wines/:id', async (req, res) => {
    const { id } = req.params
    const wine = await Wines.findById(id)
    res.send({
        message: "Data get is Successfully",
        data: wine,
        error: null
    })
})

app.delete('/wines/:id', async (req, res) => {
    const { id } = req.params
    await Wines.findByIdAndDelete(id)
    const wines = await Wines.find({})
    res.send({
        message: "Data get is Successfully",
        data: wines,
        error: null
    })
})

app.post('/wines', async (req, res) => {
    const newWine = Wines({ ...req.body })
    await newWine.save()
    const wines = await Wines.find({})
    res.send({
        message: "Data get is Successfully",
        data: wines,
        error: null
    })
})

mongoose.connect(DB).then(()=>console.log("conntected")).catch((err) => {
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})