import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={e => setName(e.target.value)}
      />
      <br />
      <select onChange={e => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <button onClick={() => login(name, role)}>Login</button>
    </div>
  );
};

export default Login;
