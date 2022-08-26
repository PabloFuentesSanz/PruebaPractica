import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
  {
    path: "/",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/register",
    component: Register,
    isPrivate: false,
  },
  {
    path: "/home",
    component: Home,
    isPrivate: true,
  },
];

export default routes;
