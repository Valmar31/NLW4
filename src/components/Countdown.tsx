import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext)
    
    // preencher começo com 0 (padstart). Dividir a string em 2 (split). ****  25= '2' '5'**** '5' = '0' '5'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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