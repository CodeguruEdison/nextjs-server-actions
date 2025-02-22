

export interface IMenuLinkProps {
    item: IMenuItem
}
export interface IMenuItem {
    title: string,
    icon: string,
    path: string
}

export interface IMenu {
    title: string,
    list: IMenuItem[]
}

export const menus: IMenu[] = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                icon: "MdDashboard",
                path: "/dashboard"
            },
            {
                title: "Users",
                icon: "MdSupervisedUserCircle",
                path: "/dashboard/users"
            },
            {
                title: "Products",
                icon: "MdShoppingBag",
                path: "/dashboard/products"
            },
            {
                title: "Transactions",
                icon: "MdAttachMoney",
                path: "/dashboard/transactions"
            },
            {
                title: "Analytics",
                icon: "MdWork",
                path: "/dashboard/revenue"
            },
            {
                title: "Reports",
                icon: "MdAnalytics",
                path: "/dashboard/reports"
            },
            {
                title: "Teams",
                icon: "MdPeople",
                path: "/dashboard/teams"
            }
        ]
    }
]