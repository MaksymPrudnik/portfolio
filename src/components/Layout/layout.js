import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Navbar />
            {children}
            <div className={styles.spacer}/>
            <Footer />
        </div>
    )
}

export default Layout;