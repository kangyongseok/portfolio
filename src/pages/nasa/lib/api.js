import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=tOl1RlDz9EtojfE74jR0TN8NGfZUENf6sxIsOMfh&date=${date}`);
}