import React, { useEffect, useState } from 'react';
import { InputLabel, Input, MenuItem, FormControl, Select, Chip } from '@mui/material';
import CoverTemplate from './PersonalInfo';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './PersonalInfo.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function CoverInputForm() {
    // Personal fields
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [role, setRole] = useState('');
    const [Greeting, setGreeting] = useState('');
    const [Intro, setIntro] = useState('');
    const [Detail, setDetail] = useState('');
    const [Conc, setConc] = useState('');
    const [Yours, setYours] = useState('');
    const [CoverData, setCoverData] = useState('')

    // Contact fields
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    // Profile image
    const [image, setImage] = useState('');
    const [isImage, setIsImage] = useState(false);
    const [showCover, setShowCover] = useState(false);


    var idList = ['fname', 'lname', 'role', 'Greeting', 'Yours', 'Intro', 'Conc', 'Detail', 'phone', 'email',
        'address']
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
        const reader = new FileReader();//to convert for base64
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

    const personalFields = () => {
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
                    <input type="text" name="role" id="role" placeholder="Job Role" value={role} onChange={(e) => { setRole(e.target.value) }} required />
                    <span style={{ color: 'red', alignSelf: 'baseline' }}>*</span>
                </div>
                <div className="form-group">
                    <textarea rows='2' cols="90" type="text" name="Greeting" id="Greeting" placeholder="Greetings" value={Greeting} onChange={(e) => { setGreeting(e.target.value) }} required>
                    </textarea>
                    <textarea rows='9' cols="90" type="text" name="Intro" id="Intro" placeholder="Introduction" value={Intro} onChange={(e) => { setIntro(e.target.value) }} required>
                    </textarea>
                    <textarea rows='9' cols="90" type="text" name="Detail" id="Detail" placeholder="Body" value={Detail} onChange={(e) => { setDetail(e.target.value) }} required>
                    </textarea>
                    <textarea rows='9' cols="90" type="text" name="Conc" id="Conc" placeholder="Conclusion" value={Conc} onChange={(e) => { setConc(e.target.value) }} required>
                    </textarea>
                    <textarea rows='3' cols="90" type="text" name="Yours" id="Yours" placeholder="Yours Sincerely,Kenzy" value={Yours} onChange={(e) => { setYours(e.target.value) }} required>
                    </textarea>

                </div>
            </>
        );
    }

    const contactFields = () => {
        return (
            <>
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
                role,
                Greeting,
                Intro,
                Detail,
                Conc,
                Yours,
                phone,
                email,
                address,
                image
            }];
            try {
                const CoverCreate = await fetch("http://localhost:8000/Cover/Create", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        fname,
                        lname,
                        role,
                        Greeting,
                        Intro,
                        Detail,
                        Conc,
                        Yours,
                        phone,
                        email,
                        address,
                        image

                    })
                })
                console.log("created")
                const coverRes = await CoverCreate.json()
                setCoverData(coverRes?.cover)
                if (coverRes?.error) {
                    localStorage.setItem("token", " ")
                    history.push("/Login")
                    setShowCover(false);
                }
                setShowCover(true);
            }
            catch (err) {
                console.log(err.message)
            }
        } else {
            alert("Please fill the form correctly (Fill all the required fields, and profile picture)");
        }
    }

    const clearAll = () => {
        idList = ['fname', 'lname', 'role', 'Greeting', 'Yours', 'Detail', 'Conc', 'Intro', 'phone', 'email',
            'address'];

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
        setImage('')
        setShowCover(false);




        // Personal Details
        setFname('');
        setLname('')
        setRole('');
        setGreeting('')
        setDetail('')
        setConc('')
        setYours('')
        setIntro('')

        // Contact fields
        setPhone('');
        setEmail('');
        setAddress('');


        if (document.getElementById("img")) {
            document.getElementById("img").value = "";
        }
    }
    return (


        <div className="wrapper">
            {!showCover ?
                <div className="CoverForm">
                    <div className="CoverDetails">
                        <h1 className="CoverHead">Create your Cover Letter</h1>
                        <h1 className="CoverHead">Let's Start</h1>
                    </div>
                    <form className="formwrap" id="form">
                        <button type="button" className="collapsible" id="personal" onClick={() => expand("personal")}> Personal Details</button>
                        <div className="content">
                            {personalFields()}
                        </div>
                        <button type="button" className="collapsible" id="contactButton" onClick={() => expand("contactButton")}> Contact Details</button>
                        <div className="content">
                            {contactFields()}
                        </div>
                        <div className="imgwrap">
                            <label htmlFor="img" style={{ color: 'red', alignSelf: 'baseline', marginBottom: '10px', fontSize: '20px' }}> Select Image To Upload</label>
                            <input type="file" id="img" name="img" accept="image/*" onChange={(event) => loadFile(event)} style={{ color: 'white', background: '#4077ad', marginBottom: '30px', width: '850px' }}></input>
                        </div>
                        <div className="submitWrap">
                            <button type="submit" className="submit" id="submit" onClick={(e) => generate(e)}>Generate</button>
                            <button type="reset" className="submit" id="reset" onClick={() => clearAll()}>Reset</button>
                            <Link to="/UserCovers"><button className="submit" id="reset">Your Covers</button></Link>
                        </div>
                    </form>
                </div> : <CoverTemplate generateNew={clearAll} formData={CoverData} />}
        </div>
    );
}

export default CoverInputForm;

