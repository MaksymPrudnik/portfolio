import Layout from '../components/Layout/layout';
import Head from 'next/head';

import ProjectList from '../components/ProjectList/ProjectList';
import ProjectsOverview from '../components/ProjectsOverview/ProjectsOverview';

const Projects = () => (
    <Layout>
        <Head>
            <title>Projects</title>
        </Head>
        <ProjectsOverview />
        <ProjectList />
    </Layout>
)

export default Projects;