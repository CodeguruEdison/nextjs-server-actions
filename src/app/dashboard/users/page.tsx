import React from 'react'
import styles from "@/app/ui/dashaboard/users/users.module.css"
import { Search } from '@/app/ui/dashaboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search Users" />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add User</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="noavatar" width={40} height={40} className={styles.userImage} />
                                John Doe
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>02.25.2025</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/edit">
                                    <button className={`${styles.button} ${styles.view}`} > Edit</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`} > Delete</button>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default UsersPage