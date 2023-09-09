import React, { useEffect, useState } from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './ResumeTemplate.css'
import ResumeTemplate from './ResumeTemplate';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function InformaionTemplate() {
    const [workExpCount, setWorkExpCount] = useState(1);
    // Personal fields
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [LinkidIn, setLinkidIn] = useState(' ');  //optional because in validation it is a string must take a value
    const [Portfolio, setPortfolio] = useState(' ');//optional

    // Profile image
    const [image, setImage] = useState('');
    const [isImage, setIsImage] = useState(false);
    const [showCover, setShowCover] = useState(false);

    //Summary
    const [Summary, setSummary] = useState('');

    //Education
    const [Degree, setDegree] = useState('');
    const [Uni, setUni] = useState('');
    const [EduLoc, setEduLoc] = useState('');

    const [GradYear, setGradYear] = useState('');
    const [GradMonth, setGradMonth] = useState('');
    const [AcademicHonors, setAcademicHonors] = useState(' ');  //optional
    const [Resume, setResume] = useState()
    //Work Experience
    const [workExpDetails, setWorkExpDetails] = useState([
        { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
        { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
        { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
        { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
        { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false }
    ]);

    //const [Company,setCompany]=useState([]);
    // const handleAddCompany=()=>{
    //    const abc=[...Skill,[]]
    //    setCompany(abc)
    // }
    // const handleChangeCompany=(onChangeValue,i)=>{
    //     const inputdata=[...Skill]
    //     inputdata[i]=onChangeValue.target.value;
    //     setCompany(inputdata)
    // }
    // const handleDeleteCompany=(i)=>{
    //    const deletVal=[...Skill]
    //    deletVal.splice(i,1)
    //    setCompany(deletVal)  
    // }

    //const [Role,setRole]=useState([]);
    // const handleAddRole=()=>{
    //     const abc=[...Role,[]]
    //     setRole(abc)
    //  }
    //  const handleChangeRole=(onChangeValue,i)=>{
    //      const inputdata=[...Role]
    //      inputdata[i]=onChangeValue.target.value;
    //      setRole(inputdata)
    //  }
    //  const handleDeleteRole=(i)=>{
    //     const deletVal=[...Role]
    //     deletVal.splice(i,1)
    //     setRole(deletVal)  
    //  }

    //const [Start,setStart]=useState([]);
    // const handleAddStart=()=>{
    //     const abc=[...Start,[]]
    //     setStart(abc)
    //  }
    //  const handleChangeStart=(onChangeValue,i)=>{
    //      const inputdata=[...Skill]
    //      inputdata[i]=onChangeValue.target.value;
    //      setStart(inputdata)
    //  }
    //  const handleDeleteStart=(i)=>{
    //     const deletVal=[...Start]
    //     deletVal.splice(i,1)
    //     setStart(deletVal)  
    //  }

    // const [End,setEnd]=useState([]);
    //  const handleAddEnd=()=>{
    //      const abc=[...End,[]]
    //      setEnd(abc)
    //   }
    //   const handleChangeEnd=(onChangeValue,i)=>{
    //       const inputdata=[...End]
    //       inputdata[i]=onChangeValue.target.value;
    //       setEnd(inputdata)
    //   }
    //   const handleDeleteEnd=(i)=>{
    //      const deletVal=[...End]
    //      deletVal.splice(i,1)
    //      setEnd(deletVal)  
    //   }

    //  const [Desc,setDesc]=useState([]);
    //   const handleAddDesc=()=>{
    //       const abc=[...Desc,[]]
    //       setDesc(abc)
    //    }
    //    const handleChangeDesc=(onChangeValue,i)=>{
    //        const inputdata=[...Desc]
    //        inputdata[i]=onChangeValue.target.value;
    //        setDesc(inputdata)
    //    }
    //    const handleDeleteDesc=(i)=>{
    //       const deletVal=[...Desc]
    //       deletVal.splice(i,1)
    //       setDesc(deletVal)  
    //    }

    const onChangeWorkFields = (value, field, id) => {
        const obj = {
            ...workExpDetails[id - 1],
            [`${field}`]: value
        }
        const latestData = workExpDetails.map((el, index) => (index === (id - 1) ? obj : el))
        setWorkExpDetails(latestData);
    }

    //skills
    const [SkillCont, setSkillCont] = useState(1);
    const [SkillDetails, setSkillDetails] = useState([
        { add_skill: '' },
        { add_skill: '' },
        { add_skill: '' },
        { add_skill: '' },
        { add_skill: '' },
        { add_skill: '' },
        { add_skill: '' },
        { add_skill: '' },
    ]);

    const onChangeSkillFields = (value, field, id) => {
        const objh = {
            ...SkillDetails[id - 1],
            [`${field}`]: value
        }
        const latestData = SkillDetails.map((el, index) => (index === (id - 1) ? objh : el))
        setSkillDetails(latestData);
    }
    const [HobbyCont, setHobbyCont] = useState(1);
    const [HobbyDetails, setHobbyDetails] = useState([
        { add_hobby: '' },
        { add_hobby: '' },
        { add_hobby: '' },
        { add_hobby: '' },
        { add_hobby: '' },
        { add_hobby: '' },
        { add_hobby: '' },
        { add_hobby: '' },
    ]);
    const onChangeHobbyFields = (value, field, id) => {
        const objh = {
            ...HobbyDetails[id - 1],
            [`${field}`]: value
        }
        const latestData = HobbyDetails.map((el, index) => (index === (id - 1) ? objh : el))
        setHobbyDetails(latestData);
    }

    // const handleAddSkill=()=>{
    //    const abc=[...Skill,[]]
    //    setSkill(abc)
    // }
    // const handleChangeSkill=(onChangeValue,i)=>{
    //     const inputdata=[...Skill]
    //     inputdata[i]=onChangeValue.target.value;
    //     setSkill(inputdata)
    // }
    // const handleDeleteSkill=(i)=>{
    //    const deletVal=[...Skill]
    //    deletVal.splice(i,1)
    //    setSkill(deletVal)  
    // }


    //Hobbies

    // const [Hobby,setHobby]=useState([]);
    // const handleAddHobby=()=>{
    //    const abc=[...Hobby,[]]
    //    setHobby(abc)
    // }
    // const handleChangeHobby=(onChangeValue,i)=>{
    // const inputdata=[...Hobby]
    // inputdata[i]=onChangeValue.target.value;
    // setHobby(inputdata)
    // }
    // const handleDeleteHobby=(i)=>{
    //    const deletVal=[...Hobby]
    //    deletVal.splice(i,1)
    //    setHobby(deletVal)  
    // }




    var idList = ['fname', 'lname', 'phone', 'email', 'address',
        'Summary', 'Degree', 'Uni', 'EduLoc',
        'GradYear', 'GradMonth'];

    // useEffect(() => {
    //     sessionStorage.setItem("reloading", "true");
    // }, []);
    const history = useHistory()
    useEffect(() => {
        sessionStorage.setItem("reloading", "true");
    }, []);

    // Ensure that form is cleared on page refresh
    window.onload = function () {
        const reloading = sessionStorage.getItem("reloading");
        if (reloading) {
            sessionStorage.removeItem("reloading");
            clearAll();
        }
    }

    // Additional validations before submitting the form
    const checkValidity = () => {
        const validity = idList.map((item, index) => {
            if (!document.getElementById(item).validity.valid || !isImage) {
                return false;
            }
            return true;
        });
        return validity.some((item, index) => {
            return item === false;
        });
    }

    const loadFile = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            setImage(base64String);
            setIsImage(true);
        };
        reader.readAsDataURL(file);
    }

    const expand = (id) => {
        const coll = document.getElementById(id);
        coll.classList.toggle("active");
        let content = coll.nextElementSibling;
        if (content.style.display === "flex") {
            coll.lastChild.className = "fas fa-caret-down"
            content.style.display = "none";
        } else {
            content.style.display = "flex";
            coll.lastChild.className = "fas fa-caret-up"
            content.style.marginBottom = "20px";
        }
    }

    const PersonalField = () => {
        return (
            <>
                <div className="form-group">
                    <input type="text" name="fname" id="fname" placeholder="First Name" value={fname} onChange={(e) => { setFname(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="lname" id="lname" placeholder="Last Name" value={lname} onChange={(e) => { setLname(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value) }} name="telephone" id="phone" placeholder="Phone Number (EX: 01226963933)" pattern="[0-9]{11}" required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" id="email" placeholder="Email (EX: emailid@something.com)" required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} name="address" id="address" placeholder="Address" required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="url" value={LinkidIn} onChange={(e) => { setLinkidIn(e.target.value) }} name="LinkidIn" id="LinkidIn" placeholder="LinkidIn link" />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>(optional)</span>
                </div>
                <div className="form-group">
                    <input type="url" value={Portfolio} onChange={(e) => { setPortfolio(e.target.value) }} name="Portfolio" id="Portfolio" placeholder="Portfolio link" />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>(optional)</span>
                </div>
            </>
        );
    }

    const SummaryField = () => {
        return (
            <>
                <div className="form-group">
                    <textarea rows='3' cols="90" type="text" name="Summary" id="Summary" placeholder="Brief Summary about your professional background, skills, and career goals." value={Summary} onChange={(e) => { setSummary(e.target.value) }} required>
                    </textarea>
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
            </>
        );
    }

    const EducationField = () => {
        return (
            <>
                <div className="form-group">
                    <input type="text" name="Degree" id="Degree" placeholder="Degree" value={Degree} onChange={(e) => { setDegree(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="Uni" id="Uni" placeholder="Educational institution" value={Uni} onChange={(e) => { setUni(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="text" name="EduLoc" id="EduLoc" placeholder="Educational institution location" value={EduLoc} onChange={(e) => { setEduLoc(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="number" name="GradMonth" id="GradMonth" placeholder="Graduation Month" value={GradMonth} onChange={(e) => { setGradMonth(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <input type="number" name="GradYear" id="GradYear" placeholder="Graduation Year" value={GradYear} onChange={(e) => { setGradYear(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                <input type="text" name="AcademicHonors" id="AcademicHonors"   onChange={(e) => { setAcademicHonors(e.target.value) }} placeholder="Academic honors"/>
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>(optional)</span>
                </div>
            </>
        );
    }

    const workExpFields = (id) => {
        idList.push(`designation${id}`);
        idList.push(`company${id}`);
        idList.push(`responsibilities${id}`);
        idList.push(`currentJob${id}`);
        return (
            <>
                <div className="form-group">
                    <input type="text" value={workExpDetails[id - 1].designation} onChange={(e) => { onChangeWorkFields(e.target.value, 'designation', id) }} name={`designation${id}`} id={`designation${id}`} placeholder="Designation" required />
                </div>
                <div className="form-group">
                    <input type="text" value={workExpDetails[id - 1].company} onChange={(e) => { onChangeWorkFields(e.target.value, 'company', id) }} name={`company${id}`} id={`company${id}`} placeholder="Company Name" required />
                </div>
                <div className="form-group">
                    <input type="text" value={workExpDetails[id - 1].responsibilities} onChange={(e) => { onChangeWorkFields(e.target.value, 'responsibilities', id) }} id={`responsibilities${id}`} placeholder="Responsibilities" required />
                </div>
                <div className="form-group">
                    <DateTime
                        timeFormat={false}
                        inputProps={{ name: `startMonth${id}`, placeholder: 'Starting Date', value: workExpDetails[id - 1].startMonth.toString() }}
                        id={`startMonth${id}`}
                        dateFormat="YYYY"
                        closeOnSelect
                        onChange={(date) => {
                            onChangeWorkFields(date._d.getFullYear(), 'startMonth', id);
                        }} />
                </div>
                <div className="form-group" style={{ display: 'flex', color: 'black', justifyContent: 'center' }}>
                    <input checked={workExpDetails[id - 1].presentWork} onChange={(e) => { onChangeWorkFields(e.target.checked, 'presentWork', id) }} type="checkbox" id={`currentJob${id}`} name="currentJob" className="currentJob" />
                    <label htmlFor="currentJob" style={{ fontSize: '12px' }}>Presently working here</label>
                </div>
                <div className="form-group">
                    {!workExpDetails[id - 1].presentWork && <>
                        <DateTime
                            timeFormat={false}
                            inputProps={{ name: `endMonth${id}`, placeholder: 'Ending Date', value: workExpDetails[id - 1].endMonth.toString() }}
                            id={`endMonth${id}`}
                            dateFormat="YYYY"
                            closeOnSelect
                            onChange={(date) => {
                                onChangeWorkFields(date._d.getFullYear(), 'endMonth', id);
                            }} />
                    </>}
                </div>
                <hr style={{ width: '80%', color: 'black' }} />
            </>
        )
    }


    const SkillsField = (id) => {
        idList.push(`add_skill${id}`);
        return (
            <>
                <div className="form-group">
                    <input type="text" value={SkillDetails[id - 1].add_skill} onChange={(e) => { onChangeSkillFields(e.target.value, 'add_skill', id) }} name={`add_skill${id}`} id={`add_skill${id}`} placeholder="add your skill" required />
                </div>
                <hr style={{ width: '80%', color: 'black' }} />
                {/* <button className="Buttonn" onClick={()=>handleAddSkill()}>Add Skill</button>
                {Skill.map((data,i)=>{
                    return(
                       <div className="Skills">
                            <div><input  style={{width : 500}} type="text"  placeholder="Skill" value={data} onChange={e=>handleChangeSkill(e,i)} /></div>
                            <div><button className="Buttonn" onClick={()=>handleDeleteSkill(i)}>Delete Skill</button></div>
                       </div>
                    )
                })} */}
            </>
        );
    }

    const HobbiesField = (id) => {
        return (
            <>
                {/* <div className="form-group">
            <button className="Buttonn" onClick={()=>handleAddHobby()}>Add Hobby</button>
                {Hobby.map((data,i)=>{
                    return(
                       <div className="Skills">
                            <input style={{width : 500}} type="text"  placeholder="Hobby" value={data} onChange={e=>handleChangeHobby(e,i)} />
                            <button className="Buttonn" onClick={()=>handleDeleteHobby(i)}>Delete Hobby</button>
                       </div>
                    )
                })}
            </div> */}
                <div className="form-group">
                    <input type="text" value={HobbyDetails[id - 1].add_hobby} onChange={(e) => { onChangeHobbyFields(e.target.value, 'add_hobby', id) }} name={`add_hobby${id}`} id={`add_hobby${id}`} placeholder="add your hobby" required />
                </div>
                <hr style={{ width: '80%', color: 'black' }} />

            </>
        );
    }


    const generate = async (e) => {
        const coll = document.getElementsByClassName("collapsible");
        e.preventDefault()
        for (let i = 0; i < coll.length; i++) {
            coll[i].nextElementSibling.style.display = "flex";
            coll[i].nextElementSibling.style.marginBottom = "20px";
        }
        const isInvalid = await checkValidity();

        if (!isInvalid) {
            const formData = [{
                fname,
                lname,
                phone,
                email,
                address,
                image,
                LinkidIn,
                Portfolio,
                Summary,

                Degree,
                Uni,
                EduLoc,
                GradYear,
                GradMonth,
                AcademicHonors,

                workExpDetails,
                SkillDetails,
                HobbyDetails,
            }];
            try {
                const ResumeCreate = await fetch("http://localhost:8000/Resume/Create", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        fname,
                        lname,
                        phone,
                        email,
                        address,
                        image,
                        LinkidIn,//backend must take a value so but it(" ")
                        Portfolio,
                        Summary,
                        Degree,
                        Uni,
                        EduLoc,
                        GradYear,
                        GradMonth,
                        AcademicHonors,
                        SkillDetails,
                        HobbyDetails,
                        workExpDetails

                    })
                })
                console.log("created")
                const resumeRes = await ResumeCreate.json()
                setResume(resumeRes?.resume)
                if (resumeRes?.error) {
                    localStorage.setItem("token", " ")//when token expire
                    history.push("/Login")
                    setShowCover(false);
                }
                setShowCover(true);
            }
            catch (err) {
                console.log(err.message)
            }
            // await localStorage.setItem('formData', JSON.stringify(formData));
            // setShowCover(true);

        } else {
            alert("Please fill the form correctly (Fill all the required fields, and profile picture)");
        }
    }
    const clearhobby = () => {
        setHobbyCont(HobbyCont - 1)
        if (HobbyCont === 2 && HobbiesField(2)) {
            HobbyDetails[1].add_hobby = ''

        }
        else if (HobbyCont === 3 && HobbiesField(3)) {
            HobbyDetails[2].add_hobby = ''

        }
        else if (HobbyCont === 4 && HobbiesField(4)) {
            HobbyDetails[3].add_hobby = ''

        }
        else if (HobbyCont === 5 && HobbiesField(5)) {
            HobbyDetails[4].add_hobby = ''

        }
        else if (HobbyCont === 6 && HobbiesField(6)) {
            HobbyDetails[5].add_hobby = ''

        }
        else if (HobbyCont === 7 && HobbiesField(7)) {
            HobbyDetails[6].add_hobby = ''

        }
        else if (HobbyCont === 8 && HobbiesField(8)) {
            HobbyDetails[7].add_hobby = ''

        }
    };
    const clearskill = () => {
        setSkillCont(SkillCont - 1)
        if (SkillCont === 2 && SkillsField(2)) {
            SkillDetails[1].add_skill = ''

        }
        else if (SkillCont === 3 && SkillsField(3)) {
            SkillDetails[2].add_skill = ''

        }
        else if (SkillCont === 4 && SkillsField(4)) {
            SkillDetails[3].add_skill = ''

        }
        else if (SkillCont === 5 && SkillsField(5)) {
            SkillDetails[4].add_skill = ''

        }
        else if (SkillCont === 6 && SkillsField(6)) {
            SkillDetails[5].add_skill = ''

        }
        else if (SkillCont === 7 && SkillsField(7)) {
            SkillDetails[6].add_skill = ''

        }
        else if (SkillCont === 8 && SkillsField(8)) {
            SkillDetails[7].add_skill = ''

        }
    };
    const clearWorkExp = () => {
        setWorkExpCount(workExpCount - 1)
        if (workExpCount === 2 && workExpFields(2)) {
            workExpDetails[1].designation = '';
            workExpDetails[1].company = '';
            workExpDetails[1].responsibilities = '';
            workExpDetails[1].startMonth = '';
            workExpDetails[1].endMonth = '';
            workExpDetails[1].presentWork = false;
        }
        if (workExpCount === 3 && workExpFields(3)) {
            workExpDetails[2].designation = '';
            workExpDetails[2].company = '';
            workExpDetails[2].responsibilities = '';
            workExpDetails[2].startMonth = '';
            workExpDetails[2].endMonth = '';
            workExpDetails[2].presentWork = false;
        }
        if (workExpCount === 4 && workExpFields(4)) {
            workExpDetails[3].designation = '';
            workExpDetails[3].company = '';
            workExpDetails[3].responsibilities = '';
            workExpDetails[3].startMonth = '';
            workExpDetails[3].endMonth = '';
            workExpDetails[3].presentWork = false;
        }
        if (workExpCount === 5 && workExpFields(5)) {
            workExpDetails[4].designation = '';
            workExpDetails[4].company = '';
            workExpDetails[4].responsibilities = '';
            workExpDetails[4].startMonth = '';
            workExpDetails[4].endMonth = '';
            workExpDetails[4].presentWork = false;
        }

    }

    const clearAll = () => {
        idList = ['fname', 'lname', 'phone', 'email', 'address',
            'LinkidIn', 'Portoflio', 'Summary', 'Degree', 'Uni', 'EduLoc',
            'GradYear', 'GradMonth', 'AcademicHonors', 'Company', 'JobTitle',
            'Achievement', 'JobLoc', 'Desc', 'Skill', 'Hobby'];

        for (let i = 1; i <= 3; i++) {
            if (document.getElementsByName(`fromMonth${i}`)) {
                document.getElementsByName(`fromMonth${i}`).value = ''
            }
            if (document.getElementsByName(`startMonth${i}`)) {
                document.getElementsByName(`startMonth${i}`).value = ''
            }
            if (document.getElementsByName(`toMonth${i}`)) {
                document.getElementsByName(`toMonth${i}`).value = ''
            }
            if (document.getElementsByName(`endMonth${i}`)) {
                document.getElementsByName(`endMonth${i}`).value = ''
            }
        }



        setIsImage(false);
        setImage('');
        setShowCover(false);

        localStorage.setItem('formData', '');


        // Personal Details
        setFname('');
        setLname('');
        setPhone('');
        setEmail('');
        setAddress('');
        setLinkidIn('');
        setPortfolio('');

        //Summary
        setSummary('');

        //Education
        setDegree('');
        setUni('');
        setEduLoc('');
        setGradYear('');
        setGradMonth('');
        setAcademicHonors('');

        //Work Experience
        // setCompany([]);
        // setRole([]);
        // setEnd([]);
        // setStart([]);
        // setDesc([]);
        setWorkExpCount(1);

        //skills
        setSkillCont(1);
        setHobbyCont(1)


        //Hobbies
        setHobbyDetails([
            { add_hobby: '' },
            { add_hobby: '' },
            { add_hobby: '' },
            { add_hobby: '' },
            { add_hobby: '' },
            { add_hobby: '' },
            { add_hobby: '' },
            { add_hobby: '' },
        ]);
        // Work Experience fields
        setWorkExpDetails([
            { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
            { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
            { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
            { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false },
            { designation: '', company: '', responsibilities: '', startMonth: '', endMonth: '', presentWork: false }
        ]);
        setSkillDetails([
            { add_skill: '' },
            { add_skill: '' },
            { add_skill: '' },
            { add_skill: '' },
            { add_skill: '' },
            { add_skill: '' },
            { add_skill: '' },
            { add_skill: '' },
        ]);
        if (document.getElementById("img")) {
            document.getElementById("img").value = "";
        }
    }

    return (
        <div className="wrapper">
            {!showCover ?
                <div className="ResumeForm">
                    <div className="ResumeDetails">
                        <h1 className="ResumeHead">Create your Resume</h1>
                        <h1 className="ResumeHead">Let's Start</h1>
                    </div>
                    <form className="form-group" id="form">
                        <button type="button" className="collapsible" id="personal" onClick={() => expand("personal")}> Personal Details</button>
                        <div className="content">
                            {PersonalField()}
                            <label htmlFor="img" style={{ color: 'red', alignSelf: 'baseline', marginBottom: '10px', fontSize: '20px' }}> Select Personal Image To Upload</label>
                            <input type="file" id="img" name="img" accept="image/*" onChange={(event) => loadFile(event)} style={{ color: 'white', background: '#4077ad', marginBottom: '30px', width: '850px' }}></input>
                        </div>
                        <button type="button" className="collapsible" id="Summary&Education" onClick={() => expand("Summary&Education")}> Summary and Education </button>
                        <div className="content">
                            {SummaryField()}
                            {EducationField()}
                        </div>
                        <button type="button" className="collapsible" id="workExpButton" onClick={() => expand("workExpButton")}> Work Experience <i className="fas fa-caret-down" aria-hidden="true"></i></button>
                        <div className="content" id="workExpWrap" style={{ paddingBottom: '150px' }}>
                            {workExpFields(1)}
                            {(workExpCount === 2 || workExpCount === 3) && workExpFields(2)}
                            {(workExpCount === 3 || workExpCount === 4) && workExpFields(3)}
                            {(workExpCount === 4 || workExpCount === 5) && workExpFields(4)}
                            {workExpCount === 5 && workExpFields(5)}
                            <div className="addDeleteWrap">
                                <button type="button" className="addDeleteButton" disabled={workExpCount === 5} style={{ marginRight: '25px' }} onClick={() => setWorkExpCount(workExpCount + 1)}> <i className="fas fa-plus" style={{ color: workExpCount === 5 ? 'lightgray' : 'gray' }}></i> Add</button>
                                <button type="button" className="addDeleteButton" disabled={workExpCount === 1} onClick={() => clearWorkExp()}> <i className="fas fa-trash" style={{ color: workExpCount === 1 ? 'lightgray' : 'gray' }}></i>Delete</button>
                            </div>
                        </div>
                        <button type="button" className="collapsible" id="Skill" onClick={() => expand("Skill")}> Skills</button>
                        <div className="content" id="SkillWrap" style={{ paddingBottom: '150px' }}>
                            {SkillsField(1)}
                            {(SkillCont === 2 || SkillCont === 3) && SkillsField(2)}
                            {(SkillCont === 3 || SkillCont === 4) && SkillsField(3)}
                            {(SkillCont === 4 || SkillCont === 5) && SkillsField(4)}
                            {(SkillCont === 5 || SkillCont === 6) && SkillsField(5)}
                            {(SkillCont === 6 || SkillCont === 7) && SkillsField(6)}
                            {(SkillCont === 7 || SkillCont === 8) && SkillsField(7)}
                            {SkillCont === 8 && SkillsField(8)}
                            <div className="addDeleteWrap">
                                <button type="button" className="addDeleteButton" disabled={SkillCont === 8} style={{ marginRight: '25px' }} onClick={() => setSkillCont(SkillCont + 1)}> <i className="fas fa-plus" style={{ color: SkillCont === 8 ? 'lightgray' : 'gray' }}></i> Add</button>
                                <button type="button" className="addDeleteButton" disabled={SkillCont === 1} onClick={() => clearskill()}> <i className="fas fa-trash" style={{ color: SkillCont === 1 ? 'lightgray' : 'gray' }}></i>Delete</button>
                            </div>
                        </div>
                        {/* <button type="button" className="collapsible" id="Hobby" onClick={() => expand("Hobby")}> Hobbies</button>
                    <div className="content">
                        {HobbiesField()}
                    </div> */}
                        <button type="button" className="collapsible" id="Hobby" onClick={() => expand("Hobby")}> Hobbies</button>
                        <div className="content" id="HobbyWrap" style={{ paddingBottom: '150px' }}>
                            {HobbiesField(1)}
                            {(HobbyCont === 2 || HobbyCont === 3) && HobbiesField(2)}
                            {(HobbyCont === 3 || HobbyCont === 4) && HobbiesField(3)}
                            {(HobbyCont === 4 || HobbyCont === 5) && HobbiesField(4)}
                            {(HobbyCont === 5 || HobbyCont === 6) && HobbiesField(5)}
                            {(HobbyCont === 6 || HobbyCont === 7) && HobbiesField(6)}
                            {(HobbyCont === 7 || HobbyCont === 8) && HobbiesField(7)}
                            {HobbyCont === 8 && HobbiesField(8)}
                            <div className="addDeleteWrap">
                                <button type="button" className="addDeleteButton" disabled={HobbyCont === 8} style={{ marginRight: '25px' }} onClick={() => setHobbyCont(HobbyCont + 1)}> <i className="fas fa-plus" style={{ color: HobbyCont === 8 ? 'lightgray' : 'gray' }}></i> Add</button>
                                <button type="button" className="addDeleteButton" disabled={HobbyCont === 1} onClick={() => clearhobby()}> <i className="fas fa-trash" style={{ color: HobbyCont === 1 ? 'lightgray' : 'gray' }}></i>Delete</button>
                            </div>
                        </div>
                        <div className="submitWrap">
                            <button type="submit" className="submit" id="submit" onClick={(e) => generate(e)}>Generate</button>
                            <button type="reset" className="submit" id="reset" onClick={() => clearAll()}>Reset</button>
                            <Link to="/UserResumes"><button className="submit" id="reset">Your Resumes</button></Link>

                        </div>
                    </form>
                </div> : <ResumeTemplate generateNew={clearAll} formData={Resume} />}
        </div>
    );
}

export default InformaionTemplate;