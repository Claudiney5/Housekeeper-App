import React, { useEffect, useState } from 'react';  
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
  const [services, setServices] = useState([]);


  useEffect(() => {
    async function loadServices() {
    	const user_id = localStorage.getItem('user');
    	const response = await api.get('/services', {
    		headers: { user_id }
    	});

    	setServices(response.data);
    } 

    loadServices();
  }, []);

	return (
		<>
      <ul className='service-list'>
        {services.map(service => (
        	  <li key={service._id}>
        	    <header style={{ backgroundImage: `url(${service.thumbnail_url})`}} />
        	    <strong>{service.task}</strong>
        	    <span>{service.price}</span>

        	  </li>
        	))}
      </ul>
		</>
	)
}