import Layout from '../components/Layout/layout';
import Head from 'next/head';

import ProjectList from '../components/ProjectList/ProjectList';
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview';

const Projects = () => (
    <Layout>
        <Head>
            <meta name="Description" content="Portfolio projects page. Author: Maksym Prudnik.
            Here you can find information about finished and current projects." />
            <title>Projects</title>
        </Head>
        <ProjectsOverview />
        <ProjectList />
    </Layout>
)

export default Projects;