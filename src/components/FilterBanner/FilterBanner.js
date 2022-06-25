import React from 'react';
import styles from './FilterBanner.module.css'

const FilterBanner = () => {
    return (
        <span className={styles.filter}>
            <p>Show me <a href="">all work</a></p>
            <p>In <a href="">all industries</a></p>
        </span>
    );
};

export default FilterBanner;