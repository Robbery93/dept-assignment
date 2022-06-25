import React from 'react';
import styles from './ClientCard.module.css'

const ClientCard = ({ src, alt, client, text }) => {
    return (
        <div className={styles.client_card}>
            <img src={src} alt={`Picture for ${alt}`} className={styles.client_card__img} loading="lazy"/>
            <div className={styles.client_card__text}>
                <h4>{client}</h4>
                <p>{text}</p>
                <small>Read more</small>
            </div>
        </div>
    );
};

export default ClientCard;