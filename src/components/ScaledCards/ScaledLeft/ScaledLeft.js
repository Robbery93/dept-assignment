import React from 'react';
import styles from "./ScaledLeft.module.css";
import ClientNote from "../../ClientNote/ClientNote";

const ScaledLeft = ({ src, alt, client, text, }) => {
    return (
        <article className={styles.scaled}>

                <section className={styles.scaled__container}>
                    <img src={src} alt={alt} className={styles.scaled__img} loading="lazy"/>
                    <section>
                        <h4>{client}</h4>
                        <p>{text}</p>
                        <small>Read more</small>
                    </section>
                </section>

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

export default ScaledLeft;