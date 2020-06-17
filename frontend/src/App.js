import React from 'react';
import './App.css';

import Routes from './routes'

import keeper from './assets/housekeeper2.png'

function App() {
  return (
  	<>
    <div className="container">    	
  		<div className="content">
    		<Routes />      	
  		</div>
    </div>	

  	<div className="card">
  	    <img src={keeper} alt="housekeeper image" />
  	</div>
    </>
  );
}

export default App;
