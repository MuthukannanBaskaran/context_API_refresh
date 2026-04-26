import { useContext } from 'react'
import UserContext from '../context/UserContext'
import LanguageContext from '../context/LanguageContext';

export default function UserTwo() {
    const context = useContext(UserContext);
    if (!context) throw new Error("UserTwo: UserContext not found");
    const { users, theme, changeTheme, setTheme } = context;

    const languageContext = useContext(LanguageContext);
    if (!languageContext) throw new Error("UserTwo: languageContext not found");
    const { language, setLanguage, changeLanguage } = languageContext;

    console.log("UserTwo component", users);
    return (
        <>
            <h1>User Two</h1>
            <div>
                {users.map(user => (
                    <p key={user.id}>{user.name} - {user.id}</p>
                ))}
            </div>
            <h1>User Two: {theme}</h1>
            <h1>User Two: {language}</h1>
            <hr />
            <button onClick={changeTheme}>Change Theme Hook at UserTwo</button>
            <hr />
            <button onClick={() => { setTheme("Muthukannan"); setLanguage("Maths") }}>setTheme at UserTwo</button>
            <hr />
        </>
    )
}
