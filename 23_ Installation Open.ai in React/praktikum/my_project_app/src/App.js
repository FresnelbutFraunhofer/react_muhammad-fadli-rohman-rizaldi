// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import { OpenAI } from "openai";

function App() {
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
          // "Fiber Optik Sensor adalah teknologi yang memanfaatkan serat optik sebagai elemen sensitif untuk mendeteksi dan mengukur berbagai parameter fisik, seperti suhu, tekanan, deformasi, atau perubahan indeks bias cahaya. Bagaimana cara Fiber Optik Sensor bekerja, dan apa saja aplikasi praktisnya?" +
          "You will be provided with statements, and your task is to convert them to standard English." +
          prompt,
        // messages: [],
        temperature: 0,
        max_tokens: 250,
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
        <textarea
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt.."
          className="textarea"
        ></textarea>

        <button
          onClick={handleClick}
          disabled={loading || prompt.length === 0}
          className="btn"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        <p className="result">Result: {result}</p>
      </div>
    </main>
  );
}

export default App;
