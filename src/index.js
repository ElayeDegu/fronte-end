import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Section from "./organisms/Section/Section";
import "./styles.css";

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    const { data } = await axios.get("http://localhost:8000/api/book");
    setProfiles(data);
  };

  return (
    <div>
      <Section sectionTitle={"Books"} profiles={profiles} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
