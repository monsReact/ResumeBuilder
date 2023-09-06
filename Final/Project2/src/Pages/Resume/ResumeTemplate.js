import React, { useEffect, useRef} from 'react';
import './ResumeTemplate.css';
import ReactToPrint from 'react-to-print';

function ResumeTemplate({generateNew}) {
	const componentRef = useRef();
	const formData = JSON.parse(localStorage.getItem('formData'));
	useEffect(() => {
		document.getElementById('profileImage').style.backgroundImage = `url(data:image/png;base64,${formData[0]?.image})`;
	}, [])
	const addLinkidIn = () =>{
		if(formData[0].LinkidIn !='' )
		{
			return(
				<>
					<div className="icon"><label>LinkidIn: </label></div>
					<div className="text">{formData[0].LinkidIn}</div>
				</>
			);
		}
	}
	const addPortfolio = () =>{
		if(formData[0].Portfolio !='' )
		{
			return(
				<>
					<div className="icon"><label>Portfolio: </label></div>
					<div className="text">{formData[0].Portfolio}</div>
				</>
			);
		}
	}
	const addHonors = () =>{
		if(formData[0].AcademicHonors !='' )
		{
			return(
				<>
					<p>AcademicHonors: {formData[0].AcademicHonors}</p>
				</>
			);
		}
	}
  return (
    <div className="wrapper">
      <div className="download">
        <button className="generateNew" onClick={() => {
			generateNew();
			window.location.reload(false)
		}}>Generate New</button>
		<ReactToPrint trigger={() => <button className="generateNew">Download</button>
		}content={() => componentRef.current}/>
      </div>
		<div className="cover" id="cover" ref={componentRef}>
			<div className="left">
				<div className="img_holder">
					<img className="imageClass" id="profileImage" alt="" />  
				</div>
				<div className="contact_wrap pb">
					<div className="title" style={{ color: '#fff' }}>
						Contact
					</div>
					<div className="contact">
						<ul>
							<li>
									<div className="icon"><label>Phone: </label></div>
									<div className="text">{formData[0].phone}</div>
							</li>
							<li>
									<div className="icon"><label>Email: </label></div>
									<div className="text">{formData[0].email}</div>
							</li>
							<li>
									<div className="icon"><label>Address: </label></div>
									<div className="text">{formData[0].address}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="header">
					<div className="name_role">
						<div className="name" style={{ color: '#e0ffff' }}>
						 	{formData[0].fname} {formData[0].lname}
						</div>
						{addLinkidIn()}
						{addPortfolio()}
						<div className="role">
							{formData[0].role}
						</div>
					</div>
                </div>
				<div className="ResumeComp">
						<div className="title">
							<div className="icon"><label>Summary: </label>
							</div>
							<div className="ResumeText">
								{formData[0].Summary}
							</div>
						</div>
						<div className="title">
							<div className="icon"><label>Education: </label></div>
							<div className="ResumeText">
								<p>{formData[0].Degree} {formData[0].Uni} {formData[0].EduLoc} </p>
								<p> Graduate of {formData[0].GradMonth}/{formData[0].GradYear} </p>
								{addHonors()}
							</div>
						</div>
						<div className="title">
							Experience:
						</div>
						<div className="ResumeText">
							<ul>
								{formData[0].workExpDetails.map((item, index) => {
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
								{formData[0].SkillDetails.map((item) => {
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
								{formData[0].HobbyDetails.map((item) => {
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