import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import type { User } from '../types/types';

export default function TestThemeChangeTwo() {
    const data: User[] = useContext(ThemeContext);
    console.log("TestThemeChangeTwo component", data);
    return (
        <>
            <h1>Change Theme Two</h1>
            <div>
                {data.map(user => (
                    <p key={user.id}>{user.name} - {user.id}</p>
                ))}
            </div>
        </>
    )
}
