import classes from './Verification.module.css';
import banner from '../../assests/banner.jpg';
import filled_circle_black from '../../assests/filled_circle_black.png';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { storage } from '../firebase';
import { collection } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';
// import { GlobalContext } from '../GlobalContext';

function Verification() {

    // const { addElementToGlobalArray } = useContext(GlobalContext);
    // const { globalArray } = useContext(GlobalContext);


    const [id_card_photo, setIDCardPhoto] = useState(null);
    const [passport_photo, setPassportPhoto] = useState(null);
    const [why_join_hwh, setWhyJoinHWH] = useState('');
    const [above_info_is_true, setAboveInfoIsTrue] = useState(false);

   

    const submitHandler = async (event) => {
        event.preventDefault();

        if (id_card_photo == null) return;
        // console.log(id_card_photo[0].name);
        const idCardRef = ref(storage, `volunteerimages/${id_card_photo[0].name}`);
        uploadBytes(idCardRef, id_card_photo)

        if (passport_photo == null) return;
        const passportRef = ref(storage, `passportimages/${passport_photo[0].name}`);
        uploadBytes(passportRef, passport_photo)


        await addDoc(collection(db, "VolunteerFormData"), {
            why_join_hwh: why_join_hwh,
            above_info_is_true: above_info_is_true,
        })
            .then(() => {
                alert('Message sent');
            });

        // clear form
        setIDCardPhoto(null);
        setPassportPhoto(null);
        setWhyJoinHWH('');
        setAboveInfoIsTrue('');
    };

    return (
        <>

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
                    <img className={classes.filledCircle2} src={filled_circle_black} alt='filled_color_black' />
                    <Link to='/VolunteerForm2'>
                        <h1 className={classes.stepNumber2}>2</h1>
                    </Link>
                    <h1 className={classes.line2}>_____________________</h1>
                    <img className={classes.filledCircle3} src={filled_circle_black} alt='filled_color_black' />
                    <Link to='/VolunteerForm3'>
                        <h1 className={classes.stepNumber3}>3</h1>
                    </Link>
                </div>
                <div>
                    <form className={classes.forms}>
                        <div className={classes.uploadId}>
                            <label htmlFor='id'>ID card photograph for verification</label>
                            <br />
                            <input
                                className={classes.inputuploadId}
                                type='file'
                                // id='id'
                                accept='.jpg, .png, .jpeg, .pdf'
                                onChange={(event) => setIDCardPhoto(event.target.files)}
                                required
                            />
                            {/* <button onClick={IDCard}> Upload File </button> */}
                        </div>
                        <div className={classes.uploadId}>
                            <label htmlFor='idpassport'>Passport size photograph for Volunteering Id card</label>
                            <br />
                            <input
                                className={classes.inputuploadId}
                                type='file'
                                // id='idpassport'
                                accept='.jpg, .png, .jpeg, .pdf'
                                onChange={(event) => setPassportPhoto(event.target.files)}
                                required
                            />
                            {/* <button onClick={PassportPhoto}> Upload File </button> */}
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='message'>Why do you want to join 'Humans with Humanity' ?(150 words)</label>

                            {/* {globalArray.map(() => ( */}
                                {/* <> */}
                                    {/* addElementToGlobalArray( */}

                            <textarea className={classes.inputs} id='message' required rows='7' value={why_join_hwh} onChange={(event) => setWhyJoinHWH(event.target.value)}></textarea>
                                    {/* ) */}
                                {/* </> */}
                            {/* ))} */}
                        </div>
                        <div className={classes.foodHabit}>
                            <label htmlFor='foodhabit'>Information given above is true and best of knowledge and applicant is willing to join 'Humans with HUmanity' which is volunteer based group (It is not any registered organization or NGO) working for the welfare of animals.</label>
                            <div className={classes.inputfoodHabit}>
                            {/* {globalArray.map(() => ( */}
                                {/* <> */}
                                    {/* addElementToGlobalArray( */}

                                <input className={classes.inputfoodHabit} type="radio" id='yes' required value='yes' checked={above_info_is_true === 'yes'} onChange={(event) => setAboveInfoIsTrue(event.target.value)} />
                                <label htmlFor='yes'>Yes</label>
                                <br />
                                <input className={classes.inputfoodHabit} type="radio" id='no' required value='no' checked={above_info_is_true === 'no'} onChange={(event) => setAboveInfoIsTrue(event.target.value)} />
                                <label htmlFor='no'>No</label>
                                    {/* ) */}
                                {/* </> */}
                            {/* ))} */}
                            </div>
                        </div>

                        <div className={classes.button}>

                            <Link to='/VolunteerForm2'>
                                <div className={classes.actions}>
                                    <button>Previous</button>
                                </div>
                            </Link>
                            <div className={classes.actions}>
                                <button onClick={submitHandler} className={classes.submitButton}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Verification;