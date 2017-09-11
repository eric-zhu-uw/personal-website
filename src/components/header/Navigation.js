import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.scrollTo = this.scrollTo.bind(this);
	}

	scrollTo(id) {
		document.querySelector(id).scrollIntoView({behavior: 'smooth'});
	}

	render() {
		return (
			<div className='navigation' style={{display: this.props.display}}>
				<Link to='/about' className='link' onClick={() => this.scrollTo('#about')}>About</Link>
				<Link to='/portfolio' className='link' onClick={() => this.scrollTo('#portfolio')}>Portfolio</Link>
				<Link to='/contact' className='link' onClick={() => this.scrollTo('#contact')}>Contact</Link>
				<a href='/pdf/Eric-Zhu-Resume.pdf' className='link'>Resume</a>
			</div>
			);
	}
}