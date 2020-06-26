import React, { useState }  from 'react';  
import api from '../../services/api';

import logo from '../../assets/logo.jpg';

export default function Login({ history }) {
  const [email, setEmail ] = useState('');

  async function handSubmit(event) {    
  	event.preventDefault();

  	const response = await api.post('/sessions', {email: email});

  	const { _id } =  response.data;

  	localStorage.setItem('user', _id);

  	history.push('/dashboard');
  }

	return (
		<>   
			<img src={logo} alt="Clean House" />

	  		<p>Place your e-mail to access our services:</p>

	  		<form onSubmit={handSubmit}>	  	  
		  	  	<input 
			  	    type="email" required
			  	    id="email" 
			  	    placeholder="Your e-mail" 
			  	    value={email}
			  	    onChange={event => setEmail(event.target.value)}
		  	  	/>
				<button className="btn" type="submit">Enter</button>
	  		</form>
	    </>
  )
}