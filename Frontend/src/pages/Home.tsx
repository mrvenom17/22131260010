import React, { useEffect, useState } from "react";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

export default function Home() {
  const [urls, setUrls] = useState<{ original: string; short: string }[]>([]);

  const handleAdd = (original: string, short: string) => {
    setUrls((prev) => [...prev, { original, short }]);
  };

  useEffect(() => {
    // Check if user accessed a shortened URL via #/code
    const hash = window.location.hash;
    const match = hash.match(/^#\/(.+)/);
    if (match) {
      const code = match[1];
      const data = localStorage.getItem(code);
      if (data) {
        const parsed = JSON.parse(data);
        const now = Date.now();
        if (now < parsed.expiresAt) {
          window.location.replace(parsed.url);
        } else {
          alert("This link has expired.");
        }
      } else {
        alert("Invalid shortened URL.");
      }
    }
  }, []);

  return (
    <>
      <UrlForm onShorten={handleAdd} />
      <UrlList urls={urls} />
    </>
  );
}
