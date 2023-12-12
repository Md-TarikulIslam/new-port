import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Bar from "./components/Bar";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#f3f6fc] via-blue-100 to-[#f3f6fc] relative">
      <div className="lg:pt-28 pt-20">
        <Homepage />
      </div>
      <Footer />
      <Bar className="" />
      <ToastContainer />
    </div>
  );
}

export default App;
