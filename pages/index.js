import React from "react";

export default function HomePage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>지디자인(SUJIHOON) 홈페이지</h1>
      <p style={{ fontSize: "1.2rem", color: "#333" }}>환영합니다! 세상을 바꾸는 디자인을 만듭니다.</p>
    </div>
  );
}
