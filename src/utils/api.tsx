import axios from "axios";
import { NewUser } from "../types/types";
import { API_URL } from "../App";

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
        callback(response.data[0]);
    } catch (error) {
        console.error(error);
    }
}

//Get User Collections/Posts
export async function getUserPosts(userId: string, callback: Function) {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}/posts`);
        callback(response.data);
    } catch (error) {
        console.error(error);
    }
}

//Post New Collection
export async function postCollection(userId: string, collection: FormData, callback: Function) {
    try {
        const response = await axios.post(`${API_URL}/users/${userId}/posts`, collection);

        callback(response);
    } catch (error) {
        console.error(error);
    }
}

//Get Username
export async function getUsername(userId: string, callback: Function) {
    try {
        const response = await axios.get(`${API_URL}/users/username/${userId}`);
        callback(response);
    } catch (error) {
        console.error(error);
    }
}

//Get All Usernames
export async function getAllUsernames(callback: Function) {
    try {
        const response = await axios.get(`${API_URL}/users/`);
        callback(response);
    } catch (error) {
        console.error(error);
    }
}
