import HomeContent from "./components/Home";
import { Route, Routes } from "react-router-dom";
import IconRow from "./components/IconRow";
import "./App.css";
import SearchPage from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <IconRow />
    </div>
  );
};

export default App;
