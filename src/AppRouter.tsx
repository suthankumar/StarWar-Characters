import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ViewDetails from "./pages/ViewDetails";
import Favourite from "./pages/Favourite";
import Footer from "./components/Footer";

export default function AppRouter() {
  return (
    <div className="bg-gray-700">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ViewDetails />} />
          <Route path="/fav" element={<Favourite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
