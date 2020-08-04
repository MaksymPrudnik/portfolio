import styles from './ShortInfo.module.css';

const ShortInfo = () => (
    <section className={styles.about_section} id='about'>
        <div className={styles.about_text}>
            <h2>About me</h2>
            <p>Some general info about me</p>
        </div>
        <img className={styles.avatar} src='/img/avatar1.jpg' alt='my avatar' />
        <div className={styles.tech_stack}>
            <p>I have experience in:</p>
            <ul>
                <li>HTML5/CSS3</li>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Reactjs</li>
                <li>Expressjs, Nextjs</li>
                <li>Redux</li>
                <li>PostgreSQL, Redis</li>
            </ul>
        </div>
    </section>
);

export default ShortInfo;