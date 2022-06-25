import React, {useState} from 'react';
import styles from "./NavBar.module.css"
import {ReactComponent as LogoWhite} from "../../assets/DEPT® LOGO - 2022 White.svg"
import DesktopMenu from "../DesktopMenu/DesktopMenu";

const NavBar = () => {

    const [dropdown, toggleDropdown] = useState(false)

    return (
        <>
            <header className={styles.navbar}>
                <LogoWhite />

                <div className={styles.navigation} >
                    {!dropdown &&
                    <ul className={styles.list}>
                        <li>WORK</li>
                        <li>CULTURE</li>
                        <li>SERVICES</li>
                        <li>INSIGHTS</li>
                        <li>CAREERS</li>
                        <li>CONTACT</li>
                    </ul>
                    }

                    {dropdown ?
                        <button onClick={() => toggleDropdown(!dropdown)} className={styles.menu_button__X}></button>
                    :
                        <button onClick={() => toggleDropdown(!dropdown)} className={styles.menu_button__dots}>•</button>
                    }
                </div>
            </header>

            {dropdown && <DesktopMenu />}
        </>
    );
};

export default NavBar;