import { Link } from "react-router-dom";
import PersonalInfo from "../components/form/PersonalInfo";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function VolunteerForm1() {
    return (
        <>
        <div>
            <Navbar />
            <PersonalInfo />
            <Footer />
        </div>
        </>
    );
}

export default VolunteerForm1;