import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as LogoWhite} from "../../assets/White logo.svg";
import {ReactComponent as Facebook} from "../../assets/socialIcons/facebook.svg";
import {ReactComponent as Twitter} from "../../assets/socialIcons/twitter.svg";
import {ReactComponent as Instagram} from "../../assets/socialIcons/instagram.svg";
import {ReactComponent as Vector} from "../../assets/Vector.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_left}>
                <span className={styles.upper_txt}>
                    <span className={styles.logo}><LogoWhite /></span>

                    <ul className={styles.list}>
                        <li>WORK</li>
                        <li>SERVICES</li>
                        <li>STORES</li>
                        <li>ABOUT</li>
                        <li>CAREERS</li>
                        <li>CONTACT</li>
                    </ul>

                    <ul className={styles.socials}>
                        <li><Facebook/></li>
                        <li><Twitter/></li>
                        <li><Instagram/></li>
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