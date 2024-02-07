import theme from "../theme";
import {
  dollarSquare,
  arrangeSquare,
  moneySend,
  userPlaceholder
} from "../assets"
// import stocks from "../assets/images/stocks.svg"
const passwordValidations = [
  { type: 1, title: "Minimum 8 characters in length", isValid: null },
  { type: 2, title: "Atleast 1 capital letter", isValid: null },
  { type: 3, title: "Atleast 1 small letter", isValid: null },
  { type: 4, title: "Atleast 1 number", isValid: null },
  { type: 5, title: "Atleast 1 special character", isValid: null },
];

const sideMenuOptions = [
  {
    type: 1,
    title: "Dashboard",
    icon: "ri-home-4-line",
    isSelected: true,
    link: "/dashboard",
  },
  {
    type: 2,
    title: "stocks",
    icon: "ri-file-list-3-line",
    isSelected: false,
    link: "/stocks",
  },
  {
    type: 3,
    title: "Live Orders",
    icon: "ri-pen-nib-line",
    isSelected: false,
    link: "/live-orders",
  },
  {
    type: 4,
    title: "Order History",
    icon: "ri-list-check",
    isSelected: false,
    link: "/order-history",
  },
  {
    type: 5,
    title: "Payment",
    icon: "ri-user-3-line",
    isSelected: false,
    link: "/payment",
  },
  { type: 6,
    title: "Users", 
    icon: "ri-vip-crown-2-line", 
    isSelected: false ,
    link: "/users",
  },
  {
    type: 9,
    title: "My Account",
    icon: "ri-file-image-line",
    isSelected: false,
    link: "/account",
  },
  {
    type: 10,
    title: "Notification",
    icon: "ri-file-image-line",
    isSelected: false,
    link: "/notification",
  },
  {
    type: 11,
    title: "Logout",
    icon: "ri-logout-box-r-line",
    isSelected: false,
  },
];

const dashboardCounterOptions = [
  {
    type: 1,
    title: "Today’s sales",
    icon: moneySend,
    color: "#0F8EFF",
    count: "$ 655.00",
  },
  {
    type: 2,
    title: "Today’s Quantity Sold",
    icon: arrangeSquare,
    color: "#FDB82D",
    count: 32,
  },
  {
    type: 3,
    title: "Total Sales",
    icon: moneySend,
    color: "#DD7BF4",
    count: "$ 655,6343.00",
  },
  {
    type: 4,
    title: "Total Quantity",
    icon: arrangeSquare,
    color: "#52C05D",
    count: 654,
  },
];

const sideMenuItems = [
  [
    { id: 1, title: "Dashboard", link: "/dashboard" },
    { id: 2, title: "Stocks", link: "/stocks" },
    { id: 3, title: "Live Orders", link: "/live_orders" },
    { id: 4, title: "Order History", link: "/order_history" },
  ],
  [  
    { id: 5, title: "Payment", link: "/payment" },
    { id: 6, title: "Users", link: "/users" },
    { id: 7, title: "My Account", link: "/settings" },
    { id: 8, title: "Notifications", link: "/notifications" },
    { id: 9, title: "Logout", link: "/logout" },
  ],
];

