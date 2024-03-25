import React from "react";
import "./styles/resume.css";
import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

const Resume = () => {
	const pdfURL =
		"https://drive.google.com/file/d/16mkKYxMXllArbSzRI37rD4vytA0Jn13A/preview?usp=sharing";
	return (
		<>
			<div className="container">
				<NavBar active="resume" />
				<iframe title="Resume" className="PDFViewer" src={pdfURL} />
			</div>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume;
