
import React from "react";
// import {
//     // Dashboard,
//     // Stocks,
//     // Payment,
//     // Settings,
//     // OrderHistory,
//     // LiveOrder,
//     // Account,
//     // Notification,
//     // OrderDetails,
//     // Layout
//   } from "../../pages";

import { Layout } from "./Layout"
import { Dashboard } from "../../pages/Dashboard"
import { Stocks } from "../../pages/Stocks"
import { Payment } from "../../pages/Payment"
import { OrderHistory } from "../../pages/OrderHistory"
import { LiveOrder } from "../../pages/LiveOrder"
import { OrderDetails } from "../../pages/OrderHistory/OrderDetails"
import { Settings } from "../../pages/Settings"
import { Notification } from "../../pages/Notification"
import { Account } from "../../pages/Account"
// ===========================|| AUTH ROUTING ||=========================== //
export const MainRoutes = {
    path: '/',
    element: '',
    children: [
        {
            path: '/dashboard',
            element: (
                <Layout>
                    <Dashboard />
                </Layout>

            ),
        },
        {
            path: '/stocks',
            element: (
                <Layout>
                    <Stocks />
                </Layout>

            ),
        },
        {
            path: '/payment',
            element: (
                <Layout>
                    <Payment />
                </Layout>

            ),
        },
        {
            path: '/users',
            element: (
                <Layout>
                    <Settings />
                </Layout>

            ),
        },
        {
            path: '/order_history',
            element: (
                <Layout>
                    <OrderHistory />
                </Layout>

            ),
        },
        {
            path: '/order_details',
            element: (
                <Layout>
                    <OrderDetails />
                </Layout>

            ),
        },
        {
            path: '/live_orders',
            element: (
                <Layout>
                    <LiveOrder />
                </Layout>

            ),
        },
        {
            path: '/settings',
            element: (
                <Layout>
                    <Account />
                </Layout>

            ),
        },
        {
            path: '/notifications',
            element: (
                <Layout>
                    <Notification />
                </Layout>
            ),
        },
    ],
};

