// ─────────────────────────────────────────────
// api.ts — all API calls are centralized here
// no other file should use fetch() directly
// ─────────────────────────────────────────────

// reads BASE_URL from sessionStorage on start
export let BASE_URL = sessionStorage.getItem("devbank_url") ?? "";

// called by App.tsx to define the API URL before any component loads
export const setBaseUrl = (url: string) => {
    BASE_URL = url.endsWith("/") ? url.slice(0, -1) : url;
    sessionStorage.setItem("devbank_url", BASE_URL); // prevents not losing data upon refresh
};

// GET / → returns: { name, agency, account, current_balance }
// used by: header.tsx (name, agency, account) and withdraw/deposit.tsx (current_balance)
export const getAccount = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
};


// POST /deposit
export const postDeposit = async (values: Record<number, number>) => {
    const response = await fetch(`${BASE_URL}/deposit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( values )
    });
    return response.json();
};

// POST /withdraw
export const postWithdraw = async (values: Record<number, number>) => {
    const response = await fetch(`${BASE_URL}/withdraw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( values )
    });
    return response.json();
};

// GET /history
export const getHistory = async () => {
    const response = await fetch(`${BASE_URL}/history`);
    return response.json();
};