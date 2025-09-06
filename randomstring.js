import React, { useState, useEffect, useCallback } from "react";

export default function RandomString() {
  const [string, setString] = useState("");

  const generateRandomString = useCallback(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 8; // length of the random string
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setString(result);
  }, []);

  useEffect(() => {
    generateRandomString(); // Generate a string on initial load
  }, [generateRandomString]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random String Generator</h1>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{string}</p>
      <button
        onClick={generateRandomString}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Generate New String
      </button>
    </div>
  );
}
