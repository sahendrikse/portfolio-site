import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// components

// includes
import '../App.css';

function Articles() {
  return (
		<section class="cover">
			<div class="cover__hero">
			  <div class="hero__item hero__item--right">
				<h1 class="hero__title">Articles</h1>
				<div class="hero__sep sep sep--primary"></div>
				<h2 class="hero__subtitle">Articles go on this page.</h2>
			  </div>
		    </div>		
		</section>
  );
}

export default Articles;
