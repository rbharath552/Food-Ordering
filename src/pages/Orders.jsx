import { useCart } from "../context/useCart";

export default function Orders() {
  const { orders } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">
        Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="border p-4 rounded mb-3"
        >
          <h2>
            Order ID: {order.id}
          </h2>

          <p>Total: ₹{order.total}</p>

          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}