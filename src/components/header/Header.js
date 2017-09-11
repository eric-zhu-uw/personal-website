import React from 'react';

// components
import Navigation from './Navigation.js';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navState: false
		}
		this.manageNavState = this.manageNavState.bind(this);
	}

	manageNavState() {
		const val = this.state.navState;
		this.setState({ navState: !val });
	}

	render() {
		return (
			<div>
				<div className='mobileHeaderContainer' style={{width: this.state.navState ? '200px' : '0'}}>
					<div className='letterWrapper' style={{display: this.state.navState ? 'flex' : 'none'}}>
						<p className='letterOne'> E </p>
						<p className='letterTwo'> Z </p>
					</div>
					<Navigation display={this.state.navState ? 'flex' : 'none'}/>
					<p className='closeMobile' style={{display: this.state.navState ? 'block' : 'none'}} onClick={this.manageNavState}> Close </p>
					<div onClick={this.manageNavState} className='mobileNav' style={{display: this.state.navState ? 'none' : 'block'}}/>
				</div>
				<div className='overlayWrapper'>
					<div className='overlay' style={{display: this.state.navState ? 'block' : 'none'}} onClick={this.manageNavState}/>
				</div>
				<div className='headerContainer'>
					<div className='letterWrapper'>
						<p className='letterOne'> E </p>
						<p className='letterTwo'> Z </p>
					</div>
					<Navigation />
				</div>
			</div>

			);
	}
}