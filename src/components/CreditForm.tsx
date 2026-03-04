import { useForm } from "react-hook-form";
import {
  creditSchema,
  type CreditFormData,
} from "../validations/credit.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";

interface Props {
  onSubmit: (data: CreditFormData) => void;
  isSubmitting: boolean;
}

const CreditForm = ({ onSubmit, isSubmitting }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(creditSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
      <div>
        <Input
          label="Nombre del cliente"
          type="text"
          placeHolder="Nombre del cliente"
          register={register("client_name")}
        />
        {errors.client_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.client_name.message}
          </p>
        )}
      </div>
      <div>
        <Input
          label="Cédula"
          type="text"
          placeHolder="Cédula del cliente"
          register={register("client_id")}
        />
        {errors.client_id && (
          <p className="text-red-500 text-sm mt-1">
            {errors.client_id.message}
          </p>
        )}
      </div>
      <div>
        <Input
          label="Monto"
          type="number"
          placeHolder="Monto del crédito"
          register={register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
        )}
      </div>
      <div>
        <Input
          label="Tasa de interés (%)"
          type="number"
          register={register("interest_rate", { valueAsNumber: true })}
          placeHolder="Tasa de interés (%)"
        />
        {errors.interest_rate && (
          <p className="text-red-500 text-sm mt-1">
            {errors.interest_rate.message}
          </p>
        )}
      </div>

      <div>
        <Input
          label="Plazo (meses)"
          type="number"
          placeHolder="Plazo (meses)"
          register={register("term_months", { valueAsNumber: true })}
        />
        {errors.term_months && (
          <p className="text-red-500 text-sm mt-1">
            {errors.term_months.message}
          </p>
        )}
      </div>

      <div className="col-span-2">
        <Input
          label="Asesor"
          type="text"
          placeHolder="Nombre del asesor"
          register={register("sales_agent")}
        />
        {errors.sales_agent && (
          <p className="text-red-500 text-sm mt-1">
            {errors.sales_agent.message}
          </p>
        )}
      </div>

      <div className="col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          {isSubmitting ? "Creando..." : "Crear Crédito"}
        </button>
      </div>
    </form>
  );
};

export default CreditForm;
