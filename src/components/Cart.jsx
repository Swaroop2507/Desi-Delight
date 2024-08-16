// Import necessary hooks and components
import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formating.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "../store/CartItem.jsx";

export default function Cart() {
  // Use CartContext to get the cart items
  const cartCtx = useContext(CartContext);

  // Use UserProgressContext to manage the cart's visibility
  const userProgressCtx = useContext(UserProgressContext);

  // Calculate the total price of the items in the cart
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // Handle closing the cart
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckOut();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {/* Map over the cart items and render CartItem components for each */}
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
          // You can also spread item properties directly: <CartItem key={item.id} {...item} />
        ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        {/* Button to close the cart */}
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        {/* Button to proceed to checkout */}
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}> Go to CheckOut </Button>
        )}
        {/* {cartCtx.items.length > 0 ? (
          <Button onClick={handleCloseCart}>Go to CheckOut</Button>
        ) : null} */}
      </p>
    </Modal>
  );
}
