import { Link } from "react-router-dom";
import Verification from "../components/form/Verification";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function VolunteerForm3() {
    return (
        <>
        <div>
        <Navbar />
            <Verification />
            <Footer />
        </div>
        
        </>
    );
}

export default VolunteerForm3;