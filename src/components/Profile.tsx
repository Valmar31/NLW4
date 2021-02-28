import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Valmar31.png" alt="Valmar Munhoz" />
            <div>
                <strong>Valmar Munhoz</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Lvl {level}
                </p>
            </div>
        </div>
    );
}