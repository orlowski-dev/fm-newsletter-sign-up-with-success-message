import './NewsletterForm.scss';

export default function NewsletterForm() {
    return <form action="#" method="post" id="nf--form" onSubmit={e => e.preventDefault()}>
        <div className="input-area">
            <label htmlFor="nf--email">Email address</label>
            <p className="nf--error-email"></p>
            <input type="email"
                   placeholder="email@company.com"
                   id="nf--email"
            />
        </div>
        <button type="submit">Subscribe to monthly newsletter</button>
    </form>
}