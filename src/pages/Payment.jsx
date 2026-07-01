import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const order = state?.order;

  if (!order) {
    return <h2 className="text-center mt-10">Order not found</h2>;
  }

  const handlePayment = () => {
    // Later, this is where you'll integrate Razorpay/Stripe

    navigate("/order-success", {
      state: {
        order,
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-4">Payment</h1>

      <p>
        <strong>Order ID:</strong> {order.id}
      </p>

      <p className="mt-2">
        <strong>Total Amount:</strong> ₹{order.total}
      </p>

      <button
        onClick={handlePayment}
        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
      >
        Pay ₹{order.total}
      </button>
    </div>
  );
}