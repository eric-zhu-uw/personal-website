import React from 'react';

export default class ProjectContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pos: 0
		}
		this.forwards = this.forwards.bind(this);
		this.backwards = this.backwards.bind(this);
	}

	forwards() {
		if(this.state.pos === this.props.info.images.length - 1) {
			this.setState({ pos: 0 });
			return;
		}
		this.setState((prevState) => {
			return { pos: prevState.pos + 1 }
		})
	}

	backwards() {
		if(this.state.pos === 0) {
			this.setState({ pos: this.props.info.images.length - 1 });
			return;
		}
		this.setState((prevState) => {
			return { pos: prevState.pos - 1 }
		})
	}

	render() {
		return (
			<div className='projectContainer'>
				<div className='projectImg' style={{backgroundImage: 'url(img/' + this.props.info.images[this.state.pos] + ')'}}>
					<div className='backwards' onClick={this.backwards} style={{display: this.props.info.images.length > 1 ? 'static' : 'none' }} />
					<div className='forwards' onClick={this.forwards} style={{display: this.props.info.images.length > 1 ? 'static' : 'none' }} />
				</div>
				<div className='projectInfo'>
					<p className='title'>{ this.props.info.title }</p>
					<p className='description'>{ this.props.info.description }</p>
					<p>Technologies: { this.props.info.technologies }</p>
				</div>
			</div>
		);
	}
}