import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
// import { HeaderDev } from "./components";
import { UserProvider } from './contexts'


function App() {
  return (
    <>
    <UserProvider>
      <Router>
        <header>
        <Navbar />
        </header>
        {/* <HeaderDev/> */}
       
        <Switch>
        <main style={{marginTop:80}}>
          <Menu />
          </main>
        </Switch>
       
        
      </Router>
      
      </UserProvider>
    
      
    </>
  );
}

export default App;
