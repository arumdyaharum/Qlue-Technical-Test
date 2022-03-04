import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
