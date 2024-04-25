import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import Artwork from "./pages/Artwork";
import CommentsForm from "./pages/CommentsForm";
import { PageProvider } from "./context/PageContext";

function App() {
  return (
    <Router>
      <Header />
      <PageProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<CommentsForm />} />
            <Route path="/artwork/:id" element={<Artwork />} />
          </Routes>
        </Container>
      </PageProvider>
    </Router>
  );
}

export default App;
