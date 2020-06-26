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
			<div className="container">    	
				<div className="content"> 
					<ul className='service-list'>
						{services.map(service => (
							<li className='list' key={service._id}>
								<header style={{ backgroundImage: `url(${service.thumbnail_url})`}} />
								<p><strong>{service.task}</strong></p>
								<p><span>{service.price}</span></p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}