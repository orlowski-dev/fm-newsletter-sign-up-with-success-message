import './App.scss';
import NewsletterSignUp from "./NewsletterSignUp.jsx";
import NewsletterSuccess from './NewsletterSuccess';
import Footer from "./Footer.jsx";
import { useEffect, useState } from 'react';

export default function App() {

    const [registeredEmail, setRegisteredEmail] = useState(null);
    const changeRegisteredEmailValue = (email) => {
        setRegisteredEmail(email);
    };
    const [componentToRender, setComponentToRender] = useState(<NewsletterSignUp parentFun={changeRegisteredEmailValue}/>);

    useEffect(() => {
        if (registeredEmail !== null) {
            setComponentToRender(
                <NewsletterSuccess registeredEmail={registeredEmail}
                    parentFun={changeRegisteredEmailValue}
                />
            );
        } else {
            setComponentToRender(
                <NewsletterSignUp parentFun={changeRegisteredEmailValue}/>
            );
        }
    }, [registeredEmail]);

    return <div className="main-container">
        {componentToRender}
        <Footer />
    </div>
}
