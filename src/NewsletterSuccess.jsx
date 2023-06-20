import './NewsletterSuccess.scss';
import IconSuccess from '../src/assets/images/icon-success.svg';

export default function NewsletterSuccess(props) {

    const handleOnClick = () => {
        props.parentFun(null);
    }

    return <article className="newsletter-success">
        <section className="ns-top">
            <img src={IconSuccess} alt="icon success" />
            <h1>Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <span className="email">{props.registeredEmail}</span>.
                Please open it and click the button inside to confirm your subscription
            </p>
        </section>
        <div className='ns-bottom'>
            <p>
                <button className='button-primary'
                    onClick={handleOnClick}
                >Dimiss message</button>
            </p>
        </div>
    </article>
};