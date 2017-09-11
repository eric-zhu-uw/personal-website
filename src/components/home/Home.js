import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topHome: false,
			bottomHome: false
		}

		this.setTopHome = this.setTopHome.bind(this);
		this.setBottomHome = this.setBottomHome.bind(this);
	}

	setTopHome() {
		if(!this.state.topHome) {
			this.setState({
				'topHome': true
			})
			return;
		}
		this.setState({
			'topHome': false
		})

	}

	setBottomHome() {
		if(!this.state.bottomHome) {
			this.setState({
				'bottomHome': true
			})
			return;
		}
		this.setState({
			'bottomHome': false
		})
	}

	render() {
		return (
			<div>
				<div className='homeContainer'>
					<div className='homeTitle'>
						<h1 className='title'> Eric Zhu </h1>
						<p className='subtitle'> Software Developer </p>
						<p className='subtitle'> Find me on Github </p>
					</div>
					<div className='topHome' onMouseEnter={this.setTopHome} onMouseLeave={this.setTopHome}>
						<div style={{'display': this.state.topHome ? 'block' : 'none'}} className='topHomeText'>
							<p className='info'>For any business or freelance inquiries, send me a message at ericzhu77@gmail.com</p>
							<button className='button'>Github</button>
							<button className='button'>Check out my resume</button>
						</div>
					</div>
					<div className='bottomHome' onMouseEnter={this.setBottomHome} onMouseLeave={this.setBottomHome}>
						<div style={{'display': this.state.bottomHome ? 'block' : 'none'}} className='bottomHomeText'>
							<Link to='about' className='link'>About</Link>
							<Link to='portfolio' className='link'>Portfolio</Link>
							<Link to='contact' className='link'>Contact</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}