import './App.css';
import ThemeContext from './context/ThemeContext';
import ChangeThemeButton from './components/ChangeThemeButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { User } from './types/types';

async function getData() {
  try {
    const resultData = await axios.get('https://jsonplaceholder.typicode.com/users')
    if (resultData.status != 200) {
      throw new Error("axios, no data received");
    }
    return resultData.data;

    // const responseData = await fetch('https://jsonplaceholder.typicode.com/users')
    // if (!responseData.ok) {
    //   throw new Error("fetch, no data received");
    // }
    // const result: User[] = await responseData.json();
    // return result;
  }
  catch (error) {
    console.log(error);
  }
}

export default function App() {
  // const data = useContext(ThemeContext);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data: User[] = await getData() || [];
      setUsers(data);
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