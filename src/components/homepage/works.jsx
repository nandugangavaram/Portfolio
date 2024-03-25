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
								src="../Portfolio/m3iox_logo.png"
								alt="M3IOX LLC"
								className="work-image"
							/>
							<div className="work-title">M3IOX LLC</div>
							<div className="work-subtitle">
								Technical Consultant
							</div>
							<div className="work-duration">
								Dec, 2022 - Mar, 2023
							</div>
						</div>

						<div className="work">
							<img
								src="../Portfolio/infor_logo.png"
								alt="Infor Pvt Ltd"
								className="work-image"
							/>
							<div className="work-title">
								Infor India Pvt Limited
							</div>
							<div className="work-subtitle">
								Technical Consultant
							</div>
							<div className="work-duration">
								Jul, 2019 - Jun, 2021
							</div>
						</div>

						<div className="work">
							<img
								src="../Portfolio/hexagon_logo.png"
								alt="Hexagon"
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
