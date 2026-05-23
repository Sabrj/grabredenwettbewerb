"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAdmin: boolean;
  login: (password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAdmin: false,
  login: async () => ({ ok: false }),
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const hasAdminCookie = document.cookie
      .split(";")
      .some((c) => c.trim().startsWith("admin_ui=1"));
    setIsAdmin(hasAdminCookie);
  }, []);

  const login = async (password: string): Promise<{ ok: boolean; error?: string }> => {
    try {
      const res  = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok) { setIsAdmin(true); return { ok: true }; }
      return { ok: false, error: data.error ?? "Fehler beim Login." };
    } catch {
      return { ok: false, error: "Verbindungsfehler." };
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
