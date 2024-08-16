// Import the currencyFormatter function from the util/formatting module
import { currencyFormatter } from "../util/formating";

// Define the CartItem component
export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {/* Display the item name, quantity, and formatted price */}
        {name} : {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        {/* Buttons to decrease and increase the quantity */}
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
