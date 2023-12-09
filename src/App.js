import React from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
  setalert({
    msg :message,
    type :type            
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
  }
  const togglemode=()=>{
   if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#3b424a'
    showalert("Dark mode has ben enabled !","success")
   }
   else{
    setmode('light');
    document.body.style.backgroundColor='white'
    showalert("Light mode has ben enabled !","success")
   }
  }
  return (
   <>
   <BrowserRouter>
<Alert alert={alert}/>
<Navbar title="TextUtils7" mode={mode}  toggleMode={togglemode}/>
<div className="container">

  
<Routes>
          <Route path="/about" element={ <About mode={mode} />}>
           
          </Route>
          <Route path="/" element={  <TextForm heading="Enter the text to convert" mode={mode} haha={showalert} />}>
        
  
          </Route>
        </Routes>
  
</div>


</BrowserRouter>
   </>
   
  );
}

export default App;
