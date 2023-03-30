import { atom } from "jotai";

type TPerson = {
  name: string;
  age: number;
};

export const countAtom = atom(0);

export const stringAtom = atom("문자 문자");

export const objectArrayAtom = atom<TPerson[]>([
  {
    name: "bskim",
    age: 999,
  },
  {
    name: "bskim2",
    age: 990,
  },
  {
    name: "bs",
    age: 888,
  },
]);

export const familyAtom = atom((get) => {
  const people = get(objectArrayAtom);
  return people.filter((person) => person.age < 999);
});
