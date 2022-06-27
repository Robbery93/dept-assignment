import React, {useState} from 'react';
import styles from "./NavBar.module.css"
import {ReactComponent as LogoWhite} from "../../assets/White logo.svg";
import {ReactComponent as LogoBlack} from "../../assets/Black logo.svg";

import DesktopMenu from "../DesktopMenu/DesktopMenu";

const NavBar = () => {

    const [dropdown, toggleDropdown] = useState(false)

    return (
        <>
            <header className={styles.navbar}>
                <span className={styles.logo_white}><LogoWhite /></span>
                <span className={styles.logo_black}><LogoBlack /></span>


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
                        <>
                        <button onClick={() => toggleDropdown(!dropdown)} className={styles.menu_button__dots}>•</button>
                        <button onClick={() => toggleDropdown(!dropdown)} className={styles.menu_button__txt}>MENU</button>
                        </>
                    }
                </div>
            </header>

            {dropdown && <DesktopMenu />}
        </>
    );
};

export default NavBar;