import {useEffect, useState} from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState()

  const requestForData = async () => {
    const res = await axios.get("http://localhost:8000/")
    console.log(res.data, res.status)
    setData(res.data)
  }
  useEffect(() => {
      requestForData()
  }, [])

  const updateData = (newMsg) => {
    setData(newMsg)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         {data && data.message}
        </a>
      </header>
      <button onClick={() => updateData({message: "New message"})}>Click Me</button>
    </div>
  );
}

export default App;
