import { useParams } from "react-router-dom";
import { foods } from "../data/foods";
import { useCart } from "../context/useCart";
import toast from "react-hot-toast";

export default function FoodDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
  addToCart(food);

  toast.success(`${food.name} added to cart successfully! 🛒`, {
    duration: 2000,
    style: {
      borderRadius: "12px",
      background: "#22c55e",
      color: "#fff",
      fontWeight: "600",
    },
  });
};

  const food = foods.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex justify-center items-center px-4 py-10">
      
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {food.name}
          </h1>

          <p className="text-gray-600 mt-4">
            {food.description}
          </p>

          <h2 className="text-3xl font-bold text-orange-500 mt-6">
            ₹{food.price}
          </h2>

          <button
            onClick={handleAddToCart}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            🛒 Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}