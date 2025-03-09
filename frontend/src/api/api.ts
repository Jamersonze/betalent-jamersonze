import { Employee } from "../types/employee/main";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data as Employee[];
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};