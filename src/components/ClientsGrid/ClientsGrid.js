import React from 'react';
import styles from "./ClientsGrid.module.css"
import {ReactComponent as Levi} from "../../assets/clientLogos/levi.svg";
import {ReactComponent as Netflix} from "../../assets/clientLogos/netflix.svg";
import {ReactComponent as Patagonia} from "../../assets/clientLogos/patagonia.svg";
import {ReactComponent as Fujitsu} from "../../assets/clientLogos/fujitsu.svg";
import {ReactComponent as Audi} from "../../assets/clientLogos/audi.svg";
import {ReactComponent as Triumph} from "../../assets/clientLogos/triumph.svg";
import {ReactComponent as Asos} from "../../assets/clientLogos/asos.svg";
import {ReactComponent as Takeaway} from "../../assets/clientLogos/takeaway.svg";
import {ReactComponent as Adyen} from "../../assets/clientLogos/adyen.svg";
import {ReactComponent as Google} from "../../assets/clientLogos/google.svg";
import {ReactComponent as Tesla} from "../../assets/clientLogos/tesla.svg";
import {ReactComponent as Spotify} from "../../assets/clientLogos/spotify.svg";

const ClientsGrid = () => {
    return (
        <article className={styles.clients}>

            <section className={styles.clients_header}>
                <h3>Clients</h3>
                <p>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
            </section>

            <div className={styles.clients_grid}>
                <Google />
                <Levi />
                <Netflix />
                <Spotify />
                <Patagonia />
                <Fujitsu />
                <Adyen />
                <Audi />
                <Triumph />
                <Tesla />
                <Asos />
                <Takeaway />
            </div>
        </article>
    );
};

export default ClientsGrid;