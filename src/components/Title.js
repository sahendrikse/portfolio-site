import React from 'react';
import styles from './Title.module.css';

const Title = () => {
	const pathname = window.location.pathname //returns the current url minus the domain name
	
	return (
	
	<section>
		<div className={styles.title}><a href='/'><span>SAHENDRIK.SE</span></a></div>
		
	</section>
	);
}

export default Title;