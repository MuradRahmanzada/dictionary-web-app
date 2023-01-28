import { useState } from "react";
import axios from "axios";
import { DefinitionType } from "./types";
import { Definition } from "./components/Main";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState<DefinitionType>();

  const getDefinitions = async () => {
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = res.data[0];
    setDefinitions(data);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      getDefinitions();
    }, 500);
    setWord("");
  };
  return (
    <div className="max-w-2xl mx-auto p-14">
      <Header />
      <Form handleSubmit={handleSubmit} word={word} setWord={setWord} />
      <Definition definition={definitions} />
    </div>
  );
}

export default App;
