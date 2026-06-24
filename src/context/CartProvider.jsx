import { useState } from "react";
import CartContext from "./CartContext";


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (food) => {
    const item = cart.find((i) => i.id === food.id);

    if (item) {
      setCart(
        cart.map((i) =>
          i.id === food.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    if (!cart.length) return;

    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      status: "Pending",
    };

    setOrders([...orders, order]);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

