import CreateEmployee from "./pages/CreateEmployee";
import Login from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(false);

  const handleLogin = () => {
    setState(true);
  };

  return state ? <CreateEmployee /> : <Login handleLogin={handleLogin} />;
};
export default App;
