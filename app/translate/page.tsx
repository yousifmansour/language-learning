"use client";

import React, { useState } from "react";
import "./page.scss";
import { myTranslate } from "@/lib/api";
import HelloWorld from "../test-server/page";

const Page: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [translated, setTranslated] = useState<{
    literal: string;
    translation: string;
    note: string
  }>();

  const [source, setSource] = useState<string>("en");
  const [target, setTarget] = useState<string>("fr");

  const handleTranslate = async () => {
    setTranslated(await myTranslate(input, source, target));
  };

  const languages = [
    { name: "English", code: "en" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Italian", code: "it" },
    { name: "Portuguese", code: "pt" },
    { name: "Russian", code: "ru" },
    { name: "Chinese", code: "zh" },
  ];

  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSource(e.target.value);
  };

  const handleTargetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTarget(e.target.value);
  };

  return (
    <div className="test-text">
      <div>
        <p>
          Source:
          <select value={source} onChange={handleSourceChange}>
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </p>
        <p>
          Target:
          <select value={target} onChange={handleTargetChange}>
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </p>
      </div>
      <textarea
        // type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTranslate}>Submit</button>

      <div>
        {translated && (
          <div>
            <h2>Literal:</h2>
            <p>{translated.literal}</p>
            <h2>Natural:</h2>
            <p>{translated.translation}</p>
            <h2>Note:</h2>
            <p>{translated.note}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
