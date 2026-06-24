import { useParams } from "react-router-dom";
import { foods } from "../data/foods";
import { useCart} from "../context/useCart";

export default function FoodDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const food = foods.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="p-6">
      <img
        src={food.image}
        alt={food.name}
        className="w-96"
      />

      <h1 className="text-3xl mt-4">
        {food.name}
      </h1>

      <p>{food.description}</p>

      <p className="font-bold">
        ₹{food.price}
      </p>

      <button
        onClick={() => addToCart(food)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
}