import axios from "axios";
import { useState } from "react";
const API = import.meta.env.VITE_API_URL;

export default function QuoteFetch() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const today = new Date().toISOString().split("T")[0];

      const stored = JSON.parse(localStorage.getItem("quoteData"));
      if (stored?.quote && stored.quoteDate === today) {
        setQuote(stored.quote);
        setErr(null);
        return;
      }

      const res = await axios.get(API);
      if (res.status !== 200) throw new Error("Failed to get a quote");

      const data = { quote: res.data, quoteDate: today };
      localStorage.setItem("quoteData", JSON.stringify(data));
      setQuote(res.data);
      setErr(null);
    } catch (error) {
      console.error(error);
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex z-2 justify-center items-center">
        <div className="animate-spin border-4 border-t-4 border-gray-500 w-12 h-12 rounded-full"></div>
      </div>
    );
  }

  if (err) {
    return (
      <h3 className="z-2 text-4xl">
        Well this is awkward... {err.message}, please try again later
      </h3>
    );
  }

  return quote ? (
    <div>
      <h4 className="mt-4">
        {quote.content} -{" "}
        <span className="text-green-600 font-semibold">{quote.author}</span>
      </h4>
    </div>
  ) : (
    <button className="bg-green-600 p-2 rounded-md" onClick={fetchQuote}>
      Get quote
    </button>
  );
}
