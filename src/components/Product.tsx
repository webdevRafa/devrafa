import React from "react";

interface ProductProps {
  product: {
    id: number;
    name: string;
    isChecked: boolean;
  };
  handleCheckboxChange: (id: number) => void;
}

export const Product: React.FC<ProductProps> = ({
  product,
  handleCheckboxChange,
}) => {
  return (
    <div className="product-item">
      <label>
        <input
          type="checkbox"
          checked={product.isChecked}
          onChange={() => handleCheckboxChange(product.id)}
        />
        <span className={`p-3 ${product.isChecked === true && "bg-green"}`}>
          {product.name}
        </span>
      </label>
    </div>
  );
};
