import axios from "axios";
import { useState } from "react";
import { BsChatQuote } from "react-icons/bs";
const API = import.meta.env.VITE_API_URL;

export default function QuoteFetch() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [quote, setQuote] = useState(null);
  const [wrap, setWrap] = useState(false);

  function settingWrap(data) {
    if (data) {
      setTimeout(() => {
        setWrap(true);
      }, 400);
    }
  }

  const fetchQuote = async () => {
    let quoteee;
    try {
      setLoading(true);
      const today = new Date().toISOString().split("T")[0];

      const stored = JSON.parse(localStorage.getItem("quoteData"));
      if (stored?.quote && stored.quoteDate === today) {
        setQuote(stored.quote);
        settingWrap(stored.quote);
        setErr(null);
        return;
      }

      if (stored?.quote && stored.quoteDate < today) {
        localStorage.removeItem("quoteData");
      }

      const res = await axios.get(API);
      if (res.status !== 200) throw new Error("Failed to get a quote");

      console.log(res);
      const data = { quote: res.data, quoteDate: today };
      localStorage.setItem("quoteData", JSON.stringify(data));
      setQuote(res.data);
      quoteee = res.data;
      setErr(null);
    } catch (error) {
      console.error(error);
      setErr(error);
    } finally {
      setLoading(false);
      settingWrap(quoteee);
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

  return (
    <div className="relative flex flex-col items-center w-full h-full">
      <h4
        className={`text-start mt-4 transition-all duration-1000 ease-in-out min-w-[345px] max-w-[900px] ${
          quote ? "w-full opacity-100" : "w-0 opacity-0"
        } overflow-hidden ${wrap ? "text-wrap" : "text-nowrap"}`}
      >
        {quote?.quote} -{" "}
        <span className="text-green-600 font-semibold">{quote?.author}</span>
      </h4>
      {!quote && (
        <button className="h-20 w-20 rounded-md" onClick={fetchQuote}>
          <BsChatQuote className="h-full w-full cursor-pointer text-green-600" />
        </button>
      )}
    </div>
  );
}
