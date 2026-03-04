import { BadgeDollarSign, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import ConfirmModal from "../components/ConfirmModal";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("Sesión cerrada correctamente");
    navigate("/login");
  };
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-2 py-1 transition ${
      isActive
        ? "text-blue-500"
        : "text-slate-700 dark:text-slate-300 hover:text-blue-500"
    }`;

  return (
    <>
      <header className="relative flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-3 bg-white dark:bg-slate-900/70 backdrop-blur-md">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => token && navigate("/home")}
        >
          <BadgeDollarSign width={28} height={28} color="white" />
          <h2 className="text-slate-900 dark:text-white text-lg font-bold">
            CreditPro
          </h2>
        </div>

        {token && (
          <>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/credits" className={linkClass}>
                Créditos
              </NavLink>

              <NavLink to="/register" className={linkClass}>
                Nuevo Crédito
              </NavLink>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold hover:scale-105 transition"
                >
                  A
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg animate-fadeIn">
                    <button
                      onClick={() => setShowLogoutModal(true)}
                      className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-white"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            </nav>

            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </>
        )}

        {isOpen && token && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 md:hidden animate-slideDown text-white">
            <NavLink
              to="/credits"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 border-b border-slate-200 dark:border-slate-800"
            >
              Créditos
            </NavLink>

            <NavLink
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 border-b border-slate-200 dark:border-slate-800"
            >
              Nuevo Crédito
            </NavLink>

            <button
              onClick={() => setShowLogoutModal(true)}
              className="block w-full text-left px-6 py-4 text-red-500"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </header>
      <ConfirmModal
        isOpen={showLogoutModal}
        title="Cerrar sesión"
        message="¿Estás seguro que deseas cerrar sesión?"
        confirmText="Sí, cerrar sesión"
        cancelText="Cancelar"
        onConfirm={() => {
          setShowLogoutModal(false);
          handleLogout();
        }}
        onCancel={() => setShowLogoutModal(false)}
      />
      ;
    </>
  );
};

export default Navbar;
