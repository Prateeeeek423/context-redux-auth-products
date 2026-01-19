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
    <div>
      <h2>Products</h2>

      {role === "admin" && (
        <div>
          <input
            placeholder="Product name"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />
          <button onClick={addNewProduct}>Add Product</button>
        </div>
      )}

      {products.map(p => (
        <div className="card" key={p.id}>
          <span>{p.name}</span>
          <div>
            {role === "admin" && (
              <button onClick={() => dispatch(removeProduct(p.id))}>
                Delete
              </button>
            )}
            {role === "user" && (
              <button onClick={() => dispatch(addToCart(p))}>
                Add
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
