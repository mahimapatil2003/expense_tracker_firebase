import "./App.css";
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/index";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
