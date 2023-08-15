import { useRef, useState } from 'react';
import classes from './ContactForm.module.css';
import { Firestore, addDoc } from 'firebase/firestore';
import { auth, db, firebase, firestoreNamespace } from '../firebase';
import { collection, serverTimestamp } from 'firebase/firestore';



function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const submitHandler = async (event) => {
        event.preventDefault();

        await addDoc(collection(db, "ContactFormData"), {
                        name: name,
                        email: email,
                        subject: subject,
                        message: message,
                    })
                        .then(() => {
                            alert('Message sent');
                    });

        // clear form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <form className={classes.forms} onSubmit={(event) => submitHandler(event)}>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' required id='name' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='text' required id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className={classes.control}>
                <label htmlFor='subject'>Subject</label>
                <input type='text' required id='subject' value={subject} onChange={(event) => setSubject(event.target.value)} />
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Message</label>
                <textarea id='message' required rows='5' value={message} onChange={(event) => setMessage(event.target.value)} ></textarea>
            </div>
            <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
        </form>
    );
}

export default ContactForm;