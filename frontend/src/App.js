import React from 'react';
import './App.css';

import logo from './assets/logo.jpg';

function App() {
  return (
    <div className="container">
      <div className="content">
      	<img src={logo} alt="Clean House" />

      	<p>Place your e-mail to access our services:</p>

      	<form>
      	  <label htmlFor="email">E-MAIL *</label>
      	  <input 
      	    type="email" 
      	    id="email" 
      	    placeholder="Your e-mail" 
      	  />

					<button type="submit">Enter</button>

      	</form>
      </div>
      

    </div>
  );
}

export default App;
