// Import React at the top of your file if not already done
import React from 'react';

const ProductGrid = () => {
    // Dummy product data (replace with your actual data)
    const products = [
        { id: 1, name: 'Product 1', price: '$20' },
        { id: 2, name: 'Product 2', price: '$30' },
        { id: 3, name: 'Product 3', price: '$25' },
        // Add more products as needed
    ];

    return (
        <div className="container mx-auto mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
                {/* Map through products and create product cards */}
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded shadow">
                        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600">{product.price}</p>
                        {/* Add more product details or components as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
