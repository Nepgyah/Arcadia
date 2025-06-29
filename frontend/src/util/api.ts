const getCookie = (name: string): string | null => {
    const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
    return cookieValue ? decodeURIComponent(cookieValue.split("=")[1]) : null;
}

export const apiPOST = async <T>(url: string, body: any): Promise<T> => {
    const csrfToken = getCookie("csrftoken");
    if (!csrfToken) throw new Error("CSRF token not available");
    const endpoint = `http://localhost:8000/api/${url}`;

    const res = await fetch(endpoint, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
        } as HeadersInit,

        body: JSON.stringify(body),
    })

    if (!res.ok) throw new Error(`POST ${url} failed`);
    return res.json();
}

export const apiGET = async <T>(url: string): Promise<T> => {
    const endpoint = `http://localhost:8000/api/${url}`;

    const res = await fetch(endpoint, {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
        },
    });

    if (!res.ok) throw new Error(`GET ${url} failed`);
    return res.json();
};