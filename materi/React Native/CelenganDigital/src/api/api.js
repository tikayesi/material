import axios from 'axios';

export default axios.create({
    baseURL: `http://192.168.43.29:3006/`
});