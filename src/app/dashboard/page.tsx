import { IDashboardPageProps } from "./dashboard-type";

export default function DashboardPage(props: IDashboardPageProps) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard!</p>
        </div>
    )
}
