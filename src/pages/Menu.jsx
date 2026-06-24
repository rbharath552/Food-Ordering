import { foods } from "../data/foods";
import FoodCard from "../components/FoodCard";

export default function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      
      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
          🍽️ Our Special Menu
        </span>

        <h1 className="mt-5 text-5xl font-extrabold text-gray-900">
          Fresh & Delicious
          <span className="text-orange-500"> Food</span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our carefully crafted menu featuring your favorite
          meals, desserts, beverages, and more.
        </p>
      </div>

      {/* Food Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}