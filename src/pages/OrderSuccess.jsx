import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const order = state?.order;

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
        <div className="text-6xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold text-green-600">
          Your Order is Placed!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for your payment.
        </p>

        {order && (
          <>
            <p className="mt-4">
              <strong>Order ID:</strong> {order.id}
            </p>

            <p>
              <strong>Amount Paid:</strong> ₹{order.total}
            </p>
          </>
        )}

        {/* <button
          onClick={() => navigate("/orders")}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          View My Orders
        </button> */}

        <button
          onClick={() => navigate("/")}
          className="mt-3 w-full border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}