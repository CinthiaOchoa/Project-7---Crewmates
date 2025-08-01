import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'


export default function Gallery() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCats() {
      const { data, error } = await supabase.from('crewmates').select('*').order('created_at', { ascending: false })
      if (!error) setCats(data)
      setLoading(false)
    }
    fetchCats()
  }, [])

  if (loading) return <p className="ml-64 p-8">Loading...</p>

  return (
    <main className="ml-64 p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-pink-600">Catmate Gallery</h1>
        {cats.length === 0 ? (
          <p>No catmates created yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cats.map(cat => (
              <div
                key={cat.id}
                className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="font-semibold text-xl mb-2">{cat.name}</h2>
                <p>Speed: {cat.speed} mph</p>
                <p>Color: {cat.color}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
