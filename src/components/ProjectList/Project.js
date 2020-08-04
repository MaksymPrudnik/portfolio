import styles from './Project.module.css';
import { FaCode, FaDesktop } from 'react-icons/fa';

const Project = (props) => {
    const { name, description, techStack, pathToImg, links, color } = props.project;
    return (
    <section className={styles.project} style={{backgroundColor: `#${color}`}}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.description}>
            <h4>Description</h4>
            <p>{description}</p>
        </div>
        <div className={styles.tech_stack}>
            <h4>Tech stack:</h4>
            <ul>
                { techStack.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </div>
        <div className={styles.preview}>
            <img src={pathToImg} alt='project screenshot'/>
            <div className={styles.links_box}>
                <a href={links[0]}><FaDesktop /> Live</a>
                <a href={links[1]} style={{marginLeft: 'auto'}}><FaCode /> Code</a>
            </div>
        </div>
    </section>
)};

export default Project;