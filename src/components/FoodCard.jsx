import { Link } from "react-router-dom";
import { useCart} from "../context/useCart"

export default function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={food.image}
        alt={food.name}
        className="h-40 w-full object-cover"
      />

      <h2 className="font-bold mt-2">
        {food.name}
      </h2>

      <p>₹{food.price}</p>

      <div className="flex gap-2 mt-3">
        <Link
          to={`/food/${food.id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Details
        </Link>

        <button
          onClick={() => addToCart(food)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}