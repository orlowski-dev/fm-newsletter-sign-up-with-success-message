import './NewsletterForm.scss';
import {useRef, useState} from "react";

export default function NewsletterForm() {
    const emailInputRef = useRef(null);
    const emailErrorRef = useRef(null);
    const [emailInputValue, setEmailInputValue] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const isEmail = (email) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isEmailInputValid = () => {
        if (emailInputValue.length === 0 || !isEmail(emailInputValue)) {
            setIsEmailValid(false);
            return;
        }
        setIsEmailValid(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        isEmailInputValid();
        setInputAndError();

        if (isEmailValid) {
            e.target.submit();
        }
    }

    const setInputAndError = () => {
        const emailErrorMessage = 'Invalid email address';
        if (!isEmailValid) {
            emailInputRef.current.classList.add('error');
            emailErrorRef.current.innerText = emailErrorMessage;
            return;
        }

        emailInputRef.current.classList.remove('error');
        emailErrorRef.current.innerText = '';
    }

    return <form action="#" method="post" id="nf--form" onSubmit={handleFormSubmit}>
        <div className="input-area">
            <label htmlFor="nf--email">Email address</label>
            <p className="nf--error-email"
               ref={emailErrorRef}
            ></p>
            <input type="email"
                   placeholder="email@company.com"
                   id="nf--email"
                   ref={emailInputRef}
                   onKeyDown={(e) => setEmailInputValue(e.target.value)}
            />
        </div>
        <button type="submit"
        >Subscribe to monthly newsletter</button>
    </form>
}