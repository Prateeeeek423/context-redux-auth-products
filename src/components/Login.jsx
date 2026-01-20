import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  return (
    <div className="container">
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={() => login(name, role)}>
        Login
      </button>
    </div>
  );
};

export default Login;
