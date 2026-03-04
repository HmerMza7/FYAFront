import { type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  title: string
  description: string
  icon: ReactNode
  path: string
}

const HomeCard = ({ title, description, icon, path }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(path)}
      className="cursor-pointer bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
    >
      <div className="text-blue-500 text-4xl mb-4">{icon}</div>

      <h2 className="text-white text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-slate-400">
        {description}
      </p>
    </div>
  )
}

export default HomeCard