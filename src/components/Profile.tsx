import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Valmar31.png" alt="Valmar Munhoz" />
            <div>
                <strong>Valmar Munhoz</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Lvl 1
                </p>
            </div>
        </div>
    );
}