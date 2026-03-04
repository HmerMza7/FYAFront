import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { loginSchema } from "../validations/auth.schema";
import toast from "react-hot-toast";

type LoginFormData = z.infer<typeof loginSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await api.post("/auth/login", data);
      toast.success("Bienvenido nuevamente");
      context?.login(response.data.token);
      navigate("/credits");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Login error";
      alert(message);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center p-6 bg-[#0f1624] relative overflow-hidden">
      <div className="w-full max-w-120 z-10">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 text-amber-50">
              Bienvenido
            </h1>
            <p className="text-slate-500">Ingrese sus credenciales</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                label="Correo Electronico"
                type="email"
                placeHolder="ejemplo@email.com"
                register={register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                label="Contrasenha"
                type="password"
                placeHolder="****"
                register={register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              className="w-full h-14 bg-[#135ced] text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              type="submit"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Form;
