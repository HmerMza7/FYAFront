import { type CreditFormData } from "../validations/credit.schema";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import CreditForm from "../components/CreditForm";
import { useCreateCredit } from "../hooks/useCreateCredit";

const RegisterCredit = () => {
  const navigate = useNavigate();
  const mutation = useCreateCredit();

  const handleCreate = (data: CreditFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast.success("Crédito creado correctamente");
        navigate("/credits");
      },
      onError: () => {
        toast.error("Error al crear el crédito");
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-900 p-10 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-8">Nuevo Crédito</h1>
      <CreditForm onSubmit={handleCreate} isSubmitting={mutation.isPending} />
    </div>
  );
};

export default RegisterCredit;
