import './App.css';
import ThemeContext from './components/ThemeContext';
import ChangeThemeButton from './components/ChangeThemeButton';
import { useEffect, useState } from 'react';
import axios from 'axios';

async function getData() {
  try {
    const resultData = await axios.get('https://jsonplaceholder.typicode.com/users')
    return resultData.data;
  }
  catch (error) {
    console.log(error);
  }
}

export default function App() {
  // const data = useContext(ThemeContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setUsers(data);
      console.log(data[0]);
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <ThemeContext.Provider value={users}>
        <ChangeThemeButton />
      </ThemeContext.Provider>
    </div>
  )
}