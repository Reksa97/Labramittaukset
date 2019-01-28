import axios from 'axios'
const baseUrl = 'http://localhost:3001/measurements'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

export default { getAll }