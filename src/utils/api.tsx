import axios from "axios";
import { NewUser, UserProfile } from "../types/types";

const API_URL = process.env.REACT_APP_API_URL;

//Create New User
export async function createUser(newUser: NewUser, coverImg: File | undefined, profileImg: File | undefined) {
    try {
        const formData: FormData = new FormData();
        for (const [key, value] of Object.entries(newUser)) {
            formData.append(key, value);
        }

        if (coverImg) {
            formData.append("images", coverImg);
        }

        if (profileImg) {
            formData.append("images", profileImg);
        }

        const response = await axios.post(`${API_URL}/users/`, formData);
        return response;
    } catch (error) {
        console.error(error);
    }
}

//Get User Profile
export async function getUserProfile(username: string, callback: Function) {
    try {
        const response = await axios.get(`${API_URL}/users/${username}`);
        callback(response);
    } catch (error) {
        console.error(error);
    }
}
