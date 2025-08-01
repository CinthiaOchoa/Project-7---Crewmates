import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { useParams, useNavigate } from 'react-router-dom'

export default function CrewmateEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState({ name: '', color: '', skill: '' })

  useEffect(() => {
    async function fetchCrewmate() {
      const { data } = await supabase.from('crewmates').select('*').eq('id', id).single()
      setCrewmate(data)
    }
    fetchCrewmate()
  }, [id])

  function handleChange(e) {
    setCrewmate({ ...crewmate, [e.target.name]: e.target.value })
  }

  async function handleUpdate(e) {
    e.preventDefault()
    await supabase.from('crewmates').update(crewmate).eq('id', id)
    navigate('/')
  }

  async function handleDelete() {
    await supabase.from('crewmates').delete().eq('id', id)
    navigate('/')
  }

  return (
    <form onSubmit={handleUpdate} className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
      <input name="name" className="w-full p-2 border rounded" value={crewmate.name} onChange={handleChange} />
      <select name="color" className="w-full p-2 border rounded" value={crewmate.color} onChange={handleChange}>
        <option>Red</option><option>Blue</option>
      </select>
      <select name="skill" className="w-full p-2 border rounded" value={crewmate.skill} onChange={handleChange}>
        <option>Engineer</option><option>Pilot</option>
      </select>
      <div className="flex justify-between">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
        <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </form>
  )
}
