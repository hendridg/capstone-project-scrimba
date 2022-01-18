import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Context } from "../Context"
// # Challenge

// Change the cart icon in the header to display the full cart icon if there are any items in the cart

// Full class name to use WHEN ITEMS IN CART:
// "ri-shopping-cart-fill ri-fw ri-2x"

// Full class name to use WHEN CART IS EMPTY:
// "ri-shopping-cart-line ri-fw ri-2x"

function Header({ darkMode }) {
  const { cartItems } = useContext(Context)
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
  return (
    <header className={darkMode ? "darkMode" : ""}>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  )
}

Header.defaultProps = {
  darkMode: false,
}
Header.propTypes = {
  darkMode: PropTypes.bool,
}

export default Header
