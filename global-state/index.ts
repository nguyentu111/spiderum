import { CategoryWithTag, Tag } from "@/types";
import { atom, useAtom } from "jotai";
const choosingSerie = atom<string>("");
const useChoosingSerie = () => useAtom(choosingSerie);

const choosingCategories = atom<CategoryWithTag[]>([]);
const useChoosingCategories = () => useAtom(choosingCategories);

const chossingTags = atom<Tag[]>([]);
const useChossingTags = () => useAtom(chossingTags);

export { useChoosingSerie, useChoosingCategories, useChossingTags };
