import React, { useState } from "react";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

export default function Home() {
  const [urls, setUrls] = useState<{ original: string; short: string }[]>([]);

  const handleAdd = (original: string, short: string) => {
    setUrls((prev) => [...prev, { original, short }]);
  };

  return (
    <>
      <UrlForm onShorten={handleAdd} />
      <UrlList urls={urls} />
    </>
  );
}
