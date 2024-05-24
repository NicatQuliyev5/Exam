import axios from "axios"


export async function getAll() {
    try {
        const res = await axios.get("http://localhost:2405/wines")
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function getOne(id) {
    try {
        const res = await axios.get(`http://localhost:2405/wines/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function deleteOne(id) {
    try {
        const res = await axios.delete(`http://localhost:2405/wines/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export async function post(payload) {
    try {
        const res = await axios.post(`http://localhost:2405/wines`, payload)
        return res
    } catch (error) {
        console.log(error)
    }
}