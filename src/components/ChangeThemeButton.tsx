import { useContext } from 'react'
import UserContext from '../context/UserContext'
import UserOne from './UserOne';
import LanguageContext from '../context/LanguageContext';

export default function ChangeThemeButton() {
    const userContext = useContext(UserContext);
    if (!userContext) throw new Error("UserContext not found");
    const { users, theme, changeTheme } = userContext;

    const languageContext = useContext(LanguageContext);
    if (!languageContext) throw new Error("languageContext not found");
    const { language, setLanguage, changeLanguage } = languageContext;
    console.log('ChangeThemeButton component', users);
    return (
        <div >
            <button onClick={changeTheme}>Change</button>
            <h1>Button: {theme}</h1>
            <hr />
            <h2>ChangeThemeButton Language: {language}</h2>
            <button onClick={changeLanguage}>ChangeThemeButton Changing Language</button>
            <hr />
            <UserOne />
        </div>
    )
}
