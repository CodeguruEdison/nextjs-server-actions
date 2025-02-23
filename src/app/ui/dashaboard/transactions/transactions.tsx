import React from 'react'
import styles from './transactions.module.css'
import { ITransactionsProps } from './transactions.type'
import Image from 'next/image'
export const Transactions = (props: ITransactionsProps) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Latest Transaction</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} /> John Doe
                            </div>
                        </td>
                        <td><span className={` ${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td><span >14.02.2024</span></td>
                        <td><span >$3.2000</span></td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} /> John Doe
                            </div>
                        </td>
                        <td><span className={` ${styles.status} ${styles.done}`}>Done</span></td>
                        <td><span >14.02.2024</span></td>
                        <td><span >$3.2000</span></td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} /> John Doe
                            </div>
                        </td>
                        <td><span className={` ${styles.status} ${styles.cancelled}`}>Done</span></td>
                        <td><span >14.02.2024</span></td>
                        <td><span >$3.2000</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
