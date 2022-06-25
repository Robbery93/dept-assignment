import React from 'react';
import styles from './BigBanner.module.css';

const BigBanner = () => {
    return (
        <div className={styles.big_banner}>
            <section className={styles.big_banner__text}>
                <h4>WORK</h4>
                <p>A selection of projects that <strong>pioneer tech</strong> and <strong>marketing</strong> to help brands stay ahead.</p>
            </section>
        </div>
    );
};

export default BigBanner;