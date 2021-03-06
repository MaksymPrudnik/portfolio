import styles from './DrawerToggleButton.module.css';

const DrawerToggleButton = props => (
    <button className={styles.toggle_button} onClick={props.click} aria-label='open navigation'>
        <div className={styles.toggle_button_line}/>
        <div className={styles.toggle_button_line}/>
        <div className={styles.toggle_button_line}/>
    </button>
);

export default DrawerToggleButton;