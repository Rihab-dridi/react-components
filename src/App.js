
import React, {component} from 'react';
import Profile from './components/Profile/profile';
import NavBar from  './components/NavBar/NavBar';
import Description from './components/description/description';

import './App.css';

function App() {
  return (
    <div className="App" style ={{ border: "solid black", maxWidth:"80%", marginLeft:"10%", height:"600px", backgroundColor:"white"}}>
      <NavBar/>
     <div className="feed" >
       <Profile/>
     <Description/>
     </div>
    
    </div>
  );
}

export default App;
