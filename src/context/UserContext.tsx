import { createContext, useEffect, useState, type ReactNode } from "react"
import type { UserContextType, User } from "../types/types";
import axios from 'axios';

const UserContext = createContext<UserContextType | null>(null);

async function getData() {
    try {
        const resultData = await axios.get('https://jsonplaceholder.typicode.com/users')
        if (resultData.status != 200) {
            throw new Error("axios, no data received");
        }
        return resultData.data;

        // const responseData = await fetch('https://jsonplaceholder.typicode.com/users')
        // if (!responseData.ok) {
        //   throw new Error("fetch, no data received");
        // }
        // const result: User[] = await responseData.json();
        // return result;
    }
    catch (error) {
        console.log(error);
    }
}

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const defaultTheme = localStorage.getItem("theme") || "yellow";
    const [theme, setTheme] = useState(defaultTheme);
    const changeTheme = () => {
        setTheme((data => (data == "antiquewhite" ? "darkblue" : "antiquewhite")))
    }
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        async function fetchData() {
            const data: User[] = await getData() || [];
            setUsers(data);
        }
        fetchData();
        localStorage.setItem("theme", theme);
    }, [theme])

    return (
        <UserContext.Provider value={{ users, theme, changeTheme, setTheme }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;