import React from 'react'
import { IDashboardPageLayoutProps } from './dashboard-type'
import { Sidebar } from '../ui/dashaboard/sidebar/sidebar'
import { Navbar } from '../ui/dashaboard/navbar/navbar'
import styles from '../ui/dashaboard/dashboard.module.css'
import Footer from '../ui/dashaboard/footer/footer'

export const DashBoardPageLayout = ({ children }: IDashboardPageLayoutProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}
export default DashBoardPageLayout