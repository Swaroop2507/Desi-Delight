import { useContext } from "react";
import { currencyFormatter } from "../util/formating";
import Modal from "../components/UI/Modal";
import CartContext from "./CartContext.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import UserProgressContext from "./UserProgressContext.jsx";

export default function CheckOut() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCart();
  }

  function handleSubmit(event){
      event.preventDefault();

      const fd = new FormData(event.target);
      const customerData = Object.fromEntries(fd.entries());
      
      fetch("http://localhost:3000/orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: customerData,
          }
        })
      });
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail" type="email" id="e-mail" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postl Code" text="text" id="postal-code" />
          <Input label="City" text="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClose={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
