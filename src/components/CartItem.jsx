import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-md mb-4">
      
      {/* Food Image */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold text-lg">
            {item.name}
          </h3>

          <p className="text-gray-500">
            ₹{item.price}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <Minus size={16} />
        </button>

        <span className="font-semibold">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Total Price */}
      <div className="font-bold text-orange-600">
        ₹{item.price * item.quantity}
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}