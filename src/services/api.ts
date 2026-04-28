// ─────────────────────────────────────────────
// api.ts — all API calls are centralized here
// no other file should use fetch() directly
// ─────────────────────────────────────────────

// stores the API link — set by App.tsx on startup
export let BASE_URL = "";

// called by App.tsx to define the API URL before any component loads
export const setBaseUrl = (url: string) => {
    BASE_URL = url;
};

// GET / → returns: { name, agency, account, current_balance }
// used by: header.tsx (name, agency, account) and withdraw/deposit.tsx (current_balance)
export const getAccount = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
};

// POST /transactions → sends: { type: "deposito" | "saque", value: number }
// used by: withdraw.tsx and deposit.tsx when user clicks "Sacar" or "Depositar"
// TODO: backend must accept this format and save the transaction
export const postTransaction = async (type: "deposito" | "saque", value: number) => {
    const response = await fetch(`${BASE_URL}/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, value })
    });
    return response.json();
};

// GET /transactions → returns: [{ id, type, value, date, balance }]
// used by: history.tsx to display the transaction history
// TODO: backend must implement this endpoint
export const getTransactions = async () => {
    const response = await fetch(`${BASE_URL}/transactions`);
    const data = await response.json();
    return data;
};