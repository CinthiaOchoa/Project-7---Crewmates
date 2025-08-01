import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Create from './components/Create'
import Gallery from './components/Gallery'
import CrewmateForm from './components/CrewmateForm'
import CrewmateList from './components/CrewmateList'
import CrewmateDetail from './components/CrewmateDetail'
import CrewmateEdit from './components/CrewmateEdit'


function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto bg-gradient-to-br from-slate-100 to-slate-300">
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
    </BrowserRouter>
  )
}

export default App