import { create } from "zustand";

type useNavStoreType = {
  nav: boolean;
  showNav: () => void;
};

const useNavStore = create<useNavStoreType>((set) => ({
  nav: true,

  showNav: () => {
    set((state: any) => ({ nav: !state.nav }));
  },
}));

export default useNavStore;
