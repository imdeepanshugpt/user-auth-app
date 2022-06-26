import axios from "axios";

const baseURL = "http://localhost:3000";

export const registerAPI = async(data) => {
    const URL = baseURL + "/users";
    try {
        const response = await axios.post(URL, data);
        return response;
    } catch (error) {
        return error;
    }
};

export const loginAPI = async(data) => {
    const URL = baseURL + "/users/login";
    try {
        const response = await axios.post(URL, data);
        return response;
    } catch (error) {
        return error;
    }
};