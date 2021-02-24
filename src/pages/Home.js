import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// components
import Popover from '@material-ui/core/Popover';

// includes
import '../App.css';

function Home() {
  return (
		<section class="cover">
			<div class="cover__hero">
			  <div class="hero__item hero__item--right">
				<h1 class="hero__title">Hacking. Programming. Culture.</h1>
				<div class="hero__sep sep sep--primary"></div>
				<h2 class="hero__subtitle">Bringing the latest in cybersecurity trends, technology and culture through innovative projects and articles.</h2>
				
			  </div>
		    </div>				
		</section>
		
  );
}

export default Home;
