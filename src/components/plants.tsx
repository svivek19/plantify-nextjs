import axios from "axios";
import Image from "next/image";
import React from "react";

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/products/get");

    const products = response.data.products;

    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);

    // If there is an error, return an empty products array
    return { props: { products: [] } };
  }
}

export default function Plants({ products }: { products: any[] }) {
  console.log(products, "response");

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
          </div>
        ))
      ) : (
        <p className="text-center col-span-3 text-gray-500">
          No products available.
        </p>
      )}
    </div>
  );
}
