
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



function App() {
  const [Mode, setMode] = useState('light')//whether dark mode enabled or not
  const [ButtonName, setButtonName] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(Mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    setButtonName("Enable Light Mode")
    showAlert("Darkmode has been enabled", "success")

  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Darkmode has been enabled", "success")
  }
}
  return (
   <>
   <Router>
   <Navbar title="TextToggler" mode={Mode} toggleMode={toggleMode} ButtonName={ButtonName} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About mode={Mode} />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter anything to analyze" showAlert={showAlert} mode={Mode}  />
          </Route>
      
  </Switch>
   
   

   </div>
   </Router>
    </>
    );
}

export default App;
