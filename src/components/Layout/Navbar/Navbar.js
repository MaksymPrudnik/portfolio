import Link from 'next/link';

import styles from './Navbar.module.css';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './SideDrawer/Backdrop';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerVisibility: false
        }
    }
    
    drawerClickHandler = () => {
        this.setState(state => {
            this.setState({ sideDrawerVisibility: !state.sideDrawerVisibility })
        })
    }

    render() {
        const {sideDrawerVisibility} = this.state;
        const {drawerClickHandler} = this;
        let backdrop;
        if (sideDrawerVisibility) {
        backdrop = <Backdrop backdropClickHandler={drawerClickHandler}/>;
        }
        return (
            <div>
                <section className={styles.nav_section}>
                    <nav className={styles.navbar}>
                        <div className={styles.nav_toggle_button}>
                            <DrawerToggleButton click={drawerClickHandler} />
                        </div>
                        <div className={styles.nav_logo}><Link href='/'><a>Maksym Prudnik</a></Link></div>
                        <div className={styles.spacer}/>
                        <div className={styles.nav_items}>
                            <ul>
                                <Link href='/'><li><a>Home</a></li></Link>
                                <Link href='/about'><li><a>About</a></li></Link>
                                <Link href='/projects'><li><a>Projects</a></li></Link>
                                <Link href='/contacts'><li><a>Contacts</a></li></Link>
                            </ul>
                        </div>
                    </nav>
                </section>
                <SideDrawer show={sideDrawerVisibility}/>
                { backdrop }
            </div>
        )
    }
}

export default Navbar;