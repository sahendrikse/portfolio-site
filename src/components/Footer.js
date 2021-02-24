import React from 'react';
import styles from './Footer.module.css';
import cx from 'classnames';

import Popover from '@material-ui/core/Popover';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
	return (
	
			<div className={styles.social__bar} >
			
			  <span className={cx(styles.social__ico, styles.btc)} >3NQWaQ28B6pjZ8E837i8cpMM151zf47Ycs</span>
			  <a href="https://www.linkedin.com/in/sahendrikse/"><span className={styles.social__ico} ><LinkedInIcon style={{ fontSize: 40 }}>linkedin</LinkedInIcon></span></a>
			  <a href="https://www.twitter.com/sahendrikse"><span className={styles.social__ico} ><TwitterIcon style={{ fontSize: 40 }}>twitter</TwitterIcon></span></a>
			  <a href="https://github.com/sahendrikse"><span className={styles.social__ico} ><GitHubIcon style={{ fontSize: 40 }}>github</GitHubIcon></span></a>
			  <span className={styles.social__ico} ><VpnKeyIcon style={{ fontSize: 40 }}>vpnkey</VpnKeyIcon></span>
			  <span className={styles.social__ico} ><MailIcon style={{ fontSize: 40 }}>mail</MailIcon></span>
			  
			</div>
			
			
	);
}

export default Footer;