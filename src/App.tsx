import { useContext } from 'react';
import './App.css';
import ChangeThemeButton from './components/ChangeThemeButton';
import UserContext from './context/UserContext';

export default function App() {
  const themeContext = useContext(UserContext);
  if (!themeContext) throw new Error("UserContext not found");
  const { theme } = themeContext;
  return (
    <div className={`App ${theme}`}>
      <ChangeThemeButton />
    </div>
  )
}