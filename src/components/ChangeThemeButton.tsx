import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import TestThemeChangeOne from './TestThemeChangeOne';
import type { User } from '../types/types';

export default function ChangeThemeButton() {
    const data: User[] = useContext(ThemeContext);
    console.log('ChangeThemeButton component', data);
    return (
        <div >
            <button>Change</button>
            <TestThemeChangeOne />
        </div>
    )
}
