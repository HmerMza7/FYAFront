import { EyeClosed } from "lucide-react";
import { useState } from "react";
import { type UseFormRegisterReturn } from "react-hook-form"


type Props = {
    label:string;
    type:string;
    placeHolder:string;
    register: UseFormRegisterReturn
}
const Input = ({label,type,placeHolder,register}:Props) => {
  const [visibility,setVisibility] = useState(false)
  return (
    <div className="space-y-2">
      <label className="text-slate-700 dark:text-slate-200 text-sm font-semibold flex items-center gap-2">
        {label}
      </label>
      <div className="relative group">
      <input
        {...register}
        className="w-full h-14 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-primary px-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all outline-none"
        placeholder={placeHolder}
        type={visibility ? 'text' : type}
      />
      {type === "password" && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          type="button"
          onClick={()=>setVisibility(!visibility)}
        >
          <span className="material-symbols-outlined" data-icon="Eye">
            <EyeClosed />
            
          </span>
        </button>
      )}
      </div>
    </div>
  );
}

export default Input

