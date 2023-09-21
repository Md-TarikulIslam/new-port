import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="bg-[#d3e4eb]">
      <div>
        <Homepage />
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
