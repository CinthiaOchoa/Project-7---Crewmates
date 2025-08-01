export default function Gallery({ cats }) {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Catmate Gallery</h2>
      {(!cats || cats.length === 0) ? (
        <p>No catmates created yet.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {cats.map((cat, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{cat.name}</h3>
              <p>Speed: {cat.speed} mph</p>
              <p>Color: {cat.color}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
