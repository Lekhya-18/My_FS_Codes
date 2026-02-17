import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    dreamPlace: "",
    dreamJob: "",
    description: "",
    happy: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post( "https://lifeform-backend.onrender.com/submit", form );
      setMessage("Life Vision Saved Successfully ✅");
      setForm({
        name: "",
        dreamPlace: "",
        dreamJob: "",
        description: "",
        happy: ""
      });

    } catch (error) {
      setMessage("Error saving data ❌");
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", color: "#22099d", fontStyle: "italic" }}>
          Life Vision Form
        </h2>

        <p style={{ textAlign: "center", color: "#e56c9a", fontStyle: "italic" }}>
          Just to explore yourself and imagine your dreams!
        </p>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="dreamPlace"
          placeholder="Dream Place"
          value={form.dreamPlace}
          onChange={handleChange}
        />

        <input
          name="dreamJob"
          placeholder="Dream Job"
          value={form.dreamJob}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Describe how you want to lead your life"
          value={form.description}
          onChange={handleChange}
        />

        <select
          name="happy"
          value={form.happy}
          onChange={handleChange}
        >
          <option value="">Are you Happy Now?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Submit"}
        </button>

        {message && (
          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              color: message.includes("Error") ? "red" : "green",
              fontWeight: "bold"
            }}
          >
            {message}
          </p>
        )}
      </form>
    </>
  );
}

export default App;