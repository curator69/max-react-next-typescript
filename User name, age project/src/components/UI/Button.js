import classes from "./Button.module.css";

const Button = (porps) => {
  return (
    <button
      className={classes.button}
      type={porps.type || "button"}
      onClick={porps.onClick}
    >
      {porps.children}
    </button>
  );
};

export default Button;
