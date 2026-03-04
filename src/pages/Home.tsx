import HomeCard from "../components/HomeCard";
import { PlusCircle, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f1624] flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <HomeCard
          title="Nuevo Crédito"
          description="Registrar una nueva solicitud de crédito"
          icon={<PlusCircle />}
          path="/register"
        />

        <HomeCard
          title="Ver Créditos"
          description="Consultar y administrar créditos existentes"
          icon={<FileText />}
          path="/credits"
        />
      </div>
    </div>
  );
};

export default Home;
