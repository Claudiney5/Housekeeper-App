import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.jpg';

function App() {
  const [email, setEmail ] = useState('');

  async function handSubmit(event) {    
  	event.preventDefault();

  	const response = await api.post('/sessions', {
  		email: email});

  		console.log(response);
  }


  return (
    <div className="container">
      <div className="content">
      	<img src={logo} alt="Clean House" />

      	<p>Place your e-mail to access our services:</p>

      	<form onSubmit={handSubmit}>
      	  
      	  <input 
      	    type="email" 
      	    id="email" 
      	    placeholder="Your e-mail" 
      	    value={email}
      	    onChange={event => setEmail(event.target.value)}
      	  />

					<button className="btn" type="submit">Enter</button>

      	</form>
      </div>
      

    </div>
  );
}

export default App;
