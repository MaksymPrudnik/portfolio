import styles from './ShortInfo.module.css';

const ShortInfo = () => (
    <section className={styles.about_section} id='about'>
        <div className={styles.about_text}>
            <h2>About me</h2>
            <p>
                I'm a Web Developer with one year experience. I like to make fast, scalable
                and responsive web apps with rich user interactions. <br />
                Most of my time I spend learning some new features in web development 
                or improving my fundamental skills in programming. <br />
                Beside programming, I'm interested in financial markets (mostly crypto, but also
                commodities and stocks).
            </p>
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