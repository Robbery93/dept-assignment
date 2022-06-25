import React from 'react';
import styles from './ClientCard.module.css'

const ClientCard = ({ src, alt, client, text }) => {
    return (
        <article className={styles.client_card}>
            <div className={styles.client_card__container}>
                <img src={src} alt={alt} className={styles.client_card__img} loading="lazy"/>
                <section>
                    <h4>{client}</h4>
                    <p>{text}</p>
                    <small><a href="#">Read more</a></small>
                </section>
            </div>
        </article>
    );
};

export default ClientCard;