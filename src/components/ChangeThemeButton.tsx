import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import TestThemeChangeOne from './TestThemeChangeOne';

export default function ChangeThemeButton() {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div >
            <button>Change</button>
            <TestThemeChangeOne />
        </div>
    )
}
