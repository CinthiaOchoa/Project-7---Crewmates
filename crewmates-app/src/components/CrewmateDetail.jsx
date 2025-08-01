import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { useParams, Link } from 'react-router-dom'

export default function CrewmateDetail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    async function fetchCrewmate() {
      const { data } = await supabase.from('crewmates').select('*').eq('id', id).single()
      setCrewmate(data)
    }
    fetchCrewmate()
  }, [id])

  if (!crewmate) return <p>Loading...</p>

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600">{crewmate.name}</h2>
      <p className="text-gray-600">Color: {crewmate.color}</p>
      <p className="text-gray-600">Skill: {crewmate.skill}</p>
      <Link to={`/edit/${crewmate.id}`} className="text-blue-500 underline mt-4 block">Edit Crewmate</Link>
    </div>
  )
}