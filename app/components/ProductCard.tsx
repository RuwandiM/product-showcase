import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group relative cursor-pointer">
        <div className="relative">
            <img
                alt={product.title}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <button
                className="absolute bottom-0 left-0 w-full bg-black text-white text-sm py-2 opacity-0 group-hover:opacity-100 font-semibold transform transition-transform duration-300 "
            >
                <FontAwesomeIcon icon={faAdd} />&nbsp;&nbsp;Quick Add
            </button>
        </div>
        <div className="mt-4 lg:h-14 sm:h-10">
            <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                    {product.title}
                </a>
            </h3>
        </div>
        <p className="text-md font-bold text-gray-900">${product.price}</p>
    </div>
  )
}

export default ProductCard;