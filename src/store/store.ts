import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Store = {
  count: number;
  incrementByNumber: (by: number) => void;
  increment: () => void;
  initCount: () => void;
};

const getSessionStorage = () => {
  if (typeof window !== "undefined") {
    return window.localStorage;
  }
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  };
};

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        incrementByNumber: (by) =>
          set(
            (state) => ({ count: state.count + by }),
            false,
            "TARGET_INCREMENT",
          ),
        increment: () =>
          set((state) => ({ count: state.count + 1 }), false, "INCREMENT"),
        initCount: () => set({ count: 0 }, false, "INIT_STATE"),
      }),
      {
        name: "storeTest",
        getStorage: getSessionStorage,
      },
    ),
  ),
);

export default useStore;
