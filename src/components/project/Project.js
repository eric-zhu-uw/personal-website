import React from 'react';

// components
import ProjectContainer from './ProjectContainer.js';

export default class Project extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='projects' id='portfolio'>
				<h3 className='title'> Portfolio </h3>
				{
					projects.map((project, i) => {
						return <ProjectContainer info={project} key={i} />;
					})
				}
			</div>
		);
	}
}

const projects = [
	{
		title: 'Real-Estate-CMS',
		description: 'A custom CMS solution for CRUD operations on listing and images which allow non-technical realtors to manage their own content.',
		technologies: 'React, Express/NodeJS/AWS EC2, DynamoDB',
		images: ['real-estate-cms-1.png', 'real-estate-cms-2.png', 'real-estate-cms-3.png', 'real-estate-cms-4.png']
	},
	{
		title: 'Chess Engine',
		description: 'A rudimentary chess engine for up to 6th depth game analysis. Utilized alpha-beta pruning and min-max algorithms to find the next best move given a particular board position.',

		technologies: 'Python',
		images: ['chess-engine-1.png'] 
	},
	{
		title: 'Event Roulette',
		description: 'A web tool that leverages the GoogleAPI to help indecisive friends decide what to do tonight.',
		technologies: 'Angular2, GoogleAPI',
		images: ['event-roulette-1.png', 'event-roulette-2.png']
	}
]