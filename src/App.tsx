import HomeContent from "./components/Home";
import { Route, Routes } from "react-router-dom";
import IconRow from "./components/IconRow";
import "./App.css";
import SearchPage from "./components/Search";
import CartPage from "./components/Cart";
import InfoPage from "./components/Info";
import AccountPage from "./components/Account";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <IconRow />
    </div>
  );
};

export default App;
