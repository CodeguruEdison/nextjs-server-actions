
"use client"
import React from 'react'
import { IMenuLinkProps } from '../menuItems'
import styles from './menuLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Icons from 'react-icons/md'
export const MenuLink = (props: IMenuLinkProps) => {
    const { item } = props
    const pathName = usePathname()
    const Icon = item.icon ? (Icons[item.icon as keyof typeof Icons] as React.ElementType) : null

    return (
        <Link href={item.path} className={`${styles.container} ${pathName == item.path && styles.active} `}>
            {/* {React.createElement(item.icon)} */}
            {Icon && <Icon />}
            {item.title}
        </Link>
    )
}
