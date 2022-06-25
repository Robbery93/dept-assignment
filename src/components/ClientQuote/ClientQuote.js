import React from 'react';
import styles from './ClientQuote.module.css'

const ClientQuote = ({ quote, by }) => {
    return (
        <span className={styles.quote}>
            <h3>“{quote}”</h3>
            <p>{by}</p>
        </span>
    );
};

export default ClientQuote;