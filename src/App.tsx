import "./App.css";
import HomePage from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
