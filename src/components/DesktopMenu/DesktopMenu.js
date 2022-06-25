import React from 'react';
import styles from "./DesktopMenu.module.css"


const DesktopMenu = () => {
    return (
        <div className={styles.menu_container}>
            <div className={styles.countries}>
                <p>Landen</p>
                <ul className={styles.countries_list}>
                    <li>GLOBAL</li>
                    <li>NEDERLAND</li>
                    <li>UNITED STATES</li>
                    <li>IRELAND</li>
                    <li>UNITED KINGDOM</li>
                    <li>DEUTSCHLAND</li>
                    <li>SCHWEIZ</li>
                </ul>
            </div>

            <ul className={styles.menu}>
                <li>HOME</li>
                <li>WORK</li>
                <li>CULTURE</li>
                <li>SERVICES</li>
                <li>PARTNERS</li>
                <li>STORIES</li>
                <li>CAREERS</li>
                <li>EVENTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
};

export default DesktopMenu;