import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RoutesApp } from "./routes";
import "./index.css";
function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </>
  );
}

export default App;
