import { Link } from "react-router-dom";
import classes from './ContactUsHeader.module.css';

function ContactUsHeader() {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div>
                    <div className={classes.col}>
                        <h2>Contact Us</h2>
                    </div>
                    <div className={classes.col}>
                        <Link to='/'>Home</Link>
                        <Link to='/Contact-us'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsHeader;