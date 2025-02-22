import React from 'react'
import styles from './sidebar.module.css'
import { menus } from './menuItems'
import { MenuLink } from './menuLink/menuLink'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

export const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src="/noavatar.png" alt="user" width="50" height="50" className={styles.userImage} />
                <div className={styles.userDetail}>
                    <span className={styles.name}>John Doe</span>
                    <span className={styles.role}>Admin</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menus.map(cat => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item => (
                            <MenuLink item={item} key={item.title}></MenuLink>
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>

        </div>
    )
}
