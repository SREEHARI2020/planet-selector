
import {useState,useEffect}from 'react';
import axios from 'axios';
import './App.css';
import BodyComponent from './components/BodyComponent';
import Navbar from './components/Navbar';

function App() {
const [planets, setPlanets] = useState([]);
const [selected, setSelected] = useState([]);

  useEffect(() => {
  
  const FetchData =async()=>
  {
    const {data}=await axios('https://assignment-machstatz.herokuapp.com/planet')
  console.log("value",data);
  setPlanets(data)
  }
   FetchData();
  }, [])
  

  return (
    <div className="App">
      <Navbar/>
      <BodyComponent planets={planets} setSelected={setSelected} selected={selected} setPlanets={setPlanets} />
    </div>
  );
}

export default App;
