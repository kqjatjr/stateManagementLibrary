import { create } from "zustand";

type Store = {
  count: number;
  increment: () => void;
  initCount: () => void;
};

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  initCount: () => set({ count: 0 }),
}));

export default useStore;
