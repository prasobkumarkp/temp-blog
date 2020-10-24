import { jsonPlaceholderUrl } from "../env/endPoints";

export const getBlogPots = async () => {
    try {
        return await fetch(`${jsonPlaceholderUrl}/posts`).then(response => response.json());
    } catch (error) {
        // log api errors
    }
}