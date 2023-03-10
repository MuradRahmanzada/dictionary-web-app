interface IProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  word: string;
  setWord: (value: React.SetStateAction<string>) => void;
}

const Form: React.FC<IProps> = ({ handleSubmit, word, setWord }) => {
  return (
    <>
      <form className="py-14 max-w-2xl" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            placeholder="Search for the definition of a word"
            className="relative w-full h-full p-4 outline-none rounded-xl bg-gray-100"
            onChange={(e) => setWord(e.target.value)}
            value={word}
          />
          <button type="submit">
            <img
              src="/assets/icon-search.svg"
              className="absolute top-4 right-0 mx-5"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export { Form };
