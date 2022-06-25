import React from 'react';
import styles from "./ClientScaledLeft.module.css";

const ClientScaledLeft = ({ src, alt, client, text, }) => {
    return (
        <article className={styles.scaled}>

            <div className={styles.scaled_card}>
                <div className={styles.scaled__container}>
                    <img src={src} alt={alt} className={styles.scaled__img} loading="lazy"/>
                    <section>
                        <h4>{client}</h4>
                        <p>{text}</p>
                        <small>Read more</small>
                    </section>
                </div>
            </div>

            <aside>
                <section>
                    <h4>"MICROSOFT"</h4>
                    <p>{text}</p>
                    <small>Read more</small>
                </section>
            </aside>


        </article>
    );
};

export default ClientScaledLeft;