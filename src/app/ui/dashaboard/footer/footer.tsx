import React from 'react'
import styles from './footer.module.css'
export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Sam Samal Dev</div>
            <div className={styles.text}>© All rights reserved.</div>
        </div>
    )
}
export default Footer;