const sampleTreeItems = [
  {
    id: 1,
    name: "Apple",
    icon: userPlaceholder,
    badge: 24,
    children: [
      {
        id: 2,
        name: "iPhone",
        badge: 14,
        children: [
          { id: 3, name: "iphone 13", badge: 2, children: [] },
          { id: 4, name: "iphone 13 Mini", badge: 2, children: [] },
          { id: 5, name: "iphone 13 Max", badge: 3, children: [] },
          { id: 6, name: "iphone 14", badge: 3, children: [] },
          { id: 7, name: "iphone 14 Max", badge: 2, children: [] },
          { id: 8, name: "iphone 15", badge: 1, children: [] },
          { id: 9, name: "iphone 15 Max", badge: 1, children: [] },
        ],
      },
      {
        id: 10,
        name: "iPad",
        badge: 10,
        children: [
          { id: 11, name: "ipad 2021", badge: 3, children: [] },
          { id: 12, name: "ipad 2022", badge: 5, children: [] },
          { id: 13, name: "ipad Pro 2022", badge: 2, children: [] },
        ],
      },
    ],
  },
  {
    id: 14,
    name: "OnePlus",
    icon: userPlaceholder,
    badge: 40,
    children: [
      { id: 15, name: "OnePlus 7", badge: 10, children: [] },
      { id: 16, name: "OnePlus 8", badge: 5, children: [] },
      { id: 17, name: "OnePlus 9", badge: 8, children: [] },
      { id: 18, name: "OnePlus 10", badge: 2, children: [] },
      { id: 19, name: "OnePlus Nord I", badge: 5, children: [] },
      { id: 20, name: "OnePlus Nord II", badge: 5, children: [] },
      { id: 21, name: "OnePlus Nord III", badge: 5, children: [] },
    ],
  },
  {
    id: 22,
    name: "Asus",
    icon: userPlaceholder,
    badge: 44,
    children: [
      {
        id: 23,
        name: "Laptop",
        badge: 20,
        children: [
          { id: 24, name: "Asus Ryzen 7", badge: 4, children: [] },
          { id: 25, name: "Asus Ryzen 8", badge: 3, children: [] },
          { id: 26, name: "Asus Ryzen 9", badge: 3, children: [] },
          { id: 27, name: "Asus Ryzen 10", badge: 10, children: [] },
        ],
      },
      {
        id: 28,
        name: "Phone",
        badge: 8,
        children: [
          { id: 29, name: "Asus Aspire 1", badge: 2, children: [] },
          { id: 30, name: "Asus Aspire 2", badge: 4, children: [] },
          { id: 31, name: "Asus Aspire 3", badge: 2, children: [] },
        ],
      },
      {
        id: 32,
        name: "Tablet",
        badge: 16,
        children: [
          { id: 33, name: "Asus Tab 1", badge: 6, children: [] },
          { id: 34, name: "Asus Tab 1", badge: 6, children: [] },
          { id: 35, name: "Asus Tab 1", badge: 4, children: [] },
        ],
      },
    ],
  },
];

const sampleSelectItems = [
  { id: 1, name: "Option One" },
  { id: 2, name: "Option Two" },
  { id: 3, name: "Option Three" },
  { id: 4, name: "Option Four" },
  { id: 5, name: "Option Five" },
];

const sampleStockItems = [
  {
    id: 1,
    productName: "iPhone 15 Plus 256GB Black- UAE",
    modelName: "UPC: 194345673567, Model ID: MNW57SL/A",
    quantity: 60,
    myPrice: [
      { priceGap: 1, price: "$390.00", total: 1 },
      { priceGap: 5, price: "$350.00", total: 4 },
      { priceGap: 20, price: "$340.00", total: 15 },
    ],
    bestPrice: 500.00,
    rank: 2
  },
  {
    id: 2,
    productName: "iPhone 15 Plus 256GB Black- UAE",
    modelName: "UPC: 194368743567, Model ID: MNV69GH/A",
    quantity: 0,
    myPrice: [],
    bestPrice: 200.00,
    rank: 1
  },
  {
    id: 3,
    productName: "iPhone 15 Plus 256GB Black- UAE",
    modelName: "UPC: 194342258567, Model ID: MGN52RL/B",
    quantity: 18,
    myPrice: [
      { priceGap: 1, price: "$390.00", total: 20 },
      { priceGap: 5, price: "$320.00", total: 18 },
    ],
    bestPrice: 320.00,
    rank: 2
  },
  {
    id: 4,
    productName: "iPhone 15 Plus 256GB Black- UAE",
    modelName: "UPC: 194342690567, Model ID: MJW26RL/A",
    quantity: 100,
    myPrice: [
      { priceGap: 1, price: "$390.00", total: 46 },
      { priceGap: 5, price: "$310.00", total: 22 },
      { priceGap: 20, price: "$340.00", total: 7 },
    ],
    bestPrice: 390.00,
    rank: 1
  },
];


export {
  passwordValidations,
  sideMenuOptions,
  dashboardCounterOptions,
  sideMenuItems,
  sampleTreeItems,
  sampleSelectItems,
  sampleStockItems
};
