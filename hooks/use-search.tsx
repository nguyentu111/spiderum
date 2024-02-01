import { create } from "zustand";

type searchStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useSearch = create<searchStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
