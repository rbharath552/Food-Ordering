import { useCart } from "../context/useCart";

export default function Orders() {
  const { orders } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="text-7xl">📦</div>

          <h2 className="text-2xl font-bold text-gray-700 mt-4">
            No Orders Yet
          </h2>

          <p className="text-gray-500 mt-2">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-lg rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Order ID: {order.id}
              </h2>

              <p className="mt-2 text-lg">
                <span className="font-semibold">Total:</span> ₹{order.total}
              </p>

              <p className="mt-2">
                <span className="font-semibold">Status:</span>{" "}
                <span className="text-green-600 font-medium">
                  {order.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}