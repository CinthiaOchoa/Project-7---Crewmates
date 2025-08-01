import { useState } from "react";

export default function Create({ addCat }) {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("Gray");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && speed) {
      addCat({ name, speed, color });
      setName("");
      setSpeed("");
    }
  };

  return (
    <div className="p-8 ml-60 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Create a New Catmate</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Speed (mph)"
          className="border p-2 rounded w-full"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option>Gray</option>
          <option>Orange</option>
          <option>Black</option>
          <option>White</option>
          <option>Calico</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Catmate
        </button>
      </form>
    </div>
  );
}
