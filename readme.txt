$Cart.jsx
Explanation:
*Imports: The necessary hooks and components are imported.
*Contexts: The CartContext and UserProgressContext are used to manage the state of the cart and the user's progress.
*cartTotal Calculation: The total price of the cart items is calculated using the reduce method.
*handleCloseCart Function: This function is used to hide the cart when called.
*JSX Structure: A Modal component is used to display the cart. It is only open when userProgressCtx.progress is 'cart'.
The cart items are mapped over and rendered using the CartItem component.
The total price is formatted using the currencyFormatter function and displayed.
Two Button components are provided for closing the cart and proceeding to checkout.

$CartItem.jsx
Explanation:
*Import Statement: The currencyFormatter function is imported from the util/formating module. Ensure that the file path is correct and matches your project structure.
*Component Definition: The CartItem component is defined as a functional component, taking name, quantity, and price as props.
*JSX Structure: The outermost element is an <li> with the class cart-item.
The first <p> element displays the name, quantity, and formatted price using the currencyFormatter function.
The second <p> element, with the class cart-item-actions, contains buttons for decreasing and increasing the quantity and displays the current quantity.