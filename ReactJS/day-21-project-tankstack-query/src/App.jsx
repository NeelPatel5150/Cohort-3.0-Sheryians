import { useState } from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Page</h2>;
}

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ padding: "20px" }}>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => setPage("home")}>Home</button>

        <button onClick={() => setPage("users")}>Users</button>

        <button onClick={() => setPage("posts")}>Posts</button>

        <button onClick={() => setPage("about")}>About</button>
      </nav>

      {page === "home" && <Home />}
      {page === "users" && <Users />}
      {page === "posts" && <Posts />}
      {page === "about" && <About />}
    </div>
  );
}

export default App;
