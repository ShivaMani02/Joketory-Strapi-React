import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/jokes")
      .then((res) => {
        setJokes(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jokes:", err);
        setLoading(false);
      });
  }, []);

  const styles = {
    header: {
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "05px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    footer: {
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "10px",
      position: "sticky",
      bottom: 0,
      zIndex: 1000,
    },
    container: {
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto",
    },
    joke: {
      background: "#fff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      marginBottom: "20px",
    },
    title: {
      margin: "0 0 10px",
    },
    meta: {
      fontSize: "0.85rem",
      color: "#666",
      marginTop: "10px",
    },
    loading: {
      textAlign: "center",
      color: "#555",
    },
    body: {
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      margin: 0,
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1>🃏 Jokatory</h1>
      </header>

      <main style={styles.container}>
        {loading ? (
          <p style={styles.loading}>Loading jokes...</p>
        ) : (
          jokes.map((item) => {
            const joke = item.attributes;
            return (
              <div key={item.id} style={styles.joke}>
                <h2 style={styles.title}>{joke.title}</h2>
                <p>{joke.content}</p>
                <div style={styles.meta}>
                  🗂️ {joke.category} &nbsp; | &nbsp;
                  ✍️ {joke.auther} &nbsp; | &nbsp;
                  🕒 {new Date(joke.uploadedTime).toLocaleString()}
                </div>
              </div>
            );
          })
        )}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 Jokatory by Shivansh</p>
      </footer>
    </div>
  );
}

export default App;
