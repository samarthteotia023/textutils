
import './App.css';
import React, { useState } from 'react'



import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState("light");
  const[enable,setenable]=useState("Enable dark")
  const[alert,setalert]=useState(null);

  const showalert=(message)=>{
    setalert(message);
    setTimeout(() => {
      setalert(null);
    }, 1300);
  }
  const tooglemode=()=>{
    if(mode==='light'){
      setmode("dark");
      setenable('Enable light')
      showalert('dark mode enabled')
      document.body.style.backgroundColor='grey';
   
    }
    else{
      setmode("light");
      setenable("Enable dark")
      showalert('light mode enabled')
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <Router>
  < div >
   
<Navbar  title="Textutills" mode={mode} enable={enable} tooglemode={tooglemode}/>
<Alerts showalert={alert}/>
<Routes>
          <Route path="/about" element={<About/>}/>

          
          
          
          <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text" mode=
{mode}/>}>

 
          </Route>
        </Routes>


        
   </div>
   </Router>
  
  );
 
}


export default App;
