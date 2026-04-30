// ─────────────────────────────────────────────
// api.ts — all API calls are centralized here
// no other file should use fetch() directly
// ─────────────────────────────────────────────

// reads BASE_URL from sessionStorage on startup
// sessionStorage keeps the URL saved while the browser tab is open
// ?? "" means "if nothing is saved yet, use empty string"
export let BASE_URL = sessionStorage.getItem("devbank_url") ?? "";

// called by App.tsx to define the API URL before any component loads
export const setBaseUrl = (url: string) => {
    // removes trailing slash to avoid broken URLs like "https://api.com//deposit"
    // example: "https://api.com/" → "https://api.com"
    BASE_URL = url.endsWith("/") ? url.slice(0, -1) : url;
    sessionStorage.setItem("devbank_url", BASE_URL); // saves URL so it survives page refresh
};

// GET / → returns: { name, agency, account, current_balance }
// used by: header.tsx (name, agency, account) and withdraw/deposit.tsx (current_balance)
export const getAccount = async () => {
    const response = await fetch(BASE_URL); // fetches from GET /
    const data = await response.json();     // converts response to JSON object
    return data;                            // returns { name, agency, account, current_balance }
};

// POST /deposit → sends bill quantities to the backend
// values = { 2: 3, 50: 1 } means 3 bills of R$2 and 1 bill of R$50
// backend calculates the total, saves the transaction and updates the balance
export const postDeposit = async (values: Record<number, number>) => {
    const response = await fetch(`${BASE_URL}/deposit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // tells API the body is JSON
        body: JSON.stringify(values) // converts { 2: 3, 50: 1 } to a JSON string
    });
    return response.json(); // returns updated account data from the backend
};

// POST /withdraw → sends bill quantities to the backend
// values = { 2: 3, 50: 1 } means 3 bills of R$2 and 1 bill of R$50
// backend calculates the total, saves the transaction and updates the balance
export const postWithdraw = async (values: Record<number, number>) => {
    const response = await fetch(`${BASE_URL}/withdraw`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // tells API the body is JSON
        body: JSON.stringify(values) // converts { 2: 3, 50: 1 } to a JSON string
    });
    return response.json(); // returns updated account data from the backend
};

// GET /history → returns list of all transactions
// used by: history.tsx to display the transaction history
// returns: [{ id, type, value, date, balance }]
export const getHistory = async () => {
    const response = await fetch(`${BASE_URL}/history`);
    return response.json(); // returns the transaction list
};