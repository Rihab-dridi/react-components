import React, {component} from 'react';


function Description() {
    return (
      <div style ={{ margin:"30px", textAlign:"center", backgroundColor:" rgb(233, 229, 229)"}}>
       <div className="education">  
       <h2> 2014: <span style={{fontWeight:"100"}}> Baccalaureate degree in expeerimental sciences </span></h2>
       <h2> 2016: <span style={{fontWeight:"100"}}> the Preparatory institute degree  </span></h2> 
       <h2> 2020: <span style={{fontWeight:"100"}}> Engineering  degree  </span></h2> 
       </div> 
       <div className="logos" >
       <img className="logo1"src="/Etap.png" alt="ETAP" />
       <img className="logo2"src="/geoconseil.png" alt="GEOCONSEIL" />
       <img className="logo2"src="/sonede.png" alt="SONEDE" />
       <img className="logo3"src="/ONM.png" alt="ONM" />
       </div>
      </div>
    );
  }
  
  export default Description;