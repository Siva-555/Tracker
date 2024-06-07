import { Route, Routes } from "react-router-dom";
import "./App.css";
import ComicsPage from "./pages/ComicsPage";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#404040",
      }}
    >
      <Header />

      <div style={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comic" element={<ComicsPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
