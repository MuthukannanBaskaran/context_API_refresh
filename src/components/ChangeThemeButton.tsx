import { useContext } from 'react'
import UserContext from '../context/UserContext'
import UserOne from './UserOne';
// import type { User } from '../types/types';

export default function ChangeThemeButton() {
    const context = useContext(UserContext);

    if (!context) throw new Error("UserContext not found");
    const { users, theme, changeTheme } = context;

    console.log('ChangeThemeButton component', users);
    return (
        <div >
            <button onClick={changeTheme}>Change</button>
            <h1>Button: {theme}</h1>
            <UserOne />
        </div>
    )
}
