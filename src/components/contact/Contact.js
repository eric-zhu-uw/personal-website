import React from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='contact' id='contact'>
				<h3 className='title'>Want to get in touch?</h3>
				<p className='subtitle'>I'm interested in pursing challenging internships or freelance development work.</p>
				<p className='subtitle'>Contact me at ericzhu77@gmail.com</p>
				<div className='links'>
					<a className='link' href='https://github.com/eric-zhu-uw'>Github</a>
					<a className='link' href='https://www.linkedin.com/in/eric-zhu-097435138/'>LinkedIn</a>
					<a className='link' href='/pdf/Eric-Zhu-Resume.pdf'>Resume</a>
				</div>
			</div>
		);
	}
}
