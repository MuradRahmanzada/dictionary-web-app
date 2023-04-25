import {  useState } from "react";
import axios from "axios";

// Components
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [font, setFont] = useState("sans-serif"); 

  const getDefinition = async (e) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
      );
      setResults(res.data[0]);
      setError(null);
    } catch (err) {
      setError(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDefinition();
  };

  const heading = () => {
    const audio = results?.phonetics.find(
      (phonetic) => phonetic.audio !== ""
    ).audio;

    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`font-${font} w-full dark:bg-black`}>
      <div className="container mx-auto max-w-2xl min-h-screen py-14">
        <Navbar
          font={font}
          setFont={setFont}
        />
        <Form
          word={word}
          setWord={setWord}
          handleSubmit={handleSubmit}
        />


        {results?.meanings && (
          <>
            <Heading {...heading()} />
            {results?.meanings.map((content, index) => {
              return <Content key={index} {...content} />;
            })}
          </>
        )}
        {error && <Error />}
      </div>
    </div>
  );
}

export default App;
