import { useContext } from 'react'
import UserContext from '../context/UserContext'
// import type { User } from '../types/types';
import UserTwo from './UserTwo';

export default function UserOne() {
    const context = useContext(UserContext);

    if (!context) throw new Error("UserContext not found");
    const { users, theme } = context;

    console.log("UserOne component", users);

    return (
        <>
            <h1>User One</h1>
            <div>
                {users.map(user => (
                    <p key={user.id}>{user.id} - {user.name}</p>
                ))}
            </div>
            <h1>Theme One: {theme}</h1>
            <hr />
            <UserTwo />
        </>
    )
}
