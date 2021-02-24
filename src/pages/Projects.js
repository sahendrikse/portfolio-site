import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// react components
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {useEffect, useState} from "react";
import { posts } from "../components/ProjectPosts";


function Projects(props) {
	
  const posts = useState([]);
  

  
 return (
    <div>

     <section class="cover">
			<div class="cover__hero">
			  <div class="hero__item hero__item--right">
				<h1 class="hero__title">Projects</h1>
				<div class="hero__sep sep sep--primary"></div>
				<h2 class="hero__subtitle">Projects go on this page.</h2>
			  </div>
		    </div>		
		</section>
		
    </div>
  );
}
	
 

export default Projects;
