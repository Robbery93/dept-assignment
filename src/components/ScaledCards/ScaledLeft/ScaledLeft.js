import React from 'react';
import styles from "./ClientScaledLeft.module.css";
import ClientNote from "../../ClientNote/ClientNote";

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
                <ClientNote
                    client="Microsoft"
                    text="Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels"
                />
                <span className={styles.line}></span>
                <ClientNote
                    client="O'Neill"
                    text="Integrating existing content into O’Neills’s new e-commerce platform"
                />
                <span className={styles.line}></span>
                <ClientNote
                    client="Microsoft"
                    text="Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels"
                />
            </aside>


        </article>
    );
};

export default ClientScaledLeft;