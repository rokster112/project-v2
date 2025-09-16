import { useEffect, useState } from "react";

export default function QuoteFetch() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const today = new Date().toISOString().split("T")[0];
        const localStorageQuote = localStorage.getItem("quote");
        if (localStorageQuote) {
          const { data, quoteDate } = JSON.parse(localStorageQuote);
          if (quoteDate !== today) {
            localStorage.removeItem("quote");
          } else {
            setQuote(data);
            return;
          }
        }
        const res = await fetch("https://api.quotable.io/random");
        if (!res.ok) {
          throw new Error("Failed to get a quote");
        }
        const data = await res.json();
        localStorage.setItem(
          "quote",
          JSON.stringify({ data, quoteDate: today })
        );
        setQuote(data);
        setErr(null);
      } catch (error) {
        console.error(error);
        setErr(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
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
  console.log("quote =>", quote);

  return (
    quote && (
      <div>
        <h4>{quote.content}</h4>
        <p>{quote.author}</p>
      </div>
    )
  );
}
