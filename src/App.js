import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="bg-[#f3f6fc]">
     
       <div className="pt-28">
       <Homepage />
       </div>
        <Footer />
    
      <ToastContainer />
    </div>
  );
}

export default App;
