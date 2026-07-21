const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain"
      />

      <h3 className="text-xl font-semibold mt-4">{product.title}</h3>

      <p className="text-gray-500 mt-2 capitalize">{product.category}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-bold text-blue-600">${product.price}</p>

        <p className="text-yellow-500">⭐ {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
