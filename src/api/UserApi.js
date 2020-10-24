import { jsonPlaceholderUrl } from "../env/endPoints";


export const signInWithEmailAndPassword = async (email, password) => {
    try {
        const users = await fetch(`${jsonPlaceholderUrl}/users`).then(response => response.json());
        const user = users.find(user => user.email === email && user.username === password);
        return { IsSuccess: !!user, user };
    } catch (error) {
        // log api errors
    }
}


export const getUsers = async () => {
    try {
        return await fetch(`${jsonPlaceholderUrl}/users`).then(response => response.json());
    } catch (error) {
        // log api errors
    }
}