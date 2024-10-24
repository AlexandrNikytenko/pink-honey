import { Link } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import './App.css';

const App = () => {
  return (
    <div className="container"> {/* Применяем класс container */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/account">Account</Link>
      </div>
      <AppRoutes />
    </div>
  );
};

export default App;

