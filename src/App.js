import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Bar from "./components/Bar";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#f3f6fc] via-blue-100 to-[#f3f6fc] relative">
      <div className="pt-28">
        <Homepage />
      </div>
      <Footer />
      <Bar />
      <ToastContainer />
    </div>
  );
}

export default App;
