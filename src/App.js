import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/Home";
import DetailPage from "./Pages/Detail";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/comments" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
