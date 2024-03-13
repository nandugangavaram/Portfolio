import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">M3IOX LLC</div>
							<div className="work-subtitle">
								Associate Consultant
							</div>
							<div className="work-duration">
								Dec, 2022 - Mar, 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Infor India Pvt Limited
							</div>
							<div className="work-subtitle">
								Associate Consultant
							</div>
							<div className="work-duration">
								Jul, 2019 - Jun, 2021
							</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Hexagon CCI Pvt Limited
							</div>
							<div className="work-subtitle">QA Engineer</div>
							<div className="work-duration">
								Mar, 2018 - Aug, 2018
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
