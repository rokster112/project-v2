// netlify/functions/quote.js

import fetch from "node-fetch";

export async function handler() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error("Failed to fetch quote");

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
