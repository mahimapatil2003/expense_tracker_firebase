import "./App.css";
<<<<<<< HEAD

import { BrowserRouter ,  Route, Routes } from "react-router-dom";
=======
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
>>>>>>> 874559f6be27c900e0b6fe911294c7e71d084ef4
import { Auth } from "./pages/auth/index";
import { ExpenseTracker } from "./pages/expense-tracker/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/expense_tracker_firebase">
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
