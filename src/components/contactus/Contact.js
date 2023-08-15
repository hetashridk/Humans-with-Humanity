import contact from '../../assests/contact.jpg';
import ContactForm from './ContactForm';
import classes from './Contact.module.css';

function Contact() {
    return (

    <section className={classes.contact}>
        <div className={classes.container}>
            <div className={classes.header}>
                <p>Get In Touch</p>
                <h2>Contact for any query</h2>
            </div>
            <div className={classes.imag}>
                <img src={contact} alt='volunteer'/>
            </div>
            <div>
            <ContactForm />
            </div>
        </div>
    </section>
    );
}

export default Contact;