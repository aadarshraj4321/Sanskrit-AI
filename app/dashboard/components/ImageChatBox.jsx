// components/ImageChatBox.js
import React, { useState } from "react";

const ImageChatBox = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    try {
      const res = await fetch("/api/gemini-analyze", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: prompt,
      });
      const data = await res.json();
      if (res.ok) {
        setResponse(data.response);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Analyze Static Image with Prompt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ImageChatBox;
