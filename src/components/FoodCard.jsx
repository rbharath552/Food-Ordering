import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import toast from "react-hot-toast";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(food);

    toast.success(`${food.name} added to cart! 🛒`, {
      duration: 2000,
      style: {
        borderRadius: "12px",
        background: "#16a34a",
        color: "#fff",
      },
    });
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Food Image */}
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-56 object-cover"
      />

      {/* Food Details */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {food.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {food.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-orange-500">
            ₹{food.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <Link
            to={`/food/${food.id}`}
            className="flex-1 text-center bg-orange-100 text-orange-600 py-2 rounded-xl font-semibold hover:bg-orange-200 transition"
          >
            View Details
          </Link>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-orange-500 text-white py-2 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}