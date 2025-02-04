import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import "./styles/index.css";
import SlotMachine from "./pages/SlotMachine.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/slots" element={<SlotMachine />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
