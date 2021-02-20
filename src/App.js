
import {useState,useEffect}from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import LeftTab from './components/tabs/LeftTab';
import RightTab from './components/tabs/RightTab'

function App() {
const [planets, setPlanets] = useState([]);
const [selected, setSelected] = useState([]);

  useEffect(() => {
  
  const FetchData =async()=>
  {
    const {data}=await axios('https://assignment-machstatz.herokuapp.com/planet')
  
  setPlanets(data)
  }
   FetchData();
  }, [])
  

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'><LeftTab planets={planets} setSelected={setSelected} selected={selected} setPlanets={setPlanets}/></Route>
        <Route exact path='/planet'><RightTab selected={selected}/></Route>
    
      </Switch>
    </div>

    </Router>
  );
}

export default App;
