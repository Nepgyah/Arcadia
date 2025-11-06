import { useCSRF } from "./csrfLoader";
const api_root = process.env.NEXT_PUBLIC_API_URL;
const graph_root = process.env.NEXT_PUBLIC_GRAPH_URL;

export const useApi = () => {
  const { csrfToken } = useCSRF();

  const apiPOST = async <T>(url: string, body: any): Promise<T> => {
    if (!csrfToken) throw new Error("CSRF token not available");

    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    
    const res = await fetch(endpoint, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(`POST ${url} failed`);
    return res.json();
  };

  return { apiPOST };
};

export const apiGET = async <T>(url: string): Promise<T> => {
    const endpoint = `${api_root}${url}`;

    try {
        const res = await fetch(endpoint, {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
            },
        });

        if (!res.ok) {
            let message = `Request failed with status ${res.status}`;
            try {
                const errorData = await res.json();
                message = errorData?.detail || message;
            } catch {
                if (res.status >= 500) {
                    message = "Server error occurred. Please try again later.";
                }
            }
            throw message;
            
        } else {
            return res.json();
        }

    } catch (error) {

        if (error instanceof Error) {
            throw "An unexpected error occured. Please try again later.";
        }
        throw error;
    }
};


export const GraphQL = async <T>(query: any, variables = {}): Promise<T> => {
    
    try {
        const res = await fetch(`${graph_root}`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, variables }),
        });

        if (!res.ok) {
                let message = `Request failed with status ${res.status}`;
            try {
                const errorData = await res.json();
                message = errorData?.detail || message;
            } catch {
                if (res.status >= 500) {
                    message = "Server error occurred. Please try again later.";
                }
            }
            throw message;

        } else {
            return await res.json()
        }

    } catch (error) {

        if (error instanceof Error) {
            throw "An unexpected error occured. Please try again later.";
        }
        throw error;
    }
}