import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item, index) => (
        <div className="card" key={index}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Cart;
