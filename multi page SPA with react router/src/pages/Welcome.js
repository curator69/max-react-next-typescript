import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const Welcome = () => {
  const welcome = "Welcome,new user!";
  console.log(welcome);

  return (
    <Fragment>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="/new-user" element={welcome}></Route>
      </Routes>
    </Fragment>
  );
};

export default Welcome;
