import React from 'react'

function TopBar() {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 40px",
      backgroundColor: "yellowgreen",
    }}>
    <h2>My logo</h2>
    <nav style={{ display: "flex", gap: 30 }}>
      <div>Home</div>
      <div>Kontaktai</div>
    </nav>
  </div>  )
}

export default TopBar