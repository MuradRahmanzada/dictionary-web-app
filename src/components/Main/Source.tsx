const Source = ({ defSource }: { defSource: string[] }) => {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-gray-500">Source</h1>
      <p>
        {defSource.map((src, index) => (
          <a href={src} className="underline text-sm dark:text-white flex gap-2" key={index}>
            {src}
            <img src="/assets/icon-new-window.svg" alt="" />
          </a>
        ))}
      </p>
    </div>
  );
};

export {Source};
