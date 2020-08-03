import styles from './DrawerToggleButton.module.css';

const DrawerToggleButton = props => (
    <button className={styles.toggle_button} onClick={props.click}>
        <div className={styles.toggle_button_line}/>
        <div className={styles.toggle_button_line}/>
        <div className={styles.toggle_button_line}/>
    </button>
);

export default DrawerToggleButton;