export interface Credit {
  id: string
  client_name: string
  client_id: string
  amount: string
  interest_rate: string
  term_months: number
  sales_agent: string
  created_at: string
}


export interface PaginatedCredits {
  data: Credit[]
  total: number
  page: number
  totalPages: number
}

export interface GetCreditsParams {
  search?: string
  sort?: "amount" | "created_at"
  order?: "asc" | "desc"
  page?: number
  limit?: number
}

export interface CreditsResponse {
  data: Credit[];
  totalPages: number;
}