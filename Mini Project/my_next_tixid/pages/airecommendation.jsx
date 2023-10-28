import React, { useState } from "react";
import { OpenAI } from "openai";

export default function AIRecommedation() {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const resp = await openai.completions.create({
        model: "text-davinci-003",
        prompt:
          "Suggest a movie recommendation for someone who enjoys." + prompt,
        // messages: [],
        temperature: 0,
        max_tokens: 100,
      });
      setResult(resp.choices[0].text);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <main className="main">
      <div className="contain w-2/4 mx-auto">
        <h1>AI Recommendation</h1>
        <textarea
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt.."
          className="textarea"
        ></textarea>

        <div className="row ms-2 mb-3">
          <button
            onClick={handleClick}
            disabled={loading || prompt.length === 0}
            className="btn ai-button btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg col-3 col-lg-4 me-3"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
          <a
            className="btn ai-button btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg col-5 col-lg-5 "
            href="/"
            role="button"
          >
            To Dashboard
          </a>
        </div>
        <p className="result ms-2">ChatGPT : {result}</p>
      </div>
    </main>
  );
}
