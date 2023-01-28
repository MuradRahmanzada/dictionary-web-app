interface IProps {
  word: string | undefined;
  phonetic: string | undefined;
}

const Word: React.FC<IProps> = ({ word, phonetic }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">{word}</h1>
      <p className="mt-5 text-fuchsia-600">{phonetic}</p>
    </div>
  );
};

export { Word };
