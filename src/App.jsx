import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
