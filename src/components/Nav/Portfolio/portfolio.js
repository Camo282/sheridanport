import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Moody Tunes',
			description:
				'This is a property management system that is used by landlords viewing and managing their properties and for tenants to allow for maintenance requests and pay rent.',
			image: 'src/assets/tune-forecast.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL'
			],
			github: 'https://github.com/Camo282/moody-tunes',
			deployed: 'https://camo282.github.io/moody-tunes/',
		},
		{
			name: "What's Cooking?",
			description:
				'This is a awesome database to comment and keep your favorite recipes.  Add notes and store the ones you want.  You will always have them nearby!',
			image: 'src/assets/Ratatouille.jpg',
			technologies: [
				'JavaScript',
				'Node.js',
				'tailwind.js',
				'Express & Sequelize',
				'Heroku'
			],
			github: 'https://github.com/Camo282/whats-cooking',
			deployed: 'https://github.com/Camo282/whats-cooking',
		},
		{
			name: 'Work Day Scheduler',
			description:
				'Keep track of all the things you have got going on in your life with this easy to use daily planner!',
			image: 'src/assets/workdayscheduler.jpg',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/Camo282/work-day-scheduler',
			deployed: 'https://camo282.github.io/work-day-scheduler/',
		},
		{
			name: '',
			description:
				'',
			image: '',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: '',
			deployed: '',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;