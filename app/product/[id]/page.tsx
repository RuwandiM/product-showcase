import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import fs from 'fs';
import path from 'path';

const Product = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const product = products.find((p: any) => p.id == id);

  return (
    <>
      <Navbar />
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col md:flex-row p-4">
          <div className="md:w-1/2 w-full align-items-center justify-center">
              <img src={product.image} alt={product.title} className="w-3/4 h-3/4" />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">{product.category}</span>
              <p className="text-3xl font-bold text-black"> {product.title} </p>
              <p className="text-3xl font-bold text-black"> ${product.price} </p>
              <hr className="text-gray-200 py-3"/>
            </div>
            <div className="space-y-6"> 
              <p className="text-md text-gray-600">{product.description}</p>
              <div className="flex flex-row space-x-4">
                <div className="flex flex-row">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${i < Math.round(product.rating.rate) ? 'text-pink-700' : 'text-gray-300'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-bold">({product.rating.count})</p>
              </div>
              <div className="flex flex-col space-x-8 md:flex-row space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-2">
                    <button className="text-md px-2 py-1 hover:bg-pink-100">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button className="text-lg px-4 py-1 border border-pink-200">
                      1
                    </button>
                    <button className="text-md px-2 py-1 hover:bg-pink-100">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <button className="bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 cursor-pointer">
                      <FontAwesomeIcon icon={faCartShopping} />&nbsp;&nbsp;&nbsp;Add to Cart
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;