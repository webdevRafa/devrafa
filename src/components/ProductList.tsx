import React, { useState } from "react";
import { Product } from "./Product";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
// DEFINE SHAPE FOR PRODUCT
interface Product {
  id: number;
  name: string;
  isChecked: boolean;
}

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product 1", isChecked: false },
    { id: 2, name: "Product 2", isChecked: false },
    { id: 3, name: "Product 3", isChecked: false },
  ]);

  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleCheckboxChange = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isChecked: !product.isChecked }
          : product
      )
    );
  };

  const handleAddToCart = () => {
    const selectedProducts = products.filter((product) => product.isChecked);
    setCart(selectedProducts);
  };
  const toggleCart = () => {
    setShowCart((prevCart) => !prevCart);
    console.log(showCart);
  };
  return (
    <>
      <div className="product-list-container w-full">
        <h1 className="text-center font-bold text-dark-green text-4xl mb-2">
          ONLINE STORE?
        </h1>
        <p className="text-center mb-10">I got you covered </p>
        <form className="product-list flex  gap-3 justify-center">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </form>
        <div className="w-full flex justify-center items-center mt-5">
          <button
            onClick={handleAddToCart}
            className="bg-dark-green p-3 text-white add-to-cart-button"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-20 ">
        <div className="cart">
          <ShoppingCartIcon
            onClick={toggleCart}
            className={`size-10 ${
              cart.length > 0 ? "text-green" : "text-dark-green"
            }`}
          />
          {cart.length > 0 && <p>click to view</p>}
        </div>
      </div>

      <div className="fixed z-50 py-[50px] bg-dark-green bottom-0 w-full flex justify-center text-white">
        {showCart &&
          cart.map((product) => (
            <div key={product.id}>
              <span className="text-2xl">{product.name}</span>
            </div>
          ))}
      </div>
    </>
  );
};
