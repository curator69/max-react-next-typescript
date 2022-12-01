import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const activeClassName = classes.active;

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
