import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import History from "./pages/History";
import { SEARCH_PAGE, HISTORY_PAGE } from "./pages/Paths";

export interface HistoryProps {
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

function App() {
  const [history, setHistory] = useState<string[]>([]);

  return (
    <Router>
      <Routes>
        <Route
          path={SEARCH_PAGE}
          element={<Search history={history} setHistory={setHistory} />}
        />
        <Route path={HISTORY_PAGE} element={<History history={history} setHistory={setHistory} />} />
      </Routes>
    </Router>
  );
}

export default App;
