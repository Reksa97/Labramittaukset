import axios from 'axios'
const baseUrl = 'http://localhost:3001/measurements'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(res => res.data)
}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(res => res.data)
}

export default { getAll, create, remove, update }