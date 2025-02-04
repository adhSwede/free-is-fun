import { Outlet } from "react-router-dom";
import Nav from "./components/Nav.tsx";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Nav />
      <main className="flex flex-1 justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
