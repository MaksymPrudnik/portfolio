import Link from 'next/link';

import styles from './SideDrawer.module.css';

const SideDrawer = props => {
    let drawerClasses = styles.side_drawer;
    if (props.show) {
        drawerClasses = `${styles.side_drawer} ${styles.open}`;
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/tours"><li><a>About</a></li></Link>
            <Link href="/reviews"><li><a>Projects</a></li></Link>
            <Link href="/contacts"><li><a>Contacts</a></li></Link>
        </ul>
    </nav>
    );
}

export default SideDrawer;