import type { Credit } from "../types/credit.types";

interface Props {
  credits: Credit[];
}
const CreditsTable = ({ credits }: Props) => {
  return (
    <div className="overflow-x-auto h-[55vh]">
      <table className="w-full text-left text-white">
        <thead className="p-2">
          <tr className="border-b border-slate-700">
            <th className="py-3">Cliente</th>
            <th>Cédula</th>
            <th>Monto</th>
            <th>Interés</th>
            <th>Plazo</th>
            <th>Asesor</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((credit) => (
            <tr
              key={credit.id}
              className="border-b border-slate-800 hover:bg-slate-800 p-2"
            >
              <td className="py-3">{credit.client_name}</td>
              <td>{credit.client_id}</td>
              <td>${Number(credit.amount).toLocaleString()}</td>
              <td>{credit.interest_rate}%</td>
              <td>{credit.term_months} meses</td>
              <td>{credit.sales_agent}</td>
              <td>{new Date(credit.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreditsTable;
