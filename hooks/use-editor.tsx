import { create } from "zustand";

type editorStore = {
  data: object;
  setData: (data: object) => void;
};

export const useEditor = create<editorStore>((set) => ({
  data: {},
  setData: (data: object) => set({ data: data }),
}));
