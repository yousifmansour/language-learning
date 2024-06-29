"use client";

import React, { useState } from "react";
import "./page.scss";
import { myTranslate } from "@/lib/api";

const Page: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [translated, setTranslated] = useState<string>("");

  const handleTranslate = async () => {
    setTranslated(await myTranslate(input));
  };

  return (
    <div className="test-text">
      <h1>Test Page</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTranslate}>Submit</button>
      <p>{translated}</p>
    </div>
  );
};

export default Page;
