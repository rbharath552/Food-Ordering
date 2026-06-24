import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 items-center gap-12">
          
          {/* Left Content */}
          <div>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              🍔 Delicious Food Delivered Fast
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Fresh Food
              <span className="text-orange-500"> Delivered </span>
              To Your Door
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover delicious meals from your favorite restaurants.
              Order burgers, pizzas, biryanis, desserts, and more with
              just a few clicks.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/menu"
                className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
              >
                Browse Menu
              </Link>

              <Link
                to="/orders"
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition duration-300"
              >
                View Orders
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800"
              alt="Food"
              className="w-full max-w-lg rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🍕</div>
            <h3 className="text-xl font-bold text-gray-800">
              Fresh Meals
            </h3>
            <p className="text-gray-600 mt-2">
              Prepared with fresh ingredients and delivered hot.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-gray-800">
              Fast Delivery
            </h3>
            <p className="text-gray-600 mt-2">
              Get your favorite food delivered in minutes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-800">
              Top Rated
            </h3>
            <p className="text-gray-600 mt-2">
              Enjoy meals from highly rated restaurants.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}