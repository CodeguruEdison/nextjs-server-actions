import { Card } from "../ui/dashaboard/card/card";
import { IDashboardPageProps } from "./dashboard-type";
import styles from '../ui/dashaboard/dashboard.module.css'
import { RightBar } from "../ui/dashaboard/rightbar/rightbar";
import { Chart } from "../ui/dashaboard/chart/chart";
import { Transactions } from "../ui/dashaboard/transactions/transactions";


export default function DashboardPage(props: IDashboardPageProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>

            <div className={styles.side}>
                <RightBar />
            </div>

        </div>
    )
}
