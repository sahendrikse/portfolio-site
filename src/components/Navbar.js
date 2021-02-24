import React from 'react';
import classes from './Navbar.module.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Articles from '../pages/Articles';
import Advisories from '../pages/Advisories';
import Media from '../pages/Media';

const Navbar = () => {
	return (
	
	<Router>
	
	<Route exact path='/' component={Home} />
		<Route exact path='/projects' component={Projects} />
		<Route exact path='/articles' component={Articles} />
		<Route exact path='/advisories' component={Advisories} />
		<Route exact path='/media' component={Media} />
	
	<div className={classes.nav__container} >
		<div className={classes.nav__button} ><Link to='/projects'><span>PROJECTS</span></Link></div>
		<div className={classes.nav__button} ><a href="https://medium.com/@sahendrikse"><span>ARTICLES</span></a></div>
		<div className={classes.nav__button} ><Link to='/advisories'><span>ADVISORIES</span></Link></div>
		<div className={classes.nav__button} ><Link to='/media'><span>MEDIA</span></Link></div>
	</div>
	</Router>
	);
}

export default Navbar;