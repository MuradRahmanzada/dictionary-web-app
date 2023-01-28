const Synonyms = ({ synonyms }: { synonyms: string[] }) => {
  return (
    <>
      {synonyms.map((synonym) => (
        <p className="text-gray-500 flex items-center gap-2">
          Synonyms
          {synonyms.map((synonym) => (
            <span className="text-fuchsia-600 font-bold">{synonym}</span>
          ))}
        </p>
      ))}
    </>
  );
};

export { Synonyms };
