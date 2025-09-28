'use client';
import React, { createContext, useContext, useState, useEffect } from "react";

const CSRFContext = createContext<{
  csrfToken: string | null;
  setCsrfToken: (token: string | null) => void;
}>({
  csrfToken: null,
  setCsrfToken: () => {},
});

export const useCSRF = () => useContext(CSRFContext);

export const CSRFProvider = ({ children }: { children: React.ReactNode }) => {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    const api_root = process.env.NEXT_PUBLIC_API_URL;
    fetch(`${api_root}account/auth/csrf/`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data.csrfToken) setCsrfToken(data.csrfToken);
      });
  }, []);

  return (
    <CSRFContext.Provider value={{ csrfToken, setCsrfToken }}>
      {children}
    </CSRFContext.Provider>
  );
};