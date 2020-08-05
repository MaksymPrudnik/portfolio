import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout/layout';
import Welcome from'../components/Welcome/Welcome';
import ShortInfo from '../components/ShortInfo/ShortInfo';

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="Description" content="Portfolio home page. Author: Maksym Prudnik.
        There is info about me and my contacts." />
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <ShortInfo />
    </Layout>
  )
}
