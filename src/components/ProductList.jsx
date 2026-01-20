import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const { role } = useAuth();
  const [productName, setProductName] = useState("");

  const addNewProduct = () => {
    if (productName.trim() === "") return;

    dispatch(
      addProduct({
        id: Date.now(),
        name: productName
      })
    );

    setProductName("");
  };

  return (
    <div className="section">
      <h2>Products</h2>

      {role === "admin" && (
        <>
          <input
            placeholder="Enter product name"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />
          <button onClick={addNewProduct}>
            Add Product
          </button>
        </>
      )}

      {products.length === 0 && <p>No products available</p>}

      {products.map(p => (
        <div className="card" key={p.id}>
          <span>{p.name}</span>
          <div>
            {role === "admin" && (
              <button
                className="secondary"
                onClick={() => dispatch(removeProduct(p.id))}
              >
                Delete
              </button>
            )}

            {role === "user" && (
              <button
                className="secondary"
                onClick={() => dispatch(addToCart(p))}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
