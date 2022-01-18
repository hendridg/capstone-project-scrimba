import Reac, { useState, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order")
  const { cartItems, emptyCart } = useContext(Context)
  const totalCarts = 5.99 * cartItems.length
  const totalCartsDisplay = totalCarts.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    //Simulamos el chequeo del pago de la orden
    setButtonText("Ordering...")
    setTimeout(() => {
      setButtonText("Place Order")
      emptyCart()
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCartsDisplay}</p>

      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </div>
    </main>
  )
}

export default Cart
