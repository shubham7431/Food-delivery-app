import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/Meal.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1> Ghar ka khana</h1>
        <HeaderCartButton onClick={props.onShow}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
export default Header;
