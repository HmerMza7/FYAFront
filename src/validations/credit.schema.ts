import { z } from "zod"

export const creditSchema = z.object({
  client_name: z
    .string()
    .min(3, "El nombre debe tener mínimo 3 caracteres"),

  client_id: z
    .string()
    .min(5, "La cédula debe tener mínimo 5 caracteres"),

  amount: z
    .number("Debe ser un número")
    .positive("El monto debe ser mayor a 0"),

  interest_rate: z
    .number("Debe ser un número")
    .min(0, "No puede ser negativo")
    .max(100, "No puede ser mayor a 100"),

  term_months: z
    .number("Debe ser un número")
    .int("Debe ser entero")
    .positive("Debe ser mayor a 0"),

  sales_agent: z
    .string()
    .min(3, "El asesor es obligatorio"),
})

export type CreditFormData = z.infer<typeof creditSchema>