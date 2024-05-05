import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

import { Fade } from "react-awesome-reveal";

const AllProjects = () => {
	return (
		<Fade direction="right" cascade="true" damping={1.5}>
			<div className="all-projects-container">
				{INFO.projects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
						/>
					</div>
				))}
			</div>
		</Fade>
	);
};

export default AllProjects;
