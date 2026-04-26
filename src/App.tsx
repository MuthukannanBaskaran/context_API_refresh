import './App.css';
import { UserContextProvider } from './context/UserContext';
import ChangeThemeButton from './components/ChangeThemeButton';
import { LanguageContextProvider } from './context/LanguageContext';

export default function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <UserContextProvider>
          <ChangeThemeButton />
        </UserContextProvider>
      </LanguageContextProvider>
    </div>
  )
}