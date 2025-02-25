import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'

export interface ISearchProps {
    placeholder?: string
}
export const Search = (props: ISearchProps) => {
    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={props.placeholder} className={styles.input} />
        </div>
    )
}
