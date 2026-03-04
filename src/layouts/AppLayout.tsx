import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[#0f1624]">
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout