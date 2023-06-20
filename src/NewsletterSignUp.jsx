import './NewsletterSignUp.scss';
import IllustrationDesktop from '../src/assets/images/illustration-sign-up-desktop.svg';
import IllustrationMobile from '../src/assets/images/illustration-sign-up-mobile.svg';
import NewsletterForm from "./NewsletterForm.jsx";
import {useEffect, useState} from "react";

export default function NewsletterSignUp(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [illustration, setIllustration] = useState('');

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        setIllustration((windowWidth < 400) ? IllustrationMobile : IllustrationDesktop)


        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [windowWidth]);

    return <article className="newsletter-component">
        <section className="main-content">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
            </ul>
            <NewsletterForm parentFun={props.parentFun}/>
        </section>
        <div className="image-container">
            <img src={illustration} alt="illustration"/>
        </div>
    </article>
}