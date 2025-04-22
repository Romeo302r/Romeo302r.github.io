// import Footer from "./Footer";
import Body from "./body";
import Header from "./header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPage from "./EditPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
