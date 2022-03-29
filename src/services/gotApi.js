import axios from 'axios';

const gotApi = axios.create({
    baseURL: "http://universities.hipolabs.com"
})

export default gotApi