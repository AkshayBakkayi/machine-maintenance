import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// import Home from "./pages/Home";
import Machines from "./pages/Machines";
import Login from "./pages/Login";
import Engineers from "./pages/Engineers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="machines" element={<Machines />} />
          <Route path="login" element={<Login />} />
          <Route path="engineers" element={<Engineers />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}