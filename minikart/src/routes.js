import { lazy } from "react";

const Overview = lazy(() => import("./components/Overview/Overview"));
const Products = lazy(() => import("./components/Products/Products"));
const Users = lazy(() => import("./components/Users/User"));
const Category = lazy(() => import("./components/Category/Category"));

const routes = [
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
    exact: true,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    exact: true,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    exact: true,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    exact: true,
  },
];

export default routes;
