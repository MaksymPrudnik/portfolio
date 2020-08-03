import styles from './Footer.module.css'

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => (
    <footer className={styles.footer}>
        <a href='https://github.com/maksymprudnik'><FaGithub />Github</a>
        <a href='https://www.linkedin.com/in/maksym-prudnik-531a611a7/'><FaLinkedin />LinkedIn</a>
        <a href='https://www.instagram.com/maxprudnik'><FaInstagram />Instagram</a>
        <a href='https://www.facebook.com/Maksym.Prudnik'><FaFacebook />Facebook</a>
    </footer>
);

export default Footer;