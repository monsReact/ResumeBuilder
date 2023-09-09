import React, { useEffect, useRef, useState} from 'react';
import './PersonalInfo.css';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function CoverTemplate({generateNew,formData}) {
	const location=useLocation()
	const componentRef = useRef();
//	const [formData,setFormData]=useState({})
/*const getData=async()=>{
	try{
		const data=await fetch("http://localhost:8000/Cover/Get",{
			method:"GET",
			headers:{
				"Authorization":`Bearer ${localStorage.getItem("token")}`
			}
		})

		const Cover=await data.json()
		console.log(Cover)
		const finded= Cover.Covers.find((item)=>item._id===id)
		console.log(finded)
		setFormData(finded)//Cover.cover to get the returned data because it Cover in an object has a cover object has datas
	}
	catch(err)
	{
		console.log(err.messahe)
	}
}*/


  return (

    <div className="wrapper">
      <div className="download">
	  {location.pathname==="/Cover"?
        <button className="generateNew" onClick={() => {
			generateNew();
			window.location.reload(false)
		}}>Generate New</button>:null}
		<ReactToPrint trigger={() => <button className="generateNew">Download</button>
		}content={() => componentRef.current}/>
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
									<div className="text">{formData?.phone}</div>
							</li>
							<li>
									<div className="icon"><label>Email: </label></div>
									<div className="text">{formData?.email}</div>
							</li>
							<li>
									<div className="icon"><label>Address: </label></div>
									<div className="text">{formData?.address}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="header">
					<div className="name_role">
						<div className="name" style={{ color: '#e0ffff' }}>
						 	{formData?.fname} {formData?.lname}
						</div>
						<div className="role">
							{formData?.role}
						</div>
					</div>
                </div>
					<div className="about">
						{formData?.Greeting}
					</div>
                    <div className="Intro1">
                        {formData?.Intro}
                    </div>
                    <div className="Detail1">
                        {formData?.Detail}
                    </div>
                    <div className="Conc1">
                        {formData?.Conc}
                    </div>
                    <div className="about">
                        {formData?.Yours}
                    </div>
			</div>
		</div>
	</div>
  );
}

export default CoverTemplate;