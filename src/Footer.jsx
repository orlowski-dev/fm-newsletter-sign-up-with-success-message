import HeartIcon from './assets/images/heart-svgrepo-com.svg';
import ReactLogo from './assets/images/react.svg';
import ViteLogo from './assets/images/vite.svg';
import './Footer.scss';
export default function Footer() {
    return <footer>
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/orlowski-dev">@orlowski-dev</a>.
        </div>
        <div className="created-with">
            <p>
                Created with
                <img src={HeartIcon} alt="heart icon"/>
                +
                <img src={ViteLogo} alt='vite logo'/>
                +
                <img src={ReactLogo} alt='react logo'/>
            </p>
        </div>
    </footer>
}