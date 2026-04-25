import { useContext } from 'react'
import UserContext from '../context/UserContext'
// import type { User } from '../types/types';

export default function UserTwo() {
    const context = useContext(UserContext);

    if (!context) throw new Error("UserContext not found");
    const { users, theme, changeTheme, setTheme } = context;
    console.log("UserTwo component", users);
    return (
        <>
            <h1>User Two</h1>
            <div>
                {users.map(user => (
                    <p key={user.id}>{user.name} - {user.id}</p>
                ))}
            </div>
            <h1>Theme Two: {theme}</h1>
            <button onClick={changeTheme}>Change Theme Hook at UserTwo</button>
            <button onClick={() => setTheme("Muthukannan")}>setTheme at UserTwo</button>
        </>
    )
}
