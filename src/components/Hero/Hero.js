import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <section className={styles.hero__text}>
                <h4>WORK</h4>
                <p>A selection of projects that <strong>pioneer tech</strong> and <strong>marketing</strong> to help brands stay ahead.</p>
            </section>
        </div>
    );
};

export default Hero;