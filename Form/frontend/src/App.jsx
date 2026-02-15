import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    dreamPlace: "",
    dreamJob: "",
    description: "",
    happy: ""
  });
 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://mybackend.loca.lt", form);
    alert("Life Vision Saved!");
  };

  return (
    <>
       <form onSubmit={handleSubmit}>
         <h2 style={{ textAlign: "center", color: "#22099d", fontStyle: "italic" }}>Life Vision Form</h2>
         <p style={{ textAlign: "center", color: "#e56c9a", fontStyle: "italic" }}>
              Just to explore yourself and imagine your dreams!
         </p>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="dreamPlace"
        placeholder="Dream Place"
        onChange={handleChange}
      />

      <input
        name="dreamJob"
        placeholder="Dream Job"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Describe how you want to lead your life"
        onChange={handleChange}
      />

      <select name="happy" onChange={handleChange}>
        <option value="">Are you Happy Now?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
