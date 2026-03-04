import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es obligatorio")
    .email("Formato de correo inválido"),
  password: z
    .string()
    .min(6, "La contraseña debe tener mínimo 6 caracteres"),
})