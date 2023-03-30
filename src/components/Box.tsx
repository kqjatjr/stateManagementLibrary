import { useAtomValue } from "jotai";
import { countAtom, objectArrayAtom, progressAtom } from "../store/atoms";

const Box = () => {
  const number = useAtomValue(countAtom);
  const progress = useAtomValue(progressAtom);
  const objectArray = useAtomValue(objectArrayAtom);
  return (
    <div>
      <div>useAtomValue : {number}</div>
      <div>objectArray : {objectArray.map((item) => `  ${item.name}`)}</div>
      <div>progress : {progress.map((item) => `  ${item.name}`)}</div>
    </div>
  );
};

export default Box;
