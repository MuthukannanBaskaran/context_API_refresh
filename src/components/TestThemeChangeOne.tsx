import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import type { User } from '../types/types';

export default function TestThemeChangeOne() {
    const data: User[] = useContext(ThemeContext);
    console.log("data testing", data);
    return (
        <div>
            {data.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}
