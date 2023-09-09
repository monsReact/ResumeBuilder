import React, { useEffect, useRef, useState } from 'react';
import './ResumeTemplate.css';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function ResumeTemplate({ generateNew, formData }) {
	const location = useLocation()
	const componentRef = useRef();
	const image = useRef();

	const addLinkidIn = () => {
		if (formData.LinkidIn != ' ') {
			return (
				<>
					<div className="icon"><label>LinkidIn: </label></div>
					<div className="text">{formData.LinkidIn}</div>
				</>
			);
		}
	}
	const addPortfolio = () => {
		if (formData.Portfolio != ' ') {
			return (
				<>
					<div className="icon"><label>Portfolio: </label></div>
					<div className="text" >{formData.Portfolio}</div>
				</>
			);
		}
	}
	const addHonors = () => {
		if (formData.AcademicHonors != ' ') {
			return (
				<>
					<p>AcademicHonors: {formData.AcademicHonors}</p>
				</>
			);
		}
	}
	return (
		<div className="wrapper">
			<div className="download">
				{location.pathname === "/Resume" ?
					<button className="generateNew" onClick={() => {
						generateNew();
						window.location.reload(false)
					}}>Generate New</button> : null}
				<ReactToPrint trigger={() => <button className="generateNew">Download</button>
				} content={() => componentRef.current} />
			</div>
			<div className="cover" id="cover" ref={componentRef}>
				<div className="left">
					<div className="img_holder">
						
					<img className="imageClass" id="profileImage" alt="" style={{backgroundImage:`url(data:image/png;base64,${formData?.image})`}}/>

					</div>
					<div className="contact_wrap pb">
						<div className="title" style={{ color: '#fff' }}>
							Contact
						</div>
						<div className="contact">
							<ul>
								<li>
									<div className="icon"><label>Phone: </label></div>
									<div className="text">{formData.phone}</div>
								</li>
								<li>
									<div className="icon"><label>Email: </label></div>
									<div className="text">{formData.email}</div>
								</li>
								<li>
									<div className="icon"><label>Address: </label></div>
									<div className="text">{formData.address}</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="header">
						<div className="name_role">
							<div className="name" style={{ color: '#e0ffff' }}>
								{formData.fname} {formData.lname}
							</div>
							{addLinkidIn()}
							{addPortfolio()}
							<div className="role">
								{formData.role}
							</div>
						</div>
					</div>
					<div className="ResumeComp">
						<div className="title">
							<div className="icon"><label>Summary: </label>
							</div>
							<div className="ResumeText">
								{formData.Summary}
							</div>
						</div>
						<div className="title">
							<div className="icon"><label>Education: </label></div>
							<div className="ResumeText">
								<p>{formData.Degree} {formData.Uni} {formData.EduLoc} </p>
								<p> Graduate of {formData.GradMonth}/{formData.GradYear} </p>
								{addHonors()}
							</div>
						</div>
						<div className="title">
							Experience:
						</div>
						<div className="ResumeText">
							<ul>
								{formData.workExpDetails?.map((item, index) => {
									return (item.company) ?
										(<li key={index}>
											<div className="li_wrap">
												<div className="date">
													<p>{item.startMonth} - {item.presentWork ? 'Present' : item.endMonth} </p>
												</div>
												<div className="info">
													<p className="info_title">
														&nbsp;&nbsp;Location: {item.designation}
													</p>
													<p className="info_com">
														&nbsp;&nbsp;Company: {item.company}
													</p>
													<p className="info_cont">
														&nbsp;&nbsp;Role: {item.responsibilities}
													</p>
												</div>
											</div>
										</li>) : ''
								})}
							</ul>
						</div>
						<div className="title">
							Skills:
						</div>
						<div className="ResumeText">
							<ul className="Gridd">
								{formData.SkillDetails?.map((item) => {
									return (item.add_skill) ?
										(<li>
											<div className="li_wrap">
												<p className="info_com">
													{item.add_skill}
												</p>
											</div>
										</li>) : ''
								})}
							</ul>
						</div>
						<div className="title">
							Hobbies:
						</div>
						<div className="ResumeText">
							<ul>
								{formData.HobbyDetails?.map((item) => {
									return (item.add_hobby) ?
										(<li>
											<div className="li_wrap">
												<p className="info_com">
													{item.add_hobby}
												</p>
											</div>
										</li>) : ''
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}


export default ResumeTemplate;