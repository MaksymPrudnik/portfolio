import styles from './ProjectsOverview.module.css';

const ProjectsOverview = () => (
    <section className={styles.projects_overview}>
        <h2>Projects</h2>
        <p>
            Here you can find projects, which I've made and some which are still in development.
            In all of them I've used best practices to improve performance, accessibility and 
            SEO. Some of them are turned into Progressive Web Apps, where it was suitable.<br /> 
            <a href='#projects_section'>Check out</a> what I've done:
        </p>
    </section>
)

export default ProjectsOverview;