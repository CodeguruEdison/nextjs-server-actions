import React from 'react'
import { IDashboardPageLayoutProps } from './dashboard-type'
import { Sidebar } from '../ui/dashaboard/sidebar/sidebar'
import { Navbar } from '../ui/dashaboard/navbar/navbar'

export const DashBoardPageLayout = ({ children }: IDashboardPageLayoutProps) => {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
export default DashBoardPageLayout