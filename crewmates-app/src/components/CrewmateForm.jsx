import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function CrewmateForm() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [skill, setSkill] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const { error } = await supabase.from('crewmates').insert([{ name, color, skill }])
    if (!error) navigate('/')
  }

  return (
    <motion.form
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl space-y-4 animate-fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-gray-700">Create New Crewmate</h2>
      <input className="w-full p-2 border rounded" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <select className="w-full p-2 border rounded" value={color} onChange={e => setColor(e.target.value)}>
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
      </select>
      <select className="w-full p-2 border rounded" value={skill} onChange={e => setSkill(e.target.value)}>
        <option value="">Select Skill</option>
        <option value="Engineer">Engineer</option>
        <option value="Pilot">Pilot</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add Crewmate</button>
    </motion.form>
  )
}