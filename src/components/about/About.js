import React from 'react';

export default class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='about' id='about'>
				<h3 className='title'> About Me </h3>
				<div className='divider'/>
				<div className='textContainer'>
					<p className='text'>
						Hello. My name is Eric Zhu and I'm a Computer Science student at UWaterloo.
						I'm passionate about pursuing full-stack challenges and improving open source projects.
					</p>
					<div className='textBullet'>
						<p>Languages: Javascript Java and C++, Python, NodeJS, HTML & SASS, ISML & DS</p>
						<p>Frameworks: React, Angular2, Express, Demandware, Mongoose</p>
						<p>Tools: DynamoDB, MongoDB, Grunt, Gulp, Webpack, AWS EC2, AWS Lambda, Bash, Git</p>
					</div>
						<p className='text'>
						I'm actively looking for freelance developer or challenging internship opportunities.
						Contact me at ericzhu77@gmail.com
					</p>
				</div>
				<div className='divider'/>
				<h3 className='title'> Education </h3>
				<div className='divider'/>
				<div className='resumeContainer'>
					<p className='date'> 2016 - current </p>
					<div className='info education'>
						<p> Bachelor of Honours Computer Science <br /> University of Waterloo <br /> Expected Apr. 2021 </p>
						<ul>
							<li>President Scholorship</li>
							<li>GPA 3.85</li>
						</ul>
					</div> 
				</div>
				<div className='divider'/>

				<h3 className='title'> Work Experience </h3>
				<div className='divider'/>
				<div className='resumeContainer'>
					<p className='date'> 2017 </p>
					<div className='info'>
						<p className='workTitle'>Sears Canada Initium Commerce Lab // Full-stack Developer</p>
						<p className='techStack'>Technology Stack - React/ISML, DS/NodeJS, AWS Lambda, Grunt</p>
						<ul className='bulletPoints'>
							<li>
								Developed and pitched a new checkout POC to executives to address
								abnormally high cart abandonment rates of over 54%
							</li>
							<li>Migrated legacy checkout pipelines into new MVC design</li>
							<li>Implemented payment APIs such as Avalara and Fluid</li>
							<li>Created modular React/ISML UI components focused on responsiveness and accessibility</li>
							<li>Analyzed and removed deprecated scripts and API’s to improve site load times by approximately 3-5%</li>
							<li>Normalized sandbox environments to improve developer experience and to allow for more efficient usage of resources</li>
						</ul>
					</div> 
				</div>
				<div className='resumeContainer'>
					<p className='date'>2017 - current</p>
					<div className='info'>
						<p className='workTitle'>Freelance Web Development // Software Developer</p>
						<p className='techStack'>Technology Stack - React, Express/NodejS, DynamoDB, Webpack, AWS</p> 
						<ul className='bulletPoints'>
							<li>
									Built a custom real estate CMS to allow clients to quickly update listings
									and images helping clients save on billable time
							</li>
							<li>
								Designed and implemented UI in accordance to the client’s request with a mobile-first approach
							 	and focus on code reusability to prevent code bloating
							</li>
							<li>Helped clients reach a broader audience with SEO optimization</li>
							<li>Can be viewed at: <a href='http://lindagu.com' className='aboutLink'> lindagu.com</a></li>
						</ul>
					</div> 
				</div>
				<div className='divider'/>

			</div>
		);
	}

}