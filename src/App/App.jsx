import { TodoProvaider } from "../TodoContext";
import AppRoutes from "../routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <TodoProvaider>
      <AppRoutes />
    </TodoProvaider>
  );
}

export default App;
