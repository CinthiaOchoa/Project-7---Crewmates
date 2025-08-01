import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Create from "./components/Create";
import Gallery from "./components/Gallery";
import CrewmateForm from "./components/CrewmateForm";
import CrewmateList from "./components/CrewmateList";
import CrewmateDetail from "./components/CrewmateDetail";
import CrewmateEdit from "./components/CrewmateEdit";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-8 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/new" element={<CrewmateForm />} />
            <Route path="/crewmate/:id" element={<CrewmateDetail />} />
            <Route path="/edit/:id" element={<CrewmateEdit />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
