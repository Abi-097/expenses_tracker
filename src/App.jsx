import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Expenses from "./pages/expense_tracker/Index";
import Auth from "./pages/auth/Index";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
