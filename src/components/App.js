import React from 'react';
import { HashRouter } from 'react-router-dom'

// components
import Header from './header/Header.js';
import Home from './home/Home.js';
import About from './about/About.js';
import Project from './project/Project.js';
import Contact from './contact/Contact.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter>
				<div>
					<Header />
					<div className='container'>
						<About />
						<Project />
						<Contact />
					</div>
				</div>
			</HashRouter>
		);
	}

}