import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

import { api } from "../services/api";
import Swal from "sweetalert2";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("sessions", { email, password });
      const { user } = response.data;

      setData({ user });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          confirmButtonText: "Ok",
        });
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    try {
      await api.delete("/sessions");
    } catch (error) {
      console.log(error);
    }
  }

  async function validateUser() {
    try {
      const response = await api.get("/users/validated");
      const { name, email, role } = response.data;

      setData({
        user: {
          name,
          email,
          role,
        },
      });
    } catch (error) {
      setData({
        user: {},
      });
      if (error.response?.status === 401) {
        signOut();
      }
    }
  }

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
