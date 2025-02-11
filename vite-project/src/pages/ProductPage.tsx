import { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

export default function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <div className="container mx-auto p-4 pt-40">
            <h1 className="text-3xl font-semibold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products.length === 0 ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden animate-pulse">
                            <div className="bg-gray-300 w-full h-48"></div> {/* Placeholder for image */}
                            <div className="p-4">
                                <div className="bg-gray-300 w-3/4 h-6 mb-2"></div> {/* Placeholder for name */}
                                <div className="bg-gray-300 w-1/2 h-6"></div> {/* Placeholder for price */}
                            </div>
                        </div>
                    ))
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                                <p className="text-xl font-bold text-gray-800">${product.price}</p>
                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};
