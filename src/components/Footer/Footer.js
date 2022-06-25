import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as LogoWhite} from "../../assets/DEPT® LOGO - 2022 White.svg";
import {ReactComponent as Vector} from "../../assets/Vector.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_left}>
            <span className={styles.upper_txt}>
                <LogoWhite />
                <ul className={styles.list}>
                    <li>WORK</li>
                    <li>SERVICES</li>
                    <li>STORES</li>
                    <li>ABOUT</li>
                    <li>CAREERS</li>
                    <li>CONTACT</li>
                </ul>
            </span>

            <span className={styles.line}></span>

            <span className={styles.lower_txt}>
                <span>
                    <p>Chamber of Commerce: 63464101</p>
                    <p>VAT: NL 8552.47.502.B01</p>
                    <p>Terms and conditions</p>
                </span>
                <p>© 2022 Dept Agency</p>
            </span>
            </div>

            <div className={styles.footer_right}>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
                    <Vector />
                    TOP
                </button>
            </div>
        </footer>
    );
};

export default Footer;