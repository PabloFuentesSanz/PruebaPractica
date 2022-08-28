import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/home",
    component: Home,
  },
];

export default routes;
