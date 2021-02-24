import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


// components
import BackgroundVideo from './components/BackgroundVideo';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// includes
import './App.css';

function App() {
  return (
	 
	  <div>
		<BackgroundVideo/ >
		<Title/ >
		<Navbar/ >
		<Footer/ >
	  </div>  
	  
  );
}

export default App;
