import classes from "./Others.module.css";
import banner from "../../assests/banner.jpg";
import filled_circle_black from "../../assests/filled_circle_black.png";
import filled_circle_grey from "../../assests/filled_circle_grey.png";

import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Firestore, addDoc } from "firebase/firestore";
import { auth, db, firebase, firestoreNamespace } from "../firebase";
import { collection, serverTimestamp } from "firebase/firestore";
// import { GlobalContext } from '../GlobalContext';

function Others() {
  // const { globalArray } = useContext(GlobalContext);
  // const { addElementToGlobalArray } = useContext(GlobalContext);

  const [food_habit, setFoodHabit] = useState("");
  const [addiction, setAddiction] = useState([]);
  const [pet, setPet] = useState(false);
  const [saved_animal, setSavedAnimal] = useState(false);
  const [yes_animal, setYesAnimal] = useState("");
  const [work_at_any_organization, setWorkAtAnyOrganization] = useState(false);
  const [yes_work, setYesWork] = useState("");
  const [achievements_interests, setAchievementsInterests] = useState("");
  const [hear_about_hwh, setHearAboutHWH] = useState("");

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setAddiction([...addiction, selectedOption]);
    } else {
      const updatedOptions = addiction.filter(
        (option) => option !== selectedOption
      );
      setAddiction(updatedOptions);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await addDoc(collection(db, "VolunteerFormData"), {
      food_habit: food_habit,
      addiction: addiction,
      pet: pet,
      saved_animal: saved_animal,
      yes_animal: yes_animal,
      work_at_any_organization: work_at_any_organization,
      yes_work: yes_work,
      achievements_interests: achievements_interests,
      hear_about_hwh: hear_about_hwh,
    }).then(() => {
      alert(
        "The above information is saved successfully. Please click on next to fill other details too."
      );
    });

    // clear form
    setFoodHabit("");
    setAddiction("");
    setPet("");
    setSavedAnimal("");
    setYesAnimal("");
    setWorkAtAnyOrganization("");
    setYesWork("");
    setAchievementsInterests("");
    setHearAboutHWH("");

  //   function hideButton() {
  //     const [showSection1, setShowSection1] = useState(true);
  //     const [showSection2, setShowSection2] = useState(false);
  //     const [showSection3, setShowSection3] = useState(false);
  // };

  };

  return (
    <>
    {/* {showSection2 &&  */}
    
      <div>
        <div className={classes.header}>
          <h1>HUMANS WITH HUMANITY VOLUNTEERING FORM</h1>
          {/* <img  className={classes.ima} src={animal_banner} alt='banner' /> */}
          <img className={classes.imag} src={banner} alt="banner" />
        </div>
        <hr />
        <div>
          <h4>
            HUMANS WITH HUMANITY is animal welfare foundation, entering into its
            12th year. <br />
            Together we aim to create society where coexistence with nature is
            blessing. <br />
            Join us and let us together make our surrounding a beautiful place.
          </h4>
        </div>
        <div className={classes.step}>
          <img
            className={classes.filledCircle1}
            src={filled_circle_black}
            alt="filled_color_black"
          />
          <Link to="/VolunteerForm1">
            <h1 className={classes.stepNumber1}>1</h1>
          </Link>
          <h1 className={classes.line1}>_____________________</h1>
          <img
            className={classes.filledCircle2}
            src={filled_circle_black}
            alt="filled_color_black"
          />
          <Link to="/VolunteerForm2">
            <h1 className={classes.stepNumber2}>2</h1>
          </Link>
          <h1 className={classes.line2}>_____________________</h1>
          <img
            className={classes.filledCircle3}
            src={filled_circle_grey}
            alt="filled_color_grey"
          />
          <Link to="/VolunteerForm3">
            <h1 className={classes.stepNumber3}>3</h1>
          </Link>
        </div>
        <div>
          <form className={classes.forms}>
            <div className={classes.foodHabit}>
              <label htmlFor="foodhabit">What is your Food Habit ?</label>
              <div>
                <input
                  className={classes.inputfoodHabit}
                  type="radio"
                  id="veg"
                  required
                  value="vegeterian"
                  checked={food_habit === "vegeterian"}
                  onChange={(event) => setFoodHabit(event.target.value)}
                />
                <label htmlFor="veg">Vegeterian</label>
                <br />
                <input
                  className={classes.inputfoodHabit}
                  type="radio"
                  id="non-veg"
                  value="non_vegeterian"
                  checked={food_habit === "non_vegeterian"}
                  onChange={(event) => setFoodHabit(event.target.value)}
                />
                <label htmlFor="non-veg">Non-Vegeterian</label>
                <br />
                <input
                  className={classes.inputfoodHabit}
                  type="radio"
                  id="vegan"
                  value="vegan"
                  checked={food_habit === "vegan"}
                  onChange={(event) => setFoodHabit(event.target.value)}
                />
                <label htmlFor="vegan">Vegan</label>
                <br />
                <input
                  className={classes.inputfoodHabit}
                  type="radio"
                  id="egg"
                  value="eggiterian"
                  checked={food_habit === "eggterian"}
                  onChange={(event) => setFoodHabit(event.target.value)}
                />
                <label htmlFor="egg">Eggterian</label>

                {/* addiction */}
                <div className={classes.div}>
                  <label htmlFor="foodhabit">
                    Do you have any kind of Addiction ?
                  </label>
                  <div>
                    <input
                      className={classes.addiction}
                      type="checkbox"
                      id="tabacco"
                      value="tabacco"
                      checked={addiction.includes("tabacco")}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="tabacco">Tabacco</label>
                    <br />
                    <input
                      className={classes.addiction}
                      type="checkbox"
                      id="alcohol"
                      value="alcohol"
                      checked={addiction.includes("alcohol")}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="alcohol">Alcohol</label>
                    <br />
                    <input
                      className={classes.addiction}
                      type="checkbox"
                      id="weed"
                      value="weed"
                      checked={addiction.includes("weed")}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="weed">Weed</label>
                    <br />
                    <input
                      className={classes.addiction}
                      type="checkbox"
                      id="other"
                      value="other"
                      checked={addiction.includes("other")}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="other">Any other</label>
                    <br />
                    <input
                      className={classes.addiction}
                      type="checkbox"
                      id="nothing"
                      required
                      value="nothing"
                      checked={addiction.includes("nothing")}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor="nothing">Nothing</label>
                  </div>
                </div>

                <div className={classes.div}>
                  <label htmlFor="foodhabit">
                    Do you have any pet at home or had in past ?
                  </label>
                  <div className={classes.inputfoodHabit}>
                    <input
                      className={classes.inputfoodHabit}
                      type="radio"
                      id="yes"
                      value="yes"
                      checked={pet === "yes"}
                      onChange={(event) => setPet(event.target.value)}
                    />
                    <label htmlFor="yes">Yes</label>
                    <br />
                    <input
                      className={classes.inputfoodHabit}
                      type="radio"
                      id="no"
                      required
                      value="no"
                      checked={pet === "no"}
                      onChange={(event) => setPet(event.target.value)}
                    />
                    <label htmlFor="no">No</label>
                  </div>

                  <div className={classes.div}>
                    <label htmlFor="foodhabit">
                      Have you ever saved any animal ?
                    </label>
                    <div className={classes.inputfoodHabit}>
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="yes"
                        value="yes"
                        checked={saved_animal === "yes"}
                        onChange={(event) => setSavedAnimal(event.target.value)}
                      />
                      <label htmlFor="yes">Yes</label>
                      <br />
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="no"
                        required
                        value="no"
                        checked={saved_animal === "no"}
                        onChange={(event) => setSavedAnimal(event.target.value)}
                      />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>

                  <div className={classes.control}>
                    <label htmlFor="message">
                      If yes please provide the details
                    </label>

                    <textarea
                      className={classes.inputs}
                      id="message"
                      rows="5"
                      value={yes_animal}
                      onChange={(event) => setYesAnimal(event.target.value)}
                    ></textarea>
                  </div>

                  <div className={classes.div}>
                    <label htmlFor="foodhabit">
                      Do you work currently or had worked with any any animal
                      related organization previously ?
                    </label>
                    <div className={classes.inputfoodHabit}>
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="yes"
                        value="yes"
                        checked={work_at_any_organization === "yes"}
                        onChange={(event) =>
                          setWorkAtAnyOrganization(event.target.value)
                        }
                      />
                      <label htmlFor="yes">Yes</label>
                      <br />
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="no"
                        required
                        value="no"
                        checked={work_at_any_organization === "no"}
                        onChange={(event) =>
                          setWorkAtAnyOrganization(event.target.value)
                        }
                      />

                      <label htmlFor="no">No</label>
                    </div>
                  </div>

                  <div className={classes.control}>
                    <label htmlFor="message">
                      If yes please provide information of the organization
                      including duration of your involment
                    </label>

                    <textarea
                      className={classes.inputs}
                      id="message"
                      rows="5"
                      value={yes_work}
                      onChange={(event) => setYesWork(event.target.value)}
                    ></textarea>
                  </div>

                  <div className={classes.control}>
                    <label htmlFor="message">
                      Achievements or interests apart from animal welfare field
                    </label>

                    <textarea
                      className={classes.inputs}
                      id="message"
                      required
                      rows="5"
                      value={achievements_interests}
                      onChange={(event) =>
                        setAchievementsInterests(event.target.value)
                      }
                    ></textarea>
                  </div>

                  <div className={classes.div}>
                    <label htmlFor="foodhabit">
                      Where did you hear about us ?
                    </label>
                    <div className={classes.inputfoodHabit}>
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="insta"
                        value="insta"
                        checked={hear_about_hwh === "insta"}
                        onChange={(event) =>
                          setHearAboutHWH(event.target.value)
                        }
                      />
                      <label htmlFor="insta">Instagram</label>
                      <br />
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="fb"
                        value="fb"
                        checked={hear_about_hwh === "fb"}
                        onChange={(event) =>
                          setHearAboutHWH(event.target.value)
                        }
                      />
                      <label htmlFor="fb">Facebook</label>
                      <br />
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="pm"
                        value="pm"
                        checked={hear_about_hwh === "pm"}
                        onChange={(event) =>
                          setHearAboutHWH(event.target.value)
                        }
                      />
                      <label htmlFor="pm">Print Media</label>
                      <br />
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="ff"
                        value="ff"
                        checked={hear_about_hwh === "ff"}
                        onChange={(event) =>
                          setHearAboutHWH(event.target.value)
                        }
                      />
                      <label htmlFor="ff">Family and Friends</label>
                      <br />
                      <input
                        className={classes.inputfoodHabit}
                        type="radio"
                        id="tv"
                        required
                        value="tv"
                        checked={hear_about_hwh === "tv"}
                        onChange={(event) =>
                          setHearAboutHWH(event.target.value)
                        }
                      />
                      <label htmlFor="tv">Telivision</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.threebutton}>
              <Link to="/VolunteerForm1">
                <div className={classes.actions}>
                  <button>Previous</button>
                </div>
              </Link>
              <div className={classes.actions}>
                {/* <button onClick={hideButton}>Submit</button> */}
                <button onClick={submitHandler}>Submit</button>
              </div>
              <Link to="/VolunteerForm3">
                <div className={classes.actions}>
                  <button>Next</button>
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

export default Others;
