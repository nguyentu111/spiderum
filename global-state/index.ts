import { CategoryWithTag, Tag } from "@/types";
import { atom, useAtom } from "jotai";
const choosingSerie = atom<string | undefined>(undefined);
const useChoosingSerie = () => useAtom(choosingSerie);

const choosingCategories = atom<CategoryWithTag[]>([]);
const useChoosingCategories = () => useAtom(choosingCategories);

const chossingTags = atom<Tag[]>([]);
const useChossingTags = () => useAtom(chossingTags);

const postDescription = atom<string>("");
const usePostDescription = () => useAtom(postDescription);

export {
  useChoosingSerie,
  useChoosingCategories,
  useChossingTags,
  usePostDescription,
};
