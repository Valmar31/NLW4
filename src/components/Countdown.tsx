import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);


    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // preencher começo com 0 (padstart). Dividir a string em 2 (split). ****  25= '2' '5'**** '5' = '0' '5'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        // resetar o timer
        setTime (0.1 * 60);
    }

    useEffect(() => {
        // console.log(isActive);
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1); 
            }, 1000);
        } else if (isActive && time == 0) {
            // console.log('finalizou');
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();  
        }
    }, [isActive, time])

    return(
    <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div> 
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>


        {/* { hasFinished ? (
            <p>Terminou</p>
        ) :null } */}
        {/* { hasFinished && (
            <p>Terminou</p>
        )} */}

        { hasFinished ? (
            <button
            disabled
           className={styles.countdownButton}
           >
            Ciclo encerrado
           </button> 

        ) : (

            <>
                {/* Botão de iniciar e abandonar ciclo */}
                {/* { isActive ? 'Abandonar ciclo' : 'Iiniciar um ciclo' } */}

                { isActive ? (
                    <button
                    type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
                >
                    Abandonar ciclo
                </button>
                ) : (
                    <button
                    type="button"
                    className={styles.countdownButton}
                    onClick={startCountdown}
                    >
                        Iniciar um ciclo
                    </button>
                ) }
            </>
        )}

    </div>
    );
}