import api from "./api"
import { type Credit, type GetCreditsParams, type PaginatedCredits } from "../types/credit.types"
import type { CreditFormData } from "../validations/credit.schema"

export const getCredits = async (
  params?: GetCreditsParams
): Promise<PaginatedCredits> => {
  const response = await api.get("/credits", { params })
  console.log("response", response.data)
  return response.data
}
export const createCredit = async (
  payload: CreditFormData
): Promise<Credit> => {
  const { data } = await api.post("/credits", payload);
  return data;
};