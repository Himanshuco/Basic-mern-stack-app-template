import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [examples, setExamples] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/examples")
      .then(res => setExamples(res.data))
      .catch(err => console.error(err));
  }, []);

  const addExample = async () => {
    const res = await axios.post("http://localhost:5000/api/examples", { name });
    setExamples([...examples, res.data]);
    setName("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>MERN Template</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addExample}>Add</button>
      <ul>
        {examples.map(e => <li key={e._id}>{e.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
