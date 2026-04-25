import './App.css';
import { UserContextProvider } from './context/UserContext';
import ChangeThemeButton from './components/ChangeThemeButton';

export default function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ChangeThemeButton />
      </UserContextProvider>
    </div>
  )
}