import axios from "axios";

export const API = axios.create({
    baseURL: 'http://localhost:3001',
});

export const getAll = async () => {
    try{
        const request = await API.get('/api');
        // return request.then((response) => response.data)
       
        return request.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
    
}

