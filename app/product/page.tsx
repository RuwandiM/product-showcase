import ProductCard from "@/app/components/ProductCard";
import Navbar from "../components/Navbar";
import fs from 'fs';
import path from 'path';

export default function ProductPage() {

  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}