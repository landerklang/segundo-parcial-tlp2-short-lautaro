import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(null);
  // TODO: Obtener datos del usuario desde /api/profile
  // TODO: Implementar función handleLogout con POST a /api/logout usando credentials: 'include'
  // TODO: Después del logout exitoso, redireccionar a /login
  // TODO: Manejar errores apropiadamente

  // TODO: Reemplazar con el nombre real del usuario obtenido de /api/profile
  const navigate = useNavigate();
  const FetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      if (!res) {
        console.log("Error al cargar el nombre del usuario");
      }
      const data = await res.json();
      console.log(data);

      setNavbar(data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "include",
      });
      alert("se cerro sesion con exito");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    FetchProfile();
  }, []);
  console.log(navbar?.name);
  return (
    <nav className="bg-gray-900 text-white h-16 left-0 right-0 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-2xl font-bold">Superhéroes App</div>

        <div className="hidden md:flex items-center space-x-6">
          <span className="text-gray-300">
            Bienvenido,{""}
            <span className="font-semibold text-white">{navbar?.name}</span>
          </span>

          <button
            onClick={
              handleLogout
              // TODO: Implementar handleLogout aquí
            }
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors font-medium"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
