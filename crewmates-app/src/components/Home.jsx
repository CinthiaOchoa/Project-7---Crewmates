

export default function Home() {
  return (
    <div className="ml-64 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to your Catmate Dashboard!</h1>
      <p className="text-lg text-gray-600">
        Manage your intergalactic feline crewmates right here. Use the sidebar to create, view, and edit your catmates.
      </p>
      <img
        src="https://placekitten.com/400/300"
        alt="cat dashboard"
        className="mt-8 rounded-lg shadow-md"
      />
    </div>
  );
}
