import React from 'react';
import styles from "./ClientNote.module.css"

const ClientNote = ({ client, text }) => {
    return (
        <section className={styles.client_note}>
            <h4>{client}</h4>
            <p>{text}</p>
            <small><a>Read more</a></small>
        </section>
    );
};

export default ClientNote;