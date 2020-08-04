import styles from './Footer.module.css'

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaSkype, FaAt } from 'react-icons/fa';

const Footer = () => (
    <footer className={styles.footer} id='contacts'>
        <div className={styles.social}>
            <a href='https://github.com/maksymprudnik'><FaGithub />Github</a>
            <a href='https://www.linkedin.com/in/maksym-prudnik-531a611a7/'><FaLinkedin />LinkedIn</a>
            <a href='https://www.instagram.com/maxprudnik'><FaInstagram />Instagram</a>
            <a href='https://www.facebook.com/Maksym.Prudnik'><FaFacebook />Facebook</a>
        </div>
        <div className={styles.contacts}>
            <a href='skype:max.prudnik?chat'><FaSkype />max.prudnik</a>
            <a href='mailto:maksymprudnik@gmail.com'><FaAt />gmail maksymprudnik</a>
        </div>
    </footer>
);

export default Footer;