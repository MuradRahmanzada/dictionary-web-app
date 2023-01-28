import { DefinitionType } from "../../types";
import { Audio } from "./Audio";
import { Definitions } from "./Definitions";
import { PartOfSpeech } from "./PartOfSpeech";
import { Source } from "./Source";
import { Synonyms } from "./Synonyms";
import { Word } from "./Word";

interface IProps {
  definition: DefinitionType | undefined;
}

const Definition: React.FC<IProps> = ({ definition }) => {
  return (
    <>
      {definition && (
        <div className="flex flex-col gap-5">
          <div className="flex justify-between">
            <Word word={definition?.word} phonetic={definition?.phonetic} />
            <Audio />
          </div>

          {definition?.meanings.map((meaning, index) => (
            <div key={index}>
              <PartOfSpeech speech={meaning.partOfSpeech} />
              <Definitions definitions={meaning.definitions} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          ))}
          <Source defSource={definition.sourceUrls} />
        </div>
      )}
    </>
  );
};

export { Definition };
