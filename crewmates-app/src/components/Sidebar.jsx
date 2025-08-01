import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#1e1e2f] text-white p-6 flex flex-col space-y-6 fixed">
      <div className="text-3xl font-bold">🐾 Catmates</div>
      <nav className="flex flex-col space-y-4 text-lg">
        <Link to="/" className="hover:text-pink-300">Home</Link>
        <Link to="/create" className="hover:text-pink-300">Create a Catmate</Link>
        <Link to="/gallery" className="hover:text-pink-300">Catmate Gallery</Link>
      </nav>
    </div>
  );
}
