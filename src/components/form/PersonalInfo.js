import { useContext, useState } from 'react';
import classes from './PersonalInfo.module.css';
import { useRef } from 'react';
import banner from '../../assests/banner.jpg';
import filled_circle_black from '../../assests/filled_circle_black.png';
import filled_circle_grey from '../../assests/filled_circle_grey.png';
import horizontal_line_grey from '../../assests/horizontal_line_grey.png'
// import { GlobalContext } from '../GlobalContext';

import { Link } from 'react-router-dom';
import { Firestore, addDoc } from 'firebase/firestore';
import { auth, db, firebase, firestoreNamespace } from '../firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
// import Navbar from '../navbar/Navbar';

function PersonalInfo() {

    // const { globalArray } = useContext(GlobalContext);

    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

    function handleChange(event) {
        setDate(event.target.value);
        setDOB(event.target.value);
    }

    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const [age, setAge] = useState(0);
    const [contact_number, setContactNumber] = useState(0);
    const [alternate_number, setAlternate] = useState(0);
    const [educational_qualification, setEducationalQualification] = useState('');
    const [occupation, setOccupation] = useState('');
    const [postal_address, setPostalAddress] = useState('');
    const [city_village, setCityVillage] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState(0);

    
    const submitHandler = async (event) => {
        event.preventDefault();
        
        
        await addDoc(collection(db, "VolunteerFormData"), {
            name: name,
            email: email,
            gender: gender,
            dob: dob,
            age: age,
            contact_number: contact_number,
            alternate_number: alternate_number,
            educational_qualification: educational_qualification,
            occupation: occupation,
            postal_address: postal_address,
            city_village: city_village,
            state: state,
            pincode: pincode,
            
            
            
        })
            .then(() => {
                alert('The above information is saved successfully. Please click on next to fill other details too.');
            });
            

            
            // clear form
            setName('');
            setEmail('');
            setGender('');
            setDOB('');
            setAge('');
            setContactNumber('');
            setAlternate('');
            setEducationalQualification('');
        setOccupation('');
        setPostalAddress('');
        setCityVillage('');
        setState('');
        setPincode('');
        
            // function hideButton() {
            //     const [showSection1, setShowSection1] = useState(true);
            //     const [showSection2, setShowSection2] = useState(false);
            //     const [showSection3, setShowSection3] = useState(false);
            // };
    };


    return (
        <>

               {/* {showSection1 &&  */}
               
            <div>
            <div className={classes.header}>
                    <h1>HUMANS WITH HUMANITY VOLUNTEERING FORM</h1>
                    {/* <img  className={classes.ima} src={animal_banner} alt='banner' /> */}
                    <img className={classes.imag} src={banner} alt='banner' />
                </div>
                <hr />
                <div>
                    <h4>HUMANS WITH HUMANITY is animal welfare foundation, entering into its 12th year. <br />Together we aim to create society where coexistence with nature is blessing. <br />Join us and let us together make our surrounding a beautiful place.</h4>
                </div>
                <div className={classes.step}>
                    <img className={classes.filledCircle1} src={filled_circle_black} alt='filled_color_black' />
                    <Link to='/VolunteerForm1'>
                        <h1 className={classes.stepNumber1}>1</h1>
                    </Link>
                    <h1 className={classes.line1}>_____________________</h1>
                    <img className={classes.filledCircle2} src={filled_circle_grey} alt='filled_color_grey' />
                    <Link to='/VolunteerForm2'>
                        <h1 className={classes.stepNumber2}>2</h1>
                    </Link>
                    <h1 className={classes.line2}>_____________________</h1>
                    <Link to='/VolunteerForm3'>
                        <img className={classes.filledCircle3} src={filled_circle_grey} alt='filled_color_grey' />
                    </Link>
                    <h1 className={classes.stepNumber3}>3</h1>
                </div>
                <div>
                    <form className={classes.forms}>
                        <div className={classes.col}>
                            <div className={classes.flex}>
                                <label htmlFor='name'>Name</label>
                                <label className={classes.labelspace} htmlFor='email'>Email</label>
                            </div>
                            <div className={classes.flex}>
                                {/* {globalArray.map(() => ( */}
                                    {/* <> */}
                                        <input className={classes.inputwidth} type='text' required id='email' value={name} onChange={(event) => setName(event.target.value)} />
                                        <input className={classes.inputspace} type='text' required id='name' value={email} onChange={(event) => setEmail(event.target.value)} />
                                    {/* </> */}
                                {/* ))} */}
                            </div>
                        </div>
                        <div className={classes.gender}>
                            <label htmlFor='gender'>Gender</label>
                            <div className={classes.inputGender}>

                            {/* {globalArray.map(() => ( */}
                                {/* <> */}

                                <input className={classes.inputGender} type="radio" id='male' value='male' checked={gender === 'male'} onChange={(event) => setGender(event.target.value)}/>
                                <label htmlFor='male'>Male</label>
                                <br />
                                <input className={classes.inputGender} type="radio" id='female' value='female' checked={gender === 'female'} onChange={(event) => setGender(event.target.value)}/>
                                <label htmlFor='female'>Female</label>
                                <br />
                                <input className={classes.inputGender} type="radio" id='other' value='other' checked={gender === 'other'} onChange={(event) => setGender(event.target.value)}/>
                                <label htmlFor='other'>Other</label>
                                {/* </> */}
                            {/* ))} */}
                            </div>
                        </div>
                        <div className={classes.marginTop}>
                            <div className={classes.col}>
                                <label htmlFor='date'>Date of Birth</label>
                                <label className={classes.labelspaceAge} htmlFor='age'>Age </label>
                            </div>
                            <div className={classes.flex}>
                            {/* {globalArray.map(() => ( */}
                                {/* <> */}

                                <input required className={classes.inputwidth} type='date' id='date' onChange={handleChange} ref={dateInputRef} value={dob}/>
                                <input required className={classes.inputspaceAge} type='number' id='age' value={age} onChange={(event) => setAge(Number(event.target.value))}/>
                                {/* </> */}
                            {/* ))} */}
                            </div>
                        </div>
                        <div className={classes.marginTopContact}>
                            <div className={classes.col}>
                                <label className={classes.labelspaceContact} htmlFor='contact'>Contact Number(Whatsapp)</label>
                                <label className={classes.labelspaceAlternate} htmlFor='alternate'>Alternate Contact Number</label>
                            </div>
                            <div className={classes.flex}>
                            {/* {globalArray.map(() => ( */}
                                {/* <> */}
                                    
                                <input required className={classes.inputwidthContact} type='text' id='contact' value={contact_number} onChange={(event) => setContactNumber(Number(event.target.value))} />
                                <input className={classes.inputspaceAlternate} type='text' id='alternate' value={alternate_number} onChange={(event) => setAlternate(Number(event.target.value))} />
                                {/* </> */}
                            {/* ))} */}
                            </div>
                        </div>
                        <div className={classes.marginTopEducation}>
                            <div className={classes.col}>
                                <label htmlFor='educational'>Educational Qualification</label>
                                <label className={classes.labelspaceOccupation} htmlFor='occupation'>Occupation</label>
                            </div>
                            <div className={classes.flex}>
                            {/* {globalArray.map(() => ( */}
                                {/* <> */}
                                    
                                <input required className={classes.inputwidth} type='text' id='educational' value={educational_qualification} onChange={(event) => setEducationalQualification(event.target.value)}/>
                                <input required className={classes.inputspaceOccupation} type='text' id='occupation' value={occupation} onChange={(event) => setOccupation(event.target.value)}/>
                                {/* </> */}
                            {/* ))} */}
                            </div>
                        </div>
                        <div className={classes.controlAddress}>
                            <label htmlFor='message'>Postal Address</label>
                            {/* {globalArray.map(() => ( */}
                                {/* <> */}
                                    
                            <textarea className={classes.inputs} id='message' required rows='5' value={postal_address} onChange={(event) => setPostalAddress(event.target.value)}></textarea>
                                {/* </> */}
                            {/* ))} */}
                        </div>
                        <div className={classes.colLocation}>
                            <div>
                                <label htmlFor='city'>City / Village</label>
                                <label className={classes.labelspaceState} htmlFor='state'>State</label>
                                <label className={classes.labelspacePin} htmlFor='pincode'>Pincode</label>
                            </div>
                            <div className={classes.flex}>
                            {/* {globalArray.map(() => ( */}
                                {/* <> */}
                                    
                                <input type='text' required id='city' value={city_village} onChange={(event) => setCityVillage(event.target.value)} />
                                <input className={classes.inputspaceState} type='text' required id='state' value={state} onChange={(event) => setState(event.target.value)} />
                                <input className={classes.inputspacePin} type='number' required id='pincode' value={pincode} onChange={(event) => setPincode(Number(event.target.value))} />
                                {/* </> */}
                            {/* ))} */}
                            </div>
                        </div>

                        <div className={classes.stepButton}>

                            <div className={classes.actions}>
                                {/* <button onClick={hideButton} className={classes.submitButton}>Submit</button> */}
                                <button onClick={submitHandler} className={classes.submitButton}>Submit</button>
                            </div>
                            <Link to='/VolunteerForm2'>
                                <div className={classes.actions}>
                                    <button className={classes.nextButton}>Next</button>
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
               {/* } */}

        </>
    );
}

export default PersonalInfo;
// export default hideButton;