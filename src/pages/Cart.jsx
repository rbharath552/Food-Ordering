import { useCart } from "../context/useCart";
import CartItem from "../components/CartItem";
import {useNavigate} from "react-router-dom";

export default function Cart() {
  const {
    cart,
     increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    placeOrder,
  } = useCart();

  const total = cart.reduce(
    (sum, item) =>  
      sum + item.price * item.quantity,
    0
  );
   const navigate = useNavigate();

   const handlePlaceOrder = () => {
    placeOrder();        // Save the order
    navigate("/orders"); // Navigate to Orders page
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Total: ₹{total}
            </h2>


            <button
              onClick={handlePlaceOrder}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}