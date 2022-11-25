import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Sidebar from "../components/Layout/DefaultLayout/Sidebar/Sidebar";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Update from "../components/Update/Update";
// import Sidebar from "../components/Sidebar/Sidebar";
const publicRoutes = [
  { path: "/", component: Login },
  { path: "/home", component: Sidebar },
  { path: "/header", component: Header },
  { path: "/sidebar", component: Sidebar },
  { path: "/layout", component: DefaultLayout },
  { path: "/update", component: Update, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
