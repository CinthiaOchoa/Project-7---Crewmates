import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function CrewmateList() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('crewmates').select('*').order('created_at', { ascending: false })
      setCrewmates(data)
    }
    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {crewmates.map(c => (
        <motion.div
          key={c.id}
          className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
          whileHover={{ scale: 1.03 }}
        >
          <Link to={`/crewmate/${c.id}`}>
            <h3 className="text-lg font-semibold text-blue-600">{c.name}</h3>
            <p className="text-gray-500">Color: {c.color}</p>
            <p className="text-gray-500">Skill: {c.skill}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}