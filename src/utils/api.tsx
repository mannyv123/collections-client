import axios from "axios";
import { newUser } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;

//Create New User
export async function createUser(newUser: newUser) {
    try {
        const response = await axios.post(`${API_URL}/user/`, newUser);
        return response;
    } catch (error) {
        console.error(error);
    }
}
