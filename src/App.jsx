import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const { isLoggedIn, userName, logout } = useAuth();

  if (!isLoggedIn) return <Login />;

  return (
    <div className="container">
      <h1>Welcome, {userName}</h1>
      <button className="logout" onClick={logout}>
        Logout
      </button>

      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
